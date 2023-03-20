import { useState } from "react";
import { z } from "zod";
import categories from "./expense-tracker/categories";

interface Props {
  headers: string[],
  items: Item[],
  onDelete(): (item: Item) => void,
}

interface Item {
  description: string,
  amount: number,
  category: string
}

const Table = (props: Props) => {

  const {headers, items, onDelete} = props

  if (items.length === 0) return <p className="fw-bold mt-2">There are no expenses to track.</p>

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
      items.map((item, ix) => {
         return <tr key={ix}>
          <td>{item.description}</td>
          <td>{item.amount}</td>
          <td>{item.category}</td>
          <td><button
            onClick={() => onDelete()} 
          className="btn btn-danger">Delete</button></td>
        </tr>
      })
    }
  </tbody>
</table>
  );
};

export default Table;
