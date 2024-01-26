import React, { useState, useEffect } from "react";
import { useAuth } from "../../store/auth";

const API_URL = "http://localhost:5007/api/admin/teams";
export const AdminTeams = () => {
  const [teams, setTeams] = useState([]);
  const { authorizationToken } = useAuth();

  const fetchTeams = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTeams(data);
      } else {
        console.error("Failed to fetch teams:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const openInNewTab = (data, contentType) => {
    const arrayBufferView = new Uint8Array(data);
    const blob = new Blob([arrayBufferView], { type: contentType });
    const imageUrl = URL.createObjectURL(blob);
  
    // Open a new tab with the image
    const newTab = window.open();
    newTab.document.write(`<img src="${imageUrl}" alt="Image" />`);
  };

  return (
    <div className="container mt-4">
    <h2>Teams Table</h2>
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>Leader Name</th>
          <th>Team Name</th>
          <th>Leader Email</th>
          <th>Theme</th>
          <th>PDF (Idea PPT)</th>
          <th>PDF (Consent Letter)</th>
          <th>Image (Payment Screenshot)</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team._id}>
            <td>{team.leaderName}</td>
            <td>{team.teamName}</td>
            <td>{team.leaderEmail}</td>
            <td>{team.theme}</td>
            <td>
              <button
                className="btn btn-link"
                onClick={() => openInNewTab(team.ideaPPT.data, team.ideaPPT.contentType)}
              >
                View PDF
              </button>
            </td>
            <td>
              <button
                className="btn btn-link"
                onClick={() => openInNewTab(team.consentLetter.data, team.consentLetter.contentType)}
              >
                View PDF
              </button>
            </td>
            <td>
              <button
                className="btn btn-link"
                onClick={() => openInNewTab(team.paymentScreenshot.data, team.paymentScreenshot.contentType)}
              >
                View Image
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};
