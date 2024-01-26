import React from "react";

const RegisteredTeams = () => {
  return (
    <>
      <section className="container problem-statements">
        <h2
          style={{ margin: "1rem auto", fontWeight: "600", fontSize: "1.5rem" }}
        >
          Registered Teams
        </h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">Leader Name</th>
                <th scope="col">Leader Email</th>
                <th scope="col">Theme</th>
                <th scope="col">Idea PPT</th>
                <th scope="col">Consent Letter</th>
                <th scope="col">Payment Screenshot</th>
              </tr>
            </thead>
            <tbody>{/* Add Map Method Here */}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default RegisteredTeams;
