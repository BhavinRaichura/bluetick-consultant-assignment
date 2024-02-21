import React from "react";

const Headline = ({ children }) => {
  return (
    <h1 className=" text-4xl max-lg:3xl max-md:2xl max-sm:2xl font-bold my-20 max-md:my-12">
      {children}
    </h1>
  );
};

export default Headline;
