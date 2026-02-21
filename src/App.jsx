import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Shipments from './pages/shipments.jsx';
import ShipmentsCreate from './pages/ShipmentsCreate.jsx';
import { useState } from 'react';
import { shipmentsData } from './data/shipmentsData.js'; // 👈 IMPORT DATA

function App() {
  const [shipments, setShipments] = useState(shipmentsData); // 👈 USE IT HERE

  const addShipment = (newShipment) => {
    setShipments([...shipments, newShipment]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Shipments shipments={shipments} />} />
        <Route path="/shipments" element={<Shipments shipments={shipments} />} />
        <Route
          path="/shipments/create"
          element={<ShipmentsCreate addShipment={addShipment} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
