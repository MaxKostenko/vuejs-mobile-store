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
