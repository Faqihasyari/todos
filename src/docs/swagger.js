import swaggerJSDoc from "swagger-jsdoc"

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Todo API",
    version: "1.0.0",
    description: "API documentation for Todo App (Express + Prisma + Supabase)"
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local server"
    },
    {
      url: "https://todos-seven-smoky.vercel.app",
      description: "Production server"
    }
  ]
}

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"] // tempat kita nulis docs
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
