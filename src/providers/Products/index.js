import { createContext, useState } from "react";
import iPhone from "../../imgs/iphone.jpeg"
import Kindle from "../../imgs/kindle.jpeg"
import Echo from "../../imgs/echo.jpg"


export const ProductsInContext = createContext()

export const ProductsProvider = ({children}) => {
    const [initialProducts, setInitialProducts] = useState(
        [
            {name: "Echo Dot", price: 279.00, id: 1, image: Echo},
            {name: "Kindle Paperwhite", price: 499.00, id: 2, image: Kindle},
            {name: "iPhone", price: 500.00, id: 3, image: iPhone}
        ]
    )
    
return (
    <ProductsInContext.Provider value={{initialProducts}}>
        {children}
    </ProductsInContext.Provider>
)

}