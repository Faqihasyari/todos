import express from "express"
import cors from "cors"
import todoRoutes from "./routes/todo.routes.js"
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./docs/swagger.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ status: "API is running 🚀" })
})

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use("/todos", todoRoutes)

export default app
