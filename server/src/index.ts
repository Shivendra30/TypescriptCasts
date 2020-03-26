import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
// import { router as controllerRouter } from './controllers/decorators/controllers';
import './controllers/LoginController';
import './controllers/RootController';
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['shivendra'] }));
app.use(AppRouter.getInstance());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
