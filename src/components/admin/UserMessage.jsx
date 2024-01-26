import React from "react";
import "../../stylesheets/PSPageStyle.css";
import "../../stylesheets/AdminStyle.css";

const UserMessage = () => {
  return (
    <>
      <section className="container problem-statements">
        <div className="flex-content-end">
          <button
            className="button"
            style={{ background: "#00b7ff", margin: "1rem" }}
          >
            Refresh
          </button>
          <button
            className="button"
            style={{ background: "#d55543", margin: "1rem" }}
          >
            Export as Excel
          </button>
        </div>

        <h2
          style={{ margin: "1rem auto", fontWeight: "600", fontSize: "1.5rem" }}
        >
          Contact Messages
        </h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Subject</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>{/* Add Map Method Here */}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default UserMessage;
