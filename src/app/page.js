"use client"
import React from 'react';
import ImageMapper from 'react-img-mapper';
import ResponsiveImageMapper from './components/ResponsiveImageMapper';
import Legend from './components/Legend';
import TeamInfo from './components/TeamInfo';
import categoryMap from './components/categoryMap';
import areaData from './components/areas.json'

var URL = "SoftwareGuide/software_fair.png";

var category_legend = {
  'AI': '#0000ff',
  'Finance': '#00ff00'
};

export default function Home() {
  const MAP = {
    name: 'my-map',
    areas: areaData
  }

  const clicked = (area) => {
    let [section_num, div_num] = area.name.split('-');
    let section_id = `section-${section_num}`;
    let div_id = `team-div-${div_num}`;
    const section_elem = document.getElementById(section_id);
    const div_element = document.getElementById(div_id);

    if (section_elem && div_element) {
      if (!section_elem.open) {
        section_elem.open = true;
      }
      window.scrollTo({
        top:div_element.offsetTop,
        behavior: 'smooth'
      })
    } else {
      console.log("Id not found for this team")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full">
        {/* I had ot add 39 pixels to width to get it right on point */} 
        <div>
          <ResponsiveImageMapper src={URL} map={MAP} imgWidth={2040} clickFunc={clicked}></ResponsiveImageMapper>
        </div>

        <div className='m-2'>
          <Legend categoryMap={categoryMap}></Legend> 
        </div>

        <details id="section-0" className="m-4 border-b-4 border-black p-4">
<summary className="text-3xl font-semibold text-gray-800 cursor-pointer">AI</summary>

        <TeamInfo 
            teamName={"Kerby"} 
            teamNum={1} 
            description={"A super cracked AI team ..."} 
            categories={['Finance']} 
            teamMembers={"Will, Will, Yannie, Katherine"}
            categoryMap={categoryMap}>
        </TeamInfo>

    </details>
<details id="section-5" className="m-4 border-b-4 border-black p-4">
<summary className="text-3xl font-semibold text-gray-800 cursor-pointer">Finance</summary>

        <TeamInfo 
            teamName={"Refresh"} 
            teamNum={2} 
            description={"A super cracked marketing team ..."} 
            categories={['Marketing']} 
            teamMembers={"Phil, Phil, Phil"}
            categoryMap={categoryMap}>
        </TeamInfo>

    </details>

      </div>
    </main>
  );
}
