// import React from "react";

// import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be atleast 3 characters long." }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "You are under age!!" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
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
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
          min={0}
        />
        {errors.age && <p className="text-danger"> {errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
