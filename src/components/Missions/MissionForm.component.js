import { useForm } from "react-hook-form";

// format date to create mission (avoid undefine)
function dateToInputDateFormat(date) {
  return (date ? new Date(date) : new Date()).toISOString().slice(0, 10);
}

function dateToIsoFormat(date) {
  return new Date(date).toISOString();
}

/*
 *
 */
function MissionForm({ onSubmit, mission, isReadOnly, children }) {
  // React hook form call config
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: mission?.title,
      description: mission?.description,
      location: mission?.location,
      start_date: dateToInputDateFormat(mission?.start_date),
      end_date: dateToInputDateFormat(mission?.end_date),
      customer_info: mission?.customer_info,
    },
  });

  // Toogle on readOnly text inputs form
  const inputState = {
    className: isReadOnly ? "form-control-plaintext" : "form-control",
    readOnly: isReadOnly,
  };
  // Toogle on disabled selects inputs form
  const selectState = {
    className: isReadOnly ? "form-control-plaintext" : "form-control",
    disabled: isReadOnly,
  };

  // Today date in uk format mm dd yyyy
  const today = new Date().toISOString().slice(0, 10);

  function processData(data) {
    onSubmit({
      ...data,
      // Convert both dates to UTC format
      start_date: dateToIsoFormat(data.start_date),
      end_date: dateToIsoFormat(data.end_date),
    });
  }

  // Dynamic form view render
  return (
    <form onSubmit={handleSubmit(processData)}>
      <div className="row ">
        <div className="form-group col-md-3 mb-3">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            type="text"
            {...inputState}
            id="missionTitlee"
            {...register("title", { required: true })}
          />
          {errors.title && "You have to give a Title to the Mission"}
        </div>
        <div className="form-group col-md-2 mb-3">
          <label htmlFor="startingDate" className="">
            Starting Date
          </label>
          <input
            type="date"
            {...inputState}
            id="missionStartDate"
            min={today}
            {...register("start_date")}
          />
          {errors.start_date && "Enter a Date at format MM DD YYYY"}
        </div>
        <div className="form-group col-md-2 mb-3">
          <label className="">Ending Date</label>
          <input
            type="date"
            {...inputState}
            id="missionEndDate"
            min={today}
            {...register("end_date")}
          />
        </div>
        <div className="form-group col-md-3 mb-3">
          <label>Location</label>
          <input
            type="text"
            {...inputState}
            id="missionLocation"
            {...register("location")}
            placeholder="Where?"
          />
        </div>
        <div className="form-group col-md-2 mb-3">
          <label>Customer</label>
          <input
            type="text"
            {...inputState}
            id="customerInfo"
            {...register("customer_info")}
            placeholder="Who?"
          />
        </div>
      </div>

      <div className="form-group mb-3">
        <label>Description</label>
        <textarea
          {...inputState}
          id="missionDescription"
          {...register("description")}
          rows="3"
        ></textarea>
      </div>
      <div className="row">
        <div className="form-group col mb-3">
          <label>Pilot</label>
          <select {...selectState} id="missionPilot" {...register("pilot")}>
            <option defaultValue>Choose a Pilot</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="form-group col mb-3">
          <label>Copilot</label>
          <select {...selectState} id="missionCopilot" {...register("copilot")}>
            <option defaultValue>Choose a Copilot</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      {/* import of the  form's edit validation buttons with props children*/}
      {children}
    </form>
  );
}

export { MissionForm };
