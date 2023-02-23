// toggler style switcher
const styleSwitcherToggler=document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click" ,() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// theme color
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActivityStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}