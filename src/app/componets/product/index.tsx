import { ProductCardProps } from '@/app/interfaces/productCards.interfaces';
import React from 'react';

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-xs">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.descriptions}</p>
        {product.price && (
          <p className="text-green-500 font-bold text-lg mt-4">${product.price.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;