import express from 'express';
import ErrorHandler from './midllewares/ErrorHandler';
import routes from './routes';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('OK');
});

app.use(routes);
app.use(ErrorHandler.handler);

export default app;