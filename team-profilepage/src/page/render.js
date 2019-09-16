export default function renderPage() {
  return `
  <div class="profilePage">
    <h1>The Profile Page</h1>
    <tweet-tweet><!--#include virtual="/tweet-tweet" --></tweet-tweet>
    <tweet-like tweet-id="123-456-789"><!--#include virtual="/tweet-like?tweetId=123-456-789" --></tweet-like>
    <explore-profilelist id="profilelist"><!--#include virtual="/explore-profilelist" --></explore-profilelist>
  </div>
  `
}
