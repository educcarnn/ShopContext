
import { Link } from "react-router-dom";
import { BuyInfos, MessageReturn } from "./style";
import { useContext } from "react";
import { CartInContext } from "../../providers/Cart";
function TotalBuy({ setMessage }) {

const {infosCart} = useContext(CartInContext)


const totalPrice = infosCart.reduce(
     (acumulador, item) => Number(acumulador) + Number(item.price),
    0
);

const resultBuy = () => {
   infosCart.length = 0
   setMessage(true) 
}

if (infosCart.length > 0) {
    return (
     <BuyInfos>
        <span>Itens: {infosCart.length}</span>
       <span>Preço: ${totalPrice.toFixed(2)}</span>
        <button onClick={resultBuy}>Finalizar compra</button>
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
