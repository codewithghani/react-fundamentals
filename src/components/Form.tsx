// import React from "react";

import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="container border border-primary rounded px-100"
    >
      <h2 className="text-center">Basic Form</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name{" "}
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" min={0} />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
