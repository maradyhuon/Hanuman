import React from "react";
import style from "@/app/style/style.module.css";

const Input = () => {
  return (
    <>
      <div className="w-full ">
        <form className="rounded text-center pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input className={style.button} placeholder="Username ..." />
          </div>
          <div className="mb-6">
            <input className={style.button} placeholder="Password ..." />
          </div>
          <div className="flex items-center justify-center">
            <button className="btn" type="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;
