import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../images/logo2.png";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img
            src={Logo}
            alt=""
            className="h-[70px] w-[80px] cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/coupons" className="lg:block hidden">
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-2 lg:mx-4 cursor-pointer hover:text-indigo-500 transition-colors duration-300"
            />
          </Link>
          <Link to="/dashboard-events" className="lg:block hidden">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-2 lg:mx-4 cursor-pointer hover:text-indigo-500 transition-colors duration-300"
            />
          </Link>
          <Link to="/dashboard-products" className="lg:block hidden">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-2 lg:mx-4 cursor-pointer hover:text-indigo-500 transition-colors duration-300"
            />
          </Link>
          <Link to="/dashboard-orders" className="lg:block hidden">
            <FiPackage
              color="#555"
              size={30}
              className="mx-2 lg:mx-4 cursor-pointer hover:text-indigo-500 transition-colors duration-300"
            />
          </Link>
          <Link to="/dashboard-messages" className="lg:block hidden">
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-2 lg:mx-4 cursor-pointer hover:text-indigo-500 transition-colors duration-300"
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover ml-2 lg:ml-4 cursor-pointer hover:opacity-75 transition-opacity duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
