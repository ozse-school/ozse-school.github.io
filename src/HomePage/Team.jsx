import React from "react";

function Team() {
    const TeamMember = [
        { Name: "Dr. Patanamon Thongtanunam", ProfilePic: "./team/patanamon.webp", Pronoun: "(she/her)", CurrentPosition: "Senior Lecturer, School of Computing and Information Systems, The University of Melbourne", ConferencePosition: "" },
        { Name: "Dr. Kla Tantithamthavorn", ProfilePic: "./team/chakkrit.webp", Pronoun: "(he/him)", CurrentPosition: "Associate Professor, Department of Software Systems & Cybersecurity, Monash University", ConferencePosition: "" },
        { Name: "Dr. Chetan Arora", ProfilePic: "./team/chetan.webp", Pronoun: "(he/him)", CurrentPosition: "Senior Lecturer, Department of Software Systems & Cybersecurity, Monash University", ConferencePosition: "" },
        { Name: "Dr. Tingting Bi", ProfilePic: "./team/tingting.webp", Pronoun: "(she/her)", CurrentPosition: "Lecturer, School of Computing and Information Systems, The University of Melbourne", ConferencePosition: "" },
        { Name: "Dr. Michael Fu", ProfilePic: "./team/michael.webp", Pronoun: "(he/him)", CurrentPosition: "Lecturer, School of Computing and Information Systems, The University of Melbourne", ConferencePosition: "" },
        { Name: "Kanin Kearpimy", ProfilePic: "./team/kanin.webp", Pronoun: "(he/him)", CurrentPosition: "PhD Student, School of Computing and Information Systems, The University of Melbourne", ConferencePosition: "" },
    ];

    return (
        <div className="flex flex-col justify-center items-center px-4 py-8">
            <div className="mb-8 text-center">
                <p className="text-3xl sm:text-4xl font-bold">OzSE2026 Team</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {TeamMember.map((member, index) => (
                    <div key={index} className="bg-white p-4 flex flex-col items-center text-center w-full">
                        <img
                            src={member.ProfilePic}
                            alt={member.Name}
                            className="w-full max-w-[250px] aspect-square rounded-xl object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold">{member.Name}</h3>
                        <p className="text-sm text-gray-500">{member.Pronoun}</p>
                        <p className="text-sm mt-2">{member.CurrentPosition}</p>
                        {member.ConferencePosition && (
                            <p className="text-sm text-blue-600 mt-1">{member.ConferencePosition}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
