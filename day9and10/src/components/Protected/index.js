import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Protected = ({  children }) => {
  const isLoggedIn=useSelector((state)=>state.data.isLogin);
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;