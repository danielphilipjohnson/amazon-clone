import React, { useState, useEffect } from "react";
const data = [
  ["Product Dimensions", "6.35 x 6.35 x 9.53 cm; 0.21 Grams"],
  ["Manufacturer recommended age", "6 years and up"],
  ["Item model number", "39697"],
  ["Manufacturer's Suggested Maximum Weight", "2 Kilograms"],
  ["Language:", "English"],
  ["Number of Puzzle Pieces", "1"],
  ["Assembly Required", "No"],
  ["Batteries Required?", "No"],
  ["Batteries included?", "No"],
  ["Material Type(s)", "Vinyl"],
  ["Material Composition", "100% Cotton"],
  ["Release date", "21 July 2019"],
  ["Mfg Recommended age", "6 - 99 years"],
];
function Table() {
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const TableRows = () => {
    return tableData.map((row) => {
      const tableHeader = row[0];
      const tableData = row[1];
      return (
        <tr className="tr">
          <th className="td t-left"> {tableHeader} </th>
          <td className="td"> {tableData} </td>
        </tr>
      );
    });
  };
  return (
    <table>
      <TableRows />
    </table>
  );
}

export default Table;
