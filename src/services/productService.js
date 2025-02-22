export const getProductList = async (searchTerm) => {
  const response = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ""}`);
  if(!response.ok){
    throw { message:response.statusText, status:response.status}
  }
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const response = await fetch(`http://localhost:8000/444/products/${id}`);
  if(!response.ok){
    throw {message:response.statusText, status:response.status}
  }
  const data = await response.json();
  return data;
};

export const getFeaturedList = async () => {
  const response = await fetch("http://localhost:8000/444/featured_products");
  if(!response.ok){
    throw {message:response.statusText, status:response.status}
  }
  const data = await response.json();
  return data;
};
