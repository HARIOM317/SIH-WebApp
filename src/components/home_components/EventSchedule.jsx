import React, { useState } from "react";

const firstDayMorningSchedule = [
  {
    id: 1,
    time: "7:30 AM-8:00 AM",
    task: "BreakFast",
    description: "A very short description about the schedule task.",
  },
  {
    id: 2,
    time: "8:00 AM",
    task: "Assemble at the venue",
    description: "A very short description about the schedule task.",
  },
  {
    id: 3,
    time: "8:15 AM-8:30 AM",
    task: "Inauguration of the event",
    description: "A very short description about the schedule task.",
  },
  {
    id: 4,
    time: "8:30 AM-8:40 AM",
    task: "Welcome Address",
    description: "A very short description about the schedule task.",
  },
  {
    id: 5,
    time: "8:40AM-8:50 AM",
    task: "Felicitation of Dignitaries",
    description: "A very short description about the schedule task.",
  },
  {
    id: 6,
    time: "8:50AM-9:00AM",
    task: "Speech by Guest of Honor",
    description: "A very short description about the schedule task.",
  },
  {
    id: 7,
    time: "9:00AM-9:10AM",
    task: "Speech by Chief Guest at Venue",
    description: "A very short description about the schedule task.",
  },
  {
    id: 8,
    time: "9:30 AM",
    task: "Coding Begins",
    description: "A very short description about the schedule task.",
  },
  {
    id: 9,
    time: "9:55 AM",
    task: "Tea and snacks on table",
    description: "A very short description about the schedule task.",
  },
  {
    id: 10,
    time: "10:00AM -11:00AM",
    task: "First Round of Training Session",
    description: "A very short description about the schedule task.",
  },
];

const firstDayAfterMorningSchedule = [
  {
    id: 1,
    time: "12:00 -12:30 PM",
    task: "Lunch",
    description: "A very short description about the schedule task.",
  },
  {
    id: 2,
    time: "12:30 PM",
    task: "Coding Resumes",
    description: "A very short description about the schedule task.",
  },
  {
    id: 3,
    time: "3:00 PM",
    task: "Snacks on Table",
    description: "A very short description about the schedule task.",
  },
  {
    id: 4,
    time: "5:00 PM",
    task: "First Assessment",
    description: "A very short description about the schedule task.",
  },
  {
    id: 5,
    time: "8:00PM-8:30PM",
    task: "Dinner",
    description: "A very short description about the schedule task.",
  },
  {
    id: 6,
    time: "8:30PM",
    task: "Coding Resumes",
    description: "A very short description about the schedule task.",
  },
  {
    id: 7,
    time: "11:00PM",
    task: "Second Assessment",
    description: "A very short description about the schedule task.",
  },
];

const secondDayMidNightSchedule = [
  {
    id: 1,
    time: "12:30AM",
    task: "Second Round of Training (5 to 7 mins per team)",
    description: "A very short description about the schedule task.",
  },
  {
    id: 2,
    time: "12:45AM",
    task: "Snacks on Table",
    description: "A very short description about the schedule task.",
  },
  {
    id: 3,
    time: "12:50AM",
    task: "Coding Continues",
    description: "A very short description about the schedule task.",
  },
  {
    id: 4,
    time: "3:00AM",
    task: "Snacks and biscuits served on Table",
    description: "A very short description about the schedule task.",
  },
];

const secondDayMorningSchedule = [
  {
    id: 1,
    time: "6:00AM- 6:15AM",
    task: "Yoga Session",
    description: "A very short description about the schedule task.",
  },
  {
    id: 2,
    time: "7:00AM",
    task: "Breakfast served",
    description: "A very short description about the schedule task.",
  },
  {
    id: 3,
    time: "8:30AM",
    task: "Final Round of Evaluation",
    description: "A very short description about the schedule task.",
  },
  {
    id: 4,
    time: "10:00AM",
    task: "Validictory Function and Prize distribution",
    description: "A very short description about the schedule task.",
  },
];

