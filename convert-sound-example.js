const linear16 = require('linear16');
 
linear16('./sample-sound.m4a', './output.wav')
   .then(outPath => console.log(outPath)); // Returns the output path, ex: ./output.wav 
 