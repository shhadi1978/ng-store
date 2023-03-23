export const Routes: { [key: string]: any } = {
  // allProducts: 'https://fakestoreapi.com/products',
  allProducts: 'https://dummyjson.com/products',
  singleProduct: (id: string) =>
    // `https://fakestoreapi.com/products/${productId}`,
    `https://dummyjson.com/products/${id}`,
};
