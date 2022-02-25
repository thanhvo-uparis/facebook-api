import { Router } from 'express';
import * as PostController from '../../controllers/post.controller';

const api = Router();

api.post('/', PostController.createOne);
api.get('/', PostController.findAll);
api.get('/:id', PostController.findOneById);
api.put('/:id', PostController.updateOne);
api.delete('/:id', PostController.deleteOne);

export default api;
