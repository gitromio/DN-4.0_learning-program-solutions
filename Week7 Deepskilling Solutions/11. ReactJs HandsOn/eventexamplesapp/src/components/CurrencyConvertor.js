import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const result = (parseFloat(rupees) / 90).toFixed(2); // 1 Euro ≈ ₹90
    setEuro(result);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert to Euro</button>
      {euro && <p>Converted Amount: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
