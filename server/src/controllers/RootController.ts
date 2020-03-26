import { Request, Response, NextFunction } from 'express';
import { get, controller, use, bodyValidator, post } from './decorators';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send('Not permitted');
    return;
  }
};

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn)
      res.send(
        `<div>You are logged in <a href='/auth/logout'>Logout</a></div>`
      );
    else
      res.send(
        `<div>You aren't logged in <a href='/auth/login'>Login</a></div>`
      );
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route');
  }
}
