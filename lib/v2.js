console.warn('v2');

class Images extends Set {
    add(path) {
        super.add(loadImage(path));
    }

    load() {
        return Promise.all(this.keys());
    }
}

class AssetsLoader {
    constructor() {
        this._images = new Images();
    }

    addImage(path /* string */) {
        return this._images.add(path);
    }

    loadImages() {
        return this._images.load();
    }
}
