import { React, useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/context";

function Navbar(props) {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top bg-light border">
        <div className="container-fluid">
          <div>
          <img
            className="img img-fluid me-4"
            style={{ width: "45px" }}
            alt="logo"
          />
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          </div>
          <div className="dropdown">
            {props.header}
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {props.dropdown}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">

              <li>
                <button
                  className="dropdown-item"
                  onClick={() => actions.logout(navigate)}
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;