import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'fit-content',
        mx: 'auto',
        mt: '40vh',
        gap: 1,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: '1.6rem',
            md: '2.5rem',
            lg: '3rem',
          },
        }}
      >
        Ожидание загрузки продуктов...
      </Typography>
      <CircularProgress size={100} />
    </Box>
  );
};
