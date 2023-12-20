import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Details = ({ param }: { param: { slug: string } }) => {
  console.log(param);
  return (
    <div className="my-5">
      <p className="text-3xl tracking-wide text-center">Title</p>
      <div className="lg:flex">
        <div className="max-w-[1000px]">
          <table>
            <tbody>
              <tr>
                <td className="w-44 pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Archive Reference :
                  </p>
                </td>
                <td className="pb-1">
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">
                    DFD_VI_006482
                  </p>
                </td>
              </tr>
              <tr>
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Collection :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">
                    Documentaries​ - Various collections
                  </p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Title :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">
                    Wandering souls
                  </p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Content :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">
                    Documentary film
                  </p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Sound :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">With sound</p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    original Version :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">
                    French , English , Khmer
                  </p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Dubbing Versions :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]"></p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Sub-title Versions :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">English</p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Color :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">Color</p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Duration :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">01:14:35</p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Product Date :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">2019</p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Credits :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">
                    Editing technician : Vanna, Seang Producer : Margaret,
                    Murphy ; Aviva, Ziegler Director : Aviva, Ziegler
                  </p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Summary :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9] text-sm">
                    Wandering Souls follows the mounting of a stage production,
                    Bangsokol: A Requiem for Cambodia, culminating in its
                    premiere performance at the Melbourne Festival. It is a
                    first-time collaboration between 2 childhood survivors of
                    Pol Pot, Cambodia’s composer Him Sophy and renowned
                    filmmaker Rithy Pahn, in memory of nearly 2 million
                    Cambodians who died during the Khmer Rouge regime. The
                    film’s parallel narrative tells of survival of those
                    involved in the creation of the work and shows the powerful
                    will of the Cambodians to reclaim an artistic heritage that
                    disappeared during the years of terror and destruction. With
                    a libretto based on Bangsokol, the Khmer Buddhist ritual
                    that allows the dead to move onto the next life, Him Sophy’s
                    score is a unique combination of traditional Khmer
                    instruments and vocalists together with Western chamber
                    music and chorus. The film follows an international team
                    working tirelessly with the Cambodian creators & musicians
                    to pull the stage production together.
                  </p>
                </td>
              </tr>

              <tr className="">
                <td className="pb-1">
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Keywords :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">
                    Keyword : genocide ; extermination ; music ; song ; civil
                    war ; war
                  </p>
                </td>
              </tr>

              <tr className="">
                <td>
                  <p className="bg-[#4889B9] p-2 rounded text-white/80">
                    Document Joined :
                  </p>
                </td>
                <td>
                  <p className="p-2 mx-2 ring-1 ring-[#4889B9]">
                    [IMG] DFD_VI_006482 - DFD_VI_006482 (1)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-fleur">
          <div className="ring-1 ring-[#4889B9] p-1">
            <div className="flex justify-center">
              <img src="/images/archive/DFD_VI_006520.jpg" />
            </div>
            <div className="my-5 text-center">
              <Link
                href={"/sections/shows"}
                className="btn gradient sm:py-2 sm:px-4 lg:py-2 px-3"
              >
                Viewing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
