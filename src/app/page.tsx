import ProductCard from "./componets/product";

const products = [
  {
    id: "1",
    name: "Camiseta Deportiva",
    descriptions:
      "Camiseta deportiva de alta calidad para entrenamiento y uso diario.",
    image: "https://via.placeholder.com/150",
    price: 25.99,
  },
  {
    id: "2",
    name: "Auriculares Bluetooth",
    descriptions:
      "Auriculares inalámbricos con sonido envolvente y cancelación de ruido.",
    image: "https://via.placeholder.com/150",
    price: 49.99,
  },
  {
    id: "3",
    name: "Reloj Inteligente",
    descriptions:
      "Reloj con monitoreo de actividad, notificaciones y resistente al agua.",
    image: "https://via.placeholder.com/150",
    price: 99.99,
  },
  {
    id: "4",
    name: "Zapatillas Running",
    descriptions:
      "Zapatillas ligeras y cómodas, perfectas para correr largas distancias.",
    image: "https://via.placeholder.com/150",
    price: 59.99,
  },
  {
    id: "5",
    name: "Mochila Casual",
    descriptions:
      "Mochila espaciosa y duradera para uso diario o viajes cortos.",
    image: "https://via.placeholder.com/150",
    price: 39.99,
  },
  {
    id: "6",
    name: "Gafas de Sol",
    descriptions:
      "Gafas de sol polarizadas con protección UV para días soleados.",
    image: "https://via.placeholder.com/150",
    price: 19.99,
  },
];

export default function Home() {
  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
