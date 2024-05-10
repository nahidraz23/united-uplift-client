import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebaseConfig";

const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const data = {

    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;