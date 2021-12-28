const gridElement = document.querySelector('#grid')

gridElement.style.gridTemplateColumns = `${gridElement.clientWidth/16}px `.repeat(16)
gridElement.style.gridTemplateRows = `${gridElement.clientWidth/16}px `.repeat(16)

    let changeColor = (e) => {
        e.target.style.background = 'black'
    }

for(let i = 0; i < (16 * 16); i++) {
    const div = document.createElement('div')

    gridElement.appendChild(div)
}


const divs = document.querySelectorAll('div')

divs.forEach(pixel => {
    pixel.addEventListener('mouseover', changeColor)
})