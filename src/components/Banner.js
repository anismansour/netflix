import React from 'react';
import './style/Banner.css';

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url("https://betterbe.co/wp-content/uploads/sites/12/2019/01/new-releases-netflix-canada-february-2018.jpg")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie name </h1>
        <div className="banner__buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className="banner__description">this is test description</h1>
      </div>
    </header>
  );
}

export default Banner;
