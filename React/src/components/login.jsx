import { useState } from "react";
import PropTypes from "react";
import axios from "axios";

Login.propTypes={
    setLogin:PropTypes.isRequired,
};

function Login({setLogin}) {
    const[username , setUserName]=useState(null);
    const[password , setPassword]=useState(null);

    const login=async()=>{
        console.log("username",username);
        console.log("password",password);
        try{
        const {data}=await axios.post("http://localhost:3000/auth/getlogin",{
            username,
            password,
        },{
            withCredentials: true, 
        })
        if(data.error){
            return alert("invalid credentials")
        }
        return alert("logged in successfully")
       
        }catch(error){
            console.error("login failed", error);
        }
    };

    return(
        <>
        <div className="w-full h-full flex justify-center">
        <div className="w-1/4 h-full py-4 flex items-center">
         <div className="w-full h-3/5 bg-white rounded-md">
            <div className="flex h-1/5 justify-center">
                <h1 className="text-gray-600 font-semibold">Login</h1>
            </div>
            <div className="h-3/5 flex flex-col p-4">
                <label className="text-xl text-gray-600 my-2 font-semibold">
                    Username
                    </label>
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white text-black"
                type="text"
                placeholder="username"
                required
                onChange={(event)=>{
                     setUserName(event.target.value);
                }}
                />
                <label className="text-xl text-gray-600 my-2 font-semibold">
                    password
                    </label>
                    <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white text-black"
                type="password"
                required
                onChange={(event)=>{
                    setPassword(event.target.value);
               }}
                />
                <p className="text-gray-600">{"Don't have an account?"}{" "}
                <span className="hover:text-blue-700 hover:underline cursor-pointer"
                onClick={()=>{
                    setLogin(false);
                }}
                >
                    Go to signup
                </span>
                </p>

            </div>
            <div className="flex justify-center">
                <button className= "text-xl text-gray-600 py-1  bg-gray-400"
                onClick={login}
                >
                    
                    Login</button>
            </div>
            </div>   
        </div>
        </div>
        </>
    );


}

export default Login;