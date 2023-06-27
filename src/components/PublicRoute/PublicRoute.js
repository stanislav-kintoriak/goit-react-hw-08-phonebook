import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

const PublicRoute = function ({ children }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;