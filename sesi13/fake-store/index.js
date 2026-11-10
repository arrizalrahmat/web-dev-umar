const url = 'https://fakestoreapi.com/products';
let products = [];
const fetchData = async (
  inputtedUrl,
  isRenderCategories = true,
) => {
  try {
    const response = await fetch(inputtedUrl ?? url);
    const data = await response.json();
    products = data;
    renderData(isRenderCategories);
  } catch (error) {
    console.log(error, 'do something');
  }
};

const renderData = (isRenderCategories = true) => {
  const main = document.getElementById('main');
  if (isRenderCategories) {
    renderCategories();
  }
  clearProducts();
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('col-md-4', 'mb-4');
    productElement.innerHTML = `
            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img src="${product.image}" class="card-img-top object-fit-contain p-4 border-bottom" style="height: 220px" alt="${product.title}">
                <div class="card-body d-flex flex-column p-4">
                    <h5 class="card-title fs-6 fw-semibold mb-2">${product.title}</h5>
                    <p class="card-text small text-secondary mb-3">${product.description}</p>
                    <p class="card-text mt-auto fs-5 mb-0"><strong>$${product.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
    main.appendChild(productElement);
  });
};

const handleCategory = async category => {
  try {
    console.log(category);
    const getByCategoryUrl = `${url}/category/${category}`;
    fetchData(getByCategoryUrl, false);
  } catch (error) {
    console.log(error, 'do something');
  }
};

const clearCategories = () => {
  const categoriesContainer =
    document.getElementById('categories');
  categoriesContainer.innerHTML = '';
};

const clearProducts = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
};

const renderCategories = () => {
  const categories = [];
  products.forEach(p => {
    if (!categories.includes(p.category)) {
      categories.push(p.category);
    }
  });
  console.log(categories, 'ini categories');

  const categoriesContainer =
    document.getElementById('categories');

  categories.forEach(c => {
    const categoryElement =
      document.createElement('button');
    categoryElement.addEventListener('click', () => {
      handleCategory(c);
    });
    categoryElement.classList.add(
      'btn',
      'btn-outline-primary',
      'me-2',
      'mb-2',
    );
    categoryElement.textContent = c;
    categoriesContainer.appendChild(categoryElement);
  });
};

fetchData();
