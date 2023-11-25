
import React from 'react'
import AddToCard from './AddToCard';
import styles from './ProductCard.module.css';

const ProductCard = () => {
    return (
      <div className = 'p-5 my-5 border-x-gray-400 text-white text-xl hover: bg-sky-500'>
        <AddToCard />
      </div>
    );
}

export default ProductCard