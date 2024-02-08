import { EduInfo } from "../App";

export default function EducationalInfo({
  dateOfStudy,
  endDateOfStudy,
  schoolName,
  titleOfStudy,
}: EduInfo) {
  return (
    <div className="section edu-experience">
      <div className="title">Education</div>
      <hr />
      <div className="content">
        {dateOfStudy && (
          <div className="date">
            <span className="start-date">{dateOfStudy}</span>
            <span>-</span>
            <span className="end-date">
              {endDateOfStudy ? endDateOfStudy : "present"}
            </span>
          </div>
        )}
        <div className="details">
          <h3>{titleOfStudy}</h3>
          <h4>{schoolName}</h4>
        </div>
      </div>
    </div>
  );
}
