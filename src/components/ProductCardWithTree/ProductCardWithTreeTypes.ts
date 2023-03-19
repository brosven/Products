import { Product } from '../../api/apiTypes';
import { BuildTreesListReturnElementType } from '../../utils/buildTreesList/buildTreesListTypes';

export type ProductCardsTree = Partial<Product> & BuildTreesListReturnElementType;

export type ProductCardWithTreeProps = {
  tree: ProductCardsTree;
};
