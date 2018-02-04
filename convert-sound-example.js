const linear16 = require('linear16');
 
/**
Creating the sound was just using quicktime recording and exporting.
*/
linear16('./resources/sample-sound.m4a', './resources/audio.raw')
   .then(outPath => console.log(outPath)); // Returns the output path, ex: ./output.wav 
 
