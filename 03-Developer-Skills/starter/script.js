// Remember, we're gonna use strict mode in all scripts now!
/** How to think like a developer
 * 1> Understand the problem till its clear and ask questions till its clear
 * 2> Break the problem down in doable chunks and solve them
 * 3> Do as much research as possible
 * 4> Write pseudo code if needed
 */

'use strict';
/*
// How to use google, stackoverflow and mdn to research
// PROBLEM 1:
const temperature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [3, -12, -16, -1, 'error', 9, 131, 17, 15, 14, 9, 5];

function calcTempAmplitude(arr1, arr2) {
  // merge two arrays into one
  let arr = arr1.concat(arr2);
  // determine max and min value in an array
  let maxVal = arr[0];
  let minVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    }
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return maxVal - minVal;
}
let amplitude = calcTempAmplitude(temperature1, temperature2);
console.log('Amplitude is : ' + amplitude);
*/
//Debugging with console
// Problem 2
let measureKelvin = () => {
  const measurement = {
    type: 'type',
    unit: 'celsius',
    value: prompt('Enter celsius value!'),
  };
  //console.table(measurement); // logged value to check what value are we receiving from the prompt
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// How to check for errors using the chrome debugger;
// Problem 3
/*
const temperature3 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature4 = [3, -12, -16, -1, 'error', 9, 131, 17, 15, 14, 9, 5];

function calcTempAmplitudeBug(arr1, arr2) {
  // merge two arrays into one
  let arr = arr1.concat(arr2);
  // determine max and min value in an array
  let maxVal = arr[0];
  let minVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    }
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return maxVal - minVal;
}
let amplitudeBug = calcTempAmplitudeBug(temperature3, temperature4);
console.log('Amplitude is : ' + amplitudeBug);
*/
