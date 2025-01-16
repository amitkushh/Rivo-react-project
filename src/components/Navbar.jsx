import React from "react";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center bg-top py-5">
      <div className="pl-11">
        <Link to="/">
          <span className="text-4xl font-semibold text-para">Rivo</span>
        </Link>
      </div>
      <nav className="hidden">
        <ul className="uppercase flex justify-center items-center gap-4 text-para">
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
      <div className="flex justify-center items-center gap-6">
        <div>
          <img src={cart} alt="cart" width={20} height={20} />
        </div>
        <div className="pr-11">
          <button className="uppercase text-para border border-para py-2 px-6">
            login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
