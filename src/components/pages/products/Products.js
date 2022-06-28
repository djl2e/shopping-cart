import React from 'react';
import data from '../../../data/data';
import ProductCard from './ProductCard';
import '../../../css/Product.css';

function Products(props) {
  const { increaseQuantity, cartClicked } = props;
  const numProducts = data.length;

  const cards = [];
  for (let i = 0; i < numProducts; i++) {
    cards.push(<ProductCard
      productId={i}
      increaseQuantity={increaseQuantity}
      cartClicked={cartClicked}
    />);
  }

  return (
    <div className="page products">
      {cards}
    </div>
  );
}

export default Products;
