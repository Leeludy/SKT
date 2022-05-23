import axios from "axios";

// Axios get datas from DB
function getThrAlerts() {
  return axios.get("http://localhost:3030/thresholds").then(({ data }) => data); // breaking obtened data littles pieces of data // destructuring syntax equivalent to .then((reponse) => response.data)
}

// Axios get equipment models
function getModels() {
  return axios
    .get("http://localhost:3030/equipment/models")
    .then(({ data }) => data);
}

// Axios post datas to DB
function postThrAlert(thrAlert) {
  return axios
    .post("http://localhost:3030/thresholds", thrAlert)
    .then(({ data }) => data);
}

// Axios put datas in DB
function putThrAlert(thrAlert) {
  return axios
    .put(`http://localhost:3030/thresholds/${thrAlert.id}`, thrAlert)
    .then(({ data }) => data);
}

// Axios delete datas of the DB
function deleteThrAlert(thrAlert) {
  return axios
    .delete(`http://localhost:3030/thresholds/${thrAlert.id}`, thrAlert)
    .then(({ data }) => data);
}

export { getThrAlerts, postThrAlert, putThrAlert, deleteThrAlert, getModels };
