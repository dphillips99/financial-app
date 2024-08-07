import { Router, Request, Response } from 'express';

const router = Router();

router.get('/users', (req: Request, res: Response) => {
  res.send('Get all users');
});

router.post('/users', (req: Request, res: Response) => {
  res.send('Create a new user');
});

export default router;