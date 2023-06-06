import { body } from 'express-validator';

// Validation middleware for creating a product category
export const validateProductCategoryRules = [
  body('idProduct').notEmpty().withMessage('Product ID is required'),
  body('idCategory').notEmpty().withMessage('Category ID is required'),
];
