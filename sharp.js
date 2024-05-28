const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    const imageExtension = path.extname(image).toLowerCase();
    sharp(`${target}/${image}`)
      .resize(imageExtension === '.png' ? 480 : 800)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large${imageExtension === '.png' ? '.png' : '.jpg'}`,
      ));
    sharp(`${target}/${image}`)
      .resize(imageExtension === '.png' ? 240 : 480)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small${imageExtension === '.png' ? '.png' : '.jpg'}`,
      ));
  });
