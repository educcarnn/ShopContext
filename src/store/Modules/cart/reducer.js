import { ADD, REMOVE } from "./types"
import { toast } from "react-toastify";

const cartReducer = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case ADD: 
            const {product} = action
            const findId = state.find((param) => param.id === product.id);
            if(findId) {
                toast.error('Produto já está adicionado no carrinho')
            }
            else {
                toast.success('Produto adicionado com sucesso')
                return [...state, product]
            }   

            return state
           
        case REMOVE: 
        const {id} = action
        toast.success('Produto removido com sucesso')
        const listNew = state.filter((product) => product.id !== id);
        console.log(state)
        return listNew

        default:
        return state
    }
}

export default cartReducer