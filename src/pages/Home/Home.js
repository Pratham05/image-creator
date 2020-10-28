import React from 'react';
import styles from './Home.module.scss';
import Canvas from '../../components/Canvas/Canvas';
import Button from '../../components/Button/Button';


/** 
  * @desc Handles compoenents for the Home page of the application
  * @returns all the componenets to be included in the home page
*/
const Home = () => {
    return (
        <div className={styles.Home}>
            <h1 className={styles.Home__Heading} >
                Each Pixel of this image has a unique Color
            </h1>
            <Canvas />
            <Button />
        </div>
    );
};

export default Home;
