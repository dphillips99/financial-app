import express from 'express';
import calculateRoutes from './routes/calculateRoutes';
import algorithmRoutes from './routes/algorithmsRoute';
import healthRoutes from './routes/healthRoutes';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount your route modules
app.use('/api/calculate-affordability', calculateRoutes);
app.use('/api/algorithms', algorithmRoutes);
app.use('/api/health', healthRoutes);

// Export the app (for server.ts or testing purposes)
export default app;