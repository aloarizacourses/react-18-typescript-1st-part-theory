import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./expenseTracker/categories";

const schema = z.object({
  description: z.string().min(3).max(100),
  amount: z.number().min(0.01).max(100_000),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

const FormExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) =>
        console.log("hello from submit: ", data)
      )}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}

        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}

        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          <option value=""></option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormExpenseTracker;
