import productos from '../productos';
import ItemList from './ItemList';

function ItemListContainer({ mensaje }) {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{mensaje}</h2>
      <ItemList productos={productos} />
    </section>
  );
}

export default ItemListContainer;