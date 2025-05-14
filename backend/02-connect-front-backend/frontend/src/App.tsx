import { useEffect, useState } from "react";
import "./App.css";

interface Joke {
  id: number;
  title: string;
  content: string;
}
function App() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  useEffect(() => {
    const fetchJokes = fetch(`/api/jokes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchJokes
      .then((response) => response.json())
      .then((data) => {
        setJokes(data);
      })
      .catch((error) => {
        console.error("There was a pro  lem with the fetch operation:", error);
      });
  });
  return (
    <div className="container">
      <h1 className="heading">Jokes App</h1>
      <div className="grid">
        {jokes.map((joke) => (
          <div className="card" key={joke?.id}>
            <h2 className="title">{joke?.title}</h2>
            <p className="content">{joke?.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
