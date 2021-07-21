function Box(props) {
  const { className, content } = props;
  return (
    <div className={`box ${className}`}>
      <h1>{content}</h1>
    </div>
  );
}

const element = (
  <div className="main-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="mini-container">
      <Box className="box1" content="small" />
      <Box className="box2" content="medium" />
      <Box className="box3" content="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
