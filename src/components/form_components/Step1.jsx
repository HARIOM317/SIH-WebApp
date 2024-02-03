import React from "react";
import { Paper, Grid, Box } from "@mui/material";
import {
  renderText,
  renderInputText,
  renderSelect,
  renderButton,
} from "./DisplayComponents";

const Step1 = ({ state, handleOnChange, handleNext }) => {
  return (
    <Paper component={Box} className="stepperPaperStyle">
      <Box mt={1} mb={2}>
        {renderText({ label: "Team Details", variant: "h6" })}
      </Box>

      {/* Row 1 */}
      <Grid container spacing={1} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={12} lg={6}>
          {renderInputText({
            label: "Leader Name",
            name: "leaderName",
            state: state,
            handleOnChange,
          })}
        </Grid>

        <Grid item xs={12} sm={12} lg={6}>
          {renderInputText({
            label: "Team Name",
            name: "teamName",
            state: state,
            handleOnChange,
          })}
        </Grid>
      </Grid>

      {/* Row 2 */}
      <Grid container spacing={1} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={12} lg={6}>
          {renderInputText({
            label: "Leader Phone",
            name: "leaderPhone",
            state: state,
            handleOnChange,
          })}
        </Grid>

        <Grid item xs={12} sm={12} lg={6}>
          {renderInputText({
            label: "Leader Email",
            name: "leaderEmail",
            state: state,
            handleOnChange,
          })}
        </Grid>
      </Grid>

      {/* Row 3 */}
      <Grid container spacing={1} style={{ marginBottom: "10px" }}>
        <Grid item xs={12}>
          {renderInputText({
            label: "Institute Name",
            name: "instituteName",
            state: state,
            handleOnChange,
          })}
        </Grid>
      </Grid>

      {/* Row 4 */}
      <Grid container spacing={1} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={12} lg={6}>
          {renderSelect({
            label: "Leader Gender",
            name: "leaderGender",
            state: state,
            options: [
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Other", label: "Other" },
            ],
            handleOnChange,
          })}
        </Grid>

        <Grid item xs={12} sm={12} lg={6}>
          {renderSelect({
            label: "Theme",
            name: "theme",
            state: state,
            options: [
              { value: "Agri-Tech", label: "Agri-Tech" },
              { value: "Criminal Database", label: "Criminal Database" },
              { value: "Cyber Security", label: "Cyber Security" },
              {
                value: "Environment & Climate Control",
                label: "Environment & Climate Control",
              },
              { value: "Edu-Tech", label: "Edu-Tech" },
              { value: "Force Engagement", label: "Force Engagement" },
              { value: "Health-Tech", label: "Health-Tech" },
              { value: "Miscellaneous", label: "Miscellaneous" },
              { value: "Social Media", label: "Social Media" },
              { value: "Vehicle Theft", label: "Vehicle Theft" },
            ],
            handleOnChange,
          })}
        </Grid>
      </Grid>

      {/* Row 5 (For Button) */}
      <Grid
        container
        spacing={0}
        justifyContent="flex-end"
        style={{ marginTop: "1.5rem" }}
      >
        <Box style={{ padding: "1rem 0 0 0" }}>
          {renderButton({
            label: "Next",
            handleOnClick: handleNext,
          })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step1;
