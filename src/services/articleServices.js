import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = (setter) => {
  axiosWithAuth()
    .get("/articles")
    .then((res) => {
      setter(res.data);
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
};

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
