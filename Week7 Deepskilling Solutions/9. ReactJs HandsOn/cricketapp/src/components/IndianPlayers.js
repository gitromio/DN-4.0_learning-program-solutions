import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Pant', 'Bumrah', 'Hardik'];
  const RanjiTrophyPlayers = ['Prithvi', 'Sarfaraz', 'Shaw', 'Rahane', 'Iyer'];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      
      <h3>Odd Players</h3>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Players</h3>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>List of Indian Players Merged: </h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
