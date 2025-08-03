import React from 'react';

const SyntheticEventDemo = () => {
  const handleClick = (e) => {
    e.preventDefault(); // Demonstrates synthetic event
    alert("I was clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Synthetic Click</button>
    </div>
  );
};

export default SyntheticEventDemo;
