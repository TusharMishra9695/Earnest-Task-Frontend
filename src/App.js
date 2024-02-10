import "./App.css";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { status } from "./utils";
import GetAllTask from "./components/GetAllTask";
function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data, "dayta");
  }
  return (
    <div className="add_task">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <p className="task_p"> Task Manager ! Add Task</p>

        <div className="details">
          <p>Title</p>
          <input
            type="text"
            {...register("title", {
              required: true,
            })}
            placeholder="Enter Title"
          />
          {errors.title && <span>This field is required*</span>}
        </div>
        <div className="details">
          <p>Description</p>
          <input
            type="text"
            defaultValue=""
            {...register("description", {
              required: true,
            })}
            placeholder="Enter Description"
          />
          {errors.description && <span>This field is required*</span>}
        </div>
        <div className="details">
          <p>Completion Status</p>
          <Controller
            name="status"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                options={status}
                onChange={(val) => onChange(val.value)}
              />
            )}
            rules={{ required: true }}
          />
          {errors.status && <span>This field is required*</span>}
        </div>
        <input type="submit" className="input_submit" value="Create Task" />
      </form>
      <div className="form">
        <p className="task_p">Task List</p>
        <GetAllTask />
      </div>
    </div>
  );
}

export default App;
