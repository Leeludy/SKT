import axios from "axios";

// Axios get datas from DB
function getMissions() {
  return axios.get("http://localhost:3030/missions").then(({ data }) => data); // breaking obtened data littles pieces of data // destructuring syntax equivalent to .then((reponse) => response.data)
}
