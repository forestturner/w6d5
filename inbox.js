class Inbox {
  constructor () {
    console.log("inbox created");
  }

  render() {
    let newElement = document.createElement("ul");
    newElement.className = "messages";
    newElement.innerHTML = "An Inbox Message";
    return newElement;
  }
}
