import React, { useState } from "react";
import axios from "axios";

function RetrievalButton() {
  const [book, setBook] = useState("John");
  const [chapter, setChapter] = useState("3");
  const [verse, setVerse] = useState("16");
  const [specificVerse, setSpecificVerse] = useState("");

  const fetchSpecificVerse = async () => {
    try {
      const response = await axios.get(
        `https://labs.bible.org/api/?passage=${book}+${chapter}:${verse}&type=json`
      );
      const verseData = response.data[0];
      setSpecificVerse(`${verseData.bookname} ${verseData.chapter}:${verseData.verse} - ${verseData.text}`);
    } catch (error) {
      console.error("Error fetching specific verse:", error);
      setSpecificVerse("Failed to fetch the verse. Please check your input and try again.");
    }
  };

  return (
    <div className="section">
      <h2>Specific Verse</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <input
          type="text"
          placeholder="Chapter"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Verse"
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
        />
      </div>
      <button onClick={fetchSpecificVerse}>Get Specific Verse</button>
      {specificVerse && <p>{specificVerse}</p>}
    </div>
  );
}

export default RetrievalButton;