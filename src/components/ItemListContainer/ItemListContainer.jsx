const ItemListContainer = (props) => {
  const { saludo } = props;

  return (
    <div>
      <h2>Hola {saludo}</h2>
    </div>
  );
};

export default ItemListContainer;
