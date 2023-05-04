function ProgressBar(props) {
  let styles = {
    width: `${props.progress}%`,
  };
  return (
    <div className="MGHeader-data-element w-full">
      <div className="MGHeader-data-element-text subtitle py-1">{props.title} </div>
      <div className="MGHeader-data-element-bar w-full bg-five rounded-xl">
        <div 
          className={`MGHeader-data-element-bar-color ${props.color} rounded-xl flex justify-center duration-500 overflow-hidden`}
          style={styles}
        >
          <div className="MGHeader-data-element-bar-text normal-text">{props.progressNumber}</div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;