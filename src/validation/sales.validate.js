import { body } from 'express-validator';

// Validation middleware for creating a sale
export const validateSaleRules = [
  body('totalAmount')
    .notEmpty().withMessage('Total amount is required')
    .isFloat({ min: 0 }).withMessage('Total amount must be a positive number'),
  body('idUserSeller').notEmpty().withMessage('User ID of the seller is required'),
];

