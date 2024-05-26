import React from "react";

const Categories = () => {
  return (
    <div className="max-w-screen-2xl container  xl:px-24 px-4  border-r-8  rounded-3xl py-16">
      <div className=" flex flex-col items-center">
        <p className="text-[#7a1f12] uppercase tracking-wide font-medium text-lg">
          Customer Favourites
        </p>
        <h2 className="text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
          Popular Categories
        </h2>
      </div>
      <div className="flex flex-row gap-8 justify-around items-center flex-wrap mt-12  ">
        <div className=" shadow-lg rounded-md bg-white  cursor-pointer hover:translate-y-4 duration-300 transition-all">
          <img src="burger.jpg" className=" p-6 w-64 h-64  rounded-full" />
          <div className="flex flex-col items-center">
            <p>Breakfast</p>
            <p>(12 breakfast)</p>
          </div>
        </div>
        <div className=" shadow-lg rounded-md bg-white  cursor-pointer hover:translate-y-4 duration-300 transition-all">
          <img src="dessert.jpg" className=" p-6 w-64 h-64  rounded-full" />
          <div className="flex flex-col items-center">
            <p>Breakfast</p>
            <p>(12 breakfast)</p>
          </div>
        </div>
        <div className=" shadow-lg rounded-md bg-white  cursor-pointer hover:translate-y-4 duration-300 transition-all">
          <img src="sandwitch.jpg" className=" p-6 w-64 h-64  rounded-full" />
          <div className="flex flex-col items-center">
            <p>Breakfast</p>
            <p>(12 breakfast)</p>
          </div>
        </div>
        <div className=" shadow-lg rounded-md bg-white  cursor-pointer hover:translate-y-4 duration-300 transition-all">
          <img src="orange1.jpg" className=" p-6 w-64 h-64  rounded-full" />
          <div className="flex flex-col items-center">
            <p>Breakfast</p>
            <p>(12 breakfast)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
