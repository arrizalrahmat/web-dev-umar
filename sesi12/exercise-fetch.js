const url = 'https://randomuser.me/api/?results=10';

// then catch
function fetchSynchronous() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data, '<<ini hasilnya');
    });
}

async function fetchAsynchronous() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, '<<<<');
    renderData(data);
  } catch (error) {
    console.log(error, 'do something');
  }
}

// async await
fetchAsynchronous();
