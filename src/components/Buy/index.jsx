import { ItensLi } from "./style";
import { UlBuy } from "./style";
import { ProductsInContext } from "../../providers/Products";
import { useContext } from "react";
import { CartInContext } from "../../providers/Cart";

function Buy() {
  const {initialProducts} = useContext(ProductsInContext)
  const {add} = useContext(CartInContext)

  const items = (products) => {
    return (
      <ItensLi key={products.id}>
        <span>{products.name}</span>
        <span>${products.price.toFixed(2)}</span>
        <img src={products.image} alt={products.image}></img>
        <button onClick={() => add(products)} className='button'>Adicione ao carrinho</button>
      </ItensLi>
    );
  };

  return (
    <>
      <UlBuy>{initialProducts.map(items)}</UlBuy>
    </>
  );
}
export default Buy;
