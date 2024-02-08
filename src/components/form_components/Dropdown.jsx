import React from "react";

const Dropdown = () => {
  return (
    <>
      <div className="form-dropdown">
        <div className="form-dropdown-btn">
          Choose One
          <span className="fas fa-caret-down"></span>
        </div>
        <div className="form-dropdown-content">
          {/* <div className="form-dropdown-item">React</div>
          <div className="form-dropdown-item">Angular</div> */}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
