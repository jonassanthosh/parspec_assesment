import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5ba8efb23100007200c2750c')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);


  const handleInputChange = event => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredItems = items.filter(item => {
      const values = Object.values(item);
      const concatenatedValues = values.join(' ').toLowerCase();
      const queryValue = query.toLowerCase();
      return concatenatedValues.includes(queryValue);
    });
    setSearchResults(filteredItems);
  };

  const handleKeyDown = event => {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex(index =>
        index < searchResults.length - 1 ? index + 1 : index
      );
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex(index => (index > 0 ? index - 1 : 0));
    }
  };

  console.log(searchResults)
  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {searchResults.length !== 0 ? (
          <>
            {searchResults.map((result, index) => (
              <>
                <div
                  key={index}
                  className={index === highlightedIndex ? "highlighted" : ""}
                >
                  <Card result={result} index={index} highlightedIndex={highlightedIndex} />
                </div>
              </>
            ))}
          </>
        ) : (
            <>
              <br/>
            <div>
            No user Found
              </div>
            </>
        )}
        
      </div>
    </div>
  );
}

export default App;
