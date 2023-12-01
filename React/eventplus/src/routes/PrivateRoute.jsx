import { Navigate } from "react-router-dom";

export const PrivateRoute = ( {children, redirectTo = "/"} ) => {
    //Verificar se esta autenticado
    const isAutenticated = localStorage.getItem("token") !== null;
    
    //retorna o componente ou navegar para home
    return isAutenticated ?  children : <Navigate to={redirectTo} />
};