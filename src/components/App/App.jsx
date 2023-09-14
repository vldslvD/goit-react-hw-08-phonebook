
import { Route, Routes } from 'react-router';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';

import { refresh } from 'redux/auth/operations';
import { getIsRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
const ContactsPage = lazy(() => import('pages/Contacts'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

export const App = () => {
  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch])
  
  return (
      !isRefreshing && <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts"/>}/>
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login"/>} />
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts"/>}/>
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts"/>}/>
        </Route>
      </Routes>
  );
};
