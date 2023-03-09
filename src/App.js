import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Wilder from "./components/Wilder";

function App() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:8000/api/wilder");
      setWilders(wilders.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders?.map((wilderData, key) => {
            return (
              <Wilder
                key={key}
                name={wilderData.name}
                skills={wilderData.skills}
              />
            );
          })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
