import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col place-items-center mt-8">
      <div className="w-[384px] flex flex-col gap-2">
        <div>
          <img src="/images/hero/home1.jpg" />
        </div>
        <div>
          <img src="/images/hero/home2.jpg" />
        </div>
        <div>
          <img src="/images/hero/home3.jpg" />
        </div>
        <div className="text-sm tracking-wide flex flex-col gap-3">
          <p>
            The Hanuman database contentsmore than three thousand audiovisual
            archives, old and recent. Films, photographs, TV news casts, radio
            programs cover a range of topics: society, culture, history,
            traditions, customs, art and the environment...
          </p>
          <p>
            In order to respect the agreements with the owners of the archives,
            the database can only be consulted at the consultation area of the
            center.
          </p>
          <p>
            {" "}
            A research analyst team is available to help you in your search.
          </p>
          <p>
            {" "}
            We invite you to contribute to improve the information in the
            archives descriptions.
          </p>
          <p>
            {" "}
            If while watching and or listening, you recognize a person or a
            place not mentioned in the description, please don't hesitate to let
            us know.
          </p>
          <p>Enjoy your visit!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
