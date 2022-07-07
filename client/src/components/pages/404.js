import { Typography } from '@mui/material';

const NotFound = () => {
  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom align="center">
        404
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom align="center">
        Sorry, we couldn't find this page
      </Typography>
    </>
  );
};

export default NotFound;