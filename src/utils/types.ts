export interface Local {
  id: string;
  name: string;
  imageUrl: string;
  products: Product[];
  productsTypes: string[];
  rating: number;
  deliveryTime: number;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  type: "Sandwiches" | "Snacks" | "Bebestibles" | "Café" | "Gohan";
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  total: number;
}
