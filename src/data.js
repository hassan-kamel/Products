const BASE_URL = 'https://fakestoreapi.com';
const getAllProducts = async () => {
  let allProducts = [];
  await fetch(`${BASE_URL}/products`)
    .then((response) => response.json())
    .then((data) => {
      allProducts = data;
    });
  return allProducts;
};
const getAllCategories = async () => {
  let allCategories = [];
  await fetch(`${BASE_URL}/products/categories`)
    .then((response) => response.json())
    .then((data) => {
      allCategories = data;
    });
  return allCategories;
};
const getProduct = async (id) => {
  let product = {};
  await fetch(`${BASE_URL}/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      product = data;
    });
  return product;
};
const getCategory = async (cate) => {
  let category = [];
  await fetch(`${BASE_URL}/products/category/${cate}`)
    .then((response) => response.json())
    .then((data) => {
      category = data;
    });
  return category;
};

export { getAllProducts, getAllCategories, getProduct, getCategory };
