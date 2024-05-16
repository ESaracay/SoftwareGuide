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
                <a href="https://www.example.com" className={styles.link}>June 8th, 2024 from 3:30 to 5:30 PST</a>
            </div>
            <div className={styles.info}>
                <span className="font-semibold">Where: </span>
                <a href="https://www.campus-maps.com/stanford-university/taylor-grove-chuck/" className={styles.link}>Chuck Taylor Grove</a>
            </div>
        </header>
    );
};

export default IntroHeader;