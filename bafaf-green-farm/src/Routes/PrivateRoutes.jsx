import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PrivateRoutes;