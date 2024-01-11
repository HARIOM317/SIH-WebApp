import React, { useState } from "react";
import processFlowAPI from "../../APIs/processFlowAPI";

const ProcessFlow = () => {
  const [processFlow] = useState(processFlowAPI);
  return (
    <>
      <section className="service-main-container homepage">
        <div className="container service-container">
          <h1 className="main-heading text-center">SIH - 2K24 Process Flow</h1>

          <div className="row">
            {processFlow.map((element) => {
              const { id, logo, title, info } = element;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 sih-process-sub-div container"
                    key={id}
                  >
                    <i className={`font-awesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="paragraph">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessFlow;
