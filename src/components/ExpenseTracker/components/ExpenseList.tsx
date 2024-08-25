interface Expense {
  id: number;
  description: string;
  expense: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table table-hover table-bordered table-striped text-center">
      <thead className="table-dark text-center">
        <tr>
          <th>ID</th>
          <th>Decription</th>
          <th>Expense</th>
          <th>Cat</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr className="text-center text-capitalize">
            <td>{expense.id}</td>
            <td>{expense.description}</td>
            <td>{expense.expense}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={2} className="text-center">
            Total
          </th>
          <th>{expenses.reduce((acc, currVal) => acc + currVal.expense, 0)}</th>
          <th colSpan={2}></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
