import React from "react";
import "../../stylesheets/PSPageStyle.css";
import "../../stylesheets/AdminStyle.css";

const AdminProblemStatements = () => {
  return (
    <>
      <section className="container mt-4">
        <h2
          style={{ margin: "1rem auto", fontWeight: "600", fontSize: "1.5rem" }}
        >
          Add new Problem list
        </h2>
        <div className="mb-3 flex-between">
          <input type="file" className="btn-margin" />

          <div>
            <button className="button btn-margin">Upload Excel File</button>
            <button
              className="button btn-margin"
              style={{ background: "#00b7ff" }}
            >
              Refresh
            </button>
            <button
              className="button btn-margin"
              style={{ background: "#d55543" }}
            >
              Export as Excel
            </button>
          </div>
        </div>
      </section>

      <section className="container problem-statements">
        <h2
          style={{ margin: "1rem auto", fontWeight: "600", fontSize: "1.5rem" }}
        >
          Problem Statements
        </h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">PS ID</th>
                <th scope="col">Organization</th>
                <th scope="col">Problem Statement</th>
                <th scope="col">Category</th>
                <th scope="col">Domain Bucket</th>
              </tr>
            </thead>
            <tbody>{/* Add Map Method Here */}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminProblemStatements;
