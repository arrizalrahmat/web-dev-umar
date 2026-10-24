const display = document.getElementById('display');

function addCharacter(char) {
  display.value += char;
}

function clearCharacter() {
  display.value = '';
}

function deleteCharacter() {
  let result = '';
  for (let i = 0; i < display.value.length - 1; i++) {
    result += display.value[i];
  }
  display.value = result;
}

function calculate() {
  const result = eval(display.value);
  console.log(result);
  display.value = result;
}
