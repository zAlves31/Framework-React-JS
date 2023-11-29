import Rotas from "./routes"
import { UserContex } from "./context/AuthContext";
import './App.css';
import { useState } from "react";

const App = () =>{
    const [userData, setUserData] = useState([])

    return(
        <UserContex.Provider value={ {userData, setUserData} }>
            <Rotas />
        </UserContex.Provider>
    );
};


export default App;
