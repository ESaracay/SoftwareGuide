"use client"
import React, { useState } from 'react';
import ResponsiveImageMapper from './components/ResponsiveImageMapper';
import Legend from './components/Legend';
import TeamData from './components/TeamData';
import categoryMap from './components/categoryMap';
import areaData from './components/areas.json'
import IntroHeader from './components/IntroHeader';
import TeamSearch from './components/TeamSearch';
import teamsJson from "./components/teams.json"

var URL = "software_fair.png";

export default function Home() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const MAP = {
    name: 'my-map',
    areas: areaData
  }

  const clicked = (area) => {
    let [sectionNum, tableNum] = area.name.split('-');
    tableNum = parseInt(tableNum, 10) - 1;
    let team = teamsJson[tableNum]["teamName"];
    console.log(team)
    setSelectedTeam(team);
    goToSearch();
  }

  const goToSearch = () => {
    const search_elem = document.getElementById("search");

    if (search_elem) {
      window.scrollTo({
        top:search_elem.offsetTop,
        behavior: 'smooth'
      })
    } else {
      console.log("Id not found for this section")
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
        </div>

        <TeamSearch categoryMap={categoryMap} teamSelected={selectedTeam}></TeamSearch>

        <div className='pt-4 pl-4 pr-4 m-2 w-full'>
          <Legend categoryMap={categoryMap}></Legend> 
        </div>

      <TeamData categoryMap={categoryMap}></TeamData>
      </div>
    </main>
  );
}
