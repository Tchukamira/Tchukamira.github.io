const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav")

hamburger.addEventListener("click", () => {
    bar1.classList.toggle("animateBar1")
    bar2.classList.toggle("animateBar2")
    bar3.classList.toggle("animateBar3")
    mobileNav.classList.toggle("openDrawer")
})

function toggleMobileNav() {
    mobileNav.classList.toggle("openDrawer");
    bar1.classList.toggle("animateBar1")
    bar2.classList.toggle("animateBar2")
    bar3.classList.toggle("animateBar3")
}

mobileNav.addEventListener('click', toggleMobileNav);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));