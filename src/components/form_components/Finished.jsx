import React from "react";
import { Paper, Grid, Box } from "@mui/material";


const Finished = () => {
  return (
    <Paper component={Box} className="stepperPaperStyle">
      <Grid style={{ margin: "5rem auto" }}>
        <Box className="final-heading">
          😊 Thank You For Register on SIH 2.0
        </Box>
        <Box className="final-para">
          Your form has been submitted successfully!
        </Box>
      </Grid>
    </Paper>
  );
};

export default Finished;
