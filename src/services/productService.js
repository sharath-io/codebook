export const getProductList = async (searchTerm) => {
  const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ""}`);
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const response = await fetch(`http://localhost:8000/products/${id}`);
  const data = await response.json();
  return data;
};

export const getFeaturedList = async () => {
  const response = await fetch("http://localhost:8000/featured_products");
  const data = await response.json();
  return data;
};
