function GenericImage(props) {
  const imageStyle = {
    padding: props.padding ? props.padding : 5,
  };
  return (
    <div style={imageStyle}>
      <img
        src={props.url}
        alt={props.alt}
        width={props.width ? props.width : 50}
      />
    </div>
  );
}

export default GenericImage;
