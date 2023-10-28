import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";

function NavHero() {
    const [text] = useTypewriter({
        words: ["BTB", "BTC", "SASS"],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 90,
    });
    return (
        <div className={"bg-black w-full h-[1080px] flex justify-center flex-col items-center"}>
            <div className={"bg-black flex justify-around p-4 w-[100vw]  h-24  items-center "}>
                <div className={" text-[#00DF9A] text-3xl not-italic font-bold font-family: Roboto;"}>REACT.</div>
                <nav className={" hidden sm:flex gap-4 text-white text-[15px] not-italic font-normal font-family: Roboto "}>
                    <div>Home</div>
                    <div>Company</div>
                    <div>Resources</div>
                    <div>About</div>
                    <div>Contact</div>
                </nav>
                <div className={" w-10 h-10 flex justify-center items-center flex-col gap-[5px] rounded-[50%] sm:hidden "}>
                    <div className={"w-[25px] h-0.5 bg-white rounded-[1px]"}></div>
                    <div className={"w-[25px] h-0.5 bg-white rounded-[1px]"}></div>
                    <div className={"w-[25px] h-0.5 bg-white rounded-[1px]"}></div>
                </div>
            </div>
            <div
                className={" items-center flex h-[1080px] max-w-[800px] flex-col justify-center px-0 py-[340px];"}>
                <div
                    className={"flex flex-col items-center   py-2 text-[#00DF9A] text-center text-xs not-italic font-bold max-w-2xl font-family: Roboto sm:text-base"}>GROWING
                    WITH DATA ANALYTICS
                </div>
                <div className={" mb-5 text-white text-center  not-italic font-bold  font-family: Roboto text-5xl sm:text-7xl"}>
                    Grow with data.
                </div>
                <div className={"text-white text-center text-[47px] not-italic font-bold font-family: Roboto text-5xl sm:text-7xl"}>Fast,
                    flexible financing for
                    <span> {text}<Cursor/></span>
                </div>
                <div
                    className={"mb-5 text-gray-500 text-center not-italic font-bold leading-8 font-family: Roboto text-base sm:text-2xl"}>
                    Monitor your data analytics to increase revenue for BTB, BTC, & SASS
                    platforms.
                </div>
                <form
                    className={" cursor-pointer  bg-emerald-400 flex w-[200px] flex-col items-center pl-[59px] pr-[59px] py-3 rounded-md ;"}>
                    <input className={"cursor-pointer  text-center text-base not-italic font-medium color: #000 font-family: Roboto;"}
                           type={"button"} value={"Get Started"}/>
                </form>
            </div>
        </div>
    );
}

export default NavHero;