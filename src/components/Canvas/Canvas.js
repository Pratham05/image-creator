import React, {useRef, useEffect, useContext} from 'react';
import styles from './Canvas.module.scss';
import {ImageContext} from '../../image-context';


const Canvas = () => {

    const canvasRef = useRef(null);

    let {imgData} = useContext(ImageContext);


    let canvas = canvasRef.current;

    if (canvas) {
        canvas.width = 256;
        canvas.height = 128;
        let context = canvas.getContext('2d');
        if (imgData) {
            let imageData = new ImageData(imgData, 256);
            context.putImageData(imageData, 0, 0);
        } 
    }
    return (
        <canvas ref={canvasRef} className={styles.Canvas}>

        </canvas>
    );
};

export default Canvas;
