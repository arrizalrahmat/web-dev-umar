const body = document.getElementById('body');

const inputName = document.getElementById('inputName');
inputName.addEventListener('change', e => {
  handleChangeInput(e.target.value);
});

function handleChangeInput(val) {
  console.log('halo');
  const existingH1 = document.getElementById('result');

  if (existingH1) {
    existingH1.remove();
  }
  const h1 = document.createElement('h1');
  h1.id = 'result';
  h1.innerText = val;
  body.appendChild(h1);

  // buat button untuk greeting
  const greetButton = document.createElement('button');
  greetButton.innerText = 'Sapa aku';
  greetButton.style.backgroundColor = 'orange';
  greetButton.style.padding = '8px';
  greetButton.style.borderRadius = '8px';
  greetButton.addEventListener('click', () => {
    alert(`Halo ${val}`);
  });
  greetButton.addEventListener('mouseenter', () => {
    greetButton.style.backgroundColor = 'purple';
  });
  greetButton.addEventListener('mouseleave', () => {
    greetButton.style.background = 'orange';
  });
  body.appendChild(greetButton);
}

function changeColor() {
  const colorSelector =
    document.getElementById('colorSelector');
  const kotak = document.getElementById('kotak');
  console.log(kotak);
  kotak.style.backgroundColor = colorSelector.value;
}

const kotak2 = document.getElementById('kotak2');
kotak2.onmouseover = () => {
  kotak2.style.backgroundColor = 'blue';
};

kotak2.onmouseout = () => {
  kotak2.style.backgroundColor = 'white';
};
