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
          Welcome! I specialize in delivering top-notch software solutions tailored to meet your unique needs. <br /> Whether you’re looking to develop a new application, optimize existing systems, or tackle technical challenges, <br /> I’m here to help. <br /> Explore my portfolio to see how I can turn your ideas into reality and drive your projects to success.


          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
