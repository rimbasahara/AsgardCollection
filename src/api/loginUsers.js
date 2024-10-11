import axios from "axios";

export default async function LoginUsers(username, password) {
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login/", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}
