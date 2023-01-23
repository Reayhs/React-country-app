import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [country, setCountry] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      if (name === "") {
        const res = await axios.get(`https://restcountries.com/v3.1/all `);
        console.log(res.data);
        setCountry(res.data);
      } else {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        console.log(res.data);
        setCountry(res.data);
      }
    })();
  }, [name]);

  return (
    <>
      <div className="input-wr">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Search"
        />
      </div>

      <div className="wrapper">
        {country.map((data, index) => (
          <List data={data} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
