import { FormValues } from "../App";
import "../styles/resume.css";
import EducationalInfo from "./EducationalInfo";
import GeneralInfo from "./GeneralInfo";

export default function Resume({ generalInfo, eduInfo, proInfo }: FormValues) {
  return (
    <div id="resume-container">
      <div id="resume">
        <GeneralInfo {...generalInfo} />

        <EducationalInfo {...eduInfo} />

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
