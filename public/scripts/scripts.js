let clickDoctors = 1;

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
        dataSlides[i].style.transform = `translateX(${-100 * clickDoctors}%)`;
    }
    if(clickDoctors === dataSlides.length-slidesToMove){
        clickDoctors = 0;
        for (let i = 0; i < dataSlides.length; i++) {
            dataSlides[i].style.transition = 'transform 1s ease-in-out';
            dataSlides[i].style.transform = `translateX(${-100 * clickDoctors}%)`;
        }
    }
    clickDoctors ++;   
}
