// import React, { useState } from "react";
// import "../../stylesheets/RegistrationFormStyle.css";
// import Dropdown from "./Dropdown";

// function RegistrationForm() {
//   const [activeStep, setActiveStep] = useState(1);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep(activeStep - 1);
//   };

//   const steps = [
//     { label: "Team Details", time: "Your Team Details" },
//     { label: "Member Details", time: "Your Team Details" },
//     { label: "Solution", time: "Your Team Details" },
//     { label: "Review Details", time: "Your Team Details" },
//     { label: "Payment", time: "Your Team Details" },
//   ];

 

//   // const options = [
//   //   {
//   //     text: "Environment & Climate Control",
//   //     icon: "fa-solid fa-tree",
//   //     color: "#016946",
//   //   },
//   //   {
//   //     text: "Health-Tech",
//   //     icon: "fa-solid fa-hand-holding-medical",
//   //     color: "#2892ff",
//   //   },
//   //   { text: "Agri-Tech", icon: "fa-solid fa-sun-plant-wilt", color: "#01b578" },
//   //   {
//   //     text: "Cyber Security",
//   //     icon: "fa-solid fa-shield-halved",
//   //     color: "#e26300",
//   //   },
//   //   {
//   //     text: "Edu-Tech",
//   //     icon: "fa-solid fa-book-open-reader",
//   //     color: "#2ee1e4",
//   //   },
//   //   {
//   //     text: "Criminal Database",
//   //     icon: "fa-solid fa-masks-theater",
//   //     color: "#151e28",
//   //   },
//   //   {
//   //     text: "Force Engagement",
//   //     icon: "fa-solid fa-person-military-pointing",
//   //     color: "#c5b294",
//   //   },
//   //   { text: "Social Media", icon: "fa-solid fa-thumbs-up", color: "#6393ff" },
//   //   { text: "Vehicle Theft", icon: "fa-solid fa-car", color: "#088ee0" },
//   //   { text: "Miscellaneous", icon: "fa-solid fa-gears", color: "#815feb" },
//   // ];

//   return (
//     <>
//       <div id="page" className="site">
//         <div className="form-container">
//           <div className="form-box">
//             <div className="process">
//               <ul className="progress-steps">
//                 {steps.map((step, index) => (
//                   <li
//                     key={index}
//                     className={`step ${
//                       activeStep === index + 1 ? "active" : ""
//                     }`}
//                   >
//                     <span>{index + 1}</span>
//                     <p>
//                       {step.label}
//                       <br />
//                       <span>{step.time}</span>
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <form action="">
//               {steps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`form-step ${
//                     activeStep === index + 1 ? "active" : ""
//                   }`}
//                 >
//                   <div className="bg-svg"></div>
//                   <h2>{step.label}</h2>
//                   {index === 0 && <p>Enter Your Team Details Correctly</p>}
//                   {index === 1 && (
//                     <p>Enter Your Team Member Details Correctly</p>
//                   )}
//                   {index === 2 && <p>Provide Your Solution Here</p>}
//                   {index === 3 && <p>Review Your Details</p>}
//                   {index === 4 && <p>Payment and Confirm Your Registration</p>}

//                   {index === 0 && (
//                     <>
//                       <div>
//                         <label>Leader Name</label>
//                         <input type="text" placeholder="Leader Name" />
//                       </div>
//                       <div>
//                         <label>Team Name</label>
//                         <input type="text" placeholder="Team Name" />
//                       </div>
//                       <div>
//                         <label>Leader Phone</label>
//                         <input type="text" placeholder="Leader Phone" />
//                       </div>
//                       <div>
//                         <label>Leader Email</label>
//                         <input type="text" placeholder="Leader Email" />
//                       </div>
//                       <div>
//                         <label>Institute Name</label>
//                         <input type="text" placeholder="Institute Name" />
//                       </div>
//                       <div>
//                         <label>Theme</label>
//                         <select name="theme" id="theme">
//                           <option value="">Please Select  Theme</option>
//                           <option value="Country 1">Theme 1</option>
//                           <option value="Country 2">Theme 2</option>
//                           <option value="Country 3">Theme 3</option>
//                           <option value="Country 4">Theme 4</option>
//                           <option value="Country 5">Theme 5</option>
//                         </select>
//                       </div>

//                       {/* Dropdown menu for Theme */}
//                       {/* <Dropdown /> */}

//                       <div className="row">
//                         <div className="btn-group">
//                           <button
//                             type="button"
//                             className="btn-prev"
//                             onClick={handlePrev}
//                             disabled={activeStep === 1}
//                           >
//                             Back
//                           </button>
//                           <button
//                             type="button"
//                             className="btn-next"
//                             onClick={handleNext}
//                             disabled={activeStep === steps.length}
//                           >
//                             Next
//                           </button>
//                           <button type="button" className="btn-submit">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   )}

