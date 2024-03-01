import React, { useState } from "react";

const XDictionary = () => {
  // Initialize dictionary state
  const initialDictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  // State for the search term and result message
  const [searchTerm, setSearchTerm] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  // Function to handle search
  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = initialDictionary.find(
      (entry) => entry.word.toLowerCase() === lowerCaseSearchTerm
    );

    if (foundWord) {
      setResultMessage(`Definition: ${foundWord.meaning}`);
    } else {
      setResultMessage("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <label htmlFor="searchInput"></label>
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        placeholder="Search for a word..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {resultMessage && (
          <p>
            <strong>{resultMessage}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default XDictionary;
