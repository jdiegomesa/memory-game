import Card from "./card";
import Modal from "./modal";

function Main(props){
  return(
    <main className="MGCards flex flex-row flex-wrap w-11/12 mx-auto my-3 justify-between max-w-7xl lg:w-full">
      {
        props.modalVisible &&
          <Modal 
            modalType={props.modalType} 
            userName={props.userName}
            setName={props.setName} 
            beginGame={props.beginGame} 
            moves={props.moves} 
            checks={props.checks} 
            errors={props.errors}
            maxMoves={props.maxMoves} 
            maxChecks={props.maxChecks}
          />
      }
      {
        props.cards.map((el, i) =>
          <Card 
            visible={el.visible}
            imageURL={el.url}
            handleClick={() => props.selectCard(el, i)}
            key={i}
            id={i} 
          />
        )
      }
    </main>
  )
};
export default Main;