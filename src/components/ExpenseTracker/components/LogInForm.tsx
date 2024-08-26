import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(4, { message: "First Name cannot be shorter than 4 characters" })
    .max(10, { message: "First Name cannot be greater than 10 characters" }),
  lastName: z
    .string()
    .min(3, { message: "Last Name cannot be shorter than 3 characters" })
    .max(8, { message: "Last Name cannot be greater than 8 characters" }),
  userName: z
    .string()
    .min(3, { message: "User Name cannot be shorter than 3 characters" })
    .max(8, { message: "User Name cannot be greater than 6 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password cannot be shorter than 8 charcters" })
    .max(12, { message: "Password must be greater than 12 characters" }),
});
type LogInFormData = z.infer<typeof schema>;
const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      className="p-5 border-1 rounded border-dark bg-body-tertiary"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <h2 className="text-center text-primary">
        {" "}
        Sign Up Form - Code with Ghani
      </h2>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          {...register("firstName")}
          id="firstName"
          type="text"
          className="form-control"
        />
        {errors.firstName && (
          <p className="text-danger">{errors.firstName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          {" "}
          Last Name
        </label>
        <input
          {...register("lastName")}
          id="lastName"
          type="text"
          className="form-control"
        />
        {errors.lastName && (
          <p className="text-danger">{errors.lastName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          {" "}
          User Name
        </label>
        <input
          {...register("userName")}
          id="userName"
          type="text"
          className="form-control"
        />
        {errors.userName && (
          <p className="text-danger">{errors.userName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className="form-control"
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          className="form-control"
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-outline-primary align-middle">
        Register
      </button>
    </form>
  );
};

export default LogInForm;
