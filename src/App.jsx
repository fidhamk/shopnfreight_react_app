import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Shipments from './pages/shipments.jsx';
import ShipmentsCreate from './pages/ShipmentsCreate.jsx';
import ShipmentDetails from './pages/shipmentsDetails.jsx';
import { useState } from 'react';
import { shipmentsData } from './data/shipmentsData.js';

function App() {
  const [shipments, setShipments] = useState(shipmentsData);

  const addShipment = (newShipment) => {
    setShipments([...shipments, newShipment]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Shipments shipments={shipments} />} />
        <Route path="/shipments" element={<Shipments shipments={shipments} />} />
        <Route path="/shipments/create" element={<ShipmentsCreate addShipment={addShipment} />} />
        <Route path="/shipments/:id" element={<ShipmentDetails shipments={shipments} />} />
      </Routes>
    </Layout>
  );
}

export default App;