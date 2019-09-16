import render from "./render"

class TweetTweet extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = render()
  }
}

export default TweetTweet
