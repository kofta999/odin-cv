import { PropsWithChildren } from "react";

export default function FormSection({ children }: PropsWithChildren) {
  return <div className="formSection">{children}</div>;
}
