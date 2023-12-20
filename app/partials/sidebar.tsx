import React from "react";
import Input from "../components/header/input";
import style from "@/app/style/style.module.css";
const SideBar = () => {
  return (
    <div className="bg-fleur h-screen -translate-y-10 hidden 2xl:block">
      <div className="bg-[#5383B7] rounded-md ring-2 ring-white drop-shadow-xl max-w-[190px]">
        <div className="flex flex-col justify-center place-items-center">
          <div className="py-1">
            <img src="/images/Header/logo.gif" />
          </div>
          <div className="wrapper">
            <svg className={style.svg}>
              <text
                x="50%"
                y="50%"
                dy=".20em"
                text-anchor="middle"
                className={style.text}
              >
                Hanuman
              </text>
            </svg>
          </div>
          <p className="py-3 text-sm text-white">Versions 4.0</p>
        </div>
        <div className="place-content-center">
          <Input />
        </div>
      </div>
      <div></div>
      <style>{`
    
  `}</style>
      ;
    </div>
  );
};

export default SideBar;
