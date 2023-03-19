import { Box } from '@mui/system';
import buildTreesList from '../../utils/buildTreesList/buildTreesList';
import { ProductCardWithTree } from '../ProductCardWithTree/ProductCardWithTree';
import { ProductsPropsType } from './ProductsTypes';

export const Products = ({ products }: ProductsPropsType) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 2,
        p: '20px 30px',
      }}
    >
      {buildTreesList(products).map((tree) => (
        <ProductCardWithTree key={tree.ProductID} tree={tree} />
      ))}
    </Box>
  );
};
