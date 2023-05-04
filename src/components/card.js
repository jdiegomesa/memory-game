function Card(props){

  return(
    <div 
      className={`MGCards-element relative rounded-md overflow-hidden mb-3 z-0 cursor-pointer ${props.visible && 'visible'}`} 
      onClick={!props.visible ? props.handleClick : undefined}
    >
      <div className="MGCards-element-back absolute duration-1000 w-full h-full"></div>
      <div className="MGCards-element-front w-full p-2 duration-1000 bg-two">
        <div className="MGCards-element-front-image aspect-w-2 aspect-h-3">
          <img className="object-cover" src={props.imageURL} alt=""/>
        </div>
      </div>
    </div>
  )
};
export default Card;