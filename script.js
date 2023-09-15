//let saturate = document.getElementById('saturate');
//let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
//let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue-rotate');

let download = document.getElementById('download')

let reset = document.querySelector('span');
let img = document.getElementById('img')
let imgbox = document.querySelector('.img-box')


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


window.onload = function() {
    download.style.display = 'none' ;
    reset.style.display = 'none' ;
    imgbox.style.display = 'none'
}

function resetValue() {
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
    ctx.filter = 'none'
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100' ;
    sepia.value = '0' ;
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}

upload.onchange = function() {
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    imgbox.style.display = 'block';

    var file = new FileReader();
    

    var file = new FileReader();
    file.onload = function() {
        img.src = file.result;
    }
    file.readAsDataURL(upload.files[0]);
    img.onload = function() {
        canvas.width = img.width ;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display = 'none'
    }
}


saturate.addEventListener('input', function() {
    img.style.filter = `saturate(${saturate.value}%)`;
});

let filters = document.querySelectorAll('ul li input');

filters.forEach(filter => {
    filter.addEventListener('input', function() {
        ctx.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            blur(${blur.value}px)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            hue-rotate(${hueRotate.value}deg)
            grayscale(${grayscale.value})


                `
                ctx.drawImage(img,0,0,canvas.width,canvas.height)

    });

});

download.onclick = function() {
    download.href = canvas.toDataURL();
}

