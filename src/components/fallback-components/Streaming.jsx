import React, { useEffect, useState } from "react";

const Streaming = ({ fetchData, delay = 1000, placeholder = "Loading..." }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      const nextChunk = fetchData(index); // Get next data chunk
      if (nextChunk) {
        setContent((prev) => [...prev, nextChunk]);
        index++;
      } else {
        clearInterval(interval); // Stop streaming when no more chunks
      }
    }, delay);

    return () => clearInterval(interval);
  }, [fetchData, delay]);

  return (
    <div className="streaming-container">
      {content.length === 0 && <p className="text-gray-500">{placeholder}</p>}
      {content.map((chunk, idx) => (
        <div key={idx} className="streaming-chunk">
          👉🏻👉🏻👉🏻 {chunk}
        </div>
      ))}
    </div>
  );
};

export default Streaming;
// <StreamingfetchData={fetchData}delay={300}placeholder="Waiting for data..."/>
