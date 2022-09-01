import { IPayloadJwt } from '../interfaces/IPayloadJwt';
import * as jwt from 'jsonwebtoken';

class Jwt {
  static secret = 'senha_secreta';

  static createToken(payload: IPayloadJwt) {
    const token = jwt.sign({ data: payload }, this.secret);
    return token;
  }

  static decodeToken(token: string) {
    return jwt.verify(token, this.secret);
  }
}

export default Jwt;