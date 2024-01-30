import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (id) => {
    setFeatPupId(id);
  };

  const featPup = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <div className="container">
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}
      {featPup && (
        <div className="feat-pup-container">
          <h2>{featPup.name}</h2>
          <ul>
            <li>Age: {featPup.age}</li>
            <li>Email: {featPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
