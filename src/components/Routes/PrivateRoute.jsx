import { useSelector } from "react-redux"
import { Navigate } from "react-router";
import { getIsLoggedIn, getIsRefreshing } from "redux/auth/selectors"

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return (
    shouldRedirect ? <Navigate to={redirectTo}/> : <Component/>
  )
}