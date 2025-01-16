import React from "react";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center bg-top px-20 py-5">
      <div className="">
        <Link to="/">
          <span className="text-4xl font-semibold">Rivo</span>
        </Link>
      </div>
      <nav>
        <ul className="uppercase flex justify-center items-center gap-4 ">
          <Link to="/">
            <li>home</li>
          </Link>
          <Link to="/shop">
            <li>shop</li>
          </Link>
          <Link to="/features">
            <li>features</li>
          </Link>
          <Link to="/contact">
            <li>contact</li>
          </Link>
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-4">
        <div>
          <img src={cart} alt="cart" width={20} height={20} />
        </div>
        <div>
          <button className="uppercase">login</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
