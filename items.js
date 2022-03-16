import { loadCharacter, animateInvert, animateClear } from "./character.js"

const slot = document.querySelectorAll('.slot')
const suggestWord = document.querySelector('.suggestion')
export const equip = document.querySelectorAll('.equip')

const technologiesUrl = [
    {
        techId: 'html',
        url: 'url(./data/img/about/htmlpixel.png)',
        status: 'ready'
    },
    {
        techId: 'css',
        url: 'url(./data/img/about/csspixel.png)',
        status: 'ready'
    },
    {
        techId: 'js',
        url: 'url(./data/img/about/jspixel.png)',
        status: 'ready'
    },
    {
        techId: 'other',
        url: 'url(./data/img/about/bootstrappixel.png)',
        status: 'ready'
    },
    {
        techId: 'other',
        url: 'url(./data/img/about/githubpixelw.png)',
        status: 'ready'
    },
    {
        techId: 'other',
        url: 'url(./data/img/about/uiuxpixel.png)',
        status: 'ready'
    },
    {
        techId: 'other',
        url: 'url(./data/img/about/reactpixel.png)',
        status: 'not ready'
    }
]

export const equipUrl = []

export function saveEquip() {
    for (let i = 0; i < slot.length; i++) {
        slot[i].addEventListener('click', function () {
            if (!equipUrl.includes(technologiesUrl[i]) &&
                technologiesUrl[i] !== undefined &&
                technologiesUrl[i].status =='ready' &&
                equipUrl.length <= 4) {
                equipUrl.push(technologiesUrl[i])
                animateInvert()
                setTimeout(animateClear, 500)
                technologiesUrl.splice(i, 1)
            }
            loadTech()
            loadEquip()
            loadCharacter()
            clearInterval(suggest)
            suggestWord.classList.add('hide')
        })
    }
}

export function saveTech() {
    for (let i = 0; i < equip.length; i++) {
        equip[i].addEventListener('click', function () {
            if (!technologiesUrl.includes(equipUrl[i]) && equipUrl[i] !== undefined) {
                technologiesUrl.push(equipUrl[i])
            }
            equipUrl.splice(i, 1)
            loadEquip()
            loadTech()
            loadCharacter()
        })
    }
}



export function loadTech() {
    for (let i = 0; i < slot.length; i++) {
        slot[i].style.backgroundImage = ''
        if (technologiesUrl[i] !== undefined) {
            slot[i].style.backgroundImage = technologiesUrl[i].url
        }

        if (slot[i].style.backgroundImage.includes('js')) {
            slot[i].classList.add('rotate-js')
            slot[i].style.backgroundImage = ''
            slot[i].style.setProperty('--img', 'url(./data/img/about/jspixel.png)')

        } else if (slot[i].style.backgroundImage.includes('css')) {
            slot[i].classList.add('rotate-css')
            slot[i].style.backgroundImage = ''
            slot[i].style.setProperty('--img', 'url(./data/img/about/csspixel.png)')
        } else {
            slot[i].classList.remove('rotate-js')
            slot[i].classList.remove('rotate-css')
        }

        if (technologiesUrl[i] !== undefined && technologiesUrl[i].status !== 'ready') {
            slot[i].classList.add('not-ready')
            slot[i].setAttribute('title','Learning')
        } else {
            slot[i].classList.remove('not-ready')
            slot[i].setAttribute('title','')
        }

    }
}

export function loadEquip() {
    for (let i = 0; i < equip.length; i++) {
        equip[i].style.backgroundImage = ''
        if (equipUrl[i] !== undefined) {
            equip[i].style.backgroundImage = equipUrl[i].url
        }

        if (equip[i].style.backgroundImage.includes('js')) {
            equip[i].classList.add('rotate-js')
            equip[i].style.backgroundImage = ''
            equip[i].style.setProperty('--img', 'url(./data/img/about/jspixel.png)')

        } else if (equip[i].style.backgroundImage.includes('css')) {
            equip[i].classList.add('rotate-css')
            equip[i].style.backgroundImage = ''
            equip[i].style.setProperty('--img', 'url(./data/img/about/csspixel.png)')
            equip[i].style.setProperty('--color', '#1F1B24')
        } else {
            equip[i].classList.remove('rotate-js')
            equip[i].classList.remove('rotate-css')
        }

    }
}

export const suggest = setInterval(textBlink, 500)

function textBlink() {
    suggestWord.classList.contains('hide') ? suggestWord.classList.remove('hide') : suggestWord.classList.add('hide')
}
