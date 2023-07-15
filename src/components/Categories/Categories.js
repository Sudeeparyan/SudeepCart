import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";
const Categories = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };

  return (
    <>
      <div className="collapse navbar-collapse" id="menu1">
        <ul className="nav navbar-nav greybg">
          <li>
            <NavLink data-testid='bestSellers' style={navLinkStyle} to="/bestSellers">
              Best Seller
            </NavLink>
          </li>
          
          <li>
            <NavLink data-testid='computerAccresseries' style={navLinkStyle} to="/computerAccresseries">
              Computer Accresseries
            </NavLink>
          </li>
          <li>
            <NavLink data-testid='Books' style={navLinkStyle} to='/Books'>
              Books
            </NavLink>
          </li>
          <li>
            <NavLink data-testid='groceries' style={navLinkStyle} to="/groceries">
              Groceries
            </NavLink>
          </li>
          <li>
            <NavLink data-testid='Mobiles' style={navLinkStyle} to="/Mobiles">
              Mobiles
            </NavLink>
          </li>
          <li>
            <NavLink data-testid='Fashion' style={navLinkStyle} to="/Fashion">
              Fashion
            </NavLink>
          </li>
          <li>
            <NavLink data-testid='Electronics' style={navLinkStyle} to="/Electronics">
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink data-testid='RoboElements' style={navLinkStyle} to="/RoboElements">
              Robo Elements
            </NavLink>
          </li>
          <li>
            <NavLink data-testid='Games' style={navLinkStyle} to="/Games">
              Games
            </NavLink>
          </li>
          <li>
            <NavLink data-testid='Subscrption' style={navLinkStyle} to="/Subscrption">
              Subscrption
            </NavLink>
          </li>
          <li>
            <NavLink data-testid='CustomerSerice' style={navLinkStyle} to="/CustomerSerice">
              Customer Serice
            </NavLink>
          </li>
          {/* <li>
            <NavLink style={navLinkStyle} to="/S-CartPay">
              S-cart Pay
            </NavLink>
          </li> */}
          <li>
            <NavLink data-testid='More' style={navLinkStyle} to="/More">
              More
            </NavLink>
          </li>
          
        </ul>
      </div>
      {/* <Routes>
            <Route path='/bestSeller' element={<BestSeller/>}>Best Seller</Route>
          </Routes> */}
    </>
  );
};
export default Categories;


