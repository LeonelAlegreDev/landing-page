//DISPLAY LOADER
document.documentElement.addEventListener("load", function(){
    document.getElementById("loader").style.position = "flex";
});
//HIDE LOADER
window.addEventListener("load", function(){
    document.getElementById("loader").style.display = "none";
    document.body.style.overflowY = "auto"
});