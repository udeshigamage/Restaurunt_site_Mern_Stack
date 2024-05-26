import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="max-w-screen-2xl container  xl:px-24 px-4 bg-gradient-to-r from-[#969389] from-0% to-[#f0efef] to-100% border-r-8  rounded-3xl">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 ">
          <p className="text-[#7a1f12] uppercase tracking-wide font-medium text-lg">
            Testimonials
          </p>
          <h1 className="text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
            What Our Customers Say About Us
          </h1>
          <p>
            <blockquote>
              "I had the pleasure of dining at grills lastnight,and iam still
              raving about the experience!The attention to detail in
              presentation and service was impeccable"
            </blockquote>
          </p>
          <div className="avatar-group -space-x-6 rtl:space-x-reverse mt-5">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-12 bg-neutral text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>
          <h5>Customer Feedback</h5>
          <div className="">
            <FaStar className="text-yellow-400" />
            <span>4.9</span>
            <span className="text-[#807E7E]">(18.6k Reviews)</span>
          </div>
        </div>
        <div className="md:w-1/2 space-y-7 px-4">
          <img src="cheff.png " className=" w-300px h-200px" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
