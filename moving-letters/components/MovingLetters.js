import { useEffect, useState } from "react";

const MovingLetters = ({ text }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Split the text into words
    const wordArray = text.split(" ");
    setWords(wordArray);
  }, [text]);

  return (
    <div className="flex flex-wrap justify-center p-4">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block m-1 text-white text-sm hover:animate-float"
          onMouseOver={(e) => {
            e.target.style.transform = `translate(${Math.random() * 100 - 50}px, ${
              Math.random() * 100 - 50
            }px)`;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translate(0, 0)";
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default MovingLetters;