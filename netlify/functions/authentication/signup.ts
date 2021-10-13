/*
  Notes:
  - No database collections are hardcoded except in Fauna directly or in Netlify as environment variables
  - Insertion query only runs when all values are present
*/
import { HandlerEvent } from '@netlify/functions';
import { Client, query as q } from 'faunadb';
import validator from 'validator';
import { message } from './message';

export const signup = async (event: HandlerEvent): Promise<object> => {

  // TypeScript: Define Signup input values
  interface Signup {
    email: string;
    username?: string;
    password?: string;
    verifiedPassword?: string;
  };

  /* === CHECK FOR ERRORS === */

  // Define a reusable denial message using the message function
  const denyMessage: object = message('⛔️');
  
  // Check whether the Signup API endpoint is hit directly via POST method
  // Or whether there is an event body JSON being sent
  if (event.httpMethod !== 'POST' || !event.body) {
    return denyMessage;
  }
  
  // Destructure from event.body now that we know it exists
  const { email, username, password, verifiedPassword }: Signup = JSON.parse(event.body);

  // Define Email Errors variable flag to be used later
  let noEmailErrors: boolean | undefined;

  // Now that email is defined, check if empty (this is the only required value)
  if (!email) {
    noEmailErrors = false;
    return denyMessage;
  } else {
    noEmailErrors = true;
  }

  // The next few statements require that the email be set...

  // Verify whether the username being registered matches the admin email on file
  // TODO: Change this to include whitelisted emails collection
  if (noEmailErrors && email.toLowerCase() !== process.env['USER_ADMIN_EMAIL'].toLowerCase()) {
    return message('You are not the chosen one');
  }
  
  // Self-explanatory: see return message
  if (noEmailErrors && username && !validator.matches(username, /^[0-9a-zA-Z_-\s]+$/)) {
    return message('Username can only contain letters, numbers, underscores, hyphens, and spaces');
  }
  
  // Self explanatory: see return message
  if (noEmailErrors && password && !validator.isStrongPassword(password)) {
    return message('Weak password');
  } else {
  // Nesting password check inside this statement due to being dependent on strong initial password
    if (noEmailErrors && verifiedPassword && verifiedPassword !== password) {
      return message('Passwords don\'t match!');
    }
  }
  /* === CHECK FOR ERRORS: COMPLETED === */
  
  // Instantiate a new Fauna Client
  const client: Client = new Client({
    secret: process.env['FAUNADB_SERVER_SECRET']
  });

  // Time to actually do stuff
  if (noEmailErrors && password && verifiedPassword && username) {
    return await client.query(
      q.Create(
        q.Collection(process.env['DB_USERS']),
        {
          credentials: { password },
          data: {
            email,
            username,
            invitationID: null,
            registerDate: Date.now()
          }
        }
      )
    ).then((response: any): object => {
      return {
        statusCode: 200,
        body: JSON.stringify(response.data)
      }
    })
    .catch((error: any): object => {
        return message(error);
      }
    );
  } else {
    return message('Missing values');
  }
};