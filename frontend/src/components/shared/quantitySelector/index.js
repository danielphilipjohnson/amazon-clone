import React from "react";

function Index({ quantity }) {
  const options = [];
  const optionsValues = 10;

  for (let index = 1; index <= optionsValues; index++) {
    if (index === 10) {
      options.push(<option value="10+">10+</option>);
    } else {
      options.push(<option value={index}>{index}</option>);
    }
  }

  return (
    <select
      name="quantity"
      id="quantity"
      value={quantity > 10 ? "10+" : quantity}
    >
      {options}
    </select>
  );
}

export default Index;
