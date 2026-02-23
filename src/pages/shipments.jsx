// src/pages/Shipments.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopStats from '../components/Topstats.jsx';
import FilterBar from '../components/FilterBar.jsx';
import ShipmentsTable from '../components/ShipmentsTable.jsx';
import '../styles/Shipments.css';

export default function Shipments({ shipments, setShipments }) {
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterWarehouse, setFilterWarehouse] = useState('All');

  // Fetch dummy API data once on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(data => {
        const mapped = data.map((item, index) => ({
          id: `SHP-${item.id}`,
          status: ["Arrived", "In Transit", "Delivered", "On Hold"][index % 4],
          warehouse: ["UAE", "KSA", "China"][index % 3],
          weight: `${Math.floor(Math.random() * 10) + 1} kg`,
          title: item.title
        }));
        setShipments(mapped); // Update parent App.jsx state
      })
      .catch(err => console.log(err));
  }, []);

  // Apply filters
  const filteredData = shipments.filter(
    s =>
      (filterStatus === 'All' || s.status === filterStatus) &&
      (filterWarehouse === 'All' || s.warehouse === filterWarehouse)
  );

  return (
    <div className="shipments-page">
      <div className="shipments-header">
        <h1>Shipments Dashboard</h1>
        <Link to="/shipments/create">
          <button className="create-shipment-btn">Create New Shipment</button>
        </Link>
      </div>

      <TopStats data={shipments} />

      <FilterBar
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterWarehouse={filterWarehouse}
        setFilterWarehouse={setFilterWarehouse}
      />

      <div className="shipments-table-container">
        <ShipmentsTable data={filteredData} />
      </div>
    </div>
  );
}