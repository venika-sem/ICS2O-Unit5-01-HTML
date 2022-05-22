/* Created by: Venika Sem
 * Created on: Apr 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML/",
    }
  )
}

const randomNumber = Math.floor(Math.random() * 6) + 1;

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider;
}

/**
 * This function compares slider with random number.
 */
function myButtonClicked() {
  const sliderValue = slider.value;

  // process
  if (sliderValue == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + " You got it! Good job.";
    // console.log("Congratulations!")
  }
  //  block of code to be executed if condition1 is true
  if (sliderValue != randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + " Nice guess, but try again.";
    // console.log("Try again!")
  }
}