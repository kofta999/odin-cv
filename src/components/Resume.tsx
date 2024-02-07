import { FormValues } from "../App";
import "../styles/resume.css";

interface Props {
  formValues: FormValues;
}

export default function Resume({ formValues }: Props) {
  return (
    <div id="resume">
      <div className="general-info">
        <h1>{formValues.name}</h1>
        <h2>{formValues.email}</h2>
        <h3>{formValues.phoneNo}</h3>
      </div>

      <div className="edu-experience">
        <h1>{formValues.schoolName}</h1>
        <h2>{formValues.titleOfStudy}</h2>
        <h3>{formValues.dateOfStudy}</h3>
      </div>

      <div className="pro-experience">
        <h1>{formValues.companyName}</h1>
        <h2>{formValues.jobTitle}</h2>
        <p>{formValues.jobDetails}</p>
        <h3>
          {formValues.workedFrom} {formValues.workedUntil}
        </h3>
      </div>
    </div>
  );
}
