const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/apostle.jpg") {
    myImage.setAttribute("src", "images/cactus.jpg");
  } else {
    myImage.setAttribute("src", "images/apostle.jpg");
  }
});