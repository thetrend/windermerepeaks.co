import { HandlerEvent } from '@netlify/functions';
import { login } from './login';
import { message } from './message';
import { signup } from './signup';

const handler = async (event: HandlerEvent) => {
  try {
    const path: string = event.path.replace(/\/functions\/[^/]+/, '');
    const segments: string[] = path.split('/').filter(Boolean);
    const endpoint: string = segments[segments.length - 1];

    switch (endpoint) {
      case 'signup':
        return signup(event);
      case 'login':
        return login(event);
      case 'logout':
        return message('TODO: Logout');
      default:
        return message('⛔️');
    }
  } catch (error) {
    console.log(error);
    return message('Server Error', 500);
  }
};

export { handler };