import Users from "../pages/Users";
import Login from "../pages/Login";
import UserPage from "../pages/UserPage";
import Register from "../pages/Register";
export const privateRoutes = [
    {path: '/users', element:Users},
    {path: '/user', element: UserPage}
]
export const publicRoutes = [
    {path: '/login', element: Login},
    {path: '/register', element: Register}
]