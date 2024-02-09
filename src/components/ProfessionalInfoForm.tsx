import { ProInfo } from "../App";
import FormSection from "./FormSection";
import Input from "./Input";

interface Props {
  handleChange: (
    field: keyof ProInfo
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  info: ProInfo;
}

export default function ProfessionalInfoForm({ handleChange, info }: Props) {
  return (
    <FormSection id="professional-form">
      <Input
        type="text"
        name="companyName"
        id="companyName"
        placeHolder="Company Name"
        value={info.companyName}
        onChange={handleChange("companyName")}
      />

      <Input
        type="text"
        name="jobTitle"
        id="jobTitle"
        placeHolder="Job Title"
        value={info.jobTitle}
        onChange={handleChange("jobTitle")}
      />

      <Input
        type="text"
        name="jobDetails"
        id="jobDetails"
        placeHolder="Job Details"
        value={info.jobDetails}
        onChange={handleChange("jobDetails")}
      />

      <Input
        type="month"
        name="workedFrom"
        id="workedFrom"
        placeHolder="Worked From"
        value={info.workedFrom}
        onChange={handleChange("workedFrom")}
      />

      <Input
        type="month"
        name="workedUntil"
        id="workedUntil"
        placeHolder="Worked Until"
        value={info.workedUntil}
        onChange={handleChange("workedUntil")}
      />
    </FormSection>
  );
}
