import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../../store/Modules/cart/actions";
import { useHistory } from "react-router-dom";
import { CartInfosBuy, DivHeader, LiItens } from "./style";
import { UlItens } from "./style";


function CartBuy() {
  const cartItems = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();
  const itemsCart = (cartItems) => {
    return (
      <LiItens key={cartItems.id}>
        <span>{cartItems.name}</span>
        <span>{cartItems.price.toFixed(2)}</span>
        <img src={cartItems.image} alt={cartItems.image}></img>
        <button onClick={() => dispatch(remove(cartItems.id))}>
          Remover carrinho
        </button>
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
        <UlItens>{cartItems.map(itemsCart)}</UlItens>
      </CartInfosBuy>
    </>
  );
}
export default CartBuy;
