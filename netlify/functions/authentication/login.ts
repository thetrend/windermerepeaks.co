/*
  Notes:
  - Login API structure is loosely based on Signup API - review Signup for reference
  - As per Signup, insert query only runs when 
*/
import { HandlerEvent } from '@netlify/functions';
import { Client, query as q } from 'faunadb';
import { message } from './message';

export const login = async (event: HandlerEvent): Promise<object> => {

  // TypeScript: Define Login input values
  interface Login {
    email: string;
    password: string;
  };

  /* === CHECK FOR ERRORS === */
  
  // Check whether the Login API endpoint is hit directly via POST method
  // Or whether there is an event body JSON being sent
  if (event.httpMethod !== 'POST' || !event.body) {
    return message('⛔️');
  }

  // Destructure from event.body now that we know it exists
  const { email, password }: Login = JSON.parse(event.body);

  // If there is an event body but it's missing an email or password...
  if (!email || !password) {
    return message('Credentials missing. Are you trying to login?');
  }

  // Instantiate a new Fauna Client
  const client: Client = new Client({
    secret: process.env['FAUNADB_SERVER_SECRET']
  });

  // Let's login
  return await client.query(
    q.Login(
      q.Match(
        q.Index('users_by_email'),
        email
      ),
      { password }
    )
  ).then((response: any): object => {
    console.log(response);
    return {
      statusCode: 200,
      body: JSON.stringify({
        secret: response.secret
      })
    }
  })
  .catch((error: any): object => {
      return message(error.description);
    }
  );
}