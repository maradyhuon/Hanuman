import Link from "next/link";
import React from "react";
import content from "@/app/data/contect.json";
import { ThemasProps } from "@/app/types";

const Themas = () => {
  const { themas }: { themas: ThemasProps[] } = content;
  return (
    <fieldset className="my-5 boder px-2">
      <legend className="border p-1">Themas</legend>
      <div className="my-5">
        <div className="grid grid-cols-2 gap-4">
          {themas.map((themas) => (
            <div className="border border-[#e49f56] p-1">
              <p className="text-center text-[#F07D00] font-bold py-3">
                {themas.title}
              </p>
              <div className="flex">
                <div className="">
                  <Link href={themas.url}>
                    <img src={themas.image} />
                  </Link>
                  <p className="text-center text-sm">{themas.content}</p>
                </div>
                <p className="pl-2 text-sm tracking-wide">
                  {themas.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
};

export default Themas;
