import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    // Podrías limpiar datos de sesión aquí
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>¡Bienvenido al Dashboard! 🎉</h1>
      <p>Has iniciado sesión correctamente.</p>
      <button
        onClick={logout}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          backgroundColor: "#e53e3e",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;
