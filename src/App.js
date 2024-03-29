import "./App.css";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { status } from "./utils";
import GetAllTask from "./components/GetAllTask";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./store/slices/taskSlice";
import { postAPI, getAPI } from "./apiCalls";
import { useEffect, useState } from "react";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addSlice.value);
  const [tasks, setTasks] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    // handleGetTask();
  }, []);
  async function handleGetTask() {
    const result = await getAPI("http://localhost:5000/api/task");
    if (result) {
      setTasks(result);
    }
  }
  function createTask(data) {
    dispatch(addTask(data));
    postAPI("http://localhost:5000/api/task", data);
    reset();
    alert(`${data.title}! Task Created`);
  }
  console.log(state, "state");
  return (
    <div className="add_task">
      <form onSubmit={handleSubmit(createTask)} className="form">
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
        {tasks ? (
          tasks.map((items, id) => {
            return <GetAllTask key={id} items={items} id={id} />;
          })
        ) : state && state.length > 0 ? (
          state.map((items, id) => {
            return <GetAllTask key={id} items={items} id={id} />;
          })
        ) : (
          <h2>No Task In The List !!!!</h2>
        )}
      </div>
    </div>
  );
}

export default App;
