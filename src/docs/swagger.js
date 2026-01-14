const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API Public",
      version: "1.0.0",
      description: "API Documentation for Todo Application",
    },
    servers: [
      {
        url: "https://todos-seven-smoky.vercel.app/docs",
        description: "Production Server",
      },
      {
        url: "http://localhost:3000",
        description: "Development Server",
      },
    ],
    security: [],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;