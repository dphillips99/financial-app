import express, { Request, Response, Router } from 'express';
import { calculateAffordability } from '../utils/affordabilityCalc';

// Define the interface for the request body
interface AffordabilityRequest {
  income: number;
  bills: number;
  vehicleCost: number;
  interestRate: number;
  term: number;
  budgetStyle?: string;
}

const router: Router = express.Router();

router.post('/calculate', (req: Request<{}, {}, AffordabilityRequest>, res: Response) => {
  const { income, bills, vehicleCost, interestRate, term, budgetStyle } = req.body;

  // Validate input
  if (!income || !bills || !vehicleCost || !interestRate || !term) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Calculate affordability
  const isAffordable = calculateAffordability(income, bills, vehicleCost, interestRate, term, budgetStyle);
  return res.json({ isAffordable });
});

export default router;