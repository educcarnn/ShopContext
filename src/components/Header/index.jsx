import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { HeaderStyle } from "./style";

function Header(){
    let history = useHistory();

    function handleClick() {
      history.push("/cart");
    }

    const carts = useSelector(({cart}) => cart);

    return (
        <HeaderStyle>
                <h2 className="name">Kenzie Shop</h2>
                 <span>Quantidade: {carts.length}</span>
                <button onClick={handleClick} className="buttonMove">Ir para carrinho</button>
        </HeaderStyle>
    
    )
}
export default Header