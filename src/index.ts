import express from 'express';
import taskRoutes from './routers/tasks.routes';
const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('<h1>Welcome to Tasks API</h1>');
});

app.use('/api', taskRoutes); // e.g., POST /api/tasks

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
