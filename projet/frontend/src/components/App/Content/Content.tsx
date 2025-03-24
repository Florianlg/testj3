import Products from './Products/Products';
import Cart from './Cart/Cart';

import './Content.scss';

function Content() {
  return (
    <main className="content-grid">
      <Products />
      <Cart />
    </main>
  );
}

export default Content;
