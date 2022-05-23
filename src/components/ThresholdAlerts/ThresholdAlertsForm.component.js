import React from "react";
import { useQueryModelsEquipment } from "./ThresholdAlerts.queries";
import { useForm } from "react-hook-form";
import { Form, FormLabel } from "react-bootstrap";

function ThresholdAlertsForm({ thrAlert, onSubmit, children }) {
  // Query get equipment models
  const modelsQuery = useQueryModelsEquipment();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      ref_equipment: thrAlert?.ref_equipment,
      threshold_level: thrAlert ? thrAlert.threshold_level : 0,
      expiration_date: thrAlert ? thrAlert.expiration_date : null,
    },
  });

  return (
    <Form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <FormLabel>Equipment</FormLabel>
        <select
          className="form-select"
          id="equipment model"
          {...register("ref_equipment", { required: true })}
        >
          <option value="">Choose an equipment</option>
          {modelsQuery.data?.map((model) => (
            <option
              key={model.model_categorie}
              eventkey={model.model_categorie}
            >
              {model.model_categorie}
            </option>
          ))}
        </select>
        <small className="form-text">
          {errors.ref_equipment && "You have to coose a model"}
        </small>
      </div>
      <div className="mb-3">
        <FormLabel>Threshold Level</FormLabel>
        <input
          className="form-control"
          type="number"
          id="threshold_level"
          {...register("threshold_level", { required: true })}
        />
        <small className="form-text">
          {errors.threshold_level && "You have to enter a number"}
        </small>
      </div>
      {/* import of the  form's edit validation buttons with props children*/}
      {children}
    </Form>
  );
}

export { ThresholdAlertsForm };
