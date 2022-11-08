const sharp = require('sharp');

sharp('./dentista.jpeg')
 .resize(80)
 .grayscale()
 .toFile('rezise.png');