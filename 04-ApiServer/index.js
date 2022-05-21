const express = require('express');
require('dotenv').config();
const dbConnection = require('./database/config');
const cors = require('cors');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const radioRouter = require('./routes/radioRoutes');
const { swaggerOptions } = require('./swagger/options');

const specs = swaggerJsDoc(swaggerOptions);
//SWAGGER
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
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
