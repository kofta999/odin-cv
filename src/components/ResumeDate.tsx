export default function ResumeDate({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  return (
    <div className="date">
      <span className="start-date">{startDate}</span>
      <span>-</span>
      <span className="end-date">{endDate ? endDate : "present"}</span>
    </div>
  );
}
