
const changeBackground = document.body;
const rgbPage = document.getElementById("rgb-page");
// const rgbWrapper = document.getElementById("rgb-wrapper");
const rgbColor = document.getElementById("rgb-color");



rgbPage.addEventListener("click", function () {
    
      changeBackground.style.backgroundColor = rgbColor.textContent;
    
  });

rgbColor.addEventListener("click", function () {
   
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    
    const rgbColorValue = `rgb(${a}, ${b}, ${c})`;
    
    rgbColor.textContent = rgbColorValue;
    
    changeBackground.style.background = rgbColorValue;
  })