import { shipmentsData } from '../data/shipmentsData.js';
import TopStats from '../components/Topstats.jsx';
import FilterBar from '../components/FilterBar.jsx';
import ShipmentsTable from '../components/ShipmentsTable.jsx';
import { useState } from 'react';

export default function Shipments() {
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterWarehouse, setFilterWarehouse] = useState('All');

  const filteredData = shipmentsData.filter(
    s => (filterStatus === 'All' || s.status === filterStatus) &&
         (filterWarehouse === 'All' || s.warehouse === filterWarehouse)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shipments Dashboard</h1>
      <TopStats data={shipmentsData} />
      <FilterBar
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterWarehouse={filterWarehouse}
        setFilterWarehouse={setFilterWarehouse}
      />
      <ShipmentsTable data={filteredData} />
    </div>
  );
}
