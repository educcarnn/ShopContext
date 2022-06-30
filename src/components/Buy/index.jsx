import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../../store/Modules/cart/actions";
import { ItensLi } from "./style";
import { UlBuy } from "./style";

function Buy() {
  const products = useSelector(({products}) => products);
  const dispatch = useDispatch()
  const items = (products) => {

    return (
      <ItensLi key={products.id}>
        <span>{products.name}</span>
        <span>${products.price.toFixed(2)}</span>
        <img src={products.image} alt={products.image}></img>
        <button onClick={() => dispatch(add(products))} className='button'>Adicione ao carrinho</button>
      </ItensLi>
    );
  };

  return (
    <>
      <UlBuy>{products.map(items)}</UlBuy>
    </>
  );
}
export default Buy;
