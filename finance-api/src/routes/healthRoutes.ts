import express, { Request, Response } from 'express';

const router = express.Router();

// Health check route
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    message: 'Application is up and running',
  });
});

export default router;