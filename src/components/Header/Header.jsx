import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!user);
  }, [setIsLoggedIn]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Erro ao deslogar", error);
      });
  };

  return (
    <header>
      <nav className="navbar navbar-start p-4 has-background-dark">
        <Link to="/" className="navbar-item is-size-4 has-text-white">
          Home
        </Link>
        <Link to="/register" className="navbar-item is-size-4 has-text-white">
          Cadastro
        </Link>
        <div className="navbar-end">
          {isLoggedIn ? (
            <button
              className="navbar-item is-size-4 has-text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link className="navbar-item is-size-4 has-text-white" to="/login">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
