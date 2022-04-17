import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [id, setId] = useState(1);
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === id) {
      randomNumber = id + 1;
    }
    setId(randomNumber);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={people[id].image} className="person-img" />
      </div>
      <h4>{people[id].name}</h4>
      <p className="job">{people[id].job}</p>
      <p>{people[id].text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            if (id === 1) {
              setId(people.length - 1);
            } else {
              setId(id - 1);
            }
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            if (id === people.length - 1) {
              setId(1);
            } else {
              setId(id + 1);
            }
          }}
        >
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
