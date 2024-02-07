import { ChangeEventHandler } from "react";

interface Props {
  type: "text" | "email" | "tel" | "date";
  name: string;
  id: string;
  placeHolder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Input(props: Props) {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeHolder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
