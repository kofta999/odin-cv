import { PropsWithChildren } from "react";

export default function FormSection({
  id,
  children,
}: PropsWithChildren<{ id: string }>) {
  return (
    <div className="formSection" id={id}>
      {children}
    </div>
  );
}
