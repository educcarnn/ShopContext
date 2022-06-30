import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BuyInfos, MessageReturn } from "./style";

function TotalBuy({ setMessage }) {
  const cartItems = useSelector(({ cart }) => cart);

  const totalPrice = cartItems.reduce(
    (acumulador, item) => Number(acumulador) + Number(item.price),
    0
  );

  if (cartItems.length > 0) {
    return (
      <BuyInfos>
        <span>Itens: {cartItems.length}</span>
        <span>Preço: ${totalPrice.toFixed(2)}</span>
        <button onClick={() => setMessage(true)}>Finalizar compra</button>
      </BuyInfos>
    );
  }

  return (
    <MessageReturn>
      <div>Adicione itens ao seu carrinho</div>
      <Link to="/">Voltar para as compras</Link>
    </MessageReturn>
  );
}
export default TotalBuy;
