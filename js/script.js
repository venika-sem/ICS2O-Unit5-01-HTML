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

var randomnumber = Math.floor(Math.random() * 6) + 1;
var number = 1

/**
 * Sees if the number the user chose is equal to the random number and reassigns the random number.
 */
function onButtonClick() {
  if (number == randomnumber) {
    document.getElementById("result").innerHTML = "<br><h5>The random number was " + randomnumber + "!</h5><br><h5>You got it right!</h5>"
  } else {
    document.getElementById("result").innerHTML = "<br><h5>The random number was " + randomnumber + "!</h5><br><h5>You got it wrong...</h5>"
  }
  randomnumber = Math.floor(Math.random() * 6) + 1;
  console.log("The current random number is " + randomnumber + "!")
}

/**
 * Updates the user's selected number to the number currently in the slider.
 */
function updateNumber() {
  number = document.getElementById("slider").value
  document.getElementById("slider-number").innerHTML = "<h4>Selected Number: " + number + "</h4>"
}

console.log("The current random number is " + randomnumber + "!")