import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "FIRST book",
      description: "FIRST book I wrote",
      price: 100,
    },
    {
      id: 2,
      title: "SECOND book",
      description: "SECOND book I wrote",
      price: 85,
    },
    {
      id: 3,
      title: "Third Book",
      description: "Third book I wrote",
      price: 100,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
