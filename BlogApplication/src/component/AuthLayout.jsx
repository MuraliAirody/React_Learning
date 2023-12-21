import React from "react";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//URL protection layout
function AuthLayout({ children, authentication = "true" }) {
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    if (authentication && status !== authentication) {
      navigate("/login");
    } else if (!authentication && status !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [status, authentication, navigate]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
