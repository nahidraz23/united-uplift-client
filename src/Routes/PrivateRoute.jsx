import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="min-h-[calc(100vh-72px)] container mx-auto flex items-center justify-center">
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoute;