const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors);
app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
