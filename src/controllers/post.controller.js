import * as PostController from '../models/post.model';

export const createOne = async (request, response) => {
  const { user } = request;
  const { content, title } = request.body;

  const post = await PostController.createOne({
    content,
    title,
    authorId: user.id,
  });

  response.status(201).json({ post });
}

export const findOneById = async (request, response) => {
  const id = Number(request.params.id);

  response.json({
    post: await PostController.findOneById(id),
  })
}

export const findAll = async (_request, response) => {
  response.json({
    posts: await PostController.findAll(),
  });
}

export const updateOne = async (request, response) => {
  const { user } = request;
  const { id } = request.params;
  const { content, title } = request.body;

  const post = await PostController.updateOne({
    id: Number(id), 
    content,
    title,
    authorId: user.id,
  });

  response.json({ post });
}

export const deleteOne = async (request, response) => {
  const id = Number(request.params.id);
  
  await PostController.deleteOne(id);

  response.status(204).end();
}
