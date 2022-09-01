import { Router } from 'express';
import LoginController from '../controllers/login';
import { IRequestUser } from '../interfaces/IRequestUser';
import AuthMiddleware from '../midllewares/authMiddleware';
import { LoginService } from '../services/LoginService';

const routes = Router();

const service = new LoginService();
const controller = new LoginController(service);

routes.post('/', (req, res, next) => controller.signIn(req, res, next));

routes.get('/validate',
  AuthMiddleware.validate,
  (req: IRequestUser, res, next) => controller.validate(req, res, next));

export default routes;
