"use client"
import React from 'react';
import ResponsiveImageMapper from './components/ResponsiveImageMapper';
import Legend from './components/Legend';
import TeamData from './components/TeamData';
import categoryMap from './components/categoryMap';
import areaData from './components/areas.json'
import IntroHeader from './components/IntroHeader';

var URL = "software_fair.png";

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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col w-full sm:w-5/6">
        <IntroHeader/>
        <div className="flex flex-col items-center">
          <div className='w-full max-w-[1000px]'>
            <ResponsiveImageMapper src={URL} map={MAP} imgWidth={950} clickFunc={clicked}></ResponsiveImageMapper>
          </div>
          <div className='pt-4 pl-4 pr-4 m-2 w-full'>
            <Legend categoryMap={categoryMap}></Legend> 
          </div>
        </div>

      <TeamData categoryMap={categoryMap}></TeamData>
      </div>
    </main>
  );
}
