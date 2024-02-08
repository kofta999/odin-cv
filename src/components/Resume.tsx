import { FormValues } from "../App";
import "../styles/resume.css";

export default function Resume({ generalInfo, eduInfo, proInfo }: FormValues) {
  return (
    <div id="resume">
      <div className="general-info">
        <h1>{generalInfo.name}</h1>
        <h2>{generalInfo.email}</h2>
        <h3>{generalInfo.phoneNo}</h3>
      </div>

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
  );
}
