import React, {useState, useEffect} from 'react';

// Initialize the Context Object 
const ImageContext = React.createContext(null);

/** 
  * @desc Crates all the possible combinations of the array values provided in an array
  * For Example - if input = [[a], [b,c]], then output = ["a+b+", "a+c+"]
  * @param arr - Array containing arrays to be combined 
  * @param prefix - Default value for recuresion, need not to be provided
  * @returns A Button component for the change of pattern
*/
const createCombinations = (arr, prefix) => {
    prefix = prefix || ''; 

    // Base condition
    if (arr.length === 0) return prefix; 
    
    let combinedArray = arr[0].reduce((combinedArray, item) => { 
        // + is a demarker for a value end for r, g and b
        return combinedArray.concat(createCombinations(arr.slice(1), prefix + item + "+")); 
    }, []); 

    return combinedArray;
}

/** 
  * @desc Provides the Image data Context to the App
  * Wraps Image provider for providing the data and a function to manipulate this data
  * @returns Context provider with the required values
*/
const ImageProvider = (props) => {

    const [imgData, setImgData] = useState(null);

    // This will run only on first mount 
    useEffect(() => {
        const rArray = [];

        for (let i=8; i <= 256; i+=8) {
            if (i === 256) {
                rArray.push(255);
            } else {
                rArray.push(i);
            }   
        }

        let rgbArray = [rArray, rArray.slice(), rArray.slice()];

        rgbArray = createCombinations(rgbArray);

        // 131072 = 32768 * 4 - This array represents 32768 pixels
        // 4 paired values starting from 0 represent r, g, b and a values of a pixel color
        let pixelArray = new Uint8ClampedArray(131072);

        let count = 0;

        let arrTemp = [];

        for (let i = 0; i < pixelArray.length; i += 4) {
            // Example Split - ['8', '8', '8', '']
            arrTemp = rgbArray[count].split('+');
            pixelArray[i + 0] = arrTemp[0];     // R value
            pixelArray[i + 1] = arrTemp[1];     // G value
            pixelArray[i + 2] = arrTemp[2];   // B value
            pixelArray[i + 3] = 255;  // A value
            count++;
        }
        setImgData(pixelArray);
    }, []);

    const changePixelData = () => {
        // Make a copy 
        let tempData = imgData.slice();
        setImgData(tempData.reverse());
    }

    return (
        <ImageContext.Provider value={{imgData: imgData, changePixelData}}>
            {props.children}
        </ImageContext.Provider>
    )
}

export  {ImageProvider, ImageContext};
