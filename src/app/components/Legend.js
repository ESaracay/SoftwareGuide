// components/Legend.js
const Legend = ({ categoryMap }) => {
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
        <div className="flex flex-row flex-wrap gap-2">
         {Object.entries(categoryMap).map(([category, details]) => {

          return (
            <button
              key={category}
              onClick={() => openSection(details.section)}
              className={`px-3 py-1 text-white rounded ${details.color || "bg-gray-500"} transition-transform duration-300 transform hover:scale-110`}
            >
              {category}
            </button>
          );
        })}
        </div>
    );
};

export default Legend;
