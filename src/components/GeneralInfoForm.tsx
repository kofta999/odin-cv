import { GeneralInfo } from "../App";
import FormSection from "./FormSection";
import Input from "./Input";

interface Props {
  handleChange: (
    field: keyof GeneralInfo
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  info: GeneralInfo;
}

export default function GeneralInfoForm({ handleChange, info }: Props) {
  return (
    <FormSection id="general-info">
      <Input
        id="name"
        name="name"
        type="text"
        placeHolder="Name"
        value={info.name}
        onChange={handleChange("name")}
      />

      <Input
        id="email"
        name="email"
        type="email"
        placeHolder="Email"
        value={info.email}
        onChange={handleChange("email")}
      />

      <Input
        id="phoneNo"
        name="phoneNo"
        type="tel"
        placeHolder="Phone Number"
        value={info.phoneNo}
        onChange={handleChange("phoneNo")}
      />
    </FormSection>
  );
}
