import { IDecodedToken } from './../interfaces/IPayloadJwt';
import { HttpError } from './../utils/HttpError';
import { NextFunction, Response } from 'express';
import Jwt from '../utils/Jwt';
import { IRequestUser } from '../interfaces/IRequestUser';

class AuthMiddleware {
  static validate =  (req: IRequestUser, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;  
      if (!authorization) return next(new HttpError(401, 'Invalid token'));

      const { data } = Jwt.decodeToken(authorization) as IDecodedToken;
      req.user = data;
  
      next();
    } catch (error) {      
      next(new HttpError(401, 'Invalid token'));
    }
  };
}

export default AuthMiddleware;