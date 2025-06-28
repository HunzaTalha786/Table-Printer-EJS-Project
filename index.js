const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Show form
app.get('/', (req, res) => {
  res.render('form');
});

// Handle form submission & show table
app.post('/table', (req, res) => {
  const number = parseInt(req.body.number);
  res.render('table', { number });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
