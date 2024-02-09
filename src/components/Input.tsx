import { ChangeEventHandler } from "react";

interface Props {
  type: "text" | "email" | "tel" | "month";
  name: string;
  id: string;
  placeHolder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Input(props: Props) {
  const inputId = props.id + "-input";
  return (
    <div className="form-input" id={props.id}>
      <label htmlFor={inputId}>{props.placeHolder}</label>
      <input
        type={props.type}
        name={props.name}
        id={inputId}
        placeholder={props.placeHolder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
