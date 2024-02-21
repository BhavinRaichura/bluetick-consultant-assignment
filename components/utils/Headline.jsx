import React from "react";

const Headline = ({ children }) => {
  return (
    <h1 className=" text-5xl max-lg:4xl max-md:3xl font-bold my-20 max-md:my-12">
      {children}
    </h1>
  );
};

export default Headline;
