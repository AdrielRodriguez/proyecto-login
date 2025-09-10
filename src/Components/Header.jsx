import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const onDashboard = location.pathname === "/dashboard";

  return (
    <header className="header">
      <div className="left">
        <h1>Login App</h1>
      </div>
      <div className="right">
        {onDashboard && <Link to="/login" className="logout-btn">Cerrar sesión</Link>}
      </div>
    </header>
  );
}
