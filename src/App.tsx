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

  const initalFilledForm: FormValues = {
    generalInfo: {
      name: "Mostafa Mahmoud",
      email: "mostafa.m.helmy@outlook.com",
      phoneNo: "+20 1158254758",
    },
    eduInfo: {
      schoolName: "Suez Canal University",
      titleOfStudy: "Computer Engineering",
      dateOfStudy: "2020-10",
      endDateOfStudy: "2025-07",
    },
    proInfo: {
      companyName: "Some Company",
      jobTitle: "Full Stack Developer",
      jobDetails: "Creating Full Stack applications",
      workedFrom: "2024-06",
      workedUntil: "",
    },
  };

  const [formValues, setFormValues] = useState(initalFilledForm);
  return (
    <>
      <Form formValues={formValues} setFormValues={setFormValues} />
      <Resume {...formValues} />
    </>
  );
}

export default App;
