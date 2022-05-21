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

//JWT
// console.log(jwt);

//Routes
app.use('/', radioRouter);

app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});
