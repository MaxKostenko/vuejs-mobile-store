import productsList from '../../data/products.json';

export function getProductList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const list = productsList.products.map((el) => {
        const { description, ...params } = el;
        return params;
      });
      resolve(list);
    }, 400);
  });
}

export function getProduct(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productsList.products.find(el => el.id === productId);
      resolve(product);
    }, 400);
  });
}
