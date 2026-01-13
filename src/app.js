import express from "express"
import cors from "cors"
import todoRoutes from "./routes/todo.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ status: "API is running 🚀" })
})

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customSiteTitle: "Todo API Documentation",
    customCss: `
      body {
        background-color: #0f172a;
      }
      .swagger-ui {
        color: #e5e7eb;
      }
      .topbar {
        background-color: #020617;
      }
      .swagger-ui .opblock {
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0,0,0,.4);
      }
      .swagger-ui .opblock-summary {
        font-size: 16px;
      }
      .swagger-ui .btn.execute {
        background-color: #22c55e;
      }
    `,
  })
)


app.use("/todos", todoRoutes)

export default app
