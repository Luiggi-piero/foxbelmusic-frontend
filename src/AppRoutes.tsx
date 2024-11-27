import { Navigate, Route, Routes } from "react-router-dom"
import ResultsPage from "./pages/Results/ResultsPage"
import LoginPage from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Register/RegisterPage"
import FavoritesPage from "./pages/Favorites/FavoritesPage"
import ProfilePage from "./pages/Profile/ProfilePage"
import AuthRoute from "./components/AuthRoute/AuthRoute"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/tracks" element={<ResultsPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route
                path="/favorites"
                element={
                    <AuthRoute>
                        <FavoritesPage />
                    </AuthRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <AuthRoute>
                        <ProfilePage />
                    </AuthRoute>
                }
            />

            {/* Ruta desconocida */}
            <Route path="*" element={<Navigate to="/tracks" replace />}></Route>
        </Routes>
    )
}

export default AppRoutes