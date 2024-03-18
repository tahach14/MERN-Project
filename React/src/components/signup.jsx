import axios from "axios";
import PropTypes, { useEffect, useState } from "react";
import Select from "react-select";
Signup.propTypes={
    setLogin:PropTypes.isRequired,
};

function Signup({setLogin}) {
    const[username , setUserName]=useState(null);
    const[password , setPassword]=useState(null);
    const[address , setAddress]=useState(null);
    const[roleId , setRoleId]=useState(null);
    const[roles , setRoles]=useState([]);

    const getRoles=async()=>{
        const {data}=await axios.get("http://localhost:3000/user/getRole")
        if(data.error){
            return alert("no roles exists")
        }
        let roleDropDown=[];
        data.response.map((role)=>{
            const roleValues ={
                label:role.rolename,
                value:role.roleId
            }
            roleDropDown.push(roleValues);
        })
        setRoles(roleDropDown);
    };

    const signup=async ()=>{

        const{data}= await axios.post("http://localhost:3000/user/createUser",{
             username,
         password,
         address,
         roleId,
        },{
            withCredentials:true,
        })
        if(data.error){
            return alert("unable to create User")
        }
        alert("user created successfully")
        return setLogin(true);


    };

    useEffect(()=>{
        void getRoles();
    },[])
    return(
        <>
        <div className="w-full h-full flex justify-center">
        <div className="w-1/4 h-full py-4 flex items-center">
         <div className="w-full h-5/6 bg-white rounded-md">
            <div className="flex h-1/6 justify-center">
                <h1 className="text-gray-600 font-semibold">Signup</h1>
            </div>
            <div className="h-4/7 flex flex-col p-2">
                <label className="text-xl text-gray-600 my-1 font-semibold">
                    Username
                    </label>
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white text-black"
                type="text"
                placeholder="username"
                required
                onChange={(e)=>{
                    setUserName(e.target.value)
                }}
                />
                <label className="text-xl text-gray-600 my-1 font-semibold">
                    password
                    </label>
                    <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white text-black"
                type="password"
                required
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                />
                <label className="text-xl text-gray-600 my-1 font-semibold">
                    Address
                    </label>
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white text-black"
                type="text"
                required
                onChange={(e)=>{
                    setAddress(e.target.value)
                }}
                />
                <label className="text-xl text-gray-600 my-1 font-semibold">
                    Role
                    </label>
                    <Select className="rounded-md text-gray-500 focus:outline-none"
                    isSearchable={true}
                    options={roles}
                    onChange={(e)=>{
                        console.log(e.value);
                        setRoleId(e.value);
                    }}
                    placeholder="Select Role"
                    />
                <p className="text-gray-600">{"Already have an account?"}{" "}
                <span className="hover:text-blue-700 hover:underline cursor-pointer"
                onClick={()=>{
                    setLogin(true);
                }}
                >
                    Go to login
                </span>
                </p>

            </div>
            <div className="flex justify-center">
                <button
                disabled={!(username, password, address, roleId)}
                 className= "text-xl text-gray-600 py-1 bg-gray-400 disabled:bg-gray-200"
                 onClick={signup}
                >
                    Signup</button>
            </div>
            </div>   
        </div>
        </div>
        </>
    );


}

export default Signup;