import { Routes,Route,Navigate } from "react-router-dom";
import { privateRoutes,publicRoutes } from '../routes';
import { useSelector } from "react-redux";
// import Loader from './UI/Loader/Loader';
const AppRouter = () => {
    const {auth} = useSelector(store => store.auth) ;
  return (
    auth
    ?<Routes>
    {privateRoutes.map((route,i)=>
          <Route key = {i} path = {route.path} element={<route.element/>}/>
    )}
    <Route path='/*' element={<Navigate to="/users" replace/>}/>
  </Routes>
    :<Routes>
    {publicRoutes.map((route,i)=>
          <Route key = {i} path = {route.path} element={<route.element/>}/>
    )}
    <Route path='/*' element={<Navigate to="/login" replace/>}/>
  </Routes>
  )
}

export default AppRouter