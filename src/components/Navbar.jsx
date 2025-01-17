import React, { useState } from "react";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  return (
    <header className="flex justify-between items-center bg-top py-5 md:px-12 lg:px-36">
      <div className="pl-11 md:px-0 lg:px-0">
        <Link to="/">
          <span className="text-4xl font-semibold text-para">Rivo</span>
        </Link>
      </div>
      <nav className="hidden md:block lg:block">
        <ul className="uppercase flex flex-col justify-center items-center gap-4 text-para  md:flex-row  lg:flex-row lg:ml-40">
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
        <div>
          <button className="uppercase text-para border border-para py-2 px-6">
            login
          </button>
        </div>

        <div className="pr-6 md:pr-0 lg:pr-0">
          <CiMenuFries
            size={25}
            className="text-para cursor-pointer md:hidden lg:hidden"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
