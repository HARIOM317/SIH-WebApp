import React from "react";

const Dashboard = () => {
  return (
    <>
      <section className="announcements prizes">
        <div className="paddings innerWidth flexCenter announce-container">
          <div className="announceCard">
            <img src="./images/admin/theme.png" alt="1st Prize" />
            <h3>total Themes</h3>
            <span>Data</span>
          </div>
          <div className="announceCard">
            <img src="./images/admin/problem.png" alt="2nd Prize" />
            <h3>Total Problem Statements</h3>
            <span>Data</span>
          </div>
          <div className="announceCard">
            <img src="./images/admin/team.png" alt="3rd Prize" />
            <h3>Total Registered Teams</h3>
            <span>Data</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
