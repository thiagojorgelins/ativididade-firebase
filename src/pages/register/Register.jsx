import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
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
          <form className="columns is-flex-direction-column" onSubmit={handleSubmit}>
            <div className="column">
              <label className="label has-text-black is-size-4">Nome</label>
              <div className="control">
                <input
                  className="input has-background-white has-text-black is-size-4"
                  type="text"
                  placeholder="Digite seu nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="column">
              <label className="label has-text-black is-size-4">Email</label>
              <div className="control">
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
            <div className="column">
              <label className="label has-text-black is-size-4">Senha</label>
              <div className="control">
                <input
                  className="input has-background-white has-text-black is-size-4"
                  type="password"
                  placeholder="Digite sua senha"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errorMessage && (
              <div className="column">
                <div className="notification is-danger has-text-centered">{errorMessage}</div>
              </div>
            )}
            <div className="column">
              <div className="control">
                <button className="button is-large is-fullwidth" type="submit">Cadastrar</button>
              </div>
              <p className="has-text-centered">
                <Link to="/login">Já possui conta? Faça o login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
