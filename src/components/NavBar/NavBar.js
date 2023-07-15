import React from "react";
import logo from "./img.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth";

function NavBar({ size }) {
  const auth = useAuth();
  return (
    <div>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            {/* <li class="active"><a href="/">S-cart</a></li> */}
            <a data-testid="scart" class="navbar-brand" href="/">
              S-cart
            </a>
            <img src={logo} href="/" height="50px" width="200px" alt="S-cart" />
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
              <a data-testid="home" href="/">Home</a>
            </li>
            {/* <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li> */}
          </ul>
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" />
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <Link to="cart">
                {" "}
                Cart <span className="fas fa-cart-plus"></span> {size}
              </Link>
            </li>
            <li>
              <NavLink to="/profile">
                Profile <span class="glyphicon glyphicon-user"></span>
              </NavLink>
            </li>
            <li>
              {!auth.user && (
                <NavLink to="/login" class="glyphicon glyphicon-log-in">
                  Login <span class="glyphicon glyphicon-log-in"></span>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
