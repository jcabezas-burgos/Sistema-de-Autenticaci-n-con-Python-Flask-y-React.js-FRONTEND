export const getState = ({ getActions, getStore, setStore }) => {
    return {
      store: {
        users: [],
      },
      actions: {
        login: (info, navigate) => {
          console.log("info", info);
          const postLogin = {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
              "Content-Type": "application/json",
            },
          };
          fetch(
            "https://8080-4geeksacademy-htmlhello-kgxh1r6xez1.ws-us84.gitpod.io/login",
            postLogin
          )
            .then((res) => res.json())
            .then((result) => {
              if (result.msg != "contraseña o rut invalido") {
                setStore({ patient: result.data });
                localStorage.setItem("access_token", result.access_token);
              }
  
              if (localStorage.getItem("access_token")) {
                navigate("/private");
              }
            })
            .catch((error) => console.error("Error:", error));
        },
  
        logout: (navigate) => {
          localStorage.removeItem("access_token");
          navigate("/");
        },
  
        signup: (data) => {
          const method = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          };
  
          fetch(
            "https://8080-4geeksacademy-htmlhello-kgxh1r6xez1.ws-us84.gitpod.io/signup",
            method
          )
  
            .then((res) => res.json())
            .then((result) => setStore({ users: result }));
        },

        private: (navigate) => {

          if (localStorage.getItem("access_token")) {
            navigate("/private");
          }
          else {
            navigate("/");
          }
        }
      },
    };
  };