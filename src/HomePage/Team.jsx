import React from "react";
import { getOrganizationLogo } from "../lib/utils";

function Team({ id }) {
    const TeamMember = [
        { Name: "Dr. Patanamon Thongtanunam", ProfilePic: `/team/patanamon.webp`, Pronoun: "(she/her)", CurrentPosition: "Associate Professor, School of Computing and Information Systems, The University of Melbourne", ConferencePosition: "" },
        { Name: "Dr. Kla Tantithamthavorn", ProfilePic: `/team/chakkrit.webp`, Pronoun: "(he/him)", CurrentPosition: "Associate Professor, Department of Software Systems & Cybersecurity, Monash University", ConferencePosition: "" },
        { Name: "Dr. Chetan Arora", ProfilePic: `/team/chetan.webp`, Pronoun: "(he/him)", CurrentPosition: "Senior Lecturer, Department of Software Systems & Cybersecurity, Monash University", ConferencePosition: "" },
        { Name: "Dr. Tingting Bi", ProfilePic: `/team/tingting.webp`, Pronoun: "(she/her)", CurrentPosition: "Lecturer, School of Computing and Information Systems, The University of Melbourne", ConferencePosition: "" },
        { Name: "Dr. Michael Fu", ProfilePic: `/team/michael.webp`, Pronoun: "(he/him)", CurrentPosition: "Lecturer, School of Computing and Information Systems, The University of Melbourne", ConferencePosition: "" },
    ];

    // Extract institution name from CurrentPosition
    const extractInstitution = (position) => {
        if (!position) return null;
        // Look for common patterns: "University of X", "Monash University", etc.
        const patterns = [
            /The University of Melbourne/i,
            /University of Melbourne/i,
            /Monash University/i,
            /University of [A-Z][a-z]+/i,
            /[A-Z][a-z]+ University/i,
        ];
        
        for (const pattern of patterns) {
            const match = position.match(pattern);
            if (match) {
                return match[0];
            }
        }
        return null;
    };

    return (
        <div id={id} className="flex flex-col justify-center items-center px-4 py-8">
            <div className="mb-8 text-left w-full max-w-6xl">
                <p className="text-3xl sm:text-4xl font-bold">OzSE2026 Organizer</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {TeamMember.map((member, index) => {
                    const institution = extractInstitution(member.CurrentPosition);
                    const orgLogo = institution ? getOrganizationLogo(institution) : null;
                    // Smaller logos for Transurban and RMIT
                    const instLower = institution?.toLowerCase() || '';
                    const isSmallLogo = instLower.includes('transurban') || instLower.includes('rmit');
                    const logoMaxWidth = isSmallLogo ? 'max-w-[80px]' : 'max-w-[120px]';
                    
                    return (
                        <div key={index} className="bg-white p-4 flex flex-col items-center text-center w-full relative rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            {/* Organization logo tag in top left corner */}
                            {orgLogo && (
                                <div className="absolute top-2 left-2 z-10 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-md border border-gray-200/50 hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={orgLogo}
                                        alt={`${institution} logo`}
                                        className={`h-8 w-auto object-contain ${logoMaxWidth}`}
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                            <img
                                src={member.ProfilePic}
                                alt={member.Name}
                                className="w-full max-w-[120px] aspect-square rounded-xl object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold">{member.Name}</h3>
                            <p className="text-sm text-gray-500">{member.Pronoun}</p>
                            <p className="text-sm mt-2">{member.CurrentPosition}</p>
                            {member.ConferencePosition && (
                                <p className="text-sm text-blue-600 mt-1">{member.ConferencePosition}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Team;
