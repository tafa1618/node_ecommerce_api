import express from 'express';
import dotenv from 'dotenv';
import electromenager from './data/electromenager.js';

const port = process.env.PORT || 5000;
dotenv.config();

app.get('/', (req, res) => {
  res.send('Welcome to our API');
});

app.get('/api/electromenager', (req, res) => {
  res.json(electromenager);
});
app.get('/api/electromenager/:id', (req, res) => {
  const product = electromenager.find((p) => p.id === req.params.id);
  res.json(product);
});
app.listen(port, console.log(`app listening on port ${port}`));
