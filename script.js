let ul1 = document.getElementById("footer-ul-1")
let ul2 = document.getElementById("footer-ul-2")
let ul3 = document.getElementById("footer-ul-3")
let chev1 = document.getElementById("footer-chev-1")
let chev2 = document.getElementById("footer-chev-2")
let chev3 = document.getElementById("footer-chev-3")
let menu = document.getElementById("menu")
let menuContent = document.getElementById("menu-content")

chev1.addEventListener("click", function () {
    ul1.classList.toggle("toggleclass")
})
chev2.addEventListener("click", function () {
    ul2.classList.toggle("toggleclass")

})
chev3.addEventListener("click", function () {
    ul3.classList.toggle("toggleclass")
})

menu.addEventListener("click", function() {
    menu.classList.toggle("fa-times")
    menuContent.classList.toggle("menu-toggle")
    document.body.classList.toggle("body-scroll")
})