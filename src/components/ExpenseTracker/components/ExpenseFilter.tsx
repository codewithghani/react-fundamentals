interface Expense {
  id: number;
  description: string;
  expense: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onSelected: (cat: string) => void;
}
const ExpenseFilter = ({ expenses, onSelected }: Props) => {
  return (
    <select
      className="form-select mb-3"
      onChange={(event) => onSelected(event.target.value)}
    >
      <option selected value="all">
        All
      </option>
      {expenses.map((expnse) => (
        <option value={expnse.category}>{expnse.category}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
