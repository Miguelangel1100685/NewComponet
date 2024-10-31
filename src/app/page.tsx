"use client";
import ProductCard from "./componets/product";
import React from "react";


const products = [
  {
    id: "1",
    name: "Camiseta Deportiva",
    descriptions: "Camiseta deportiva de alta calidad para entrenamiento y uso diario.",
    image: "https://elitevisualmarketing.do/wp-content/uploads/2020/05/6079-004-P.jpg",
    price: 25.99,
  },
  {
    id: "2",
    name: "Auriculares Bluetooth",
    descriptions: "Auriculares inalámbricos con sonido envolvente y cancelación de ruido.",
    image: "https://m.media-amazon.com/images/I/718wsn88-EL.jpg",
    price: 49.99,
  },
  {
    id: "3",
    name: "Reloj Inteligente",
    descriptions:
      "Reloj con monitoreo de actividad, notificaciones y resistente al agua.",
    image: "https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/8445045018597_1.jpg",
    price: 99.99,
  },
  {
    id: "4",
    name: "Zapatillas Running",
    descriptions:
      "Zapatillas ligeras y cómodas, perfectas para correr largas distancias.",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png",
    price: 59.99,
  },
  {
    id: "5",
    name: "Mochila Sport",
    descriptions:
      "Mochila espaciosa y duradera para uso diario o viajes cortos.",
    image: "https://sport.andtrend.com/media/catalog/product/cache/1/small_image/592x592/9df78eab33525d08d6e5fb8d27136e95/d/a/dab0885-1.jpg",
    price: 39.99,
  },
  {
    id: "6",
    name: "Gafas de Sol",
    descriptions:
      "Gafas de sol polarizadas con protección UV para días soleados.",
    image: "https://siman.vtexassets.com/arquivos/ids/3895578-500-auto?v=638109411337830000&width=500&height=auto&aspect=true",
    price: 19.99,
  },
];

export default function Home() {
  const handleClick = (productId: string) => {
    console.log("Producto clickeado:", productId);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => handleClick(product.id)}
        />
      ))}
    </div>
  );
}
