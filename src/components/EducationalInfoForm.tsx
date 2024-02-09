import { EduInfo } from "../App";
import FormSection from "./FormSection";
import Input from "./Input";

interface Props {
  handleChange: (
    field: keyof EduInfo
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  info: EduInfo;
}

export default function EducationalInfoForm({ handleChange, info }: Props) {
  return (
    <FormSection id="educational-form" sectionName="Educational Information">
      <Input
        type="text"
        name="schoolName"
        id="schoolName"
        placeHolder="School Name"
        value={info.schoolName}
        onChange={handleChange("schoolName")}
      />

      <Input
        type="text"
        name="titleOfStudy"
        id="titleOfStudy"
        placeHolder="Title Of Study"
        value={info.titleOfStudy}
        onChange={handleChange("titleOfStudy")}
      />

      <Input
        type="month"
        name="dateOfStudy"
        id="dateOfStudy"
        placeHolder="Date Of Study"
        value={info.dateOfStudy}
        onChange={handleChange("dateOfStudy")}
      />

      <Input
        type="month"
        name="endDateOfStudy"
        id="endDateOfStudy"
        placeHolder="End Date Of Study"
        value={info.endDateOfStudy}
        onChange={handleChange("endDateOfStudy")}
      />
    </FormSection>
  );
}
