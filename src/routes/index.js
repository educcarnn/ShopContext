import { Switch, BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart.jsx";

const Routes = () => {
    return (
   <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
        </Switch>
       </BrowserRouter>
    );
  };

  export default Routes;