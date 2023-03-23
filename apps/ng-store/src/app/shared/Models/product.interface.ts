export interface IProduct1 {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export interface IProduct {
  // id: number;
  // title: string;
  // price: number;
  // description: string;
  // category: string;
  // image: string;
  // rating: IRating;

  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  menuItems: MenueItems[];
}

export interface MenueItems {
  label: string;
  action: string;
}

// export interface IRating {
//   rate: number;
//   count: number;
// }
