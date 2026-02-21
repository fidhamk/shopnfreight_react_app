import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopStats from '../components/Topstats.jsx';
import FilterBar from '../components/FilterBar.jsx';
import ShipmentsTable from '../components/ShipmentsTable.jsx';
import '../styles/Shipments.css';

export default function Shipments({ shipments }) {
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterWarehouse, setFilterWarehouse] = useState('All');

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
          <button className="create-shipment-btn">
            Create New Shipment
          </button>
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
