import axios from "axios";

// Axios get datas from DB
function getMissions() {
  return axios.get("http://localhost:3030/missions").then(({ data }) => data); // breaking obtened data littles pieces of data // destructuring syntax equivalent to .then((reponse) => response.data)
}

// Axios post datas to DB
function postMission(mission) {
  return axios
    .post("http://localhost:3030/missions", mission)
    .then(({ data }) => data);
}

// Axios put datas in DB
function putMission(mission) {
  return axios
    .put(`http://localhost:3030/missions/${mission.id}`, mission)
    .then(({ data }) => data);
}
