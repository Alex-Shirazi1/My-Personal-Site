import React from 'react';
import '../App.css';

const Home = () => {
    return (
      <div className="home-background" style={{ backgroundImage: `url('/homeImage.jpg')` }}>
        <div className="content">
          <h1>Welcome to My Personal Website</h1>
          <h1>Alex Shirazi</h1>
          <p> ... </p>
        </div>
      </div>
    );
  }

export default Home;
