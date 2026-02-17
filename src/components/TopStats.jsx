export default function TopStats({ data }) {
  const counts = data.reduce((acc, s) => {
    acc[s.status] = (acc[s.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
      <div style={{ padding: '10px', border: '1px solid #ccc', flex: 1 }}>
        <h3>Arrived</h3>
        <p>{counts['Arrived'] || 0}</p>
      </div>
      <div style={{ padding: '10px', border: '1px solid #ccc', flex: 1 }}>
        <h3>On Hold</h3>
        <p>{counts['On Hold'] || 0}</p>
      </div>
      <div style={{ padding: '10px', border: '1px solid #ccc', flex: 1 }}>
        <h3>Delivered</h3>
        <p>{counts['Delivered'] || 0}</p>
      </div>
    </div>
  );
}
