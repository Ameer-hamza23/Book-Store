import React from "react";
import Card from "./Card";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 gap-5">
        <div className="items-center justify-center text-center mt-12">
          <h1 className="text-xl">
            we're delighted to have you{" "}
            <span className="text-pink-500 text-xl">here! ) </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            voluptate placeat nostrum maxime sunt, nesciunt illum, cum
            voluptatum cupiditate at inventore labore, impedit unde? Dolorem
            voluptas nam similique atque aliquam!
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-16">
          {Array.from({ length: 11 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
