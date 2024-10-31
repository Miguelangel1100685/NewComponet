export interface Product {
    id: string;
    name: string;
    descriptions: string;
    image: string;
    price?: number;
  }
  
  export interface ProductCardProps {
    product: Product;
  }