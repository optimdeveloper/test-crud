import axios from "axios";

const apiURL = process.env.REACT_APP_DEV;
console.log(process.env)
function getUsers() {
  const response = axios.get(`${apiURL}/crud/products`);

  return response;
}


function getCreatedUser({ price,description,title },file) {

  const data = new FormData();
 if(file!= null){
  data.append('image', file) 
 } 
  data.append('price', price)
  data.append('description', description)
  data.append('title', title)


  const response = axios.post(`${apiURL}/crud/createProduct`, data);

  return response;
}

function getUpdatedUser(productId, user,file) {
  const data = new FormData();
  if(file!= null){
   data.append('image', file) 
  } 
   data.append('price', user.price)
   data.append('description', user.description)
   data.append('title', user.title)
  
  const response = axios.post(`${apiURL}/crud/updateProduct/${productId}`, data);

  return response;
}

function getDeletedUser(id) {
  const response = axios.delete(`${apiURL}/crud/deleteProduct/${id}`);

  return response;
}

export { getUsers, getCreatedUser, getUpdatedUser, getDeletedUser };
