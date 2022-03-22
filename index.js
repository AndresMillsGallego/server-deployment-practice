'use strict';

const app = require('./server/app.js');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Jigglypuff is listening carefully on port ${PORT}`);
});