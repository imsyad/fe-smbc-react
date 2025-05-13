import { useEffect } from "react";
import { useNavigate } from "react-router";
import { setRedirectHandler } from "./utils/redirect";

const RedirectSetup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setRedirectHandler(() => {
      navigate("/auth/login");
    });
  }, [navigate]);

  return null;
};

export default RedirectSetup;
