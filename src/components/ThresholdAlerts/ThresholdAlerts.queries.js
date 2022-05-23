import { useMutation, useQuery } from "react-query";
import {
  getThrAlerts,
  postThrAlert,
  putThrAlert,
  deleteThrAlert,
  getModels,
} from "./ThresholdAlerts.services";

// reactQuery 'get Alerts
function useQueryThresholdAlerts(options) {
  return useQuery(["useQueryThresholdAlerts"], () => getThrAlerts(), options);
}

// reactQuery 'get Models equipement
function useQueryModelsEquipment(options) {
  return useQuery(["useQueryModelsEquipment"], () => getModels(), options);
}

// reactQuery to post/create an alert
function useMutationCreateThrAlert(options) {
  return useMutation(({ data }) => postThrAlert(data), options);
}

// reactQuery to put/modify an alert
function useMutationEditThrAlert(options) {
  return useMutation(({ thrAlert }) => putThrAlert(thrAlert), options);
}

// reactQuery to delete an alert
function useMutationDeleteThrAlert(options) {
  return useMutation(({ thrAlert }) => deleteThrAlert(thrAlert), options);
}

export {
  useQueryThresholdAlerts,
  useMutationCreateThrAlert,
  useMutationEditThrAlert,
  useQueryModelsEquipment,
  useMutationDeleteThrAlert,
};
