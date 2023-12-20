import Link from "next/link";
import React from "react";
import content from "@/app/data/contect.json";
import { ArchiveProps } from "@/app/types";

const SinglePage = () => {
  const { archive }: { archive: ArchiveProps[] } = content;
  return (
    <div className="mt-10 ring-1 ring-[#DCB20B] w-[1280px]">
      <div className="absolute px-5 -translate-y-4">
        <p className="text-[#DCB20B] bg-white text-lg font-bold tracking-wide ring-1 ring-[#DCB20B] py-1 px-5">
          Focus
          <span className="text-black px-2 bg-[#fdeeae]">?</span>
        </p>
      </div>
      <div className="mx-auto max-w-[80%]">
        <div className="">
          <h1 className="py-3 flex justify-center text-3xl">Title</h1>
          <div className="ring-1 ring-[#DCB20B] p-3 my-3">
            <div className="flex gap-x-2">
              <div className="">
                <img src="/images/themas/degaulle.jpg" />
                <p className="text-center">5 [archives]</p>
              </div>
              <div className="">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta aliquam soluta doloribus sapiente sit perferendis at
                  vitae assumenda, provident explicabo incidunt, cupiditate est
                  voluptas repellat dignissimos voluptate rem deleniti impedit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="my-5 antialiased font-sans">
        <div className="mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="my-2 flex sm:flex-row flex-col">
              <div className="flex flex-row mb-1 sm:mb-0">
                <div className="relative">
                  <select className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>10</option>
                    <option>30</option>
                    <option>50</option>
                    <option>All</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <select className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block relative">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  placeholder="Search"
                  className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="min-w-full rounded-lg">
                <table className="min-w-full leading-normal border border-slate-200">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-r border-gray-400 bg-[#3C81B8] text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                        Image
                      </th>
                      <th className="px-5 py-3 border-r border-gray-400 bg-[#3C81B8] text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-5 py-3 border-r border-gray-400 bg-[#3C81B8] text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                        Versions
                      </th>
                      <th className="px-5 py-3 border-r border-gray-400 bg-[#3C81B8] text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-5 py-3 border-r border-gray-400 bg-[#3C81B8] text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                        Collection
                      </th>
                      <th className="px-5 py-3 border-r border-gray-400 bg-[#3C81B8] text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                        Archive Reference
                      </th>
                      <th className="px-5 py-3 border-r border-gray-400 bg-[#3C81B8] text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                        Duration
                      </th>
                      <th className="px-5 py-3 border-r border-gray-400 bg-[#3C81B8] text-center text-xs font-semibold text-gray-200 uppercase tracking-wider">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {archive.map((archive) => (
                      <tr className="hover:bg-gray-100">
                        <td className="px-5 py-5 text-sm border-b border-r">
                          <Link href={"/sections/detail"} target="blank">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src={archive.image}
                                alt=""
                              />
                            </div>
                          </Link>
                        </td>
                        <td className="align-middle border-b border-r">
                          <div className="ml-3">
                            <Link
                              href={"/sections/detail"}
                              target="blank"
                              className="text-gray-900 whitespace-no-wrap hover:text-[#e1aa5e] transition-all text-sm"
                            >
                              {archive.title}
                            </Link>
                          </div>
                        </td>
                        <td className="align-middle border-b border-r px-5 py-5 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {archive.version}
                          </p>
                        </td>
                        <td className="align-middle border-b border-r px-5 py-5 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {archive.date}
                          </p>
                        </td>
                        <td className="align-middle border-b border-r px-5 py-5 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {archive.collections}
                          </p>
                        </td>
                        <td className="align-middle border-b border-r px-5 py-5 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {archive.reference}
                          </p>
                        </td>
                        <td className="align-middle border-b border-r px-5 py-5 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {archive.duration}
                          </p>
                        </td>
                        <td className="align-middle border-b px-5 py-5 text-sm">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src={archive.type}
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing 1 to 4 of 50 Entries
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
