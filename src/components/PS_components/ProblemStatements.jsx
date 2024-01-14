import React, { useState } from "react";
import problemStatementsAPI from "../../APIs/problemStatementsAPI";
import "../../stylesheets/PSPageStyle.css";

const ProblemStatements = () => {
  const [data] = useState(problemStatementsAPI);
  return (
    <>
      <section className="container problem-statements margin-top-ultra-max">
        <div className="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">Organization</th>
                <th scope="col">Problem Statement</th>
                <th scope="col">PS Number</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{element.id}</th>
                      <td>{element.organization}</td>
                      <td>{element.problemStatement}</td>
                      <td>{element.PSNumber}</td>
                      <td>{element.category}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ProblemStatements;
