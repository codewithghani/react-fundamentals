// import React from "react";

import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    personName: "",
    personAge: 0,
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.personName = nameRef.current.value;
    if (ageRef.current !== null)
      person.personAge = parseInt(ageRef.current.value);
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
        <input id="name" type="text" className="form-control" ref={nameRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          min={0}
          ref={ageRef}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
