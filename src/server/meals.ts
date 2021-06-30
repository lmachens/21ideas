import type { Meal } from '../types';
import { Collection } from 'mongodb';
import { getCollection } from './database';

export const readMeals = async (): Promise<Meal[]> => {
  return await getMealCollection().find().sort({ meals: 1 }).toArray();
};

export const saveMeals = async (meal: Meal): Promise<void> => {
  console.log(meal);
  await getMealCollection().insertOne({ ...meal });
};

export const getMealCollection = (): Collection<Meal> => {
  return getCollection<Meal>('meals');
};
