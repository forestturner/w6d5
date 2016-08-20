class Router {
  constructor(node) {
    this.node = node;
  }

  start(){
    console.log("router starting");
    let that = this;
    window.addEventListener("hashchange",function(eve){
        that.render();
    });
  }

  activeRoute(){
    let currentLocation = window.location.hash;
    return currentLocation.slice(1);
  }

  render(){
    this.node.innerHTML= "";
    let activeRoute = this.activeRoute();
    let newElement = document.createElement("p");
    newElement.innerHTML = activeRoute;
    this.node.appendChild(newElement);
  }
}
module.exports = Router;
