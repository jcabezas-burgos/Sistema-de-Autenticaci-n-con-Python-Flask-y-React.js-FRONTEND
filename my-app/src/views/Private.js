import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";



function Private() {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  useEffect(() => {actions.private(navigate);}, []);

  return (
    <div className=" ">
      <Navbar/>
    </div>
  );
}

export default Private;