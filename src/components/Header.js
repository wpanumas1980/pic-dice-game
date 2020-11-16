import React from 'react';

function Header({reset}) {
  return (
    <div className="header" onClick={reset}>
      <button className="btn">New Game</button>
    </div>
  );
}

export default Header;