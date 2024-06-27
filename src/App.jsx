import './App.css';
import { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [totalAgility, setTotalAgility] = useState(0);
  const [totalStrength, setTotalStrength] = useState(0);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = (zombie) => {
    const existingTeam = team.filter((member) => member.name === zombie.name);
    const updatedTeam = zombieFighters.filter((member) => member !== zombie);
    if (money >= zombie.price && existingTeam.length === 0) {
      const deduction = money - zombie.price;
      setZombieFighters(updatedTeam);
      setMoney(deduction);
      setTeam([...team, zombie]);
      setTotalStrength(totalStrength + zombie.strength);
      setTotalAgility(totalAgility + zombie.agility);
    } else {
      console.log('Not enough money or fighter already on team');
    }
  };

  const handleRemoveFighter = (fighter) => {
    const refund = money + fighter.price;
    const updatedTeam = team.filter((member) => member !== fighter);
    setZombieFighters([...zombieFighters, fighter]);
    setTeam(updatedTeam);
    setMoney(refund);
    setTotalStrength(totalStrength - fighter.strength);
    setTotalAgility(totalAgility - fighter.agility);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength:{totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team:</h2>
      {team.length === 0 && <h2>Pick some Team Members!</h2>}
      <ul>
        {team.map((fighter, index) => {
          return (
            <li key={index}>
              <div>Name: {fighter.name}</div>
              <div>Strength: {fighter.strength}</div>
              <div>Agility: {fighter.agility}</div>
              <img src={fighter.img} alt={fighter.name} />
              <div>
                <button onClick={() => handleRemoveFighter(fighter)}>
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((zombie, index) => (
          <li key={index}>
            <div>Name: {zombie.name}</div>
            <div>Price: {zombie.price}</div>
            <div>Strength: {zombie.strength}</div>
            <div>Agility: {zombie.agility}</div>
            <img src={zombie.img} alt={zombie.name} />
            <div>
              <button onClick={() => handleAddFighter(zombie)}>Add</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
