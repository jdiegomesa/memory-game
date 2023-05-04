import ProgressBar from "./progressBar";

function Header(props) {
  return (
    <header className="MGHeader flex flex-col lg:flex-row max-w-7xl mx-auto lg:justify-between lg:mb-10"> 
      <div className="MGHeader-title bg-five w-screen rounded-b-xl py-2 lg:w-2/5 lg:flex lg:items-center">
        <h1 className="MGHeader-title-text title w-4/5 mx-auto text-center text-three">Memory Game</h1>
      </div>
      <div className="MGHeader-data w-11/12 mx-auto lg:w-2/5 lg:mx-0">
        <ProgressBar title="Movimientos" color="bg-three" progress={(props.moves / props.maxMoves) * 100} progressNumber={props.moves}/>
        <ProgressBar title="Aciertos" color="bg-two" progress={(props.checks / props.maxChecks) * 100} progressNumber={props.checks}/>
        <ProgressBar title="Errores" color="bg-four" progress={(props.errors / props.maxMoves) * 100} progressNumber={props.errors}/>
      </div>
    </header>
  );
}
export default Header;