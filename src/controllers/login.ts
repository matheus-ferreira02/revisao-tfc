import { LoginService } from './../services/LoginService';
import { NextFunction, Request, Response } from 'express';
import { IRequestUser } from '../interfaces/IRequestUser';

class LoginController {
  constructor(private service: LoginService) {}

  signIn(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const token = this.service.signIn(email, password);

    return res.status(200).json({ token });
  }

  validate(req: IRequestUser, res: Response, next: NextFunction) {
    if (req.user) {
      const { email } = req.user;

      return res.status(200).json({ email });
    }
  }
}

export default LoginController;