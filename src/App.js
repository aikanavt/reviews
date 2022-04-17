import React from "react";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h1>Our Reviews</h1>
          <div className="underline"></div>
          <Review />
        </div>
      </section>
    </main>
  );
}

export default App;
