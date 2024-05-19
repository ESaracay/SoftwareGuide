import React from 'react';
import styles from './IntroHeader.module.css';

const IntroHeader = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <span className={styles.highlight}>2024</span>
                Software Fair
            </h1>
            <div className={styles.info}>
                <span className="font-semibold">When: </span>
                <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=2024+Software+Fair&dates=20240608T223000Z/20240609T003000Z&details=&location=
" className={styles.link}>June 8th, 2024 from 3:30 to 5:30 PST</a>
            </div>
            <div className={styles.info}>
                <span className="font-semibold">Where: </span>
                <a href="https://www.campus-maps.com/stanford-university/taylor-grove-chuck/" className={styles.link}>Chuck Taylor Grove</a>
            </div>
            <div className={styles.info}>
                <span className="font-semibold">Parking Guide: </span>
                <a href="https://transportation.stanford.edu/sites/default/files/inline-images/2019-07-12%2011_48_27-Parking-and-Circulation-Map.pdf%20_%20Powered%20by%20Box.png" className={styles.link}>Map</a>
            </div>
        </header>
    );
};

export default IntroHeader;