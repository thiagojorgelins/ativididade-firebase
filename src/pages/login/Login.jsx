import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));

      setIsLoggedIn(true);

      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container is-max-tablet">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label has-text-black is-size-4">Email</label>
              <div className="control has-icons-right">
                <input
                  className="input has-background-white has-text-black is-size-4"
                  type="email"
                  placeholder="Digite seu email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-black is-size-4">Senha</label>
              <div className="control has-icons-right">
                <input
                  className="input has-background-white has-text-black is-size-4"
                  type="password"
                  placeholder="Digite sua senha"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errorMessage && (
                <div className="help is-danger is-size-6 has-text-centered">
                  {errorMessage}
                </div>
              )}
            </div>
            <div className="control">
              <button className="button is-large is-fullwidth" type="submit">
                Entrar
              </button>
              <p className="has-text-centered">
                <Link to="/register">Não tem uma conta? Cadastre-se</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
