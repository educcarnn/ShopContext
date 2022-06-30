import { Link } from "react-router-dom"
import { Message } from "../TotalBuy/style"

function Sucess(){ 
    return (
        
        <Message>Parabéns compra realizada com sucesso, <Link to='/'>compre novamente</Link></Message>
    )
}
export default Sucess