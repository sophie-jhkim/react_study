import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>This is home page</p>
      <Link to="/about">Go to the About Page!</Link>
      <button
        onClick={() => {
          navigate('/layout/56');
        }}
      >
        Go to layout, with a number
      </button>
    </div>
  );
};

export default Home;
