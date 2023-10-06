import React from 'react'
import Box from '@mui/material/Box';
import bgurl from "./leaderboard.png";
import { useNavigate } from "react-router-dom";



function Leaderboard() {
    const navigate = useNavigate();
  return (

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
        onClick={() => navigate('/')}
      />

  )
}

export default Leaderboard