import React from 'react';

const WelcomeButton = () => {
  const sayWelcome = (msg) => {
    alert("Message: " + msg);
  };

  return (
    <div>
      <button onClick={() => sayWelcome("Welcome to React Events!")}>
        Say Welcome
      </button>
    </div>
  );
};

export default WelcomeButton;
