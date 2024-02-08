import React, { Dispatch, SetStateAction } from "react";
import { FormValues } from "../App";
import EducationalInfoForm from "./EducationalInfoForm";
import ProfessionalInfoForm from "./ProfessionalInfoForm";
import GeneralInfoForm from "./GeneralInfoForm";

interface Props {
  formValues: FormValues;
  setFormValues: Dispatch<SetStateAction<FormValues>>;
}

export default function Form({ formValues, setFormValues }: Props) {
  const handleNestedInputChange =
    <Section extends keyof FormValues>(section: Section) =>
    (field: keyof FormValues[Section]) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: e.target.value,
        },
      }));
    };

  return (
    <div className="form">
      <GeneralInfoForm
        handleChange={handleNestedInputChange("generalInfo")}
        info={formValues.generalInfo}
      />

      <EducationalInfoForm
        handleChange={handleNestedInputChange("eduInfo")}
        info={formValues.eduInfo}
      />

      <ProfessionalInfoForm
        handleChange={handleNestedInputChange("proInfo")}
        info={formValues.proInfo}
      />
    </div>
  );
}
