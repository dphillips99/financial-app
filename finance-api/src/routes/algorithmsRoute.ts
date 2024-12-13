import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req, res) => {
  const algorithms = [
    { name: 'conservative', description: '10% of income for transportation, prioritize savings.' },
    { name: 'average', description: '15%-20% of income for transportation.' },
    { name: 'stretch', description: '25%-30% of income for transportation, flexible savings.' },
  ];

  res.status(200).json(algorithms);
});

export default router;