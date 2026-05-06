import React from "react";
import logo from "../../assets/icon/Logo-Black.svg";
import account from "../../assets/icon/Account.svg";
import cart from "../../assets/icon/Cart.svg";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-200 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo} // <-- put your logo path here
          alt="logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8 text-sm font-mediu">
        <a href="/products" className="hover:text-gray-600 ">
          Home
        </a>

        <div className="relative group cursor-pointer">
          <span className="flex items-center gap-1">
            Categories
            <span>▾</span>
          </span>

          {/* Dropdown (optional) */}
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Category 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Category 2
            </a>
          </div>
        </div>

        <a href="#" className="hover:text-gray-600">
          Contact Us
        </a>
        <a href="#" className="hover:text-gray-600">
          Blog
        </a>
      </nav>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* User Icon */}
        <img
          src={account} // <-- user icon
          alt="user"
          className="h-6 w-6 cursor-pointer"
        />

        {/* Cart Icon */}
        <img
          src={cart} // <-- cart icon
          alt="cart"
          className="h-6 w-6 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
