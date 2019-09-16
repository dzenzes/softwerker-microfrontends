import render from "./render"

class TweetLike extends HTMLElement {
  static get observedAttributes() {
    return ["tweet-id"]
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.likeTweet = this.likeTweet.bind(this)
    const tweetId = this.getAttribute("tweet-id")
    this.render(tweetId)
    this.addEventListener("click", this.likeTweet)
    console.log("connected", tweetId)
  }

  disconnectedCallback() {
    this.firstChild.removeEventListener("click", this.likeTweet)
    const tweetId = this.getAttribute("tweet-id")
    console.log("disconnected", tweetId)
  }

  likeTweet() {
    const tweetId = this.getAttribute("tweet-id")
    console.log('event sent "tweet:liked"', tweetId)
    this.dispatchEvent(
      new CustomEvent("tweet:liked", {
        bubbles: true
      })
    )
  }

  render() {
    const tweetId = this.getAttribute("tweet-id")
    this.innerHTML = render(tweetId)
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    this.render(newValue)
  }
}

export default TweetLike
