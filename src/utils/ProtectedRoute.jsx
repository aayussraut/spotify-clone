import { Navigate, useNavigate } from "react-router-dom";
import { userAtom } from "../recoil";
import { useRecoilValue } from "recoil";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  console.log(user);
  return <>{user.user ? <Navigate to="/" replace={true} /> : children}</>;
};

export default ProtectedRoute;
