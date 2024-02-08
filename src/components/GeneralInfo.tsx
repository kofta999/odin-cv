import { GeneralInfo as IGeneralInfo } from "../App";

export default function GeneralInfo({ name, email, phoneNo }: IGeneralInfo) {
  return (
    <div className="section general-info">
      <div className="name">
        <h1>{name}</h1>
      </div>

      <div className="contact">
        <h3>
          {email && (
            <div>
              <span className="label">Email</span>
              <span className="value">{email}</span>
            </div>
          )}
        </h3>

        <h3>
          {phoneNo && (
            <div>
              <span className="label">Phone</span>
              <span className="value">{phoneNo}</span>
            </div>
          )}
        </h3>
      </div>
    </div>
  );
}
