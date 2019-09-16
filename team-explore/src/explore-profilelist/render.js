const users = [
  "AB",
  "CD",
  "EF",
  "GH",
  "IJ",
  "KL",
  "MN",
  "OP",
  "QR",
  "ST",
  "UV",
  "WX",
  "YZ"
]

export default function renderProfileList() {
  return `
  <div class="profileList">
    <h2>Other profiles</h2>
    <div>${users
      .map(user => `<div class="profileList__image">${user}</div>`)
      .join("")}</div>
  </div>`
}
