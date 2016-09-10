function loadImage(path /* string */) {
    console.debug('loadImage', path);
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.addEventListener('load', (event) => resolve(image));
        image.addEventListener('error', (event) => reject(image));
        image.src = path;
        return image;
    })
}
