import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "react";

Product.propTypes={
    item:PropTypes.isRequired,
    updateProductList:PropTypes.isRequired,
};

function Product({item, updateProductList}){
    console.log("item" , item)
    const deleteProduct = async()=>{
        const {data}=await axios.delete("http://localhost:3000/user/deleteUser",{
            params:{
                userId:item.userId,
            },
        })
        if(data.error || !data.response){
            return alert("unable to delete");
        }
        return updateProductList();
    }
    return(
        <>
        <div className="w-1/4 p-2 h-3/6 flex flex-wrap">
        <div className="w-full bg-gray-300 shadow-lg h-full p-2">
            <div className="w-full h-3/5">
        <p className="text-gray-900 font-normal text-md">{item.username}</p>
        <p className="text-gray-900 font-normal text-md">{item.ROLE.rolename}</p>
        <p className="text-gray-900 font-normal text-md">{item.ADDRESS.address}</p>
        </div>
        <div className="w-full flex justify-end gap-2">
            <button className="bg-blue-400">Edit</button>
            <button className="bg-blue-400"
            onClick={()=>{
                void deleteProduct();
            }}
            >Delete</button>
        </div>
        </div>
        </div>
        </>
    )
}
function Inventory() {
    const[products , setProducts]=useState([]);
    const getAllProducts = async()=>{
        const{data : Products}=await axios.get("http://localhost:3000/user/getUser",{
            withCredentials:true,
        });
        console.log(Products.response[0]);
        setProducts(Products.response)

    };

    useEffect(()=>{
        void getAllProducts();
    },[])
    return (  
        <>
        <div className="flex w-full h-full p-4 flex-col"> 
        <p className="text-gray-900 text-2xl font-semibold">Products</p>
        <div className="w-full h-full bg-white p-4 flex flex-wrap">
            {products != null ?(
                <>
                {products.map((item , index)=>{
                    return <Product item={item} key={index} updateProductList={getAllProducts}/>;
                })}
                </>
            ) : (
                <>
                <p>No Products Exist</p>
                </>
            )}
        </div>
        </div>
        </>
    );
}

export default Inventory;
