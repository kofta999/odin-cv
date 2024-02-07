import { FormValues } from "../App";
import FormSection from "./FormSection";
import Input from "./Input";

interface Props {
  formValues: FormValues;
  setFormValues: (value: FormValues) => void;
}

export default function Form({ formValues, setFormValues }: Props) {
  return (
    <div className="form">
      <FormSection>
        <Input
          id="name"
          name="name"
          type="text"
          placeHolder="Name"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />

        <Input
          id="email"
          name="email"
          type="email"
          placeHolder="Email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />

        <Input
          id="phoneNo"
          name="phoneNo"
          type="tel"
          placeHolder="Phone Number"
          value={formValues.phoneNo}
          onChange={(e) =>
            setFormValues({ ...formValues, phoneNo: e.target.value })
          }
        />
      </FormSection>

      <FormSection>
        <Input
          type="text"
          name="schoolName"
          id="schoolName"
          placeHolder="School Name"
          value={formValues.schoolName}
          onChange={(e) =>
            setFormValues({ ...formValues, schoolName: e.target.value })
          }
        />

        <Input
          type="text"
          name="titleOfStudy"
          id="titleOfStudy"
          placeHolder="Title Of Study"
          value={formValues.titleOfStudy}
          onChange={(e) =>
            setFormValues({ ...formValues, titleOfStudy: e.target.value })
          }
        />

        <Input
          type="date"
          name="dateOfStudy"
          id="dateOfStudy"
          placeHolder="Date Of Study"
          value={formValues.dateOfStudy}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              dateOfStudy: e.target.value,
            })
          }
        />
      </FormSection>

      <FormSection>
        <Input
          type="text"
          name="companyName"
          id="companyName"
          placeHolder="Company Name"
          value={formValues.companyName}
          onChange={(e) =>
            setFormValues({ ...formValues, companyName: e.target.value })
          }
        />

        <Input
          type="text"
          name="jobDetails"
          id="jobDetails"
          placeHolder="Job Details"
          value={formValues.jobDetails}
          onChange={(e) =>
            setFormValues({ ...formValues, jobDetails: e.target.value })
          }
        />

        <Input
          type="text"
          name="jobTitle"
          id="jobTitle"
          placeHolder="Job Title"
          value={formValues.jobTitle}
          onChange={(e) =>
            setFormValues({ ...formValues, jobTitle: e.target.value })
          }
        />

        <Input
          type="date"
          name="workedFrom"
          id="workedFrom"
          placeHolder="Worked From"
          value={formValues.workedFrom}
          onChange={(e) =>
            setFormValues({ ...formValues, workedFrom: e.target.value })
          }
        />

        <Input
          type="date"
          name="workedUntil"
          id="workedUntil"
          placeHolder="Worked Until"
          value={formValues.workedUntil}
          onChange={(e) =>
            setFormValues({ ...formValues, workedUntil: e.target.value })
          }
        />
      </FormSection>
    </div>
  );
}
