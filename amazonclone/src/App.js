import './App.css';
import Navbar from './Pages/Header'
import Body from './Pages/Body'
import Cart from './Pages/Cart'
import ReactNotifications from 'react-notifications-component';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './Pages/ProductsCont'
function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
       

         <Route path="/cart">
            <Navbar/>
            <Cart/>
          </Route>

          <Route path="/">
                <Navbar/>
               <Body/>
              <Products/>
            </Route>
       </Switch>
       </BrowserRouter>
       </>
  );
}

export default App;
