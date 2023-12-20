import React from "react";
import content from "@/app/data/contect.json";
import { FocusProps } from "@/app/types";
import Link from "next/link";

const FocusPage = () => {
  const { focus }: { focus: FocusProps[] } = content;
  return (
    <div className="mt-10 ring-1 ring-[#DCB20B] w-[1280px]">
      <div className="absolute px-5 -translate-y-4">
        <p className="text-[#DCB20B] bg-white text-lg font-bold tracking-wide ring-1 ring-[#DCB20B] py-1 px-5">
          Focus
          <span className="text-black px-2 bg-[#fdeeae]">?</span>
        </p>
      </div>
      <div className="m-5 p-16">
        <div className="grid grid-cols-2 gap-4">
          {focus.map((themas) => (
            <div className="border border-[#e49f56] p-1">
              <p className="text-center text-[#F07D00] font-bold py-3">
                {themas.title}
              </p>
              <div className="flex">
                <div className="">
                  <Link href={themas.url}>
                    <img src={themas.image} />
                  </Link>
                  <p className="text-center text-sm font-Bat_bold">
                    {themas.content}
                  </p>
                </div>
                <p className="pl-2 text-sm tracking-wide font-BatThin">
                  {themas.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusPage;
