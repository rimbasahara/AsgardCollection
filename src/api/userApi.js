import axios from "axios";

export default async function GetUsers() {
  try {
    const response = await axios({
      method: "get",
      url: "https://fakestoreapi.com/users",
    });
    for (const user of response.data) {
      console.log("username: ", user.username);
      console.log("password: ", user.password);
      console.log("=====================");
    }
    // console.log(user);

    return response;
  } catch (err) {
    console.log("Error while getting data: ", err);
  }
}
GetUsers();
