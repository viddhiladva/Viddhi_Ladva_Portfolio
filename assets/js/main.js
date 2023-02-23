/*=============== SHOW SIDEBAR ===============*/
const navMenu= document.getElementById('sidebar'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs=document.querySelectorAll('[data-target]'),
tabContent=document.querySelectorAll('[data-content]')
    tabs.forEach(tab => {
        tab.addEventListener("click", ()=> {
            const target=document.querySelector(tab.dataset.target)
             tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
             })
             target.classList.add('skills__active')

             tabs.forEach(tab => {
                tab.classList.remove('skills__active')
             })
             tab.classList.add('skills__active')
        })
    })

/*===== Work Popup =====*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        poerfolioItemDetails(e.target.parentElement);
    }   
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup)

function poerfolioItemDetails(portfolioItem)
{
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
/*=============== INPUT ANIMATION ===============*/
const inputs=document.querySelectorAll(".input");

function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent=this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) =>{
    input.addEventListener("focus",focusFunc);  
    input.addEventListener("blur",blurFunc);  
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll("section[id]");

window.addEventListener("scroll",navHighlighter);

function navHighlighter()
{
    let scrollY =window.pageYOffset;
    sections.forEach(current => {
        const scetionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop+scetionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

