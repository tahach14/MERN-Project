import PropTypes from "react";
Sidebar.propTypes={
    changeOption:PropTypes.isRequired,
};
function Sidebar({changeOption}) {
    return ( 
        <>
        <div className="w-1/5 h-full bg-white items-center flex flex-col shadow-lg">
        <p 
        className="text-2xl w-full font-semibold text-black flex justify-start cursor-pointer"
        onClick={()=>{
            changeOption("analytics");
        }}
        >Home
        </p>
        <p 
        className="text-2xl w-full font-semibold text-black flex justify-start cursor-pointer"
        onClick={()=>{
            changeOption("add-products");
        }}
        >Add Product
        </p>
        <p 
        className="text-2xl w-full font-semibold text-black flex justify-start cursor-pointer"
        onClick={()=>{
            changeOption("inventory");
        }}
        >Inventory
        </p>
        <p 
        className="text-2xl w-full font-semibold text-black flex justify-start cursor-pointer"
        onClick={()=>{
            changeOption("orders");
        }}
        >Orders
        </p>
        </div>
        </>
     );
}

export default Sidebar;