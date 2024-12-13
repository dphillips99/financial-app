import app from './../index';  // Import the app from index.ts

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});