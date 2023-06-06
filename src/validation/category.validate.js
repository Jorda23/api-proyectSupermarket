import { body } from 'express-validator';

export const validateCategoryrules = [
  body('categoryName').notEmpty().withMessage('Category name is required'),
];