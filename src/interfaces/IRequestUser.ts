import { IPayloadJwt } from './IPayloadJwt';
import { Request } from 'express';

export interface IRequestUser extends Request {
  user?: IPayloadJwt
}