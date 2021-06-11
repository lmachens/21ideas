import express from 'express';
import getRecipeByName from './search';

const router = express.Router();

router.get('/search', async (_req, res, next) => {
  try {
    const { query } = _req;
    if (typeof query.recipename !== 'string') {
      res.status(404).send('Hello world!');
      return;
    }
    const result = await getRecipeByName(query.recipename);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
