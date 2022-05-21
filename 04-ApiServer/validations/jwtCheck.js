const { expressjwt } = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = expressjwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri:
			process.env.JWKSURI ||
			'https://dev-efi5m3ft.us.auth0.com/.well-known/jwks.json',
	}),
	audience: process.env.AUDIENCE || 'https://www.turtleChallenge.com',
	issuer: process.env.ISSUER || 'https://dev-efi5m3ft.us.auth0.com/',
	algorithms: ['RS256'],
});

module.exports = jwtCheck;
