import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [data, setData] = useState({ charater: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://xivapi.com/character/7348035");
      setData(res.data);
      console.log(res);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <p>My FFXIV react app!!! Wooohoo</p>
      <div>
        {data.map((char) => (
          <p key={char.id}>{char.name}</p>
        ))}
      </div>
      {/* <ul>
        {data.character.map((features) => (
          <li key={data.id}>
            <p>{features.name}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
