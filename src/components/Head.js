import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();
    const  handleToggleHandler = () => {
          dispatch(toggleMenu())
   }
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-8 cursor-pointer" alt="menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" 
          onClick={()=> handleToggleHandler()}/>
        <img className="h-8 mx-4" alt="youtube-logo" src="https://as1.ftcdn.net/v2/jpg/05/07/46/84/1000_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg" />
      </div>
      <div className="col-span-10 px-10">
        <input type="text" className="w-1/2 border border-gray-400 rounded-l-full p-2 " placeholder="Search"/>
        <button className="border border-gray-400 bg-gray-100 rounded-r-full py-2 px-4" >🔍</button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user" />
      </div>
    </div>
  );
};

export default Head;
