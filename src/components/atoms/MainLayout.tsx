import { Outlet } from "react-router";
import RedirectSetup from "../../RedirectSetup";
import React from "react";

const MainLayout = () => {
  return (
    <React.Fragment>
      <RedirectSetup />
      <Outlet />
    </React.Fragment>
  );
};

export default MainLayout;
