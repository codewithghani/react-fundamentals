import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import categories from "../categories";
const schema = z.object({
  description: z
    .string()
    .min(3, { message: " Description shoud be min 3 chars long" })
    .max(50, { message: "cannot be more than 50 characters" }),
  expense: z
    .number({ invalid_type_error: "amount is required" })
    .min(0.01, { message: "amount should be atleast 0.1 spent" })
    .max(10000, { message: "Cannot be more than 10 k" }),
  category: z.enum(categories),
});
type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      className="mb-3 border border-primary rounded p-5"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        onSubmit(data);
        reset();
      })}
    >
      <h2 className="text-center text-primary">Generate New Expenses</h2>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="desc"
        />
        {errors.description && (
          <p className="text-danger"> {errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="expense" className="form-label">
          Amount
        </label>
        <input
          {...register("expense", { valueAsNumber: true })}
          type="number"
          min="0"
          className="form-control"
          id="expense"
        />
        {errors.expense && (
          <p className="text-danger"> {errors.expense.message}</p>
        )}
      </div>
      <div className="mb-3">
        <div className="form-label">Select Category</div>
        <select {...register("category")} className="form-select mb-3">
          <option selected value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger"> {errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
