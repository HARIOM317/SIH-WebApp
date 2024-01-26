import React from "react";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const timeLineAPI = [
  {
    id: 1,
    icon: "fa-solid fa-calendar-check",
    date: "September 2023",
    title: "Planning of SIH 2.0",
    description:
      "We kickstart the exciting journey of SISTec Innovation Hackathon 2.0 by laying down our plans and strategies for a fantastic event.",
  },

  {
    id: 2,
    icon: "fa-solid fa-hands-bound",
    date: "10 September 2023 - 31 December 2023",
    title: "Problem and Fund Collection",
    description:
      "From September to December 2023, we're actively gathering both intriguing problem statements and necessary funds to make SIH 2.0 a huge success.",
  },
  {
    id: 3,
    icon: "fa-solid fa-rocket",
    date: "01 January 2024",
    title: "Problem Statements Release to Participants",
    description:
      "Come January 1, 2024, we unveil the challenges, releasing problem statements for all enthusiastic participants.",
  },
  {
    id: 4,
    icon: "fa-solid fa-lightbulb",
    date: "12 January 2024",
    title: "Idea Submissions",
    description:
      "Starting January 12, 2024, participants are invited to submit their innovative ideas for the revealed problem statements.",
  },
  {
    id: 5,
    icon: "fa-solid fa-bullhorn",
    date: "17 January 2024",
    title: "Finalist Announcement",
    description:
      "On January 17, 2024, we proudly announce the finalists whose exceptional ideas have earned them a spot in the limelight.",
  },
  {
    id: 6,
    icon: "fa-solid fa-flag",
    date: "29 February 2024",
    title: "Grand Finale",
    description:
      "The much-anticipated Grand Finale unfolds on February 29, 2024, where the best ideas compete for top honors.",
  },
  {
    id: 7,
    icon: "fa-solid fa-trophy",
    date: "01 March 2024",
    title: "Prize Distribution",
    description:
      "March 1, 2024, marks the culmination of SIH 2.0 as we distribute prizes, celebrating the brilliance and innovation that defined this incredible journey.",
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
                  icon={<i className={item.icon}></i>}
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
