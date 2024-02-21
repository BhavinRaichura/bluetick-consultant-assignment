import React from "react";
import servicesData from "@/data/servicesData";
import ServiceCard from "./utils/ServiceCard";
import Headline from "./utils/Headline";

const Products = () => {
  return (
    <div id="product" className="text-black my-20">
      <Headline>
        <span className="text-blue-700">What we offer</span>
      </Headline>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 ">
        {servicesData.map((data, key) => (
          <ServiceCard key={key} title={data.title} desc={data.description} />
        ))}
      </div>
    </div>
  );
};

export default Products;
