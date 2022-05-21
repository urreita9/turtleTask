const { expressjwt } = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = expressjwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: process.env.JWKSURI,
	}),
	audience: process.env.AUDIENCE,
	issuer: process.env.ISSUER,
	algorithms: ['RS256'],
});

module.exports = jwtCheck;
