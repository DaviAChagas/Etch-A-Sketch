const gridElement = document.querySelector('#grid')
const rangeSlider = document.querySelector('#range')
const display = document.querySelector('.display')
const colorPicker = document.querySelector('#colorPicker')

const buttons = document.querySelectorAll('button')
const defaultColorButton = document.querySelector('.defaultButton')
const colorfulButton = document.querySelector('.colorfulButton')
const eraserButton = document.querySelector('.eraserButton')
const clearButton = document.querySelector('.clearButton')

let pixelColor
let valueToRangeSlider = 16


let defaultSettings = () => {
    generatePixelsInGrid(valueToRangeSlider)
    defaultColorButton.disabled = true
    gridElement.addEventListener('mouseover', event => changeColorToDefault(event))
}


let resetGridElement = () => {
    gridElement.textContent = ' '
}


let changeColorToSpecific = (e) => {
    if(e.target.classList.contains('pixel') === true) {
            pixelColor = colorPicker.value

        e.target.style.background = pixelColor
}}

let changeColorToDefault = (e) => {
    if(e.target.classList.contains('pixel') === true) {
    pixelColor = 'rgba(41, 41, 41)'
    e.target.style.background = pixelColor
}}

let changeColorWithRandom = (e) => {
    if(e.target.classList.contains('pixel') === true) {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)

        pixelColor = `rgba(${red}, ${green}, ${blue})`
        e.target.style.background = pixelColor
    }
}


let generatePixelsInGrid = numberOFPixels => {
    resetGridElement()
    gridElement.style.gridTemplateColumns = `repeat(${numberOFPixels}, 1fr)`
    gridElement.style.gridTemplateRows = `repeat(${numberOFPixels}, 1fr)`
    

    for(let i = 0; i < (numberOFPixels * numberOFPixels); i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        gridElement.appendChild(div)
    }
}
    
let enableButtons = () => {
    buttons.forEach(button => {
        button.disabled = false })

}

let disableButton = (e) => {
        enableButtons()
            e.target.disabled = true

}

defaultSettings()

rangeSlider.addEventListener('mousemove', () => {
    valueToRangeSlider = rangeSlider.value
    display.textContent = `${valueToRangeSlider} x ${valueToRangeSlider}`    
})

rangeSlider.addEventListener('input', () => {
    valueToRangeSlider = rangeSlider.value
    display.textContent = `${valueToRangeSlider} x ${valueToRangeSlider}`    
    generatePixelsInGrid(valueToRangeSlider)
})


colorPicker.addEventListener('click', () => {
    enableButtons()
    gridElement.addEventListener('mouseover', event => changeColorToSpecific(event)) 
})

defaultColorButton.addEventListener('click', e => {
    disableButton(e)
    gridElement.addEventListener('mouseover', event => changeColorToDefault(event)) 
})

colorfulButton.addEventListener('click', e => {
    disableButton(e)
    gridElement.addEventListener('mouseover', event => changeColorWithRandom(event)) 
})

eraserButton.addEventListener('click', e => {
    disableButton(e)
    gridElement.addEventListener('mouseover', event => 
        event.target.style.background = '#F1F1F1'
)})

clearButton.addEventListener('click', () => {
    generatePixelsInGrid(valueToRangeSlider)
}) 
