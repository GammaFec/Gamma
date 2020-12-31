import React from 'react';

const Dot = ({click , index}) => {
  const handler = () => {
    console.log('clicked!!')
  }
  return (
      <button onClick={click} ></button>
 );
};

export default Dot;
