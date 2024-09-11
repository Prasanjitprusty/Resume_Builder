import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export default function Resume1() {
  const personalInformation = useSelector(
    (state) => state.userDetails.personalInformation
  );
  const workExperience = useSelector(
    (state) => state.userDetails.workExperience
  );
  const educationDetails = useSelector((state) => state.userDetails.education);
  const skills = useSelector((state) => state.userDetails.skills);

  console.log("Personal Information in Preview:", personalInformation);
  console.log("Work Experience in Preview:", workExperience);
  console.log("Education Details in Preview:", educationDetails);
  console.log("Skills in Preview:", skills);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section: Personal Info and Key Skills */}
      <div className="flex flex-col justify-start items-center p-4 bg-gray-300 rounded-lg w-full md:w-1/3 mb-4 md:mb-0">
        <div
          className="flex justify-center items-center rounded-full bg-white"
          style={{ width: 180, height: 180 }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }}
            src={personalInformation.profilePhoto}
          />
        </div>
        <label className="mb-2 mt-4 text-xl md:text-2xl font-extralight tracking-widest underline">
          PERSONAL INFO
        </label>

        <div className="flex flex-col items-start space-y-2">
          {[
            { label: "Name", value: `${personalInformation.firstName} ${personalInformation.lastName}` },
            { label: "Address", value: personalInformation.address },
            { label: "PinCode", value: personalInformation.pincode },
            { label: "Email", value: personalInformation.email },
            { label: "Mobile", value: personalInformation.mobile }
          ].map((item, idx) => (
            <div key={idx} className="text-sm font-serif">
              <div className="flex">
                <span className="font-mono text-lg">{item.label}: </span>
                <span className="ml-2">{item.value}</span>
              </div>
            </div>
          ))}

          {/* Key Skills */}
          <label className="flex justify-center mt-4 px-4 md:px-8 text-xl md:text-2xl font-extralight leading-loose tracking-widest bg-black text-white rounded-md">
            Key Skills
          </label>
          <div className="mt-4">
            {skills.length > 0 ? (
              <ul className="list-disc pl-6">
                {skills.map((item, idx) => (
                  <li key={idx} className="text-base font-bold">
                    Skill-{idx + 1}:<span className="text-sm font-mono tracking-widest"> {item.skill}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm font-serif">No skills added.</p>
            )}
          </div>
        </div>
      </div>

      {/* Right Section: Objective, Work Experience, and Education Details */}
      <div className="flex-1 w-full md:w-2/3 p-4 bg-gray-100 rounded-lg">
        <div className="text-sm font-serif">
          <div className="flex flex-col mt-4">
            <h1 className="text-2xl md:text-4xl font-semibold">{personalInformation.firstName}</h1>
            <h1 className="text-2xl md:text-4xl font-extralight">{personalInformation.lastName}</h1>
            <h1 className="text-lg font-mono">{personalInformation.position}</h1>
          </div>
        </div>

        {/* Objective */}
        <label className="flex justify-center mt-4 text-xl md:text-2xl font-extralight leading-loose tracking-widest underline bg-black text-white rounded-md">
          Objective
        </label>
        <div className="border rounded-lg p-4 mt-4">
          {personalInformation.objective}
        </div>

        {/* Work Experience */}
        <label className="flex justify-center mt-4 text-xl md:text-2xl font-extralight leading-loose tracking-widest underline bg-black text-white rounded-md">
          Work Experience
        </label>
        <div className="border rounded-lg p-4 mt-4">
          {workExperience.map((item, idx) => (
            <div key={idx} className="mt-4">
              <h3 className="font-bold text-xl tracking-widest underline">Company-{idx + 1}</h3>
              {[
                { label: `Job Title-${idx + 1}`, value: item.jobTitle },
                { label: `OrganizationName-${idx + 1}`, value: item.organizationName },
                { label: "Date Of Joining", value: `${item.startYear} - ${item.endYear}` }
              ].map((detail, i) => (
                <div key={i} className="text-base mt-2">
                  <span className="font-semibold">{detail.label}: </span>
                  <span className="font-mono text-sm">{detail.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Education Details */}
        <label className="flex justify-center mt-4 text-xl md:text-2xl font-extralight leading-loose tracking-widest underline bg-black text-white rounded-md">
          Education Details
        </label>
        <div className="border rounded-lg p-4 mt-4">
          {educationDetails.map((item, idx) => (
            <div key={idx} className="mt-4">
              <h3 className="font-bold text-xl tracking-widest underline">Educational Details-{idx + 1}</h3>
              {[
                { label: `Type-${idx + 1}`, value: item.type },
                { label: `University-${idx + 1}`, value: item.university },
                { label: "Date Of Joining", value: `${item.startYear} - ${item.endYear}` }
              ].map((detail, i) => (
                <div key={i} className="text-base mt-2">
                  <span className="font-semibold">{detail.label}: </span>
                  <span className="font-mono text-sm">{detail.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
