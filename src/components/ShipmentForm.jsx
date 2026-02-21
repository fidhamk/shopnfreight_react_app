// src/components/ShipmentForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customers } from "../data/customers.js";
import "../styles/ShipmentForm.css";

const warehouses = ["UAE", "KSA", "China"];

export default function ShipmentForm({ addShipment }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    suitNumber: "",
    warehouse: "",
    weight: "",
    length: "",
    width: "",
    height: "",
  });

  const [errors, setErrors] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  const validate = () => {
    const newErrors = {};

    const suitExists = customers.some(
      (c) => c.suit.toLowerCase() === formData.suitNumber.toLowerCase()
    );

    if (!formData.suitNumber || !suitExists)
      newErrors.suitNumber = "Invalid Suit Number";

    if (!warehouses.includes(formData.warehouse))
      newErrors.warehouse = "Select valid warehouse";

    if (!formData.weight || Number(formData.weight) <= 0)
      newErrors.weight = "Weight must be greater than 0";

    if (!formData.length || Number(formData.length) <= 0)
      newErrors.length = "Length must be greater than 0";

    if (!formData.width || Number(formData.width) <= 0)
      newErrors.width = "Width must be greater than 0";

    if (!formData.height || Number(formData.height) <= 0)
      newErrors.height = "Height must be greater than 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSuitChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, suitNumber: value });

    const filtered = customers.filter((c) =>
      c.suit.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newShipment = {
      id: `SHP-${Date.now()}`,
      status: "Arrived",
      arrived: "yes",
      ...formData,
    };

    addShipment(newShipment);
    navigate("/shipments");
  };

  return (
    <div className="create-shipment-page">
      <h1>Create Shipment</h1>

      <form className="shipment-form" onSubmit={handleSubmit}>
        {/* Suit Number */}
        <div className="form-group">
          <label>Suit Number</label>
          <input
            type="text"
            value={formData.suitNumber}
            onChange={handleSuitChange}
            placeholder="Start typing..."
          />
          {errors.suitNumber && (
            <span className="error">{errors.suitNumber}</span>
          )}

          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((c) => (
                <li
                  key={c.suit}
                  onClick={() => {
                    setFormData({ ...formData, suitNumber: c.suit });
                    setSuggestions([]);
                  }}
                >
                  {c.suit} - {c.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Warehouse */}
        <div className="form-group">
          <label>Warehouse</label>
          <select
            value={formData.warehouse}
            onChange={(e) =>
              setFormData({ ...formData, warehouse: e.target.value })
            }
          >
            <option value="">Select Warehouse</option>
            {warehouses.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
          {errors.warehouse && (
            <span className="error">{errors.warehouse}</span>
          )}
        </div>

        {/* Weight, Length, Width, Height in 2 rows */}
        <div className="form-row">
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) =>
                setFormData({ ...formData, weight: e.target.value })
              }
            />
            {errors.weight && <span className="error">{errors.weight}</span>}
          </div>

          <div className="form-group">
            <label>Length (cm)</label>
            <input
              type="number"
              value={formData.length}
              onChange={(e) =>
                setFormData({ ...formData, length: e.target.value })
              }
            />
            {errors.length && <span className="error">{errors.length}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Width (cm)</label>
            <input
              type="number"
              value={formData.width}
              onChange={(e) =>
                setFormData({ ...formData, width: e.target.value })
              }
            />
            {errors.width && <span className="error">{errors.width}</span>}
          </div>

          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              value={formData.height}
              onChange={(e) =>
                setFormData({ ...formData, height: e.target.value })
              }
            />
            {errors.height && <span className="error">{errors.height}</span>}
          </div>
        </div>

        <button type="submit">Submit Shipment</button>
      </form>
    </div>
  );
}