const express = require('express');
const app = express();

app.use(express.json());

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'VitaPlate Server is Running!' });
});

// Food Analysis endpoint
app.post('/api/food', (req, res) => {
  res.json({ 
    calories: 250, 
    protein: 15, 
    carbs: 30, 
    fat: 8 
  });
});

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});