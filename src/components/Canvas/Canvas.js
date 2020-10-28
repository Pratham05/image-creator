import React, {useRef, useEffect, useContext} from 'react';
import styles from './Canvas.module.scss';
import {ImageContext} from '../../image-context';

/** 
  * @desc Hanles the canvas for the display of the image
  * Includes Canvas Drawing with pixels
  * The size of the canvas has been set to 256X128px
  * @returns canvas component with the image in it
*/
const Canvas = () => {

    // Used to refer the canvas element for drawing and clearing
    const canvasRef = useRef(null);

    // Get image data from Context
    let {imgData} = useContext(ImageContext);

    let canvas = canvasRef.current;

    // Checking canvas for first render
    if (canvas) {
        // canvas dimensions - 256X128px
        canvas.width = 256;
        canvas.height = 128;
        let context = canvas.getContext('2d');
        if (imgData) {
            let imageData = new ImageData(imgData, 256);
            // Draw Image in Canvas
            context.putImageData(imageData, 0, 0);
        } 
    }
    return (
        <canvas ref={canvasRef} className={styles.Canvas}>

        </canvas>
    );
};

export default Canvas;
