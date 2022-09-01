import { HttpError } from './../utils/HttpError';
import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  static handler = (err: Error | HttpError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpError) {
      return res.status(err.statusCode).json({ message: err.message });
    }

    return res.status(500).json({ message: 'Internal server error' });
  };
}

export default ErrorHandler;