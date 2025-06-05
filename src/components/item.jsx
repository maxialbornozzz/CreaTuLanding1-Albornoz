const Item = ({ producto }) => {
  return (
    <div className="item-card">
      <img src={producto.img} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <p className="item-description">{producto.descripcion}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;