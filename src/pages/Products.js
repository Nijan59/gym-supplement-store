import React, { useState } from 'react';
import products from '../data';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get a unique list of categories from your data
  const categories = ["All", ...new Set(products.map(p => p.category))];

  // Filter products based on selection
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      <h2>Our Supplements</h2>
      
      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map(cat => (
          <button 
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
     <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
   {/* Your buttons go here */}
</div> 

      {/* Product Display */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;