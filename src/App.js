import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Announcement from "./components/Announcement/Announcement";
import NavBar from "./components/NavBar/NavBar";
import BestSeller from "./components/Categories/BestSeller";
import ComputerAccresseries from "./components/Categories/ComputerAccresseries";
import SCartPay from "./components/Categories/SCartPay";
import Groceries from "./components/Categories/Groceries";
import Mobiles from "./components/Categories/Mobiles";
import Fashion from "./components/Categories/Fashion";
import Electronics from "./components/Categories/Electronics";
import RoboElements from "./components/Categories/RoboElements";
import Subscrption from "./components/Categories/Subscrption";
import CustomerSerice from "./components/Categories/CustomerSerice";
import More from "./components/Categories/More";
import Categories from "./components/Categories/Categories";
import Games from "./components/Categories/Games";
// import Product from './components/Product/Product';
import Nomatch from "./Nomatch";
import Cart from "./pages/Cart/Cart";
import { useEffect, useState } from "react";
import Product1 from "./components/Product/Product1";
import Product2 from "./components/Product/Product2";
import Product3 from "./components/Product/Product3";
import Product4 from "./components/Product/Product4";
import Product5 from "./components/Product/Product5";
import Product6 from "./components/Product/Product6";

import Books from "./components/Categories/Books";
import "./index.css";
import WeatherApp from "./pages/More/WeatherApp";
import Planner from "./pages/More/Planner";
import Movies from "./pages/More/Movies";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { AuthProvider, useAuth } from "./auth";
import { RequireAuth } from "./RequireAuth";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search/Search";
import Payment from "./pages/Payment/Payment";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currCategory, setcurrCategory] = useState("fruits");
  const navigate = useNavigate();
  const auth = useAuth();
  const [warning, setWarning] = useState(false);
  const [cart, setCart] = useState(() => {
    const localValue = localStorage.getItem("CART-ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("CART-ITEMS", JSON.stringify(cart));
  }, [cart]);

  const handleClick = (item) => {
    console.log("yes");
    if (auth.user !== null) {
      let isPresent = false;

      cart.forEach((product) => {
        if (item.id === product.id) isPresent = true;
      });
      if (isPresent) {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000);
        return;
      }
      setCart([...cart, item]);
    } else {
      navigate("/login");
    }
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    if (tempArr[ind].amount === undefined) tempArr[ind].amount = d;
    else tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div className="App">
      <Announcement />
      <NavBar size={cart.length} />
      <Categories />
      {/* <Search handleClick={handleClick} /> */}
      <Routes>
        <Route path="*" element={<Nomatch />}></Route>
        <Route path="/" element={<Home handleClick={handleClick} />}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/bestSellers"
          element={<BestSeller handleClick={handleClick} />}
        ></Route>
        <Route
          path="/computerAccresseries"
          element={<ComputerAccresseries handleClick={handleClick} />}
        ></Route>
        <Route path="/S-CartPay" element={<SCartPay />}></Route>
        <Route
          path="/Mobiles"
          element={<Mobiles handleClick={handleClick} />}
        ></Route>
        <Route
          path="/Fashion"
          element={<Fashion handleClick={handleClick} />}
        ></Route>
        <Route
          path="/Electronics"
          element={<Electronics handleClick={handleClick} />}
        ></Route>
        <Route path="/RoboElements" element={<RoboElements />}></Route>
        <Route path="/Subscrption" element={<Subscrption />}></Route>
        <Route
          path="/books"
          element={<Books handleClick={handleClick} />}
        ></Route>
        <Route
          path="/groceries"
          element={
            <Groceries
              cartItems={cartItems}
              setCartItems={setCartItems}
              currCategory={currCategory}
              setcurrCategory={setcurrCategory}
              // handleClick={handleClick}
            />
          }
        ></Route>
        <Route path="/Games" element={<Games />}></Route>
        <Route path="/CustomerSerice" element={<CustomerSerice />}></Route>

        <Route
          path="/product/1"
          element={<Product1 handleClick={handleClick} />}
        ></Route>
        <Route
          path="/product/2"
          element={<Product2 handleClick={handleClick} />}
        ></Route>
        <Route
          path="/product/3"
          element={<Product3 handleClick={handleClick} />}
        ></Route>
        <Route
          path="/product/4"
          element={<Product4 handleClick={handleClick} />}
        ></Route>
        <Route
          path="/product/5"
          element={<Product5 handleClick={handleClick} />}
        ></Route>
        <Route
          path="/product/6"
          element={<Product6 handleClick={handleClick} />}
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              currCategory={currCategory}
              setcurrCategory={setcurrCategory}
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          }
        ></Route>

        <Route path="/More" element={<More />}>
          <Route index element={<WeatherApp />} />
          <Route path="weatherapp" element={<WeatherApp />}></Route>
          <Route path="planner" element={<Planner />}></Route>
          <Route path="movies" element={<Movies/>} ></Route>
        </Route>
      </Routes>
      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
      <Chatbot />
    </div>
  );
}

export default App;
