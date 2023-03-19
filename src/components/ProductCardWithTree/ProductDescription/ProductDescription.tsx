import { Typography } from '@mui/material';
import { ProductDescriptionPropsType } from './ProductDescriptionTypes';

export const ProductDescription = ({ descriptionen, descriptionru }: ProductDescriptionPropsType) => {
  return (
    <>
      <Typography>Описание:</Typography>
      <Typography variant="body2" color="text.secondary">
        en: {descriptionen ? descriptionen : 'Описание Отсутствует'} <br />
        ru: {descriptionru ? descriptionru : 'Описание Отсутствует'}
      </Typography>
    </>
  );
};
