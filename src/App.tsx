import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";
import "./app.css";

export interface GeneralInfo {
  name: string;
  email: string;
  phoneNo: string;
}

export interface EduInfo {
  schoolName: string;
  titleOfStudy: string;
  dateOfStudy: string;
  endDateOfStudy: string;
}

export interface ProInfo {
  companyName: string;
  jobTitle: string;
  jobDetails: string;
  workedFrom: string;
  workedUntil: string;
}

export interface FormValues {
  generalInfo: GeneralInfo;
  eduInfo: EduInfo;
  proInfo: ProInfo;
}

function App() {
  const initialFromValues: FormValues = {
    generalInfo: {
      name: "",
      email: "",
      phoneNo: "",
    },
    eduInfo: {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
      endDateOfStudy: "",
    },
    proInfo: {
      companyName: "",
      jobDetails: "",
      jobTitle: "",
      workedFrom: "",
      workedUntil: "",
    },
  };

  const [formValues, setFormValues] = useState(initialFromValues);
  return (
    <>
      <Form formValues={formValues} setFormValues={setFormValues} />
      <Resume {...formValues} />
    </>
  );
}

export default App;
