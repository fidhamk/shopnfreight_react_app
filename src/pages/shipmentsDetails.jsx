// src/pages/ShipmentDetails.jsx
import { useParams } from 'react-router-dom';

export default function ShipmentDetails({ shipments }) {
  const { id } = useParams(); // get the shipment id from URL
  const shipment = shipments.find(s => s.id === id); // find the shipment data

  if (!shipment) return <p>Shipment not found!</p>;

  return (
    <div>
      <h1>Shipment Details</h1>
      <p><strong>ID:</strong> {shipment.id}</p>
      <p><strong>Status:</strong> {shipment.status}</p>
      <p><strong>Warehouse:</strong> {shipment.warehouse}</p>
      <p><strong>Weight:</strong> {shipment.weight}</p>
      <p><strong>Arrived:</strong> {shipment.arrived}</p>
      {/* Add more details if needed */}
    </div>
  );
}