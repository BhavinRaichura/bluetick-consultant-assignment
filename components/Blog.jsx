import React from "react";
import Card from "./utils/Card";
import blogData from "@/data/blogData";
import Headline from "./utils/Headline";

const Blogs = () => {
  //console.log(blogData)
  return (
    <div id="blog" className="bg-white text-black">
      <Headline>
        <span className="text-gray-700">Explore and enjoy the blogs</span>
      </Headline>
      <div className="grid grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  gap-8 justify-center">
        {blogData.map((data, key) => {
          console.log(data);
          return (
            <Card
              key={key}
              title={data.title}
              desc={data.description}
              url={data.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
