function imageSlides (e) {
    let modalImage = document.getElementsByClassName('inner')[0].childNodes[1].childNodes[0];
    let isGallery = document.getElementsByClassName('gallery');

    if(isGallery.length !== 0) {
        let urlImagesData = [...document
            .getElementsByClassName('gallery')[0]
            .getElementsByTagName('img')]
            .map(image => { return image.src });
    
        let urlCurrentImage = e.currentTarget.parentNode.childNodes[1].childNodes[0].src;
        let indexCurrentImage = urlImagesData.indexOf(urlCurrentImage);
    
        if(e.currentTarget.className === "arrow right") {
            if(indexCurrentImage === urlImagesData.length - 1) {
                modalImage.src = urlImagesData[0];
            } else {
                modalImage.src = urlImagesData[indexCurrentImage + 1];
            }
        }
        if(e.currentTarget.className === "arrow left") {
            if(indexCurrentImage === 0) {
                modalImage.src = urlImagesData[urlImagesData.length - 1];
            } else {
                modalImage.src = urlImagesData[indexCurrentImage - 1];
            }
        }
    }
}

module.exports = {
    imageSlides
}