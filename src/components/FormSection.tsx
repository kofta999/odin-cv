import { PropsWithChildren } from "react";

export default function FormSection({
  id,
  children,
  sectionName,
}: PropsWithChildren<{ id: string; sectionName: string }>) {
  return (
    <div id={id} className="section form-section">
      <div className="section-header">{sectionName}</div>
      <div className="section-items">{children}</div>
    </div>
  );
}
