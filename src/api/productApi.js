import axios from "axios";

export default async function ApiProducts() {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data;
  } catch (err) {
    console.log("Error while getting data: ", err);
  }
}

// const ApiProducts = () => {};
