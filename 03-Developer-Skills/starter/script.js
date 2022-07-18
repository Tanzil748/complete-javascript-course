// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // value: Number(prompt("Degrees celsius"))
    value: 10,
  };

  //   console.log(measurement);
  console.table(measurement); //easier to see

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// //using debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

//coding challenge
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C in ${i + 1} days ... `;
  }
  console.log("... " + str);
};

printForecast(data1);
