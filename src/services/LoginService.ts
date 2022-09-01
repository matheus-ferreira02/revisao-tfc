import { HttpError } from './../utils/HttpError';
import { users } from '../mock/users';
import Jwt from '../utils/Jwt';

export class LoginService {
  signIn(email: string, password: string) {
    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) throw new HttpError(404, 'User not found');
    const token = Jwt.createToken({ id: user.id, email: user.email });

    return token;
  }
}

