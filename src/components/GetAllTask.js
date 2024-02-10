import React from "react";
import { patchAPI, deleteAPI } from "../apiCalls";
import { deleteTask, updateTask } from "../store/slices/taskSlice";
import { useDispatch } from "react-redux";
export default function GetAllTask(props) {
  const dispatch = useDispatch();
  const { title, description, status } = props.items;

  function handleDelete(id) {
    dispatch(deleteTask(id));
    deleteAPI("http://localhost:5000/api/task", id);
  }
  function handleUpdate(id, status) {
    const data = {
      id,
      status,
    };
    dispatch(updateTask(data));
    patchAPI("http://localhost:5000/api/task", id);
  }
  return (
    <div className="list">
      <h2>
        {title} {`(${status === "true" ? `Completed` : `Not Completed`})`}{" "}
        <span>
          <input
            type="checkbox"
            checked={status === "true" ? true : false}
            style={{ cursor: "pointer" }}
            onChange={() =>
              handleUpdate(props.id, status == "true" ? "false" : "true")
            }
          />
        </span>
      </h2>
      <h4>{description}</h4>
      <button onClick={() => handleDelete(props.id)}>Delete Task</button>
      <hr />
    </div>
  );
}
