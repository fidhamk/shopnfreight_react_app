// src/components/FilterBar.jsx
export default function FilterBar({
  filterStatus,
  setFilterStatus,
  filterWarehouse,
  setFilterWarehouse,
}) {
  return (
    <div className="filters-container">
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Arrived">Arrived</option>
        <option value="On Hold">On Hold</option>
        <option value="Delivered">Delivered</option>
      </select>

      <select
        value={filterWarehouse}
        onChange={(e) => setFilterWarehouse(e.target.value)}
      >
        <option value="All">All Warehouses</option>
        <option value="UAE">UAE</option>
        <option value="KSA">KSA</option>
        <option value="China">China</option>
      </select>
    </div>
  );
}