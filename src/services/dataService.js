function getSession(){
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return {token,cbid};
}

export const getUser = async() =>{
  const browserData = getSession();

    // send request to api to get user information
    const requestOptions ={
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${browserData.token}`,
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`,requestOptions);
    if(!response.ok){
      throw {message:response.statusText, status:response.status}
    }
      const data = await response.json();
      return data;
}

export const getUserOrders = async () =>{
  const browserData = getSession();
  const requestOptions={
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  }
  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.cbid}`, requestOptions);
  if(!response.ok){
    throw {message:response.statusText, status:response.status}
  }

  const data = await response.json();
  return data;
}

export const createOrder = async (cartList,total,user) =>{
  const browserData = getSession();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
          name: user.name,
          email: user.email,
          id: user.id,
        },
      };
      const requestOptions ={
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${browserData.token}`,
        },
        body: JSON.stringify(order),
      }
      const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOptions);
      if(!response.ok){
        throw {message:response.statusText, status:response.status}
      }
      const data = await response.json();
      return data;
}