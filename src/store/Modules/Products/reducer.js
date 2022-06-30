import iPhone from "../../../imgs/iphone.jpeg"
import Kindle from "../../../imgs/kindle.jpeg"
import Echo from "../../../imgs/echo.jpg"

const initialProducts = [
    {name: "Echo Dot", price: 279.00, id: 1, image: Echo},
    {name: "Kindle Paperwhite", price: 499.00, id: 2, image: Kindle},
    {name: "iPhone", price: 500.00, id: 3, image: iPhone}
]

const productsReducer = (state = initialProducts) => {
    return state   
  };
  
export default productsReducer;