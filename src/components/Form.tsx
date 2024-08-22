// import React from "react";

// import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container border border-primary rounded px-100"
    >
      <h2 className="text-center">Basic Form</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name{" "}
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger"> Name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            {" "}
            Min Length of Name should be 3 characters long
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
          min={0}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
