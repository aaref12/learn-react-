import React from "react";
import  Usercontaxt from './Usercontaxt'


const UserContextProvider=({children})=>{
 const[user,setUser]=React.useState(null)
    return(
    <Usercontaxt.Provider value={{user,setUser}} >
        {children}
    </Usercontaxt.Provider>
)
}


export default UserContextProvider;