import { useEffect, useState, useRef } from 'react';
import ImageMapper from 'react-img-mapper';

const ResponsiveImageMapper = ({ src, map, imgWidth, clickFunc, parentWidth = '100%' }) => {
    const [dimensions, setDimensions] = useState({ width: 0 });
    const containerRef = useRef(null);

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

    return (
        <div ref={containerRef} style={{ width: parentWidth }}>
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
