import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards";

const Menu = () => {
  const [menu, setmenu] = useState([]);
  const [filtereditems, setfiltereditems] = useState([]);
  const [selectedcategory, setselectedcategory] = useState([]);
  //const [sortoptions, setsortoption] = usestate("default");

  //loading data
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:6001/menu");
        const data = await response.json();
        //console.log(data)
        setmenu(data);
        setfiltereditems(data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchdata();
  }, []);

  //filtering data based on category

  const filteritems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setfiltereditems(filtered);
    setselectedcategory(category);
  };

  const showall = () => {
    setfiltereditems(menu);
    setselectedcategory("all");
  };
  const handlesortchange = (option) => {
    setsortoption(option);
    let sorteditems = [...filtereditems];
    /* switch (option) {
      case "A-Z":
        sorteditems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sorteditems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sorteditems.sort((a, b) => a.price - b.price);
        break;
      case "low-to-high":
        sorteditems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }*/
    setfiltereditems(sorteditems);
  };

  return (
    <div className="max-w-screen-2xl container  xl:px-24 px-4  border-r-8   py-16">
      <div className=" flex flex-col items-center justify-center space-y-7  p-6 m-10">
        <div className=" mb-1 ">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug">
            For the Love of Delicious Food
          </h2>
        </div>
        <div className=" mb-1">
          <p className="text-xl text-[#4A4A4A]">
            Come with family and feel the joy of mouthwatering food such as
            Greek Salad,Lasagne,Butternut Pumpkin,Tokusen Wagyu,Olivas Rellenas
            and more for a moderate cost.
          </p>
        </div>

        <div className=" mb-1">
          <button className=" btn bg-gray-500 px-8 py-3 font-semibold text-black rounded-full">
            Order Now
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-5 mb-5">
        <div className=" ">
          <button onClick={showall} className="btn btn-link">
            All
          </button>
        </div>
        <div className=" ">
          <button onClick={() => filteritems("salad")} className="btn btn-link">
            Sallad
          </button>
        </div>
        <div className="">
          <button
            onClick={() => filteritems("pizza")}
            className="btn btn-link "
          >
            Pizza
          </button>
        </div>
        <div className=" ">
          <button onClick={() => filteritems("soup")} className="btn btn-link">
            Soup
          </button>
        </div>
        <div className=" ">
          <button
            onClick={() => filteritems("dessert")}
            className="btn btn-link"
          >
            Desserts
          </button>
        </div>

        <div className=" ">
          <button
            onClick={() => filteritems("drinks")}
            className="btn btn-link"
          >
            Drinks
          </button>
        </div>
      </div>
      <div className="grid  md:grid-cols-4 sm:grid-cols-1 gap-4">
        {filtereditems.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
