import React, { useState } from "react";
import productsData from "../data";
import "./Products.css";

const Products = ({ addToCart }) => {
  const [products] = useState(productsData);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [brandFilter, setBrandFilter] = useState("All");

  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "All" || product.category === categoryFilter) &&
      (brandFilter === "All" || product.brand === brandFilter)
    );
  });

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      {/* Filters */}
      <div className="filters">
        <select onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Protein">Protein</option>
          <option value="Creatine">Creatine</option>
          <option value="Pre Workout">Pre Workout</option>
          <option value="Gainer">Gainer</option>
          <option value="Shaker">Shaker</option>
           <option value="Vitamins">Vitamins</option>
        </select>

        <select onChange={(e) => setBrandFilter(e.target.value)}>
          <option value="All">All Brands</option>
          <option value="Muscleblaze">Muscleblaze</option>
          <option value="Optimum Nutrition">Optimum Nutrition</option>
          <option value="MyProtein">MyProtein</option>
          <option value="GNC">GNC</option>
        </select>
      </div>

      {/* Products */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>

            {product.bonus && (
              <div className="bonus">{product.bonus}</div>
            )}

            <img src={product.image} alt={product.name} />

            <h3>{product.name} ({product.weight})</h3>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p className="price">NPR {product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;