import { FormValues } from "../App";
import "../styles/resume.css";
import GeneralInfo from "./GeneralInfo";

export default function Resume({ generalInfo, eduInfo, proInfo }: FormValues) {
  return (
    <div id="resume-container">
      <div id="resume">
        <GeneralInfo {...generalInfo} />

        <div className="edu-experience">
          <h1>{eduInfo.schoolName}</h1>
          <h2>{eduInfo.titleOfStudy}</h2>
          <h3>{eduInfo.dateOfStudy}</h3>
        </div>

        <div className="pro-experience">
          <h1>{proInfo.companyName}</h1>
          <h2>{proInfo.jobTitle}</h2>
          <p>{proInfo.jobDetails}</p>
          <h3>
            {proInfo.workedFrom} {proInfo.workedUntil}
          </h3>
        </div>
      </div>
    </div>
  );
}
