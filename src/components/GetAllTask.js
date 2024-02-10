import React from "react";
import { patchAPI, deleteAPI } from "../apiCalls";
export default function GetAllTask(props) {
  const { title, description, status } = props.items;

  return (
    <div className="list">
      <h2>
        {title} {`(${status === "true" ? `Completed` : `Not Completed`})`}{" "}
        <span>
          <input
            type="checkbox"
            checked={status === "true" ? true : false}
            style={{ cursor: "pointer" }}
            onChange={() => patchAPI("/", props.id)}
          />
        </span>
      </h2>
      <h4>{description}</h4>

      <button onClick={() => deleteAPI("/", props.id)}>Delete Task</button>
      <hr />
    </div>
  );
}
