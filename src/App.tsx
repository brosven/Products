import { Typography } from '@mui/material';
import { getProducts } from './api/api';
import { useQuery } from 'react-query';
import { Products } from './components/Products/Products';
import axios from 'axios';
import { Loader } from './components/Loader/Loader';

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

const App = () => {
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
    <>
      {products ? (
        <Products products={products} />
      ) : (
        <Typography variant="h2" width="fit-content" sx={screenMessageStyle}>
          Продукты отсутствуют
        </Typography>
      )}
    </>
  );
};

export default App;
