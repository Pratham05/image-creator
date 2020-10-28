import React, {useContext} from 'react';
import styles from './Button.module.scss';
import {ImageContext} from '../../image-context';

const Button = () => {
    const {changePixelData} = useContext(ImageContext);
    return (
        <button className={styles.Button} onClick={changePixelData}>Toggle Pattern</button>
    );
}

export default Button;
