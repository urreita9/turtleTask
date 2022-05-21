const PORT = process.env.PORT || 8080;
const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Turtle Challenge API',
			version: '1.0.0',
			description: 'CRUD Express API',
		},
		components: {
			securitySchemas: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
		servers: [
			{
				url: `http://localhost:${PORT}`,
			},
		],
	},
	apis: ['./routes/*.js'],
};

module.exports = { swaggerOptions };
