import { useRef } from 'react';

function Modal(props){
  let title;
  let text;
  let buttonText;
  let handleClick;

  if(props.modalType === 'begin'){
    title = 'Bienvenid@';
    text = 'Ingresa tu nombre';
    buttonText = 'Siguiente';
    handleClick = () => props.setName(ref.current);
  } else if(props.modalType === 'welcome'){
    title = `Hola ${props.userName}`;
    text = `Este juego pondrá a prueba tu memoria. Selecciona una carta para voltearla y luego otra para encontrar la carta con el mismo animal. Debes encontrar las ${props.maxChecks} parejas y tienes máximo ${props.maxMoves} movimientos para hacerlo.`;
    buttonText = 'Iniciar juego';
    handleClick = props.beginGame;
  } else if (props.modalType === 'win'){
    title = `¡${props.userName}, ganaste!`;
    text = `Felicidades, hiciste ${props.moves} movimientos y tuviste ${props.errors} errores`;
    buttonText = null;
  } else{
    title = 'UPS';
    text = `Completaste los ${props.maxMoves} movimientos y te hicieron falta ${props.maxChecks - props.checks} parejas. `;
    buttonText = null;
  }

  const ref = useRef(0);

  const handleInputChange = (el) => {
    ref.current = el.value;
  }
  return(
    <section className="MGModal w-full h-full fixed inset-0 flex items-center justify-center z-10">
      <div className="MGModal-container w-10/12 rounded-2xl flex flex-col justify-center p-8 lg:w-1/3">
        <h2 className="MGModal-title title text-center">{title}</h2>
        <p className="MGModal-text normal-text text-center">{text}</p>
        {
          props.modalType === 'begin' &&
            <input className="MGModal-input border-five border-2 rounded-md normal-text p-2 my-2" onChange={(event) => handleInputChange(event.target)}/>
        }
        {
          buttonText &&
            <button className="MGModal-button.normal-text bg-one rounded-md w-max py-2 px-4 mx-auto mt-2 text-three hover:bg-four duration-500" onClick={handleClick}>{buttonText}</button>
        }
      </div>
    </section>
  )
};

export default Modal;