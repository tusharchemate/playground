const Progress = (props) => {
  const { completed, color } = props;
  const outerDiv = {
    width:'100%',
    backgroundColor:'#fff',
    height:'50px',
  };

  const innerDiv = {
    width: `${completed}%`,
    backgroundColor:color,
    height:'30px',
    marginTop:'10px'
  };

  return (
    <div style={outerDiv}>
      <div style={innerDiv}>{completed} %</div>
    </div>
  );
};

export default Progress;
