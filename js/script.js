// close off loader
const loader = document.querySelector('.loader');
window.addEventListener('load', function(){
    loader.classList.add('hidden');
})


const nav = document.getElementById('nav')
const open = document.getElementById('open')
const close = document.getElementById('close')

// open the nav bar
open.addEventListener('click', function(){
    nav.classList.add('right-0')
})

//close nav bar
close.addEventListener('click', function(){
      nav.classList.remove('right-0')
})

//lightbox

const lightbox = document.querySelectorAll('.lightbox');
const lightboxBody = document.querySelectorAll('.lightbox-body');
const images = document.querySelectorAll('#gallery');
images.forEach(function(image){
    image.addEventListener('click', function() {
        lightbox.classList.add('scale-100')
        
    })
})

//get current year

const year = document.querySelector('.year');
const getYear = new Date().getFullYear();
year.innerText = getYear;