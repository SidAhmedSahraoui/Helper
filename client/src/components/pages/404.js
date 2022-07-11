import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const NotFound = () => {
  return (
    <>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h1" component="h1" gutterBottom align="center">
          404
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom align="center">
          Sorry, we couldn't find this page
        </Typography>
      </Container>
    </>
  );
};

export default NotFound;
