import { MyStore } from "@/context/MyContext";
import CartCard from "@/components/CartCard";
import { useContext } from "react";

const CartItems = () => {
  const { isInCart } = useContext(MyStore);

  return (
    <div className="flex flex-col gap-5">
      {isInCart.map((val) => (
        <CartCard key={val.id} val={val} />
      ))}
    </div>
  );
};

export default CartItems;