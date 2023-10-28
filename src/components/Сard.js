import React from "react";
import messageUser from "../assets/messageUser.svg";
import doubleUser from "../assets/doubleUser.svg";
import tripleUser from "../assets/tripleUser.svg";

function Card() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl p-[16px] mt-[16px] mb-[16px] rounded-lg flex flex-col hover:scale-105 duration-300">
          <img
            src={messageUser}
            alt="Mes-User"
            className="w-[80px] mx-auto mt-[-5rem] h-[90px] "
          />
          <h2 className="text-[24px] font-bold mx-auto py-[32px]">
            Single User
          </h2>
          <p className="mx-auto text-[34px] font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-[8px] border-b mt-[32px] mx-[32px]">
              500 GB Storage
            </p>
            <p className="py-[8px] border-b mx-[32px]">1 Granted User</p>
            <p className="py-[8px] border-b mx-[32px]">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00DF9A] rounded-[6px] mx-auto my-[24px] py-[12px] px-[67px] font-medium">
            Start Trial
          </button>
        </div>
        <div className="w-full bg-[#F3F4F6] shadow-xl p-[16px] md:my-[0px] my-[80px]  rounded-lg flex flex-col hover:scale-105 duration-300">
          <img
            src={doubleUser}
            alt="Mes-User"
            className="w-[80px]  mx-auto mt-[-5rem] h-[110px] "
          />
          <h2 className="text-[24px] font-bold mx-auto py-[32px]">
            Single User
          </h2>
          <p className="mx-auto text-[34px] font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-[8px] border-b mt-[32px] mx-[32px]">
              500 GB Storage
            </p>
            <p className="py-[8px] border-b mx-[32px]">1 Granted User</p>
            <p className="py-[8px] border-b mx-[32px]">Send up to 2 GB</p>
          </div>
          <button className="text-[#00DF9A] bg-black rounded-[6px] mx-auto my-[24px] py-[12px] px-[67px] font-medium">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl p-[16px] mt-[16px] mb-[16px] rounded-lg flex flex-col hover:scale-105 duration-300">
          <img
            src={tripleUser}
            alt="Mes-User"
            className="w-[80px]  mx-auto mt-[-5rem] h-[100px] "
          />
          <h2 className="text-[24px] font-bold mx-auto py-[32px]">
            Single User
          </h2>
          <p className="mx-auto text-[34px] font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-[8px] border-b mt-[32px] mx-[32px]">
              500 GB Storage
            </p>
            <p className="py-[8px] border-b mx-[32px]">1 Granted User</p>
            <p className="py-[8px] border-b mx-[32px]">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00DF9A] rounded-[6px] mx-auto my-[24px] py-[12px] px-[67px] font-medium">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
