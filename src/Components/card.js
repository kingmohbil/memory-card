import { useState, useEffect } from 'react';
const Card = ({ text, source, handleClick, handleLost, incrementScore }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleCardClickCount = () => {
    setClickCount((count) => count + 1);
    incrementScore();
    handleClick();
  };

  useEffect(() => {
    if (clickCount === 2) {
      setClickCount(0);
      handleLost();
    }
  }, [clickCount]);

  return (
    <>
      <div className="card h-100" onClick={handleCardClickCount}>
        <img src={source} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
