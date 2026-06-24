// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilograms = 44.092 pounds | 20 pounds = 9.072 kilograms

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn"); 
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function() {
    const inputValue = inputEl.value;
    lengthEl.textContent = `${inputValue} meters = ${((inputValue * 3.28084).toFixed(3))} feet | ${inputValue} feet = ${((inputValue * 0.3048).toFixed(3))} meters`;
    volumeEl.textContent = `${inputValue} liters = ${((inputValue * 0.264172).toFixed(3))} gallons | ${inputValue} gallons = ${((inputValue * 3.78541).toFixed(3))} liters`;
    massEl.textContent = `${inputValue} kilograms = ${((inputValue * 2.20462).toFixed(3))} pounds | ${inputValue} pounds = ${((inputValue * 0.453592).toFixed(3))} kilograms`;
});
