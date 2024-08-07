const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes').default; // Adjust the path as needed

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});