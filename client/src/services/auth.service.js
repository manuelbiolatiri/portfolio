import axios from "axios";

const API_URL = "https://flashtoken.herokuapp.com/api/v1/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "create-user", {
    username,
    email,
    password,
  })
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      console.log(response.status)
          
          console.log(response.data)
      if (response.status == 201) {
        localStorage.setItem("user", JSON.stringify(response.data.data.token));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("jwt");
};

export default {
  register,
  login,
  logout,
};
