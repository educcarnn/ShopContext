
import { createContext, useState} from "react";
import { toast } from "react-toastify";

export const CartInContext = createContext()

export const CartProvider = ({children}) => {
    const[infosCart, setInfosCart] = useState([])

    const add = (elem) => {
        const findId = infosCart.find((param) => param.id === elem.id);
        if(findId) {
            toast.error('Produto já está adicionado no carrinho')
        }
        else {
            toast.success('Produto adicionado com sucesso')
            setInfosCart([...infosCart, elem])
        }   
    }

    const remove = (elem) => {
        toast.success('Produto removido com sucesso')
        const listNew = infosCart.filter((product) => product.id !== elem.id);
        setInfosCart(listNew)
    }
    
    return(
        <CartInContext.Provider value={{add, remove, infosCart}}>
            {children}
        </CartInContext.Provider>
    )
}



