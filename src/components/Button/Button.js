import React, {useContext} from 'react';
import styles from './Button.module.scss';
import {ImageContext} from '../../image-context';

/** 
  * @desc Toggle Button for changing the pattern of the image
  * @returns A Button component for the change of pattern
*/
const Button = () => {
    // Get the change function provided by context
    const {changePixelData} = useContext(ImageContext);
    return (
        <button className={styles.Button} onClick={changePixelData}>Toggle Pattern</button>
    );
}

export default Button;
