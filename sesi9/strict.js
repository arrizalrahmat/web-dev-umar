'use strict';

var x = 3.14;
const person = {
  firstName: 'arrizal',
  lastName: 'kurniawan',
};
// di strict mode hanya boleh delete property object, tidak boleh delete variable
// delete x;
delete person.lastName;
console.log(person);

// tidak boleh memiliki 2 identifier dengan key sama
function something(data, data) {
  console.log(data);
}

something(1, 2);
