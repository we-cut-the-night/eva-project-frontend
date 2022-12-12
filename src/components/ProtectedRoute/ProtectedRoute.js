import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...props}) => {
  if (props.loggedIn !== true) {
    return <Navigate to='/signin'/>
  }

  return <Component {...props} />
};

export default ProtectedRoute;
