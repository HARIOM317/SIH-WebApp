import React, { useEffect, useState } from "react";
import problemStatementsAPI from "../../APIs/problemStatementsAPI";
import "../../stylesheets/PSPageStyle.css";
import { Form, InputGroup } from "react-bootstrap";

const URL = "http://localhost:5007/api/problemStatements";

const ProblemStatements = () => {
  const [data, setData] = useState([]);

  const getAllProblems = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data: " + data);
        setData(data);
      } else {
        console.error(
          "Failed to fetch problem statements:",
          response.statusText
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    getAllProblems();
  }, []);


  // Foe Searching
  const [search, setSearch] = useState("");
  return (
    <>
      <section className="container problem-statements margin-top-ultra-max">
        <Form>
          <InputGroup className="my-3 search-bar">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="search-input"
            />
          </InputGroup>
        </Form>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">Organization</th>
                <th scope="col">Problem Statement</th>
                <th scope="col">PS Number</th>
                <th scope="col">Category</th>
                <th scope="col">Domain Bucket</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.PSNumber.toLowerCase().includes(search) ||
                        item.problemStatement.toLowerCase().includes(search) ||
                        item.organization.toLowerCase().includes(search);
                })
                .map((element) => {
                  return (
                    <>
                      <tr key={element.id}>
                        <th scope="row">{element.id}</th>
                        <td>{element.organization}</td>
                        <td>{element.problemStatement}</td>
                        <td>{element.PSNumber}</td>
                        <td>{element.category}</td>
                        <td>{element.domainBucket}</td>
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
