function loadImage(path /* string */) {
    console.debug('loadImage', path);
    return new Promise((resolve, reject) => {
        let image = new Image();
        let on = image.addEventListener;
        on('load', (event) => resolve(image));
        on('error', (event) => reject(image));
        image.src = path;
        return image;
    })
}
