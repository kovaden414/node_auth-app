import { jwtService } from '../services/jwt.service.js';

export const authMiddleware = (req, res, next) => {
  const authorization = req.headers['authorization'] || '';
  const [, token] = authorization.split(' ');

  if (!authorization || !token) {
    res.sendStatus(401);

    return;
  }

  const useData = jwtService.verify(token);

  if (!useData) {
    res.sendStatus(401);

    return;
  }

  next();
};
