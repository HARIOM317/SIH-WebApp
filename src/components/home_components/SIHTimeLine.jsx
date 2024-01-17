import React from "react";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const timeLineAPI = [
  {
    id: 1,
    icon: "fa-solid fa-rocket",
    date: "01 February 2023",
    title: "Launch of SISTec Innovation Hackathon",
    description:
      "Embark on the SISTec Innovation Hackathon journey, unveiling a platform for creativity and collaboration, shaping innovative solutions.",
  },
  {
    id: 2,
    icon: "fa-solid fa-address-card",
    date: "15 February 2023 - 20 February 2023",
    title: "Registration & Idea Submission",
    description:
      "Engage in the competition by registering and submitting groundbreaking ideas, contributing to the innovation ecosystem.",
  },
  {
    id: 3,
    icon: "fa-solid fa-lightbulb",
    date: "21 February 2023 - 25 February 2023",
    title: "Idea Evaluation",
    description:
      "A dedicated phase for evaluating submitted ideas, assessing their viability, creativity, and potential impact.",
  },
  {
    id: 4,
    icon: "fa-solid fa-bullhorn",
    date: "26 February 2023",
    title: "Announcement of Finalist",
    description:
      "Recognize outstanding contributions as finalists are unveiled, setting the stage for the next phase of the competition.",
  },
  {
    id: 5,
    icon: "fa-solid fa-trophy",
    date: "29 February 2023",
    title: "Grand Finale",
    description:
      "Culminate the event with the Grand Finale, where finalists showcase their innovative projects, celebrate achievements, and discover the ultimate winners.",
  },
];

const SIHTimeLine = () => {
  return (
    <>
      <section className="container">
        <h3 className="main-heading-center">Timeline of SIH 2.0</h3>
        <div className="event-timeline">
          <VerticalTimeline lineColor="var(--text-black-700)">
            {timeLineAPI.map((item) => {
              return (
                <VerticalTimelineElement
                  iconStyle={{
                    background: "var(--skin-color)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
                  }}
                  icon={<i class={item.icon}></i>}
                  date={item.date}
                >
                  <h3 className="timeline-heading">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default SIHTimeLine;
