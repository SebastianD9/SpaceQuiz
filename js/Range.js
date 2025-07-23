const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

RangeNumber = 1;

sliderEl.setAttribute("max", myQuestions.length);

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue.textContent = tempSliderValue;
  RangeNumber = tempSliderValue;
})



