import React, { useState } from "react";
import { Paper, Grid, Box } from "@material-ui/core";
import { renderText, renderSelect, renderButton } from "./DisplayComponents";

const Step3 = ({ state, handleOnChange, handleNext, handlePrev }) => {
  const selectedTheme = state.data.theme;

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);

  const isFileSelected = selectedFile !== null;
  const isFileSelected2 = selectedFile2 !== null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  
  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    setSelectedFile2(file);
  };

  let PSIDOptions;
  let PSTitleOptions;

  switch (selectedTheme) {
    case "Theme 1":
      PSIDOptions = [
        { value: "Theme-1 PS-1", label: "Theme-1 PS-1" },
        { value: "Theme-1 PS-2", label: "Theme-2 PS-2" },
        { value: "Theme-1 PS-3", label: "Theme-2 PS-3" },
      ];
      PSTitleOptions = [
        { value: "Theme-1 PS Title 1", label: "Theme-1 PS Title 1" },
        { value: "Theme-1 PS Title 2", label: "Theme-1 PS Title 2" },
        { value: "Theme-1 PS Title 3", label: "Theme-1 PS Title 3" },
      ];
      break;
    case "Theme 2":
      PSIDOptions = [
        { value: "Theme-2 PS-1", label: "Theme-2 PS-1" },
        { value: "Theme-2 PS-2", label: "Theme-2 PS-2" },
        { value: "Theme-2 PS-3", label: "Theme-2 PS-3" },
      ];
      PSTitleOptions = [
        { value: "Theme-2 PS Title 1", label: "Theme-2 PS Title 1" },
        { value: "Theme-2 PS Title 2", label: "Theme-2 PS Title 2" },
        { value: "Theme-2 PS Title 3", label: "Theme-2 PS Title 3" },
      ];
      break;
    case "Theme 3":
      PSIDOptions = [
        { value: "Theme-3 PS-1", label: "Theme-3 PS-1" },
        { value: "Theme-3 PS-2", label: "Theme-3 PS-2" },
        { value: "Theme-3 PS-3", label: "Theme-3 PS-3" },
      ];
      PSTitleOptions = [
        { value: "Theme-3 PS Title 1", label: "Theme-3 PS Title 1" },
        { value: "Theme-3 PS Title 2", label: "Theme-3 PS Title 2" },
        { value: "Theme-3 PS Title 3", label: "Theme-3 PS Title 3" },
      ];
      break;
    case "Theme 4":
      PSIDOptions = [
        { value: "Theme-4 PS-1", label: "Theme-4 PS-1" },
        { value: "Theme-4 PS-2", label: "Theme-4 PS-2" },
        { value: "Theme-4 PS-3", label: "Theme-4 PS-3" },
      ];
      PSTitleOptions = [
        { value: "Theme-4 PS Title 1", label: "Theme-4 PS Title 1" },
        { value: "Theme-4 PS Title 2", label: "Theme-4 PS Title 2" },
        { value: "Theme-4 PS Title 3", label: "Theme-4 PS Title 3" },
      ];
      break;
    case "Theme 5":
      PSIDOptions = [
        { value: "Theme-5 PS-1", label: "Theme-5 PS-1" },
        { value: "Theme-5 PS-2", label: "Theme-5 PS-2" },
        { value: "Theme-5 PS-3", label: "Theme-5 PS-3" },
      ];
      PSTitleOptions = [
        { value: "Theme-5 PS Title 1", label: "Theme-5 PS Title 1" },
        { value: "Theme-5 PS Title 2", label: "Theme-5 PS Title 2" },
        { value: "Theme-5 PS Title 3", label: "Theme-5 PS Title 3" },
      ];
      break;
    default:
      // All PSID and PS Title
      PSIDOptions = [];
      PSTitleOptions = [];
  }

  return (
    <Paper component={Box} style={{ padding: "2rem", margin: "2rem auto" }}>
      <Box mt={1} mb={2}>
        {renderText({ label: "Solution", variant: "h6" })}
      </Box>

      {/* Row 1 (Solution) */}
      <Grid container spacing={4} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={12} lg={6}>
          {renderSelect({
            label: "PSID",
            name: "PSCode",
            state: state,
            options: PSIDOptions,
            handleOnChange,
          })}
        </Grid>

        <Grid item xs={12} sm={12} lg={6}>
          {renderSelect({
            label: "PS Title",
            name: "PSTitle",
            state: state,
            options: PSTitleOptions,
            handleOnChange,
          })}
        </Grid>
      </Grid>

      {/* Row 2 (Button to choose PPT) */}
      <Grid container spacing={4} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} lg={6}>
          <div className="upload-box">
            <div className="drag-area">
              <input
                type="file"
                name="file1"
                style={{ display: "none" }}
                id="file-input"
                onChange={handleFileChange}
              />
              <label htmlFor="file-input" className="custom-file-input">
                Choose PPT
              </label>
              <div className="file-name">
                {selectedFile ? selectedFile.name : "No file chosen"}
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} lg={6}>
          <div className="upload-box">
            <div className="drag-area">
              <input
                type="file"
                name="file2"
                style={{ display: "none" }}
                id="file-input2"
                onChange={handleFileChange2}
              />
              <label htmlFor="file-input2" className="custom-file-input">
                Choose Consent Letter
              </label>
              <div className="file-name">
                {selectedFile2 ? selectedFile2.name : "No file chosen"}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Back and Next Button */}
      <Grid container spacing={4} justifyContent="flex-end">
        <Box style={{ padding: "1rem" }}>
          {renderButton({
            label: "Back",
            handleOnClick: handlePrev,
            color: "default",
          })}
        </Box>
        <Box style={{ padding: "1rem" }}>
          {renderButton({
            label: "Review Details",
            handleOnClick: handleNext,
            disabled: !(isFileSelected && isFileSelected2),
          })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;