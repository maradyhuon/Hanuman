import React from "react";
import style from "@/app/style/style.module.css";

const Search = () => {
  return (
    <div className="mt-10 ring-1 ring-[#DCB20B] w-[1280px]">
      <div className="absolute px-5 -translate-y-4">
        <p className="text-[#DCB20B] bg-white text-lg font-bold tracking-wide ring-1 ring-[#DCB20B]">
          Advanced Search
          <span className="text-black px-2 bg-[#fdeeae]">?</span>
        </p>
      </div>
      <table className="relative flex flex-col gap-y-5 py-10 px-5">
        <tbody>
          <tr>
            <td>
              <label className={style.label}>Your Query</label>
            </td>
            <td>
              <input className="border border-[#DCB20B] focus:outline-none outline-none px-3 py-2" />
            </td>
          </tr>

          <tr>
            <td>
              <label className={style.label}>Collections</label>
            </td>
            <td>
              <select className="border border-[#DCB20B] focus:outline-none px-3 py-2">
                <option>---</option>
                <option>Lorem, ipsum dolor.</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label className={style.label}>Types</label>
            </td>
            <td>
              <select className="border border-[#DCB20B] focus:outline-none px-3 py-2">
                <option>---</option>
                <option>Lorem, ipsum dolor.</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label className={style.label}>Media</label>
            </td>
            <td>
              <select className="border border-[#DCB20B] focus:outline-none px-3 py-2">
                <option>---</option>
                <option>Lorem, ipsum dolor.</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label className={style.label}>Contents</label>
            </td>
            <td>
              <select className="border border-[#DCB20B] focus:outline-none px-3 py-2">
                <option>---</option>
                <option>Lorem, ipsum dolor.</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Search;
