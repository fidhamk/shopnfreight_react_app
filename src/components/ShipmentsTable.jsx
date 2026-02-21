// src/components/ShipmentsTable.jsx
export default function ShipmentsTable({ data }) {
  if (!data || data.length === 0) {
    return <p style={{ padding: '20px' }}>No shipments found</p>;
  }

  return (
    <table className="shipments-table">
      <thead>
        <tr>
          <th>Shipment</th>
          <th>Status</th>
          <th>Warehouse</th>
          <th>Weight</th>
          <th>Arrived</th>
        </tr>
      </thead>
      <tbody>
        {data.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.status}</td>
            <td>{s.warehouse}</td>
            <td>{s.weight}</td>
            <td>{s.arrived}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}