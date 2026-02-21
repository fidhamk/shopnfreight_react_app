// src/pages/ShipmentCreate.jsx
import ShipmentForm from '../components/ShipmentForm.jsx';

export default function ShipmentCreate({ addShipment }) {
  return (
    <ShipmentForm addShipment={addShipment} />
  );
}