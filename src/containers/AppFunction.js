import { useState } from "react";
import ItemCount from "../components/ItemCount";

const AppFunction = () => {
  const [stockActual, setStockActual] = useState(5);
  
  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    if (stockActual <= 0 || document.getElementById("cantidad").value > stockActual) {
      alert('Ya no hay mas Stock');
    } else
    setStockActual((stockActual) => stockActual - nuevoStock);
  };

  return (
    <div className="App">
      <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
    </div>
  );
};

export default AppFunction;