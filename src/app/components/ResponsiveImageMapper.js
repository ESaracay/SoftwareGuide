import { useEffect, useState, useRef } from 'react';
import ImageMapper from 'react-img-mapper';

const ResponsiveImageMapper = ({ src, map, imgWidth, clickFunc, parentWidth = '100%' }) => {
  const [dimensions, setDimensions] = useState({ width: 0 });
  const containerRef = useRef(null);

  const getPolygonCenter = (coords) => {
    let sumX = 0;
    let sumY = 0;
    const points = coords.length / 2;
    for (let i = 0; i < coords.length; i += 2) {
      sumX += coords[i];
      sumY += coords[i + 1];
    }
    return [sumX / points, sumY / points];
  };

  const updateDimensions = () => {
    if (containerRef.current) {
      setDimensions({ width: containerRef.current.clientWidth });
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const scaledCoords = (coords, scale) => {
    return coords.map(coord => coord * scale);
  };

  const scale = dimensions.width / imgWidth;
  const shiftDown = 20;
  const shiftLeft = -15;
  const baseFontSize = 14;
  const baseSize = 20; // Base size of the circle in pixels

  return (
    <div ref={containerRef} style={{ width: parentWidth, position: 'relative', display: 'inline-block' }}>
      {map.areas.map((area, index) => {
        const scaledAreaCoords = scaledCoords(area.coords, scale);
        const [centerX, centerY] = getPolygonCenter(scaledAreaCoords);
        const tableNum = area.name.split('-')[1]; // Extract table_num from area.name
        const fontSize = baseFontSize * scale; // Scale the font size
        const size = baseSize * scale; // Scale the size of the circle

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: centerX - size / 2 + shiftLeft * scale, // Center horizontally and adjust left
              top: centerY - size / 2 + shiftDown * scale, // Center vertically and adjust down
              borderRadius: '25%',
              textAlign: 'center',
              width: `${size}px`, // Set scaled width
              height: `${size}px`, // Set scaled height
              lineHeight: `${size}px`, // Center text vertically
              fontSize: `${fontSize}px`, // Set font size
              color: 'black', // Set font color to white
              fontWeight: 'bold', // Make the font bold
              border: `${1 * scale}px solid white`, // Add black border
              zIndex: 10 // Ensure the number is above the image
            }}
          >
            {tableNum}
          </div>
        );
      })}
      <ImageMapper
        src={src}
        map={map}
        imgWidth={imgWidth}
        width={dimensions.width}
        onClick={clickFunc}
        responsive={false}
      />
    </div>
  );
};

export default ResponsiveImageMapper;