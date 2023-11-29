import { jwtDecode } from "jwt-decode";
import { createContext } from "react";

export const UserContex = createContext(null);

export const userDecodeToken = (theToken) => {
    const decoded = jwtDecode(theToken);
    return {role: decoded.role, nome: decoded.name, token: theToken}
}