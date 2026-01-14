import express from "express"
import cors from "cors"
import todoRoutes from "./routes/todo.routes.js"
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./docs/swagger.js"
import path from "path"
import { fileURLToPath } from "url"
import swaggerUiDist from "swagger-ui-dist"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())

app.use(
  "/swagger-ui",
  express.static(swaggerUiDist.getAbsoluteFSPath())
)

app.get("/docs/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json")
  res.send(swaggerSpec)
})

app.get("/", (req, res) => {
  res.json({ status: "API is running 🚀" })
})

console.log("SWAGGER SPEC:", swaggerSpec)

app.get("/docs", (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Todo API Documentation</title>

  <link rel="stylesheet" href="/swagger-ui/swagger-ui.css" />
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #fafafa;
    }
    .swagger-ui .topbar {
      display: none;
    }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>

  <script src="/swagger-ui/swagger-ui-bundle.js"></script>
  <script src="/swagger-ui/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function () {
      const ui = SwaggerUIBundle({
        url: "/docs/swagger.json",
        dom_id: "#swagger-ui",
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      });
      window.ui = ui;
    };
  </script>
</body>
</html>
`
  res.send(html)
})

app.use("/todos", todoRoutes)

export default app
