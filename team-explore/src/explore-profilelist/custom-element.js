import render from "./render"

class ProfileList extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = render()
  }
}

export default ProfileList
