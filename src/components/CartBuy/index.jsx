
import { useHistory } from "react-router-dom";
import { CartInfosBuy, DivHeader, LiItens } from "./style";
import { UlItens } from "./style";
import { useContext } from "react";
import { CartInContext } from "../../providers/Cart";

function CartBuy() {

  const {infosCart} = useContext(CartInContext);

  console.log(infosCart)
  const itemsCart = (cartItems) => {
    return (
      <LiItens key={cartItems.id}>
        <span>{cartItems.name}</span>
        <span>{cartItems.price.toFixed(2)}</span>
        <img src={cartItems.image} alt={cartItems.image}></img>
      </LiItens>
    );
  };

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }


  return (
    <>
      <DivHeader>
        <h2 className="name">Kenzie Shop</h2>
        <button onClick={handleClick}>Produtos</button>
      </DivHeader>

      <CartInfosBuy>
        <UlItens>{infosCart.map(itemsCart)}</UlItens>
      </CartInfosBuy>
    </>
  );
}
export default CartBuy;
