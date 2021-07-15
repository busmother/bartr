import React, { useState } from "react";
import Button from './Button'

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };


  return (
    <div>
          <Button handleClick={handleClick} label = "Like" />
        <h5>Likes: {count}</h5>
    </div>
  );
}

export default Counter;