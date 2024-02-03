import React, { useState } from "react";
import { Paper, Grid, Box } from "@mui/material";
import { renderText, renderSelect, renderButton } from "./DisplayComponents";

const Step3 = ({ state, handleOnChange, handleNext, handlePrev }) => {
  const selectedTheme = state.data.theme;

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isFileSelected = selectedFile !== null;
  const isFileSelected2 = selectedFile2 !== null;

  // To check that file size should not be more than 2 Mb and type should be only .pdf
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

    if (!file.type.match("application/pdf")) {
      setErrorMessage("Only PDF files are allowed");
      openModal();
      resetFileInput();
      return;
    }
    setSelectedFile(file);
  };

  // Reset input value for the file input field if it not satisfy the restriction
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

  // To check that file size should not be more than 2 Mb and type should be only .jpg or .png or .jpeg
  const handleFileChange2 = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return; // No file selected
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("File size should be less than 2MB");
      openModal2();
      resetFileInput2();
      return;
    }

    if (!file.type.match("application/pdf")) {
      setErrorMessage("Only PDF files are allowed");
      openModal();
      resetFileInput2();
      return;
    }

    setSelectedFile2(file);
  };

  // Reset input value for the file input field if it not satisfy the restriction
  const resetFileInput2 = () => {
    // Reset the file input by triggering a click event
    const fileInput2 = document.getElementById("file-input2");
    if (fileInput2) {
      fileInput2.value = null; // Clear the input value
    }
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };

  let PSIDOptions;
  let PSTitleOptions;

  switch (selectedTheme) {
    case "Agri-Tech":
      PSIDOptions = [
        { value: "Agri-Tech PSID-1", label: "Agri-Tech PSID-1" },
        { value: "Agri-Tech PSID-2", label: "Agri-Tech PSID-2" },
        { value: "Agri-Tech PSID-3", label: "Agri-Tech PSID-3" },
      ];
      PSTitleOptions = [
        { value: "Agri-Tech PS 1", label: "Agri-Tech PS 1" },
        { value: "Agri-Tech PS 2", label: "Agri-Tech PS 2" },
        { value: "Agri-Tech PS 3", label: "Agri-Tech PS 3" },
      ];
      break;
    case "Criminal Database":
      PSIDOptions = [
        {
          value: "Criminal Database PSID-1",
          label: "Criminal Database PSID-1",
        },
        {
          value: "Criminal Database PSID-2",
          label: "Criminal Database PSID-2",
        },
        {
          value: "Criminal Database PSID-3",
          label: "Criminal Database PSID-3",
        },
      ];
      PSTitleOptions = [
        { value: "Criminal Database PS 1", label: "Criminal Database PS 1" },
        { value: "Criminal Database PS 2", label: "Criminal Database PS 2" },
        { value: "Criminal Database PS 3", label: "Criminal Database PS 3" },
      ];
      break;
    case "Cyber Security":
      PSIDOptions = [
        { value: "Cyber Security PSID-1", label: "Cyber Security PSID-1" },
        { value: "Cyber Security PSID-2", label: "Cyber Security PSID-2" },
        { value: "Cyber Security PSID-3", label: "Cyber Security PSID-3" },
      ];
      PSTitleOptions = [
        { value: "Cyber Security PS 1", label: "Cyber Security PS 1" },
        { value: "Cyber Security PS 2", label: "Cyber Security PS 2" },
        { value: "Cyber Security PS 3", label: "Cyber Security PS 3" },
      ];
      break;
    case "Environment & Climate Control":
      PSIDOptions = [
        {
          value: "Environment & Climate Control PSID-1",
          label: "Environment & Climate Control PSID-1",
        },
        {
          value: "Environment & Climate Control PSID-2",
          label: "Environment & Climate Control PSID-2",
        },
        {
          value: "Environment & Climate Control PSID-3",
          label: "Environment & Climate Control PSID-3",
        },
      ];
      PSTitleOptions = [
        {
          value: "Environment & Climate Control PS 1",
          label: "Environment & Climate Control PS 1",
        },
        {
          value: "Environment & Climate Control PS 2",
          label: "Environment & Climate Control PS 2",
        },
        {
          value: "Environment & Climate Control PS 3",
          label: "Environment & Climate Control PS 3",
        },
      ];
      break;
    case "Edu-Tech":
      PSIDOptions = [
        { value: "Edu-Tech PSID-1", label: "Edu-Tech PSID-1" },
        { value: "Edu-Tech PSID-2", label: "Edu-Tech PSID-2" },
        { value: "Edu-Tech PSID-3", label: "Edu-Tech PSID-3" },
      ];
      PSTitleOptions = [
        { value: "Edu-Tech PS 1", label: "Edu-Tech PS 1" },
        { value: "Edu-Tech PS 2", label: "Edu-Tech PS 2" },
        { value: "Edu-Tech PS 3", label: "Edu-Tech PS 3" },
      ];
      break;
    case "Force Engagement":
      PSIDOptions = [
        { value: "Force Engagement PSID-1", label: "Force Engagement PSID-1" },
        { value: "Force Engagement PSID-2", label: "Force Engagement PSID-2" },
        { value: "Force Engagement PSID-3", label: "Force Engagement PSID-3" },
      ];
      PSTitleOptions = [
        { value: "Force Engagement PS 1", label: "Force Engagement PS 1" },
        { value: "Force Engagement PS 2", label: "Force Engagement PS 2" },
        { value: "Force Engagement PS 3", label: "Force Engagement PS 3" },
      ];
      break;
    case "Health-Tech":
      PSIDOptions = [
        { value: "Health-Tech PSID-1", label: "Health-Tech PSID-1" },
        { value: "Health-Tech PSID-2", label: "Health-Tech PSID-2" },
        { value: "Health-Tech PSID-3", label: "Health-Tech PSID-3" },
      ];
      PSTitleOptions = [
        { value: "Health-Tech PS 1", label: "Health-Tech PS 1" },
        { value: "Health-Tech PS 2", label: "Health-Tech PS 2" },
        { value: "Health-Tech PS 3", label: "Health-Tech PS 3" },
      ];
      break;
    case "Miscellaneous":
      PSIDOptions = [
        { value: "Miscellaneous PSID-1", label: "Miscellaneous PSID-1" },
        { value: "Miscellaneous PSID-2", label: "Miscellaneous PSID-2" },
        { value: "Miscellaneous PSID-3", label: "Miscellaneous PSID-3" },
      ];
      PSTitleOptions = [
        { value: "Miscellaneous PS 1", label: "Miscellaneous PS 1" },
        { value: "Miscellaneous PS 2", label: "Miscellaneous PS 2" },
        { value: "Miscellaneous PS 3", label: "Miscellaneous PS 3" },
      ];
      break;
    case "Social Media":
      PSIDOptions = [
        { value: "Social Media PSID-1", label: "Social Media PSID-1" },
        { value: "Social Media PSID-2", label: "Social Media PSID-2" },
        { value: "Social Media PSID-3", label: "Social Media PSID-3" },
      ];
      PSTitleOptions = [
        { value: "Social Media PS 1", label: "Social Media PS 1" },
        { value: "Social Media PS 2", label: "Social Media PS 2" },
        { value: "Social Media PS 3", label: "Social Media PS 3" },
      ];
      break;
    case "Vehicle Theft":
      PSIDOptions = [
        { value: "Vehicle Theft PSID-1", label: "Vehicle Theft PSID-1" },
        { value: "Vehicle Theft PSID-2", label: "Vehicle Theft PSID-2" },
        { value: "Vehicle Theft PSID-3", label: "Vehicle Theft PSID-3" },
      ];
      PSTitleOptions = [
        { value: "Vehicle Theft PS 1", label: "Vehicle Theft PS 1" },
        { value: "Vehicle Theft PS 2", label: "Vehicle Theft PS 2" },
        { value: "Vehicle Theft PS 3", label: "Vehicle Theft PS 3" },
      ];
      break;
    default:
      // All PSID and PS Title
      PSIDOptions = [];
      PSTitleOptions = [];
  }

  return (
    <Paper component={Box} className="stepperPaperStyle">
      <Box mt={1} mb={2}>
        {renderText({ label: "Solution", variant: "h6" })}
      </Box>

      {/* Row 1 (Solution) */}
      <Grid container spacing={1} style={{ marginBottom: "10px" }}>
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
      <Grid container spacing={1} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} lg={6}>
          <div className="upload-box">
            <div className="drag-area">
              <input
                type="file"
                name="file1"
                style={{ display: "none" }}
                id="file-input"
                onChange={handleFileChange}
                accept=".pdf"
              />
              <label htmlFor="file-input" className="custom-file-input">
                Choose PDF
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
                      <h5 className="modal-title">Invalid Solution PDF</h5>
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

        <Grid item xs={12} lg={6}>
          <div className="upload-box">
            <div className="drag-area">
              <input
                type="file"
                name="file2"
                style={{ display: "none" }}
                id="file-input2"
                onChange={handleFileChange2}
                accept=".pdf"
              />
              <label htmlFor="file-input2" className="custom-file-input">
                Choose Consent Letter
              </label>
              <div className="file-name">
                {selectedFile2 ? selectedFile2.name : "No file chosen"}
              </div>

              {/* Bootstrap Modal */}
              <div
                className={`modal fade ${modalOpen2 ? "show" : ""}`}
                style={{ display: modalOpen2 ? "block" : "none" }}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden={!modalOpen2}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Invalid Consent Letter</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={closeModal2}
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
                        onClick={closeModal2}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backdrop for smooth transition */}
              <div
                className={`modal-backdrop fade ${modalOpen2 ? "show" : ""}`}
                style={{ display: modalOpen2 ? "block" : "none" }}
              ></div>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Back and Next Button */}
      <Grid
        container
        spacing={0}
        justifyContent="flex-end"
        style={{ marginTop: "1.5rem" }}
      >
        <Box style={{ padding: "1rem" }}>
          {renderButton({
            label: "Back",
            handleOnClick: handlePrev,
            color: "default",
          })}
        </Box>
        <Box style={{ padding: "1rem 0" }}>
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
