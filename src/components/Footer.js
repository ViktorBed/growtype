import React from "react";
import Git from "../assets/Git.png";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/twitter.png";
import Unknown from "../assets/unkonwn.png";
import Instagram from "../assets/Instagram.png";

function Footer() {
  return (
    <div className="bg-black w-full">
      <div className="max-w-[1240px] bg-black w-full py-16 px-4 mx-auto grid lg:grid-cols-3 gap-8 text-grey">
        <div className="text-white">
          <h1 className="w-full text-[30px] text-[#00DF9A] font-bold">
            REACT.
          </h1>
          <p className="py-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur
            sunt repudiandae possimus voluptates doloremque deserunt, qui
            sapiente inventore quis. Sequi eligendi assumenda doloremque optio
            quos dolorum eaque officiis odio?
          </p>

          <div className="flex">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Git} alt="" />
            <img src={Unknown} alt="" />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div className="text-white text-[15px]">
            <p>Solutions</p>
            <ul>
              <li className="py-[8px]">Analytics</li>
              <li className="py-[8px]">Marketing</li>
              <li className="py-[8px]">Commerce</li>
              <li className="py-[8px]">Insights</li>
            </ul>
          </div>
          <div className="text-white text-[15px]">
            <p>Support</p>
            <ul>
              <li className="py-[8px]">Pricing</li>
              <li className="py-[8px]">Documentation</li>
              <li className="py-[8px]">Guides</li>
              <li className="py-[8px]">API Status</li>
            </ul>
          </div>
          <div className="text-white text-[15px]">
            <p>Company</p>
            <ul>
              <li className="py-[8px]">About</li>
              <li className="py-[8px]">Blog</li>
              <li className="py-[8px]">Jobs</li>
              <li className="py-[8px]">Press</li>
              <li className="py-[8px]">Careers</li>
            </ul>
          </div>
          <div className="text-white text-[15px]">
            <p>Legal</p>
            <ul>
              <li className="py-[8px]">Claim</li>
              <li className="py-[8px]">Police</li>
              <li className="py-[8px]">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
