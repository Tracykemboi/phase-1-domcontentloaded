// Your code goes here
document.addEventListener("DOMContentLoaded",function(e) {
    console.log("The DOM has loaded");
    const text=document.getElementById('text')
    text.textContent=text.textContent.replace("JavaScript is so cool. It lets me add text to my page programmatically","This is really cool!")
})