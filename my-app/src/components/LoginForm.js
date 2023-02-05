import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/context";

function Login() {
  const { store, actions } = useContext(Context);
  const [infoLogin, setInfoLogin] = useState();

  let navigate = useNavigate();
  const onChange = (e) => {
    setInfoLogin({ ...infoLogin, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("useffect", infoLogin?.email);
  }, [infoLogin]);
  const submitForm = (e) => {
    e.preventDefault();
    actions.login(infoLogin, navigate);
  };

  return (
    <div className="row">
      <div className="card text-bg-light m-5 p-5 " style={{ width: "30rem" }}>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <div className="text-center">
              <h1>Ingresa</h1>
            </div>
            <label for="exampleFormControlInput1" className="form-label">
              Ingresa tu email:
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingresar  email"
              onChange={(e) => onChange(e)}
              title="Ingresar  email"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">
              Ingresa tu contraseña:
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Contraseña"
              onChange={(e) => onChange(e)}
            />
            <div class="d-grid gap-2 pt-5">
              <button className="btn btn-outline-info btn-lg p-3" type="submit">
                Ingresar
              </button>
              <button type="button" className="btn btn-link pt-3">
                ¿Olvidaste tu contraseña?
              </button>
              <Link
                className="btn  btn-outline-secondary"
                to={"/register"}
                type="button"
              >
                Regístrate aquí
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;