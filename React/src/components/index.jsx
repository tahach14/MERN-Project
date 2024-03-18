import { useState } from "react";
import Login from "./login";
import Signup from "./signup";

function Index() {
    const[isLogin , setIsLogin]=useState(true);

    const updateState=(newState)=>{
        setIsLogin(newState);
    }

    return(
        <>
        <div className="w-screen h-screen bg-gray-300">
        {isLogin && <Login setLogin={updateState}/>}
        {!isLogin && <Signup setLogin={updateState}/>}
        </div>
        </>
    )
}

export default Index;