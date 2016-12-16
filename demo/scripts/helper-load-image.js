'use strict';

function loadImage(path /* string */) {
    console.debug('loadImage', path);
    return new Promise((resolve, reject) => {
        let image = new Image();
        let on = image.addEventListener;

        on('load', () => resolve(image));
        on('error', () => reject(image));
        image.src = path;
    })
}
