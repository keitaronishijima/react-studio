// TODO: create a component that displays a single bakery item

const handleClick = (updateTotalPrice, totalPrice, price, name, updateItem, items) => {
  updateTotalPrice(totalPrice + price);
  items.push(name)
  updateItem(items)
};

const BakeryItem = (props) => {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <h3>{props.item.description}</h3>
      <img width="200" src={props.item.image} alt="" />
      <h3>{props.item.price}</h3>
      <button
        onClick={() => handleClick(
          props.updateTotalPrice,
          props.totalPrice,
          props.item.price,
          props.item.name,
          props.updateItem,
          props.items
        )}
      >
        Add to cart
      </button>
    </div>
  );
};

export default BakeryItem;
