import Products from "./add-products";
import Analytics from "./analytics";
import Inventory from "./inventory";
import Orders from "./orders";
import PropTypes from "react";

Home.propTypes={
    option:PropTypes.isRequired,
};

function Home({option}) {
    return ( 
        <>
        <div className="flex w-4/5 h-full p-4">
            {option=="inventory" && <Inventory/>}
            {option=="analytics" && <Analytics/>}
            {option=="orders" && <Orders/>}
            {option=="add-products" && <Products/>}
        </div>
        </>
     );
}

export default Home;