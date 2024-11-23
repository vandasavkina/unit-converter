/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lenghtEl = document.getElementById("lenght-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

const feetToMeter = 0.3048
const gallonToLiter = 0.264172
const poundToKilo = 0.453592

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lenghtEl.textContent = `${baseValue} Meter = ${baseValue * parseFloat(meterToFeet.toFixed(4))} Feet | ${baseValue} Feet = ${baseValue * parseFloat(feetToMeter.toFixed(4))} Meter`
    
    volumeEl.textContent = `${baseValue} Liter = ${baseValue * parseFloat(literToGallon.toFixed(4))} Gallon | ${baseValue} Gallon = ${baseValue * parseFloat(gallonToLiter.toFixed(4))} Liter`
    
    massEl.textContent = `${baseValue} Kilogram = ${baseValue * parseFloat(kiloToPound.toFixed(4))} Pound | ${baseValue} Pound = ${baseValue * parseFloat(poundToKilo.toFixed(4))} Kilogram`
})
