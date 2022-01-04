const gridElement = document.querySelector('#grid')
const rangeSlider = document.querySelector('#range')
const display = document.querySelector('.display')
const colorPicker = document.querySelector('#colorPicker')

const colorButton = document.querySelector('.colorButton')
const colorfulButton = document.querySelector('.colorfulButton')
const eraserButton = document.querySelector('.eraserButton')
const clearButton = document.querySelector('.clearButton')

let pixelColor = 'rgba(41, 41, 41)'

let resetGridElement = () => {
    gridElement.textContent = ' '
}

let changeColor = (e) => {
    if(e.target.classList.contains('pixel') === true) {
    e.target.style.background = pixelColor
}}

colorPicker.addEventListener('input', () => {
        pixelColor = colorPicker.value
})

eraserButton.addEventListener('click', () => {
    pixelColor = '#F1F1F1'
})

let teste = value => {
    resetGridElement()
    gridElement.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    gridElement.style.gridTemplateRows = `repeat(${value}, 1fr)`
    

    for(let i = 0; i < (value * value); i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        gridElement.appendChild(div)
    }
    
    gridElement.addEventListener('mouseover', event => changeColor(event)) 
}
    
let valueToRangeSlider = 16

teste(valueToRangeSlider)

rangeSlider.addEventListener('mousemove', () => {
    valueToRangeSlider = rangeSlider.value
    display.textContent = `${valueToRangeSlider} x ${valueToRangeSlider}`    
})

rangeSlider.addEventListener('input', () => {
    valueToRangeSlider = rangeSlider.value
    display.textContent = `${valueToRangeSlider} x ${valueToRangeSlider}`    
    teste(valueToRangeSlider)
})

clearButton.addEventListener('click', teste(16))
