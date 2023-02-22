import { BsFillCartFill } from "react-icons/bs";

const CartWidget = (props) => {
  const { cantidad } = props;
  return (
    <div>
      {cantidad}
      <BsFillCartFill />
    </div>
  );
};

export default CartWidget;
