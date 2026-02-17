export default function FilterBar({ filterStatus, setFilterStatus, filterWarehouse, setFilterWarehouse }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <select onChange={e => setFilterStatus(e.target.value)} value={filterStatus}>
        <option value="All">All Status</option>
        <option value="Arrived">Arrived</option>
        <option value="On Hold">On Hold</option>
        <option value="Delivered">Delivered</option>
      </select>

      <select
        onChange={e => setFilterWarehouse(e.target.value)}
        value={filterWarehouse}
        style={{ marginLeft: '10px' }}
      >
        <option value="All">All Warehouses</option>
        <option value="UAE">UAE</option>
        <option value="KSA">KSA</option>
      </select>
    </div>
  );
}
