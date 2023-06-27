import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = function ({ children }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;