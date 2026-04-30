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
  return (
    <li className={`${styles['my-item']} list-group-item my-item ` }>
      <span className={styles['my-span']}>{foodItem}</span>
    </li>
  );
};

export default Item;
