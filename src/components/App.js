import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from 'react';

function App() {
  //variables de estado
  const [data, setData] = useState(quotes);

  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });

  //pintar
  const htmlData = data.map((quote, index) => {
    return (
      <li key={index}>
        <p>{quote.quote}</p>
        <p>{quote.character}</p>
      </li>
    );
  });

  const handleNewQuote = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    setNewQuote({ ...newQuote, [inputId]: inputValue });
  };

  const handleAddQuote = (ev) => {
    ev.preventDefault();
    setData([...data, newQuote]);
  };

  return (
    <div>
      <h1>Frases de Friends</h1>
      <ul>{htmlData}</ul>
      <h2>Añadir una nueva frase</h2>
      <form>
        <label for="text">Frase</label>
        <input
          type="text"
          onChange={handleNewQuote}
          value={newQuote.quote}
          id="quote"
        />
        <br />
        <label for="text">Personaje</label>
        <input
          type="text"
          onChange={handleNewQuote}
          value={newQuote.character}
          id="character"
        />
        <br />
        <button onClick={handleAddQuote}>Añadir la nueva frase</button>
      </form>
    </div>
  );
}

export default App;
