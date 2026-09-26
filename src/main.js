import "./style.css";

const convertButton = document.getElementById("convert-button");
const outputValue = document.getElementById("value");
const lengthValue = document.querySelector("#results .result-container-1 h3");
const weightValue = document.querySelector("#results .result-container-2 h3");
const volumeValue = document.querySelector("#results .result-container-3 h3");

convertButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = document.getElementById("input-value").value;
  console.log(inputValue);
  outputValue.textContent = `Converted Value: ${inputValue}`;

  lengthValue.textContent = `${inputValue} meters = ${(inputValue * 3.28).toFixed(3)} feet`;
  weightValue.textContent = `${inputValue} kilograms = ${(inputValue * 2.2).toFixed(3)} pounds`;
  volumeValue.textContent = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons`;
});
