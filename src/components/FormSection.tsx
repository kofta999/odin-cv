import { PropsWithChildren } from "react";

export default function FormSection({
  id,
  children,
}: PropsWithChildren<{ id: string }>) {
  return (
    <div className="form-section" id={id}>
      {children}
    </div>
  );
}
