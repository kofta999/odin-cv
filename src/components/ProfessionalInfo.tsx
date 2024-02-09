import { ProInfo } from "../App";
import ResumeDate from "./ResumeDate";

export default function ProfessionalInfo({
  companyName,
  jobDetails,
  jobTitle,
  workedFrom,
  workedUntil,
}: ProInfo) {
  return (
    <div className="resume-section pro-experience">
      <div className="title">Professional Experience</div>
      <hr />
      <div className="content">
        {workedFrom && (
          <ResumeDate startDate={workedFrom} endDate={workedUntil} />
        )}
        <div className="details">
          <h3>{jobTitle}</h3>
          <h4>{companyName}</h4>
          <p>{jobDetails}</p>
        </div>
      </div>
    </div>
  );
}
