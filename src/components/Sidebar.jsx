import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Shopnfreight</h2>

      <ul className="sidebar-menu">
        <li className="active">Shipments</li>
        <li>Dashboard</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}