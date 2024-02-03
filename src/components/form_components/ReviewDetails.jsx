import React from "react";
import { Paper, Grid, Box, Divider } from "@mui/material";
import { renderButton } from "./DisplayComponents";

const ReviewDetails = ({ state, handleNext, handlePrev }) => {
  const {
    leaderName,
    teamName,
    leaderPhone,
    leaderEmail,
    instituteName,
    leaderGender,
    theme,
    member1Name,
    member1Email,
    member1Phone,
    member1Gender,
    member2Name,
    member2Email,
    member2Phone,
    member2Gender,
    member3Name,
    member3Email,
    member3Phone,
    member3Gender,
    member4Name,
    member4Email,
    member4Phone,
    member4Gender,
    PSCode,
    PSTitle,
  } = state;

  return (
    <Paper component={Box} className="stepperPaperStyle">
      {/* Displaying extracted values */}
      {/* Team Details */}
      <Grid sm={12} lg={12}>
        <Box
          mt={4}
          mb={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
            color: "var(--skin-color)",
            fontSize: "1.25rem",
            fontWeight: "bold",
            margin: "2rem 1rem",
          }}
        >
          Team Details
        </Box>
      </Grid>

      <Grid container spacing={3}>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Leader Name - </strong> {leaderName}
          </Box>
        </Grid>

        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Leader Phone - </strong> {leaderPhone}
          </Box>
        </Grid>

        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Leader Gender - </strong> {leaderGender}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Team Name - </strong> {teamName}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Theme - </strong> {theme}
          </Box>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <Box>
            <strong>Leader Email - </strong> {leaderEmail}
          </Box>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <Box>
            <strong>Institute Name - </strong> {instituteName}
          </Box>
        </Grid>
      </Grid>

      {/* Team Member Details */}
      <Grid sm={12} lg={12}>
        <Box
          mt={4}
          mb={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
            color: "var(--skin-color)",
            fontSize: "1.25rem",
            fontWeight: "bold",
            margin: "2rem 1rem",
          }}
        >
          Team Member Details
        </Box>
      </Grid>
      {/* Member 1 Details */}
      <Divider
        textAlign="left"
        style={{ color: "var(--skin-color)", margin: "1rem 0" }}
      >
        Member 1 Details
      </Divider>
      <Grid container spacing={3} style={{ marginBottom: "2rem" }}>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 1 Name - </strong> {member1Name}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 1 Gender - </strong> {member1Gender}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 1 Email - </strong> {member1Email}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 1 Phone - </strong> {member1Phone}
          </Box>
        </Grid>
      </Grid>

      {/* Member 2 Details */}
      <Divider
        textAlign="left"
        style={{ color: "var(--skin-color)", margin: "1rem 0" }}
      >
        Member 2 Details
      </Divider>
      <Grid container spacing={3} style={{ marginBottom: "2rem" }}>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 2 Name - </strong> {member2Name}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 2 Gender - </strong> {member2Gender}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 2 Email - </strong> {member2Email}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 2 Phone - </strong> {member2Phone}
          </Box>
        </Grid>
      </Grid>

      {/* Member 3 Details */}
      <Divider
        textAlign="left"
        style={{ color: "var(--skin-color)", margin: "1rem 0" }}
      >
        Member 3 Details
      </Divider>
      <Grid container spacing={3} style={{ marginBottom: "2rem" }}>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 3 Name - </strong> {member3Name}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 3 Gender - </strong> {member3Gender}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 3 Email - </strong> {member3Email}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 3 Phone - </strong> {member3Phone}
          </Box>
        </Grid>
      </Grid>

      {/* Member 4 Details */}
      <Divider
        textAlign="left"
        style={{ color: "var(--skin-color)", margin: "1rem 0" }}
      >
        Member 4 Details
      </Divider>
      <Grid container spacing={3} style={{ marginBottom: "2rem" }}>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 4 Name - </strong> {member4Name}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 4 Gender - </strong> {member4Gender}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 4 Email - </strong> {member4Email}
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Box>
            <strong>Member 4 Phone - </strong> {member4Phone}
          </Box>
        </Grid>
      </Grid>

      {/* Problem Statement Details */}
      <Grid sm={12} lg={12}>
        <Box
          mt={4}
          mb={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
            color: "var(--skin-color)",
            fontSize: "1.25rem",
            fontWeight: "bold",
            margin: "2rem 1rem",
          }}
        >
          Problem Statement Details
        </Box>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: "1rem" }}>
        <Grid item lg={12} sm={12} xs={12}>
          <Box>
            <strong>PS Code - </strong> {PSCode}
          </Box>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <Box>
            <strong>PS Title - </strong> {PSTitle}
          </Box>
        </Grid>
      </Grid>

      {/* Back and Next Button */}
      <Grid
        container
        spacing={0}
        justifyContent="flex-end"
        style={{ marginTop: "2rem" }}
      >
        <Box style={{ padding: "1rem" }}>
          {renderButton({
            label: "Edit",
            handleOnClick: handlePrev,
            color: "default",
          })}
        </Box>
        <Box style={{ padding: "1rem 0" }}>
          {renderButton({
            label: "Payment",
            handleOnClick: handleNext,
          })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default ReviewDetails;
