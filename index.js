const express = require('express');
const _ = require('lodash'); // DELIBERATE BUG: lodash is missing from package.json

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the MAGE demo API!'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});