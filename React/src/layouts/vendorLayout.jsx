import { useState } from "react";
import Navbar from "../components/nav-bar";
import Sidebar from "../components/side-bar";
import Home from "../vendors";

function VendorLayout() {
    const[options , setOption]=useState("analytics");

    const changeOption=(newOption)=>{
        setOption(newOption);
    }
    return (  
        <>
        <div className="flex h-screen w-screen bg-gray-300 flex-col">
        <Navbar/>
        <div className="flex h-screen w-screen bg-gray-300">
            <Sidebar changeOption={changeOption}/>
            <Home option={options}/>
        </div>
        </div>
        </>
    );
}

export default VendorLayout;