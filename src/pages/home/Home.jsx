import React, { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-black">
              Você precisa estar logado para acessar esta página
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-black">Bem-vindo a Home</h1>
          <h2 className="subtitle has-text-black">Usuário: {user.email}</h2>
          <p>ID do usuário: {user.uid}</p>
        </div>
      </div>
    </div>
  );
}
