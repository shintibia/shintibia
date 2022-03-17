import { animate, drawImage, character } from "./character.js"
import { loadTech, saveEquip, saveTech, suggest } from "./items.js"
import { loadProjects, projectItems } from "./projects.js"


const catEmoji = document.querySelector('.cat-emoji')
const contactInfo = document.querySelectorAll('.contact-info')
const hamburger = document.querySelector('.hamburger')
const sections = document.querySelectorAll('.full-height')
const options = {
    threshold: 0.7
}
let observer = new IntersectionObserver(navCheck, options)
const navbar = document.querySelector('.navbar-nav')
const copyIcon = document.querySelectorAll('.copy-icon')

window.addEventListener('DOMContentLoaded', startApp)
hamburger.addEventListener('click', mobileNav)
document.addEventListener('click', closeNav)


function startApp() {
    setInterval(emoji, 3000)
    drawImage()
    animate()
    loadTech()
    saveEquip()
    saveTech()
    loadProjects()
    copyInfo()
}

function emoji() {
    setTimeout(function () {
        catEmoji.setAttribute('src', './data/img/cat1.png')
    }, 1000)

    setTimeout(function () {
        catEmoji.setAttribute('src', './data/img/cat2.png')
    }, 2000)

    setTimeout(function () {
        catEmoji.setAttribute('src', './data/img/cat3.png')
    }, 3000)
}


function copyInfo() {
    for (let i = 0; i < contactInfo.length; i++) {
        contactInfo[i].addEventListener('click', function () {
            contactInfo[i].select();
            contactInfo[i].setSelectionRange(0, 99999);
            navigator.clipboard.writeText(contactInfo[i].value);
        })
        copyIcon[i].addEventListener('click', function () {
            contactInfo[i].select();
            contactInfo[i].setSelectionRange(0, 99999);
            navigator.clipboard.writeText(contactInfo[i].value);
        })
    }
}




function navCheck(entries) {
    entries.forEach(entry => {
        const idSection = entry.target.id
        const navEle = document.querySelector(`[href="#${idSection}"]`)
        if (entry.isIntersecting) {
            navEle.style.backgroundColor = 'var(--primary)'
        } else {
            navEle.style.backgroundColor = ''
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})


function mobileNav() {
    const header = document.querySelector('.navbar')
    const hamburgerHeight = hamburger.clientHeight
    const headerWidth = header.clientWidth
    if (navbar.style.transform !== 'scale(1)' && headerWidth <= 415) {
        navbar.style.top = hamburgerHeight + 'px'
        navbar.style.transform = 'scale(1)'
        hamburger.style.backgroundColor = 'var(--dark)'
    } else {
        navbar.style.transform = 'scale(0)'
        hamburger.style.backgroundColor = ''
    }
}
function closeNav(e) {
    let isClickInside = navbar.contains(e.target)
    let isClickInsideHam = hamburger.contains(e.target)
    if (!isClickInside && !isClickInsideHam) {
        navbar.style.transform = 'scale(0)'
        hamburger.style.backgroundColor = ''
    }

}

window.onload = drawImage