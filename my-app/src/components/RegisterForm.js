import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { Context } from "../store/context";


function RegisterForm() {
  const { store, actions } = useContext(Context);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  useEffect(() => {}, [info]);
  const submitForm = (e) => {
    e.preventDefault()
    actions.signup(info);
  };

  const verifyPassword = () => {
    if (info?.password !== info?.confirmPassword) {
      return (
        <p className="text-danger ms-2">
          {" "}
          Las contraseñas ingresadas no coindicen.
        </p>
      );
    }
  };

  return (
    <div className="p-5">
      <div className="">
        <div className="col-lg-4 bg-white m-auto">
          <h2 className="text-center pt-3">Regístrate</h2>
          <span className="text-center text-muted lead">Crea tu cuenta</span>
          <form id="form" action="#" className="" onSubmit={submitForm}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FaUserAlt />
              </span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Example@mail.com"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">
                  <span className="input-group-text" id="basic-addon1">
                    Contraseña
                  </span>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  name="password"
                  id="inputPassword"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label for="inputConfirmPassword" className="col-form-label">
                  <span className="input-group-text" id="basic-addon1">
                    Confirmar contraseña
                  </span>
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  id="inputConfirmPassword"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={(e) => onChange(e)}
                  name="confirmPassword"
                />
              </div>
            </div>
            {verifyPassword()}
            <button className="btn btn-primary my-5" type="submit">
              {" "}
              Regístrate{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;