import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  
  // Create an empty array, push twice only the cards used values and shuffle it
  const createArray = (cardsAPI) => {
    let finalCards = [];
    cardsAPI.entries.map(function(el){
      finalCards.push({
        url: el.fields.image.url,
        id: el.fields.image.uuid,
        visible: false
      });
      finalCards.push({
        url: el.fields.image.url,
        id: el.fields.image.uuid,
        visible: false
      })
      return null;
    });
    finalCards = finalCards.sort(() => Math.random() - 0.5);
    setCards([...finalCards]);
    setMaxMoves(finalCards.length + 2);
    setMaxChecks(finalCards.length / 2);
  }
 
  // State
  const [userName, setUserName] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [maxMoves, setMaxMoves] = React.useState(0);
  const [maxChecks, setMaxChecks] = React.useState(0);
  const [modalType, setModalType] = React.useState('begin');
  const [modalVisible, setModalVisible] = React.useState(true);
  const [moves, setMoves] = React.useState(0);
  const [checks, setChecks] = React.useState(0);
  const [errors, setErrors] = React.useState(0);
  const [firstCard, setFirstCard] = React.useState([null, null]);

  // API Fetch
  React.useEffect(() => {
    fetch('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=9')
        .then((response) => response.json())
        .then((data) => {
          createArray(data);
        })
        .catch((err) => {
          console.log(err.message);
          setError(true);
        });
   }, []);

  // Search user name in LocalStorage
  let localUserName = localStorage.getItem('MG_UserName');

  if(localUserName !== null && userName === null){
    setUserName(localUserName);
    setModalVisible(true);
    setModalType('welcome');
  }

  // Function to flip de cards: cardIds must be an array, visible must be a boolean
  const flipCards = (cardIds, visible) => {
    let updatedCards = [...cards];
    cardIds.map((el) => {
      updatedCards[el].visible = visible;
    })
    setCards(updatedCards);
  };
  const setName = (name) => {
    localStorage.setItem('MG_UserName', name);
    setModalVisible(true);
    setModalType('welcome');
  }
  const beginGame = () => {
    setModalVisible(false);
  }
  // This runs when the card is clicked: el is the DOM element clicked, i is the index of that element in the cards array
  const selectCard = (el, i) => {
    flipCards([i], true);
    if(firstCard[0]){
      // It's the second card
      let firstCardId = firstCard[1];
      let secondCardId = i;
      // Asks if the second card is the same of the first card
      if(firstCard[0].id === el.id){
        if(checks === (cards.length / 2) - 1){
          setModalVisible(true);
          setModalType('win');
        }
        setChecks(checks + 1);
      } else {
        setErrors(errors + 1);
        setTimeout(() => flipCards([firstCardId, secondCardId]), 2000);
      };
      setFirstCard([null, null]);
      if(moves === maxMoves - 1){
        setModalVisible(true);
        setModalType('limit')
      } else {
        setMoves(moves + 1);
      }
    } else{
      // It's the first card
      setFirstCard([el, i]);
    }
  };
  // Render if fetch fails
  if(error){
    return(
      <div className='w-full text-center'>
        <h1 className='title'>Ocurrió un error. </h1>
        <p className='normalText'>Recarga la página o intentalo más tarde</p>
      </div>
    ) 
  }
  return (
    <React.Fragment>
      <Header 
        moves={moves} 
        checks={checks} 
        errors={errors} 
        maxMoves={maxMoves} 
        maxChecks={maxChecks} 
      />
      <Main 
        modalVisible={modalVisible} 
        modalType={modalType} 
        cards={cards} 
        selectCard={selectCard} 
        userName={userName} 
        setName={setName} 
        beginGame={beginGame}
        moves={moves} 
        checks={checks} 
        errors={errors}
        maxMoves={maxMoves} 
        maxChecks={maxChecks}
      />
      <Footer />
    </React.Fragment>
  );
}
export default App;