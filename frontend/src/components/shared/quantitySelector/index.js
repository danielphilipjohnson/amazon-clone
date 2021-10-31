import React, { useState } from "react";
import { useStateValue } from "../../../StateProvider";
function Index({ quantity, itemId }) {
  const [dispatch] = useStateValue();

  const [itemQuantity, setItemQuantity] = useState(quantity);
  const options = [];
  const optionsValues = 10;

  for (let index = 1; index <= optionsValues; index++) {
    if (index === 10) {
      // make a better method later
      options.push(<option value="10">10+</option>);
    } else {
      options.push(<option value={index}>{index}</option>);
    }
  }

  const onQuantityChange = (event) => {
    console.log(event.target.value);
    setItemQuantity(+event.target.value);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        itemId,
        quantity: +event.target.value,
      },
    });
  };

  return (
    <select
      name="quantity"
      id="quantity"
      value={itemQuantity > 10 ? "10+" : itemQuantity}
      onChange={onQuantityChange}
    >
      {options}
    </select>
  );
}

export default Index;
