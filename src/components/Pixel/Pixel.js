import React from 'react';
import styles from './Pixel.module.scss';

const Pixel = ({red, green, blue}) => {
    return (
        <div 
        style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}} 
        className={styles.Pixel}> 
            
        </div>
    );
};

export default Pixel;
