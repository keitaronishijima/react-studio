import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [totalPrice, updateTotalPrice]= useState(0);
  const [items, updateItem] = useState([])

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} totalPrice={totalPrice} updateTotalPrice={updateTotalPrice} updateItem={updateItem} items={items}/>// replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {items.map((item) => (
          <p>{item}</p>
        ))}
        <h3>totalPrice: {totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default App;
