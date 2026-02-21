// src/components/TopStats.jsx
export default function TopStats({ data }) {
  const counts = data.reduce((acc, s) => {
    acc[s.status] = (acc[s.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Arrived</h3>
        <p>{counts['Arrived'] || 0}</p>
      </div>
      <div className="stat-card">
        <h3>On Hold</h3>
        <p>{counts['On Hold'] || 0}</p>
      </div>
      <div className="stat-card">
        <h3>Delivered</h3>
        <p>{counts['Delivered'] || 0}</p>
      </div>
    </div>
  );
}