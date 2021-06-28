import express from 'express';
import { searchMeals } from './mealDB';
import { saveMeals, readMeals } from './meals';

const router = express.Router();

// Get all saved recipes
router.get('/recipes', async (_req, res) => {
  const meals = await readMeals();
  res.json(meals);
});

// Save one recipe
router.post('/recipes', async (req, res) => {
  await saveMeals(req.body);
  res.send('Recipe saved');
});

// Error handling
router.get('/search', async (_req, res, next) => {
  try {
    const { query } = _req;
    if (typeof query.mealName !== 'string') {
      res.status(404).send('Not found');
      return;
    }
    const result = await searchMeals(query.mealName);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/recipes', async (req, res) => {
  console.log(req.body);
  res.status(200).send('Hello world');
});

export default router;
