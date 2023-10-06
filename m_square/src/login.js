import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import url from "./Project_M2.png";
function Login() {
  return (
    <Container maxWidth="sm">
      <Box
        component="img"
        sx={{
          height: 50,
          width: 200,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Logo"
        src={url}
      />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5 example
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
