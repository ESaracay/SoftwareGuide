import React, { useState } from 'react';

const TeamInfo = ({ teamName, teamNum, description, teamMembers, categories, categoryMap }) => {
  const [showDescription, setShowDescription] = useState(false);
  const teamId = `team-div-${teamNum}`;

  const openSection = (sectionNum) => {
    let section_id = `section-${sectionNum}`;
    const section_elem = document.getElementById(section_id);

    if (section_elem) {
      if (!section_elem.open) {
        section_elem.open = true;
      }
      window.scrollTo({
        top:section_elem.offsetTop,
        behavior: 'smooth'
      })
    } else {
      console.log("Id not found for this section")
    }
  } 

  return (
    <div id={teamId} className="container mx-auto p-4 border-b border-black">
      <h1 className="text-2xl font-bold mb-4">{teamName}</h1>
      <div className="flex space-x-2 mb-4">
         {categories.map((category, index) => {
          const categoryData = categoryMap[category];
          if (categoryData === undefined){
            return;
          }
          return (
            <button
              key={index}
              onClick={() => openSection(categoryData.section)}
              className={`px-3 py-1 text-white rounded ${categoryData.color || "bg-gray-500"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <p>Team Members: {teamMembers}</p>
      <button
        className="text-blue-500 hover:text-blue-700 cursor-pointer pt-4"
        onClick={() => setShowDescription(!showDescription)}
      >
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
      {showDescription && (
        <p className="bg-gray-200 text-black rounded-lg p-4">{description}</p>
      )}
    </div>
  );
};

export default TeamInfo;
