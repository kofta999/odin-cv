import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";
import "./app.css";

export interface FormValues {
  name: string;
  email: string;
  phoneNo: string;
  schoolName: string;
  titleOfStudy: string;
  dateOfStudy: string;
  companyName: string;
  jobTitle: string;
  jobDetails: string;
  workedFrom: string;
  workedUntil: string;
}

function App() {
  const initialFromValues: FormValues = {
    name: "",
    email: "",
    phoneNo: "",
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
    companyName: "",
    jobDetails: "",
    jobTitle: "",
    workedFrom: "",
    workedUntil: "",
  };

  const [formValues, setFormValues] = useState(initialFromValues);
  return (
    <>
      <Form formValues={formValues} setFormValues={setFormValues} />
      <Resume formValues={formValues} />
    </>
  );
}

export default App;
