import React, { useState } from 'react';
import TeamInfo from "./TeamInfo";
import teamsJson from "./teams.json";

const TeamData = ({ categoryMap }) => {
    const teams = teamsJson;

    const groupedTeams = teams.reduce((acc, team) => {
        const categories = team.categories;
        const sectionsAdded = new Set(); // Keep track of sections a team has been added to

        categories.forEach((category) => {
            const section = categoryMap[category]?.section;
            if (section !== undefined && !sectionsAdded.has(section)) {
                if (!acc[section]) {
                    acc[section] = [];
                }
                acc[section].push(team);
                sectionsAdded.add(section); // Mark this section as added
            }
    });

    return acc;
    }, {});
 

    return (
        <div>
            {Object.keys(categoryMap).map((category, index) => {
                const section = categoryMap[category].section;
                const teamsInSection = groupedTeams[section] || [];
                
                if (teamsInSection.length === 0) return null; // Only show categories with filtered teams
                const section_num = parseInt(section, 10)

                return (
                    <details key={index} id={`section-${section_num}`} className="m-4 border-b-4 border-black p-4">
                        <summary className={`text-3xl font-semibold text-gray-800 cursor-pointer`}>
                            {category}
                        </summary>
                        {teamsInSection.map((team, idx) => (
                            <TeamInfo 
                                key={idx}
                                teamName={team.teamName}
                                teamNum={team.teamNum}
                                description={team.description}
                                categories={team.categories}
                                teamMembers={team.teamMembers}
                                categoryMap={categoryMap}
                            />
                        ))}
                    </details>
                );
            })}
        </div>
    );
};

export default TeamData;


