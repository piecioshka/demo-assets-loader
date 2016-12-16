'use strict';

var al = new AssetsLoader();

al.addImage('../assets/images/plants.jpg');
al.addImage('../assets/images/sky.jpg');

al.loadImages()
    .catch((error) => {
        console.error(error);
    })
    .then((images) => {
        console.info('Loaded successful', images);
    });
