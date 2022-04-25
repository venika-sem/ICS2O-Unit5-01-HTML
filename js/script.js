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

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML =
    "<p>Value is: " + slider.value + "</p>"
}