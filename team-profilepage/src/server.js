import express from "express"
import morgan from "morgan"
import renderPage from "./page/render.js"

const app = express()
app.use(morgan("dev"))

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use("/profilepage/assets", express.static("./assets"))
app.use("/profilepage", express.static("./build"))

app.get("/", (req, res) => {
  const html = renderPage()
  res.render("layout", { html })
})

app.listen(3003)
console.log(
  `team profilepage running. profile page is available here: http://127.0.0.1:3003/`
)
