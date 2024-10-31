"use client";

import React from "react";

interface Product {
  id: string;
  name: string;
  descriptions: string;
  image: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div onClick={onClick} className="hover:scale-105 transition-all cursor-pointer p-4 border rounded shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <h3>{product.name}</h3>
      <p>{product.descriptions}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
