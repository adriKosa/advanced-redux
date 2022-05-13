import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 100,
    title: 'cellphone',
    description: 'Xiaomi cellphone'
  },
  {
    id: 'p2',
    price: 10,
    title: 'headphones',
    description: 'Wireless headphones'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product =>
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />)}
      </ul>
    </section>
  );
};

export default Products;
