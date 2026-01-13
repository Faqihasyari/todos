import express from "express"
import cors from "cors"
import todoRoutes from "./routes/todo.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "Todo API running",
    docs:
      process.env.NODE_ENV === "development"
        ? "/docs"
        : "disabled"
  })
})

app.use("/todos", todoRoutes)

/* =========================
   SWAGGER (DEV ONLY)
========================= */
if (process.env.NODE_ENV === "development") {
  const swaggerUi = (await import("swagger-ui-express")).default
  const swaggerJsdoc = (await import("swagger-jsdoc")).default

  const specs = swaggerJsdoc({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Todo API",
        version: "1.0.0",
      },
    },
    apis: ["./src/routes/*.js"],
  })

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs))
}

export default app
