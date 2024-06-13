import React from "react";
const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight Your guests with our flavours and presentation",
    image: "/icon1.png",
  },
  {
    id: 2,
    title: "Fast delivery",
    des: "We deliver your order promptly to your door",
    image: "/icon2.png",
  },
  {
    id: 3,
    title: "Online ordering",
    des: "Explore menu & order with ease using our online ordering",
    image: "/icon3.png",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional during with Grill gift cards",
    image: "/icon4.png",
  },
];

const Ourservices = () => {
  return (
    <div className="max-w-screen-2xl container  xl:px-24 px-4  border-r-8  rounded-3xl">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 ">
          <p className="text-[#7a1f12] uppercase tracking-wide font-medium text-lg">
            our story & services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
            Our Culinary Journey And Services
          </h1>
          <p>
            Rooted in passion,we curate unforgettable dining experience and
            offer exceptional services,blending culinary artistry with warm
            hospitality.
          </p>
          <button className=" btn bg-gray-500 px-8 py-3 font-semibold text-black rounded-full mt-5">
            Explore
          </button>
        </div>

        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200"
              >
                <img src={service.image} alt="" className=" mx-auto" />
                <h5 className="pt-3 font-semibold"> {service.title}</h5>
                <p className="text-[#90BD95]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
