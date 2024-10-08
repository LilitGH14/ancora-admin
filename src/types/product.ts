export type Product = {
  image: string;
  name: string;
  category: string;
  price: number;
  sold: number;
  profit: number;
};

export enum ProductStatusInStock {
  "On sale" = 0,
  "Sold out" = 1,
}
