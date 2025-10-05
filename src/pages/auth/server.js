const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Example: Auth endpoint (stub)
app.post('/api/signup', (req, res) => {
  const { email, password, country } = req.body;
  // TODO: Add signup logic, save country (PH support)
  res.json({ success: true, message: 'Signup successful', country });
});

// Example: Movies endpoint (stub)
app.get('/api/movies', (req, res) => {
  res.json([
    { title: "Inception", year: 2010 },
    { title: "Parasite", year: 2019 },
    { title: "Avengers: Endgame", year: 2019 }
  ]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Auroxflix backend running on port ${PORT}`);
});