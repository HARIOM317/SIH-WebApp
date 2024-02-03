import React, { useState } from "react";
import { Paper, Grid, Box } from "@mui/material";
import { renderText, renderButton, renderInputText } from "./DisplayComponents";

const Payment = ({ state, handleOnChange, handleNext, handlePrev }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isFileSelected = selectedFile !== null;

  // To check that file size should not be more than 2 Mb and type should be only .jpg or .png or .jpeg
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return; // No file selected
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("File size should be less than 2MB");
      openModal();
      resetFileInput();
      return;
    }

    if (!file.type.match("image/(jpeg|jpg|png)")) {
      setErrorMessage("Only JPEG, JPG, or PNG images are allowed");
      openModal();
      resetFileInput();
      return;
    }

    setSelectedFile(file);
  };

  const resetFileInput = () => {
    // Reset the file input by triggering a click event
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = null; // Clear the input value
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Paper component={Box} className="stepperPaperStyle">
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

      <Grid container spacing={1} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={12} lg={12}>
          {renderInputText({
            label: "UTR or Transaction ID",
            name: "UTRId",
            state: state,
            handleOnChange,
          })}
        </Grid>

        <Grid item xs={12}>
          <div className="upload-box">
            <div className="drag-area">
              <input
                type="file"
                name="file"
                style={{ display: "none" }}
                id="file-input"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png"
              />
              <label htmlFor="file-input" className="custom-file-input">
                Payment Screenshot
              </label>
              <div className="file-name">
                {selectedFile ? selectedFile.name : "No file chosen"}
              </div>

              {/* Bootstrap Modal */}
              <div
                className={`modal fade ${modalOpen ? "show" : ""}`}
                style={{ display: modalOpen ? "block" : "none" }}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden={!modalOpen}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        Invalid Payment Screenshot
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={closeModal}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>{errorMessage}</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backdrop for smooth transition */}
              <div
                className={`modal-backdrop fade ${modalOpen ? "show" : ""}`}
                style={{ display: modalOpen ? "block" : "none" }}
              ></div>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Back and Next Button */}
      <Grid container spacing={0} justifyContent="flex-end">
        <Box style={{ padding: "1rem" }}>
          {renderButton({
            label: "Back",
            handleOnClick: handlePrev,
            color: "default",
          })}
        </Box>
        <Box style={{ padding: "1rem 0" }}>
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
