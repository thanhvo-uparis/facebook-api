import jwt from 'jsonwebtoken';
import * as UserModel from '../models/user.model';

const jwtMiddleware = async (request, response, next) => {
  const { authorization: token } = request.headers;
  
  try {
    const { id } = jwt.verify(token, 'SECRET');
    const user = await UserModel.findById(id, { id: true, email: true });

    request.user = user;

    next();
  } catch (error) {
    response.status(401).json({
      error: {
        code: 'E010',
        message: 'Unauthorized',
      },
    });
  }
}

export default jwtMiddleware;
