import categories from "../categories";
interface Props {
  onSelected: (cat: string) => void;
}
const ExpenseFilter = ({ onSelected }: Props) => {
  return (
    <select
      className="form-select mb-3"
      onChange={(event) => onSelected(event.target.value)}
    >
      <option className="text-center text-capitalize" selected value="all">
        All
      </option>
      {categories.map((category) => (
        <option
          className="text-center text-capitalize"
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
