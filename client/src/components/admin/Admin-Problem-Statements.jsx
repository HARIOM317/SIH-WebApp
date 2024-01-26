import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as XLSX from "xlsx";

const URL = "http://localhost:5007/api/problemStatements";
const uploadURL = 'http://localhost:5007/api/admin/add-problem-statement';

export const AdminProblemStatements = () => {
  const [problems, setProblems] = useState([]);
  const { authorizationToken } = useAuth();
  const [file, setFile] = useState(null);

  const getAllProblems = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setProblems(data);
        console.log("problems data: " + data);
      } else {
        console.error("Failed to fetch problem statements:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getAllProblems();
  }, []);

  const handleRefresh = () => {
    getAllProblems();
  };


  const uploadData = async (jsonData) => {
    console.log("passed data: "+JSON.stringify(jsonData));
    try {
        const response = await fetch(uploadURL, {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(jsonData),
        });

        if (response.ok) {
          toast.success("File Uploaded Successfully!");
          getAllProblems();
        }else{
            toast.error("File upload failed!");
        }
      } catch (error) {
        toast.error('Something went wrong :( ');
      }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        header: 0,
      });

      // Update the state with the new data
      uploadData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  //exporting to excel
  const exportToExcel = () => {
    const xlsData = problems.map((item) => ({
      id: item.id,
      organization: item.organization,
      problemStatement: item.problemStatement,
      category: item.category,
      PSNumber: item.PSNumber,
      domainBucket: item.domainBucket,
    }));
  
    const ws = XLSX.utils.json_to_sheet(xlsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Problems');
    XLSX.writeFile(wb, 'problems_statements.xlsx');
  };
  

  return (
    <>
      <section className="container mt-4">
        <h4>Add new Problem list: </h4>
        <div className="mb-3">
          <input type="file" onChange={handleFileChange} />
          <button className="btn btn-primary" onClick={handleFileUpload}>
            Upload Excel File
          </button>
        </div>
      </section>
      <section>
        <div className="container mt-4 mb-3">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-primary" onClick={handleRefresh}>
                Refresh
            </button>
            <button className="btn btn-success ms-1" onClick={exportToExcel}>
          Export as Excel
        </button>
          </div>
          <h2>Problem Statements</h2>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>S.N.</th>
                <th>PS ID</th>
                <th>Organisation</th>
                <th>Problem Statement</th>
                <th>Category</th>
                <th>Domain Bucket</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <tr key={problem._id}>
                  <td>{problem.id}</td>
                  <td>{problem.PSNumber}</td>
                  <td>{problem.organization}</td>
                  <td>{problem.problemStatement}</td>
                  <td>{problem.category}</td>
                  <td>{problem.domainBucket}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminProblemStatements;
