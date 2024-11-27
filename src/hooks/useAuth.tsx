import { createContext, ReactNode, useContext, useState } from 'react';
import { getUser, registerUser, logout, loginUser, updateUser } from '../services/userService';
import { User } from '../models/User';
import { UserRegister } from '../models/UserRegister';
import { UserLogin } from '../models/UserLogin';
import { useFavorites } from './useFavorites';
import { UserUpdate } from '../models/UserUpdate';

interface AuthContextType {
    user: User,
    register: (data: UserRegister) => void,
    login: (data: UserLogin) => void,
    exit: () => void,
    update: (data: UserUpdate) => void
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState(getUser());
    const { cleanFavorites, loadFavorites } = useFavorites();

    const register = async (data: UserRegister) => {
        try {
            const user = await registerUser(data);
            setUser(user);
        } catch (error) {
            console.log('Error al registrar', error);
        }
    }

    const login = async (data: UserLogin) => {
        try {
            const user = await loginUser(data);
            setUser(user);
            loadFavorites();
        } catch (error) {
            console.log('Error', error);
        }
    }

    const update = async (data: UserUpdate) => {
        try {
            const user = await updateUser(data);
            setUser(user);
        } catch (error) {
            console.log('Error', error);
        }
    }

    const exit = () => {
        logout();
        setUser(null);
        cleanFavorites();
    }

    return (
        <AuthContext.Provider value={{
            user,
            register,
            exit,
            login,
            update
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe estar al interior de un AuthProvider')
    }
    return context;
}