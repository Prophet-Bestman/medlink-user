import Practioner from "./Practitioner";
import { HospitalPractioners, SingleHospital } from "@/types/hospital";

const PractitionersList = async({data}: {data: SingleHospital}) => {
  if (!data || data.practitioners.length === 0) {
    return <p className="section">No Practitioners Found</p>;
  }
  const {practitioners} = data;
  return (
    <ul className="py-8 grid grid-cols-practitioners gap-8">
      {practitioners.map((practitioner: HospitalPractioners) => (
        <Practioner key={practitioner.id} {...practitioner} hospital_name={data.name}  />
      ))}
    </ul>
  );
};

export default PractitionersList;
