// import React from "react";

import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    personName: "",
    personAge: "",
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
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
        <input
          id="name"
          type="text"
          className="form-control"
          onChange={(event) =>
            setPerson({ ...person, personName: event.target.value })
          }
          value={person.personName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          value={person.personAge}
          id="age"
          type="number"
          className="form-control"
          min={0}
          onChange={(event) => {
            setPerson({ ...person, personAge: event.target.value });
          }}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
