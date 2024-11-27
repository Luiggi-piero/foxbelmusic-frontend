import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

function AuthRoute({ children }: Props) {

    const { user } = useAuth();

    return user
        ? (children)
        : <Navigate to='/login' replace />
}

export default AuthRoute