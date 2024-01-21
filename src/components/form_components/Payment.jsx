import React, { useState } from "react";
import { Paper, Grid, Box } from "@material-ui/core";
import { renderText, renderButton } from "./DisplayComponents";

const Payment = ({ state, handleOnChange, handleNext, handlePrev }) => {

  const [selectedFile, setSelectedFile] = useState(null);

  const isFileSelected = selectedFile !== null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };


  return (
    <Paper component={Box} p={2}>
      <Box mt={1} mb={2}>
        {renderText({ label: "Scan QR to Payment", variant: "h6" })}
      </Box>

      {/* Row 1 (QR Code) */}
      <Grid container spacing={4} style={{ marginBottom: "10px" }}>
        <Grid item xs={12}>
          <div className="qr-code">
            <img src="./images/other/qr-code.png" alt="QR Code" />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={4} style={{ marginBottom: "10px" }}>
        <Grid item xs={12}>
          <div className="upload-box">
            <div className="drag-area">
              <input
                type="file"
                name="file"
                style={{ display: "none" }}
                id="file-input"
                onChange={handleFileChange}
              />
              <label htmlFor="file-input" className="custom-file-input">
                Payment Screenshot
              </label>
              <div className="file-name">
                {selectedFile ? selectedFile.name : "No file chosen"}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Back and Next Button */}
      <Grid container spacing={4} justifyContent="flex-end">
        <Box p={2}>
          {renderButton({
            label: "Back",
            handleOnClick: handlePrev,
            color: "default",
          })}
        </Box>
        <Box p={2}>
          {renderButton({
            label: "Submit",
            handleOnClick: handleNext,
            disabled: !isFileSelected,
          })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Payment;
