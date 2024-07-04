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
  orderStatus: "PROCESSING" | "PENDING" | "END";
  payerInfo: null | string;
};

export type Orders = Order[];
