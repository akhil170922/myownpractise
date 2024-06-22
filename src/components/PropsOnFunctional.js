function PropsOnFunctional(props) {
  console.log(props);
  return (
    <>
      My Name: {props.name},
      {props.address}
      {props.children} 
    </>
  );
}
export default PropsOnFunctional;