//                   {index === 1 && (
//                     <>
//                       <div>
//                         <label>Phone</label>
//                         <input type="tel" placeholder="+91 xxxxxxxxxx" />
//                       </div>
//                       <div>
//                         <label>Address</label>
//                         <input type="text" placeholder="Street Address" />
//                       </div>
//                       <div>
//                         <input type="text" placeholder="App, Suite, Building" />
//                       </div>
//                       <div>
//                         <label>City</label>
//                         <input type="text" placeholder="City" />
//                       </div>
//                       <div>
//                         <label>State</label>
//                         <input type="text" placeholder="State" />
//                       </div>
//                       <div>
//                         <label>Zip Code</label>
//                         <input type="text" placeholder="Zip Code" />
//                       </div>
//                       <div>
//                         <label>Country</label>
//                         <select name="country" id="country">
//                           <option value="">Please Select</option>
//                           <option value="Country 1">Country 1</option>
//                           <option value="Country 2">Country 2</option>
//                           <option value="Country 3">Country 3</option>
//                           <option value="Country 4">Country 4</option>
//                           <option value="Country 5">Country 5</option>
//                         </select>
//                       </div>

//                       <div className="row">
//                         <div className="btn-group cls-lg-4">
//                           <button
//                             type="button"
//                             className="btn-prev"
//                             onClick={handlePrev}
//                             disabled={activeStep === 1}
//                           >
//                             Back
//                           </button>
//                           <button
//                             type="button"
//                             className="btn-next"
//                             onClick={handleNext}
//                             disabled={activeStep === steps.length}
//                           >
//                             Next
//                           </button>
//                           <button type="button" className="btn-submit">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   )}
//                   {index === 2 && (
//                     <>
//                       <div>
//                         <label>Email</label>
//                         <input type="email" placeholder="Your Email Address" />
//                       </div>
//                       <div>
//                         <label>Username</label>
//                         <input type="text" placeholder="Username" />
//                       </div>
//                       <div>
//                         <label>Password</label>
//                         <input type="password" placeholder="Password" />
//                       </div>
//                       <div>
//                         <input type="password" placeholder="Confirm Password" />
//                       </div>
//                       <div className="checkbox">
//                         <input type="checkbox" />
//                         <label>Receive our newsletter and special offers</label>
//                       </div>

//                       <div className="row">
//                         <div className="btn-group cls-lg-4">
//                           <button
//                             type="button"
//                             className="btn-prev"
//                             onClick={handlePrev}
//                             disabled={activeStep === 1}
//                           >
//                             Back
//                           </button>
//                           <button
//                             type="button"
//                             className="btn-next"
//                             onClick={handleNext}
//                             disabled={activeStep === steps.length}
//                           >
//                             Next
//                           </button>
//                           <button type="button" className="btn-submit">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   )}

//                   {index === 3 && (
//                     <>
//                       <div>
//                         <label>Email</label>
//                         <input type="email" placeholder="Your Email Address" />
//                       </div>
//                       <div>
//                         <label>Username</label>
//                         <input type="text" placeholder="Username" />
//                       </div>
//                       <div>
//                         <label>Password</label>
//                         <input type="password" placeholder="Password" />
//                       </div>
//                       <div>
//                         <input type="password" placeholder="Confirm Password" />
//                       </div>
//                       <div className="checkbox">
//                         <input type="checkbox" />
//                         <label>Receive our newsletter and special offers</label>
//                       </div>

//                       <div className="row">
//                         <div className="btn-group cls-lg-4">
//                           <button
//                             type="button"
//                             className="btn-prev"
//                             onClick={handlePrev}
//                             disabled={activeStep === 1}
//                           >
//                             Back
//                           </button>
//                           <button
//                             type="button"
//                             className="btn-next"
//                             onClick={handleNext}
//                             disabled={activeStep === steps.length}
//                           >
//                             Next
//                           </button>
//                           <button type="button" className="btn-submit">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   )}

//                   {index === 4 && (
//                     <>
//                       <div>
//                         <label>Email</label>
//                         <input type="email" placeholder="Your Email Address" />
//                       </div>
//                       <div>
//                         <label>Username</label>
//                         <input type="text" placeholder="Username" />
//                       </div>
//                       <div>
//                         <label>Password</label>
//                         <input type="password" placeholder="Password" />
//                       </div>
//                       <div>
//                         <input type="password" placeholder="Confirm Password" />
//                       </div>
//                       <div className="checkbox">
//                         <input type="checkbox" />
//                         <label>Receive our newsletter and special offers</label>
//                       </div>

//                       <div className="row">
//                         <div className="btn-group cls-lg-4">
//                           <button
//                             type="button"
//                             className="btn-prev"
//                             onClick={handlePrev}
//                             disabled={activeStep === 1}
//                           >
//                             Back
//                           </button>
//                           <button
//                             type="button"
//                             className="btn-next"
//                             onClick={handleNext}
//                             disabled={activeStep === steps.length}
//                           >
//                             Next
//                           </button>
//                           <button type="button" className="btn-submit">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default RegistrationForm;
