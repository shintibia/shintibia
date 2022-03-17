import { equip, equipUrl } from './items.js'

const canvas = document.getElementById('canvas1')
export const character = document.getElementById('dark-wizard')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 60
const CANVAS_HEIGHT = canvas.height = 104
const spriteSizeX = 60
const spriteSizeY = 104
let frameX = 0
let gameFrame = 0;
let staggerFrames = 0

export function drawCharacter() {
    character.onload = draw
    character.src = './data/img/idle/Idlebw.png'
    ctx.filter = 'none'
    animate()
    draw()
    character.src = './data/img/idle/Idlebw.png'
    draw()
}

export function draw () {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(character, frameX * spriteSizeX, 0, spriteSizeX, spriteSizeY, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

export function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(character, frameX * spriteSizeX, 0, spriteSizeX, spriteSizeY, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.filter = 'none'
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 7) {
            frameX++
        } else {
            frameX = 0
        }
    }
    gameFrame++
    requestAnimationFrame(animate)
}

export function animateInvert() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.filter = 'invert(1)'
    ctx.drawImage(character, frameX * spriteSizeX, 0, spriteSizeX, spriteSizeY, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    requestAnimationFrame(animateInvert)
}

export function animateClear() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.filter = 'none'
    ctx.drawImage(character, frameX * spriteSizeX, 0, spriteSizeX, spriteSizeY, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    requestAnimationFrame(animateClear)
}

export function loadCharacter() {
    for (let i = 0; i < equip.length; i++) {
        if (equipUrl.some(item => item.techId == 'css')) {
            character.src = './data/img/idle/Idle.png'
        } else {
            character.src = './data/img/idle/Idlebw.png'
        }
        if (equipUrl.some(item => item.techId == 'js')) {
            staggerFrames = 17
        } else {
            staggerFrames = 0
        }
    }
}