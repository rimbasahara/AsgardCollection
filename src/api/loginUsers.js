import axios from "axios";

export default async function LoginUsers() {
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: "johnd",
      password: "m38rmF$",
    });
    const token = response.data.token;
    localStorage.setItem("userToken", token);
    return response;
  } catch (error) {
    console.error(error);
  }
}
LoginUsers();
