import React from 'react';
import { Link } from 'react-router-dom';

function WondersBox({ wonder }) {
  return (
    <Link to={`/wonders/${wonder._id}`}>
      <article className="wonder-box">
        <center className="indexTags">{wonder.name}</center>
        <img className="indexImage" src={wonder.image} alt={wonder.name}/>
      </article>
    </Link>
  );
}

export default WondersBox;
