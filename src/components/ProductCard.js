import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://via.placeholder.com/200"
          alt={product.name}
        />
      </div>

      <h3>{product.name}</h3>
      <p className="price">Rs. {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;