import express from "express"
import cors from "cors"
import todoRoutes from "./routes/todo.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

// ✅ ROOT
app.get("/", (req, res) => {
  res.json({ status: "API is running 🚀" })
})

// ✅ SWAGGER DOCS
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// ✅ TODO ROUTES
app.use("/todos", todoRoutes)

export default app
