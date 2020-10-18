const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use('/src', express.static(path.resolve(__dirname, 'src')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'))
});

app.listen(port, () => console.log(`Server running ${port}`));
