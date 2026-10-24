const display = document.getElementById('display');
const peopleDisplay = document.getElementById('people');

const activeTipStyle = 'btn btn-warning w-100 active';
const inactiveTipStyle = 'btn btn-outline-warning w-100';
let currentActiveTip = 10;
let total = 0;
let tip = 0;
let people = 1;
let totalPerPerson = 0;

function addCharacter(char) {
  const newValue = display.value + char;
  display.value = newValue;
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

function activateTip(percent) {
  // jika persentase yang di klik adalah current active, jangan lakukan apa2
  if (currentActiveTip == percent) return;

  // deactivate current active tip
  const active = document.getElementById(
    `tip-${currentActiveTip}`,
  );
  if (active) active.className = inactiveTipStyle;

  // activate new current active tip
  const toActivate = document.getElementById(
    `tip-${percent}`,
  );
  if (toActivate) toActivate.className = activeTipStyle;

  currentActiveTip = percent;
}

function calculate() {
  const bill = Number(display.value) || 0;
  tip = (bill * currentActiveTip) / 100;
  total = bill + tip;
  people =
    Number(document.getElementById('people').value) || 1;
  const perPerson = total / people;

  document.getElementById('tip-amount').innerText =
    `Rp ${tip}`;
  document.getElementById('total').innerText =
    `Rp ${total}`;
  document.getElementById('per-person').innerText =
    `Rp ${perPerson}`;
}

function editPerson(op) {
  if (op === '+') {
    people += 1;
  } else if (op === '-') {
    if (people === 1) return;
    people -= 1;
  }
  peopleDisplay.value = people;
}

function calculate() {
  const bill = display.value;

  //calculate tips
  tip = (bill * currentActiveTip) / 100;
  const tipAmount = document.getElementById('tip-amount');
  tipAmount.innerText = `Rp ${tip}`;

  //calculate total
  total = Number(bill) + Number(tip);
  const totalAmount = document.getElementById('total');
  totalAmount.innerText = `Rp ${total}`;

  //calculate per person
  totalPerPerson = total / people;
  const perPersonAmount =
    document.getElementById('per-person');
  perPersonAmount.innerText = totalPerPerson;
}
