import React from "react";
import { Paper, Grid, Box } from "@material-ui/core";
import { renderText } from "./DisplayComponents";

const Finished = ({ state }) => {
  return (
    <Paper component={Box} p={2}>
      <Box mt={1} mb={2}>
        {renderText({ label: "Your Details", variant: "h6" })}
      </Box>

      {/* Row For Buttons */}
      <Grid container spacing={4} justifyContent="flex-end">
        <Box p={2}>{JSON.stringify(state, null, 4)}</Box>
      </Grid>
    </Paper>
  );
};

export default Finished;
