import categories from "./categories"

interface Props {
    onSelect: (cat: string) => void
}

const ExpenseFilter = ({onSelect}: Props) => {
  return (
    <select
        onChange={(event) => onSelect(event.target.value)} 
        className="form-select">
        <option value="All Categories">All Categories</option>
        {categories.map(cat => 
            <option 
            key={cat} 
            value={cat}
            
            >{cat}</option>)}
    </select>
  )
}

export default ExpenseFilter
