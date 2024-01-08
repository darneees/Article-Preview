var open = document.getElementById("open");
var close = document.getElementById("close");
var modal = document.getElementById("popup");

open.addEventListener("click", () => {
    modal.style.display = "flex";
})

close.addEventListener("click", () => {
    modal.style.display = "none";
})
