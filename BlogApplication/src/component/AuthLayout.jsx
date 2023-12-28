import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//URL protection layout
// eslint-disable-next-line react/prop-types
function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    if (authentication && status !== authentication) {
      navigate("/login");
    } else if (!authentication && status !== authentication) {
      navigate("/profile");
    }
    setLoader(false);
  }, [status, authentication, navigate]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
