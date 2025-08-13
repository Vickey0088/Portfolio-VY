
const images = [
    { src: 'image/javaC.jpg', text: 'Completion of Core Java Certificate' },
    { src: 'image/environment.jpg', text: 'Completion of Environment Drawing Certificate' },
    { src: 'image/html-bng.jpg', text: 'Completion of Basic HTML Certificate' },
    { src: 'image/html-Ad.jpg', text: 'Completion of Advance HTML Certificate' },
    { src: 'image/css-C.jpg', text: 'Completion of CSS Certificate' },
    { src: 'image/js-2.jpg', text: 'Completion of Basic-JavaScript Certificate' },
    { src: 'image/webbuild.jpg', text: 'Completion of Building A Complete Website Certificate' },
]; 

let currentIndex = 0;

const sliderImage = document.querySelector('#certy img');
const sliderText = document.querySelector('#certy p');    
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');


function showImage(index) {
    sliderImage.src = images[index].src;
    sliderText.textContent = images[index].text;
}


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; 
    showImage(currentIndex);
});


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});


showImage(currentIndex);





