import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import url from "./Project_M2.png";
import bgurl from "./login_background.jpg";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   // root: {
//   //   backgroundColor: 'red',
//   //   color: (props) => props.color,
//   // },
//   logo: {
//     justifyContent: start,
//   },
// });

function Login(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/classes`;
    navigate(path);
  };
  return (
    <Container>
      <Box
        // className={classes.root}
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
          This is the login page
        </Typography>
      </Box>
      <Button onClick={routeChange}>Login</Button>
      <Box
        // className={classes.root}
        component="img"
        sx={{
          height: "100%",
          width: "100%",
          //   maxHeight: { xs: 233, md: 167 },
          //   maxWidth: { xs: 350, md: 250 },
        }}
        alt="bgurl"
        src={bgurl}
      />
    </Container>
  );
}

export default Login;
