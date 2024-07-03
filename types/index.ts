export type Product = {
  name: string;
  image: string;
  description: string;
  price: string;
  currency: string;
};

export type Order = {
  id: string;
  products: Product[];
  paid: boolean;
  payment?: {
    date: Date;
    name: string;
    method: "Card" | "PayPal";
  };
  orderStatus: "PROCESSING" | "PENDING" | "END";
};

export type Orders = Order[];
