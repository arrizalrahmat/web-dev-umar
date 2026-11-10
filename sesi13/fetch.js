const url = 'https://fakestoreapi.com/products';

// pakai promise
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data, '<<ini hasilnya');
//   });

// pakai async await

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error, 'do something');
  }
};

const postData = async () => {
  const newUser = {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error, 'do something');
  }
};

postData();
