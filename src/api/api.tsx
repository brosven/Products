import axios from 'axios';
import { GetProductsType } from './apiTypes';

export const getProducts: GetProductsType = async () => {
  return (await axios.get('/api/products')).data;
};
