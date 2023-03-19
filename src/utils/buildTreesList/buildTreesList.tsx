import { BuildTreesListArgumentElementType } from './buildTreesListTypes';

const buildTreesList = <T extends BuildTreesListArgumentElementType>(products: T[]) => {
  const uniqueProductsMap = products.reduce<Record<string, T & { children?: T[] }>>((acc, next) => {
    if (!acc[next.ProductID] && !next.isDeleted) {
      acc[next.ProductID] = next;
    }
    return acc;
  }, {});

  Object.values(uniqueProductsMap).forEach((product) => {
    if (product.ParentID && uniqueProductsMap[product.ParentID]) {
      const children = uniqueProductsMap[product.ParentID].children;
      Array.isArray(children)
        ? (uniqueProductsMap[product.ParentID].children = [...children, product])
        : (uniqueProductsMap[product.ParentID].children = [product]);
    }
  });

  return Object.values(uniqueProductsMap).filter((product) => !product.ParentID);
};

export default buildTreesList;
