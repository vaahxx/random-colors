function defineCor(min, max) {
    return Math.floor(Math.random() * (max - min))
}

document.querySelector('body').onmousemove = function mudaCor() {
    let squares = document.querySelectorAll('.square');
    for (let element of squares) {
        element.style.backgroundColor = `rgb(${defineCor(0, 255)}, ${defineCor(0, 255)}, ${defineCor(0, 255)}`
        element.style.width = `${defineCor(0, 255)}px`
        element.style.height = `${defineCor(0, 255)}px`
    }
}

