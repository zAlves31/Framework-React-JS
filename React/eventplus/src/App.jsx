import Rotas from "./routes"
import { UserContex } from "./context/AuthContext";
import './App.css';
import { useEffect, useState } from "react";

const App = () =>{
    const [userData, setUserData] = useState({});
useEffect(() => {
    const token = localStorage.getItem("token");
    setUserData( token === null ? {} : JSON.parse(token));

}, []);

    return(
        <UserContex.Provider value={ {userData, setUserData} }>
            <Rotas />
        </UserContex.Provider>
    );
};


export default App;
