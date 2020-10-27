import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
    const onClickHandler = () => {
        console.log("Button Pressed");
    }
    return (
        <button className={styles.Button} onClick={onClickHandler}>Change Pattern</button>
    );
}

export default Button;
