import { useState, useEffect } from 'react';
import './App.css';
// importing the Header and Card Components that makes our application
import Header from './Components/header';
import Card from './Components/card';
// importing the images that we are going to use
import brainstorm from './pics/Brainstorm.png';
import jetray from './pics/Jetray.png';
import ripjaws from './pics/ripjaws.png';
import loadStar from './pics/Lodestar.png';

function App() {
  // objects that group the cards details
  const card1 = cardDetails(brainstorm, 'Brain Storm');
  const card2 = cardDetails(jetray, 'Jetray');
  const card3 = cardDetails(ripjaws, 'Ripjaws');
  const card4 = cardDetails(loadStar, 'Load Star');

  // a couple of states to control the flow of the application
  const [lose, setLose] = useState(false);
  const [cardsOrder, setCardsOrder] = useState([1, 2, 3, 4]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  // a function to handle the shuffle of the cards on each click
  const handleClickOnCard = () => {
    const order = [...cardsOrder];
    shuffle(order);
    setCardsOrder([order[0], order[1], order[2], order[3]]);
  };

  // a function to work each time you lose
  const win = () => {
    setScore(0);
    setLose(true);
  };

  // a function to increment the current score
  const incrementScore = () => setScore((score) => score + 1);

  // a use effect to shuffle the cards on mounting
  useEffect(() => {
    handleClickOnCard();
    if (best < score && score < cardsOrder.length + 1) {
      setBest(score);
    }
  }, [score]);
  return (
    <div className="App">
      <Header score={score} best={best} />
      <center>
        <div className="row row-cols-1 row-cols-md-4 g-4" id="cards-container">
          <div className="col" style={{ order: cardsOrder[1] }}>
            <Card
              {...card1}
              handleClick={handleClickOnCard}
              handleLost={win}
              incrementScore={incrementScore}
            />
          </div>
          <div className="col" style={{ order: cardsOrder[0] }}>
            <Card
              {...card2}
              handleClick={handleClickOnCard}
              handleLost={win}
              incrementScore={incrementScore}
            />
          </div>
          <div className="col" style={{ order: cardsOrder[2] }}>
            <Card
              {...card3}
              handleClick={handleClickOnCard}
              handleLost={win}
              incrementScore={incrementScore}
            />
          </div>
          <div className="col" style={{ order: cardsOrder[3] }}>
            <Card
              {...card4}
              handleClick={handleClickOnCard}
              handleLost={win}
              incrementScore={incrementScore}
            />
          </div>
        </div>
      </center>
      <center>
        {lose ? (
          <>
            {' '}
            <span style={{ color: 'red' }}>
              *Game over you clicked a card more than one time
            </span>
            <br />
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                setScore(0);
                setBest(0);
                setLose(false);
              }}
            >
              Click Here to reset
            </button>
          </>
        ) : (
          ''
        )}
      </center>
    </div>
  );
}

// a factory to return an object with the card details
function cardDetails(source, text) {
  return {
    source,
    text,
  };
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export default App;
