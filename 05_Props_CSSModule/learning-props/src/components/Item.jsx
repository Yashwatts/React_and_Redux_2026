// const Item = (props) => {
//   return (
//     <li className="list-group-item">
//       {props.foodItem}
//     </li>
//   );
// };

// const Item = (props) => {
//   let {foodItem} = props;
//   return (
//     <li className="list-group-item">
//       {foodItem}
//     </li>
//   );
// };

import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={`${styles["my-item"]} list-group-item my-item `}>
      <span className={styles["my-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
