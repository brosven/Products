import { TreeItem } from '@mui/lab';
import { ProductCardsTree } from './ProductCardWithTreeTypes';
import { ProductDescription } from './ProductDescription/ProductDescription';

export const renderTreeItems = (tree: ProductCardsTree) => {
  const { ProductID, Name, descriptionen, descriptionru } = tree;

  return (
    <TreeItem key={ProductID} nodeId={ProductID} label={Name}>
      <ProductDescription descriptionen={descriptionen} descriptionru={descriptionru} />
      {Array.isArray(tree.children) ? tree.children.map((tree) => renderTreeItems(tree)) : null}
    </TreeItem>
  );
};
