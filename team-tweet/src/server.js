/* eslint-disable no-console */
import express from "express"
import morgan from "morgan"
import renderLike from "./tweet-like/render.js"
import renderTweet from "./tweet-tweet/render.js"

const app = express()
app.use(morgan("dev"))
app.use("/tweet/images", express.static("./images"))
app.use("/tweet", express.static("./build"))

app.use("/tweet-like", (req, res) => {
  const tweetId = req.query.tweetId
  res.send(renderLike(tweetId))
})

app.use("/tweet-tweet", (req, res) => {
  res.send(renderTweet())
})

app.listen(3002)
console.log(
  `team tweet running. fragments are available here: http://127.0.0.1:3002`
)
