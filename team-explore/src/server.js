/* eslint-disable no-console */
import express from "express"
import morgan from "morgan"
import renderProfileList from "./explore-profilelist/render.js"

const app = express()
app.use(morgan("dev"))
app.use("/explore", express.static("./build"))

app.use("/explore-profilelist", (req, res) => {
  res.send(renderProfileList())
})

app.listen(3001)
console.log(
  `team explore running. fragments are available here: http://127.0.0.1:3001/explore-profilelist`
)
