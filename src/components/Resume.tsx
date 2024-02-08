import { FormValues } from "../App";
import "../styles/resume.css";
import EducationalInfo from "./EducationalInfo";
import GeneralInfo from "./GeneralInfo";
import ProfessionalInfo from "./ProfessionalInfo";

export default function Resume({ generalInfo, eduInfo, proInfo }: FormValues) {
  return (
    <div id="resume-container">
      <div id="resume">
        {generalInfo && <GeneralInfo {...generalInfo} />}
        {eduInfo.titleOfStudy && <EducationalInfo {...eduInfo} />}
        {proInfo.companyName && <ProfessionalInfo {...proInfo} />}
      </div>
    </div>
  );
}
