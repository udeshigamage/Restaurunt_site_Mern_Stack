import React from "react";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container  xl:px-24 px-4 bg-gradient-to-r from-[#969389] from-0% to-[#f0efef] to-100% border-r-8  rounded-3xl">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 ">
          <img src="./pizz.jpeg" className="rounded-2xl rounded-full"></img>
          <div className="flex flex-col md:flex-row-reverse items-center justify-around -mt-14 gap-4">
            <div className="flex py-2 px-3 rounded-2xl items-center gap-3  w-64   shadow-md hover:translate-y-4 duration-300 transition-all">
              <img src="noodles.jpg" className="rounded-2xl w-32 h-32" />

              <div className="space-y-1">
                <h5 className="font-medium">Spicy noodles</h5>
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            <div className="sm:flex hidden py-2 px-3 rounded-2xl items-center gap-3  w-64  shadow-md hover:translate-y-4 duration-300 transition-all">
              <img src="salad.jpeg" className="rounded-2xl w-32 h-32 " />

              <div className="space-y-1">
                <h5 className="font-medium">Vegetarian Salad</h5>
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red">$23.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug">
            Dive into Delights of Delectable
            <t />
            <span className="text-[#403e3f]"> Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className=" btn bg-gray-500 px-8 py-3 font-semibold text-black rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
