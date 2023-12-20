import React from "react";
import Link from "next/link";
import header from "@/app/data/Header.json";
import { HeaderProps, SearchDropProps } from "../types";

const Header = () => {
  const {
    headers,
    search_dropdown,
  }: { headers: HeaderProps[]; search_dropdown: SearchDropProps[] } = header;
  return (
    <header className="head">
      {/* <div className="head__sidebar">
        <SideBar />
      </div> */}
      <nav className="bg-gradient-to-b from-[#ECD685] to-[#DCB20B]">
        <ul className="flex justify-center gap-2">
          {headers.map((item) => (
            <li className="relative float-left text-[#3C81B8] text-lg font-bold p-2">
              <Link href={item.url}>{item.title}</Link>
              {/* {search_dropdown.map((dropdown) => (
                <ul className="head__container__nav__link_subnav">
                  <li className="head__container__nav__link_subnav_link">
                    <Link href={dropdown.url}>{dropdown.title}</Link>
                  </li>
                </ul>
              ))} */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
