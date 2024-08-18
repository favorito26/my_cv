import React from 'react';

const Home = () => {
  return (
    <div
      id="home"
      className="d-flex justify-content-center align-items-center bg-nav text-white"
      style={{ minHeight: "100vh", padding: "0 1rem" }}
    >
      <div className="text-left">
        <div
          className="py-3 px-4 rounded"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            borderRadius: "10px",
          }}
        >
          <h2 className="text rounded">Hi There!</h2>
          <h1 className="mb-3">I am Mufaddal Chhatriwala</h1>
          <h3 className="mb-4">I love playing with codes</h3>
          <p className="mb-5">
            Far far away, behind the comment mountains, far from the countries
            lorem and ipsum, there lives him.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
