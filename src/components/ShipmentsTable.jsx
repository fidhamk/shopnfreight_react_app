export default function ShipmentsTable({ data }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
        {data.map(s => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.status}</td>
            <td>{s.warehouse}</td>
            <td>{s.weight}</td>
            <td>{s.arrived}</td>
          </tr>
        ))}
        {data.length === 0 && (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center', padding: '10px' }}>
              No shipments found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
