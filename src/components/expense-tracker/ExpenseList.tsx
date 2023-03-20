

interface Props {
    headers: string[],
    expenses: Expense[],
    onDelete: (id: number) => void,
  }

  interface Expense {
    id: number
    description: string,
    amount: number,
    category: string
  }
  

const ExpenseList = ({headers, expenses, onDelete}: Props) => {
    
  if (expenses.length === 0) return <p className="fw-bold mt-2">There are no expenses to track.</p>
    
    return (
        <table className="table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>      
          {
            expenses.map((expense) => {
               return <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td><button
                  onClick={() => onDelete(expense.id)} 
                className="btn btn-danger">Delete</button></td>
              </tr>
            })
          }
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>{expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(0)}</td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
      </table>
    )
}

export default ExpenseList