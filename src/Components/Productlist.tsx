import "./Productlist.css";
import { Products } from "./Product.tsx";

interface ProductListProps {
  ProductProps: Products[];
  addToCart: (title: string) => void;
}

const ProductList = ({ ProductProps, addToCart }: ProductListProps) => {
  return (
    <section className="product-list">
      {ProductProps.map((product, index) => (
        <article key={index} className="product-card">
          <h1 className="product-title">{product.title}</h1>
          <h2 className="product-author">{product.author}</h2>
          <p className="product-text">{product.text}</p>
          <button
            className="product-button"
            onClick={() => addToCart(product.title)}
          >
            Add to cart
          </button>
        </article>
      ))}
    </section>
  );
};

export default ProductList;
