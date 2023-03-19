import axios from 'axios';
import { useQuery } from 'react-query';
import { getProducts } from '../../api/api';
import { Loader } from '../Loader/Loader';
import { Typography, Box } from '@mui/material';
import buildTreesList from '../../utils/buildTreesList/buildTreesList';
import { ProductCardWithTree } from '../ProductCardWithTree/ProductCardWithTree';

const screenMessageStyle = {
  width: 'fit-content',
  mx: 'auto',
  mt: '40vh',
  fontSize: {
    xs: '1.6rem',
    md: '2.5rem',
    lg: '3rem',
  },
};

export const Products = () => {
  const {
    data: products,
    isError,
    isLoading,
    error,
  } = useQuery('products', getProducts, { keepPreviousData: true, refetchOnWindowFocus: false });

  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <Typography variant="h2" sx={screenMessageStyle}>
        Ошибка при загрузке данных... <br />
        {axios.isAxiosError(error) && error.message}
      </Typography>
    );
  }
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
      {products ? (
        buildTreesList(products).map((tree) => <ProductCardWithTree key={tree.ProductID} tree={tree} />)
      ) : (
        <Typography
          variant="h2"
          sx={{
            ...screenMessageStyle,
            gridColumn: {
              sm: 'span 2',
              md: 'span 3',
              lg: 'span 4',
            },
          }}
        >
          Продукты отсутствуют
        </Typography>
      )}
    </Box>
  );
};
