// Slides

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

// Gallery

// function showImage (e){
//     e.preventDefault();
//     console.log(e.target);
//     let imgUrl = e.target.src;
//     console.log(imgUrl);
//     let modal = document.getElementsByClassName('modal')[0];
//     let modalUrl = document.getElementsByClassName('inner')[0].childNodes[1].childNodes[0];
//     modalUrl.src = imgUrl;
//     modal.style.display = "flex";  
// }

// function hideImage (e){
//     let modal = document.getElementsByClassName('modal')[0];
//     modal.style.display = "none";
// }

function showHideImage(e) {
    e.preventDefault();
    let modal = document.getElementsByClassName('modal')[0];
    // console.log(modal);
    // console.log(e.target);
    
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