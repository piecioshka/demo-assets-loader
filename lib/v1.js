console.warn('v1');

class AssetsLoader {
    constructor() {
        this._images = new Set();
    }

    addImage(path /* string */) {
        return this._images.add(loadImage(path));
    }

    loadImages() {
        return Promise.all(this._images);
    }
}
