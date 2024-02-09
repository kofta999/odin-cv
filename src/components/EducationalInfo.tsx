import { EduInfo } from "../App";
import ResumeDate from "./ResumeDate";

export default function EducationalInfo({
  dateOfStudy,
  endDateOfStudy,
  schoolName,
  titleOfStudy,
}: EduInfo) {
  return (
    <div className="resume-section edu-experience">
      <div className="title">Education</div>
      <hr />
      <div className="content">
        {dateOfStudy && (
          <ResumeDate startDate={dateOfStudy} endDate={endDateOfStudy} />
        )}
        <div className="details">
          <h3>{titleOfStudy}</h3>
          <h4>{schoolName}</h4>
        </div>
      </div>
    </div>
  );
}
