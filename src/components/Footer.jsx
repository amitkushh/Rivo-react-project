import React from "react";
import x from "../assets/social/twitter.svg";
import facebook from "../assets/social/facebook.svg";
import instagram from "../assets/social/instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="bg-para flex flex-col justify-center items-start py-9 px-11">
        <div>
          <div className="mb-5">
            <span className="text-4xl font-semibold text-white">Rivo</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white">Social Media</span>
            <div className="flex justify-center items-center gap-6">
              <a href="#">
                <img src={facebook} alt="facebook" width={25} height={25} />
              </a>
              <a href="#">
                <img src={x} alt="twitter" width={25} height={25} />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" width={25} height={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-6 mt-6">
          <span className="uppercase text-white font-semibold text-xl">
            shop
          </span>
          <ul className="flex flex-col justify-center items-start text-white gap-2">
            <li>Products</li>
            <li>Pricing</li>
            <li>Overview</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <span className="uppercase text-white font-semibold text-xl">
            company
          </span>
          <ul className="flex flex-col justify-center items-start text-white gap-2">
            <li>About Us</li>
            <li>Contact</li>
            <li>News</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase text-white font-semibold text-xl">
            stay up to date
          </span>
          <div className="flex justify-center items-center">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your email"
              className="border border-email py-2 max-w-[200px] pl-2 placeholder:text-white bg-transparent outline-none text-white"
            />
            <button className="uppercase bg-email py-2 px-4">submit</button>
          </div>
        </div>
      </div>

      {/* footer bar */}

      <div class="bg-para text-email p-4 flex items-center">
        <div class="flex-1 border-t border-green-400"></div>
        <div class="flex space-x-4 pl-4 text-sm">
          <a href="#" class="hover:underline">
            Terms
          </a>
          <a href="#" class="hover:underline">
            Privacy
          </a>
          <a href="#" class="hover:underline">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
