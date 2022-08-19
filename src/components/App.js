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

  const [filterQuote, setFilterQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('all');

  //pintar

  const handleFilterQuote = (ev) => {
    setFilterQuote(ev.target.value);
  };

  const handleFilterCharacter = (ev) => {
    setFilterCharacter(ev.target.value);
  };

  const htmlData = data
    .filter((item) => {
      if (filterCharacter === 'all') {
        return true;
      } else if (filterCharacter === item.character) {
        return true;
      } else {
        return false;
      }
    })
    .filter((item) => {
      return item.quote.toLowerCase().includes(filterQuote.toLowerCase());
    })
    .map((quote, index) => {
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
    // Reset filter
    setFilterQuote('');
    setFilterCharacter('all');
  };

  return (
    <div>
      <h1>Frases de Friends</h1>
      <form>
        <label htmlFor="character">Filtrar por frase:</label>
        <input
          type="text"
          name="quote"
          id="quote"
          value={filterQuote}
          onChange={handleFilterQuote}
        />
        <label htmlFor="character">Filtrar por personaje:</label>
        <select value={filterCharacter} onChange={handleFilterCharacter}>
          <option value="all">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
      </form>
      <ul>{htmlData}</ul>
      <h2>Añadir una nueva frase</h2>
      <form>
        <label htmlFor="quote">Frase</label>
        <input
          type="text"
          onChange={handleNewQuote}
          value={newQuote.quote}
          id="quote"
        />
        <br />
        <label htmlFor="character">Personaje</label>
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
