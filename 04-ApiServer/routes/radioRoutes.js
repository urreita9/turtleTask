const { Router } = require('express');
const {
	getRadios,
	createRadio,
	updateRadio,
	deleteRadio,
} = require('../controllers/controllers');
const jwtCheck = require('../validations/jwtCheck');

const router = Router();

/**
 *@swagger
 {
  "components":{
   		"schemas": {
			"Radio": {
				"properties":{
				 	"id": {
          				"type": "string",
					  	"descripton": "auto-generated id from db"
       					},
					"name":{
						"type": "string",
						"descripton": "Radio's name"
						},
				 	"dial":{
						"type": "number",
						"descripton": "Radio's frequency"
				 		},
				 	"img":{
						"type": "string",
						"descripton": "Radio's url image"
				 		}
					},
				"example":{
				 	"id": "6288512741adcbacf7ddbd33",
				 	"name": "Radio Turtle Venture",
 		  			"dial": 102.3,
 		  			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDyxjniY7phKCfWbo4vw07xfkQdyqlPgu_7vKxZa3QwNoMKvBG8f-K2l8M0dpvK-AviY&usqp=CAU"
					},

			},
		},
 	}
}
 */

/**
 * @swagger
 {
	 "components": {
		 "securitySchemes":{
				"oAuthSample":{
					"type": "oauth2",
					"description": "This API uses OAuth 2",
					"implicit":{
						"authorizationUrl": " https://api.example.com/oauth2/authorize",
						"scopes": {
							"read": "read your radios",
							"write": "write your radios"
						}
					}
			 }
		 }
	 }
 }
 */

/**
 * @swagger
 {
	 "tags":{
		 "name": "Radios",
		 "description": "Turtle Venture Radio API"
	 }
 }
 */

/**
 * @swagger
 
    {
		"/api/radios":{
				"get":{
					"summary": "Returns list of all active Radios",
					"tags": ["Radios"],
					"responses": {
						"200": {
							"description": "List of Radios",
							"content": {
								"application/json":{
									"schema": {
										"type": "array",
										"items": {
											"$ref": "#/components/schemas/Radio"
										}
									}
								}
							}
						}
					}
    			}
			}
  
  }
 */

router.get('/api/radios', getRadios);

/**
 * @swagger
 
    {
		"/api/radio":{
				"post":{
					"summary": "Create a Radio",
					"tags": ["Radios"],
					
					"requestBody":{
						"required":true,
						"content": {
							"application/json": {
								"schema": {
									"properties": {
										"name":{
											"type": "string",
											"descripton": "Radio's name"
										},
				 						"dial":{
											"type": "number",
											"descripton": "Radio's frequency"
				 						},
				 						"img":{
											"type": "string",
											"descripton": "Radio's url image"
				 						}
									}
									
								}
							}
						}						
					},
					"responses": {
						"200": {
							"description": "Radio succesfully created",
							"content": {
								"application/json":{
									"schema": {
										"$ref": "#/components/schemas/Radio"
									}
								}
							}
						},
						"401": {
							"description": "Unauthorized error"
						},
						"500": {
							"description": "Some server error"
						}
					}
    			}
			}
  
  }
 */
router.post('/api/radio', jwtCheck, createRadio);
router.put('/api/radio/:id', jwtCheck, updateRadio);
router.delete('/api/radio/:id', jwtCheck, deleteRadio);

module.exports = router;
