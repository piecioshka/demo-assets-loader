# concept-assets-loader

> :fish: Concept of AssetsLoader. Especially images.

## Why?

For explain for what we can use `Set` constructor in `ECMAScript 2015` for
speech at WarsawJS Meetup #25.

## How it works?

I prepare 2 versions of solutions

### First version use simple `Set` constructor to create `images`

```javascript
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
```

### Second version use `Images` class (with method `load`) as subclassing of 
`Set`: 

```javascript
class Images extends Set {
    add(path) {
        super.add.call(this, loadImage(path));
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
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
