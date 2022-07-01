
import { useHistory } from "react-router-dom";
import { HeaderStyle } from "./style";
import { CartInContext } from "../../providers/Cart";
import { useContext } from "react";

function Header(){
    let history = useHistory();

    function handleClick() {
      history.push("/cart");
    }

    const {infosCart} = useContext(CartInContext)

return (
        <HeaderStyle>
                <h2 className="name">Kenzie Shop</h2>
                  <span>Quantidade: {infosCart.length}</span> 
                <button onClick={handleClick} className="buttonMove">Ir para carrinho</button>
         </HeaderStyle>
    
    )
}
export default Header