const Item = (props) => {
  return (
    <li className="list-group-item">
      {props.foodItem}
    </li>
  );
};

// const Item = (props) => {
//   let {foodItem} = props;
//   return (
//     <li className="list-group-item">
//       {foodItem}
//     </li>
//   );
// };

// const Item = ({ foodItem }) => {
//   return (
//     <li className="list-group-item">
//       {foodItem}
//     </li>
//   );
// };

export default Item;