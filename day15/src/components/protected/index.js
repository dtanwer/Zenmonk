import { Navigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const Protected = ({children}) => {
    const isLoggedIn=useSelector((state)=>state.auth.login)
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;