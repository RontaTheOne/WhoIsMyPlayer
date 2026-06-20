import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className="sidebar bg-dark text-white p-3">
      <h4 className="mb-4">WhoIsMyPlayer</h4>

      <nav className="nav flex-column gap-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/ranking"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          Ranking
        </NavLink>

        <NavLink
          to="/compare"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          Comparador
        </NavLink>

        <NavLink
          to="/players"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          Convocados
        </NavLink>
      </nav>
    </aside>
  );
}