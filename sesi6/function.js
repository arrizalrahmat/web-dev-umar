// function ketika tidak di invoke, maka codenya akan dormant (tidur)

//cara menulis function 1 (basic function)
function add(angka1, angka2) {
  return angka1 + angka2;
}
//cara menulis function 2 (anonymous function)
const multiply = function (angka1, angka2) {
  return angka1 * angka2;
};
//cara menulis function 3 (arrow function)
const divide = (angka1, angka2) => {
  return angka1 / angka2;
};

//function invocation
console.log(add(2, 3));
// console.log(multiply(2, 3));
// console.log(divide(2, 3));
