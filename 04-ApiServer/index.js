const express = require('express');
require('dotenv').config();
const dbConnection = require('./database/config');
const cors = require('cors');
const app = express();

const radioRouter = require('./routes/radioRoutes');

//Database
dbConnection();

//CORS
app.use(cors());

//Body Parse
app.use(express.json());

//Routes
app.use('/', radioRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
