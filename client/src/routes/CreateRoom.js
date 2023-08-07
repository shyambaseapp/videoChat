import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
  function create() {
    const id = uuid();
    window.location.href = `/room/${id}`;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-grid gap-2 col-2">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={create}
        >
          Create Meeting
        </button>
      </div>
    </div>
  );
};

export default CreateRoom;
