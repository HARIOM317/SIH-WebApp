import React from "react";

const SelectedTeams = () => {
  return (
    <>
      <section className="container problem-statements">
        <h2
          style={{ margin: "1rem auto", fontWeight: "600", fontSize: "1.5rem" }}
        >
          Selected Teams
        </h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">PS ID</th>
                <th scope="col">Leader Name</th>
                <th scope="col">Leader Email</th>
                <th scope="col">Team Name</th>
                <th scope="col">Organization</th>
                <th scope="col">Problem Statement</th>
                <th scope="col">Collage</th>
              </tr>
            </thead>
            <tbody>{/* Add Map Method Here */}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SelectedTeams;
