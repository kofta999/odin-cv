import { Dispatch, SetStateAction } from "react";
import { FormValues } from "../App";
import "../styles/manage-form.css";

interface Props {
  emptyFormValues: FormValues;
  initialFormValues: FormValues;
  setFormValues: Dispatch<SetStateAction<FormValues>>;
}

export default function ManageFormSection({
  emptyFormValues,
  initialFormValues,
  setFormValues,
}: Props) {
  return (
    <div id="manage-form" className="section">
      <button id="load-form" onClick={() => setFormValues(initialFormValues)}>
        Load Example
      </button>
      <button id="reset-form" onClick={() => setFormValues(emptyFormValues)}>
        Reset Form
      </button>
    </div>
  );
}
