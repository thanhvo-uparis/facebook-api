import { Router } from 'express';
/** Routes */
import authenticationRoutes from './authentication.route';
import postsRoutes from './posts.route';
/** Middlewares */
import jwt from '../../middlewares/jwt.middleware';

const api = Router();

api.use('/authentication', authenticationRoutes);
api.use('/posts', jwt, postsRoutes);

export default api;