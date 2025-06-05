import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={{ padding: '1rem'}}>
      <h1>GameNoz</h1>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;