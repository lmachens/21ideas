import express from 'express';

const router = express.Router();

router.get('/search', (_req, res) => {
  res.status(404).send('Hello world');
});
export default router;