function EventSchedule() {
  // State to track active button
  const [activeButton, setActiveButton] = useState("Day 1");

  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="container">
      <div className="text-center  mb-5">
        <h3 className="main-heading-center mb-2 ">Event Schedule</h3>
        <span style={{ color: "var(--text-black-700)" }}>
          Here is our event schedule
        </span>
      </div>

      <div className="state-toggler">
        {/* Buttons */}
        <button
          onClick={() => handleButtonClick("Day 1")}
          className={
            activeButton === "Day 1"
              ? "state-button-active"
              : "state-button-inactive"
          }
        >
          Day 1
        </button>
        <button
          onClick={() => handleButtonClick("Day 2")}
          className={
            activeButton === "Day 2"
              ? "state-button-active"
              : "state-button-inactive"
          }
        >
          Day 2
        </button>
      </div>

      <div className="text-center">
        <p className="schedule-para">
          The event is organised under the Computer Science and Engineering
          department at SISTec-R.
        </p>
      </div>

      {/* Content based on active button */}
      {activeButton === "Day 1" && (
        <>
          <section className="event-schedule" id="event-schedule">
            <div className="container">
              <div class="row">
                <div class="first-day pad-15">
                  <h3 class="title">Day 1 (Morning)</h3>
                  <div class="row">
                    <div class="schedule-box pad-15">
                      <div class="schedule shadow-dark">
                        {firstDayMorningSchedule.map((element) => {
                          return (
                            <>
                              <div class="schedule-item" key={element.id}>
                                <div class="circle-dot"></div>
                                <h3 class="schedule-time">
                                  <i class="fa fa-clock"></i> {element.time}
                                </h3>
                                <h4 class="schedule-title">{element.task}</h4>
                                <p class="schedule-text">
                                  {element.description}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="second-day pad-15">
                  <h3 class="title">Day 1 (Afternoon - Night)</h3>

                  <div class="row">
                    <div class="schedule-box pad-15">
                      <div class="schedule shadow-dark">
                        {firstDayAfterMorningSchedule.map((element) => {
                          return (
                            <>
                              <div class="schedule-item" key={element.id}>
                                <div class="circle-dot"></div>
                                <h3 class="schedule-time">
                                  <i class="fa fa-clock"></i>
                                  {element.time}
                                </h3>
                                <h4 class="schedule-title">{element.task}</h4>
                                <p class="schedule-text">
                                  {element.description}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeButton === "Day 2" && (
        <>
          <section className="event-schedule" id="event-schedule">
            <div className="container">
              <div class="row">
                <div class="first-day pad-15">
                  <h3 class="title">Day 2 (Mid Night)</h3>
                  <div class="row">
                    <div class="schedule-box pad-15">
                      <div class="schedule shadow-dark">
                        {secondDayMidNightSchedule.map((element) => {
                          return (
                            <>
                              <div class="schedule-item" key={element.id}>
                                <div class="circle-dot"></div>
                                <h3 class="schedule-time">
                                  <i class="fa fa-clock"></i> {element.time}
                                </h3>
                                <h4 class="schedule-title">{element.task}</h4>
                                <p class="schedule-text">
                                  {element.description}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="second-day pad-15">
                  <h3 class="title">Day 2 (Morning)</h3>

                  <div class="row">
                    <div class="schedule-box pad-15">
                      <div class="schedule shadow-dark">
                        {secondDayMorningSchedule.map((element) => {
                          return (
                            <>
                              <div class="schedule-item" key={element.id}>
                                <div class="circle-dot"></div>
                                <h3 class="schedule-time">
                                  <i class="fa fa-clock"></i>
                                  {element.time}
                                </h3>
                                <h4 class="schedule-title">{element.task}</h4>
                                <p class="schedule-text">
                                  {element.description}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default EventSchedule;
