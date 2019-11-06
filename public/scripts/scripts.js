document.addEventListener("DOMContentLoaded", x => {

    if(document.getElementById('moveSlidesRightArrow')){
        document.getElementById('moveSlidesRightArrow').addEventListener('click', moveSlides);
    }
    
    if(document.getElementsByClassName('arrow')) {
        Array.from(document
            .getElementsByClassName('arrow'))
            .map(image => {image.addEventListener('click', imageSlides)});
    }

    if(document.getElementsByClassName('modal')[0]) {
        document.getElementsByClassName('modal')[0].addEventListener('click', showHideImage);
    }
    
    if(document.getElementsByClassName('card-media-content')) {
        Array.from(document
            .getElementsByClassName('card-media-content'))
            .map(image => {image.addEventListener('click', showHideImage)});
    }
    
    if(document.getElementsByClassName('gallery-image-content')) {
        Array.from(document
            .getElementsByClassName('gallery-image-content'))
            .map(image => {image.addEventListener('click', showHideImage)});
    }

    if(document.getElementsByClassName('media')) {
        Array.from(document
            .getElementsByClassName('media'))
            .map(image => {image.addEventListener('click', showHideImage)});
    }
});

let clicks = 1;

function moveSlides(e){
    let dataSlides = e.target.parentNode.getElementsByClassName('card-content');
    let slidesToMove = 0;

    if( window.screen.width >= 1024 ) {
        slidesToMove = 2;
    } else if ( window.screen.width >= 768 ) {
        slidesToMove = 1;
    }

    for (let i = 0; i < dataSlides.length; i++) {
        dataSlides[i].style.transition = 'transform 1s ease-in-out';
        dataSlides[i].style.transform = `translateX(${-100 * clicks}%)`;
    }
    if(clicks === dataSlides.length-slidesToMove){
        clicks = 0;
        for (let i = 0; i < dataSlides.length; i++) {
            dataSlides[i].style.transition = 'transform 1s ease-in-out';
            dataSlides[i].style.transform = `translateX(${-100 * clicks}%)`;
        }
    }
    clicks ++;   
}

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

function showHideImage(e) {
    let modal = document.getElementsByClassName('modal')[0];

    if(modal.className === "modal checked" && e.target.className === "modal checked") {
        modal.style.display = "none";
        modal.className = "modal";

    } else if (modal.className === "modal"){
        let imgUrl = e.target.src;
        let modalUrl = document.getElementsByClassName('inner')[0].childNodes[1].childNodes[0];
        modalUrl.src = imgUrl;
        modal.style.display = "flex";
        modal.className = "modal checked";
    }
}