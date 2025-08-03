import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 85 },
    { name: "Rahul", score: 45 },
    { name: "Dhoni", score: 75 },
    { name: "Pant", score: 30 },
    { name: "Bumrah", score: 5 },
    { name: "Jadeja", score: 55 },
    { name: "Ashwin", score: 20 },
    { name: "Shami", score: 10 },
    { name: "Gill", score: 95 },
    { name: "Surya", score: 40 }
  ];

  const filteredPlayers = players.filter(player => player.score <= 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
