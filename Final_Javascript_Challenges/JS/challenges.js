/* Validate form challenge */
function validate(){
    const num = document.getElementById('phoneNum');
    if(!num.value){
        alert('Please fill out all fields');
    }
}

function resize(){
    const num = document.getElementById('phoneNum');
    const width = document.getElementById('textWidth');
    /* Commented code was to use to make the input field change width while being filled out, was not as successful as planned */
/*  const buffer = num.value ? 2 : 0;
    width.textContent = num.value || num.placeholder || '';
    num.style.width = num.value ? (num.value.length) + 'ch' : `${width.offsetWidth - 10}px`; */
    width.textContent = num.placeholder;
    num.style.width = `${width.offsetWidth - 10}px`;

    document.getElementById('popup-container').style.top = (window.innerHeight * 0.92) + 'px';
}

document.getElementById('phoneNum').addEventListener("input", resize);
window.addEventListener("load", resize);
document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault()
});


/* Fade challenge */
function fadeIn(){
    document.querySelector('body').style.opacity = '1';
}


/* Popup form challenge */
console.log(document.getElementById('bottom').offsetTop);
function popUp(){
    const popBtn = document.getElementById('popBtn');
    const form = document.getElementById('theForm');
    const popup = document.getElementById('popup');
    const cont = document.getElementById('popup-container');
    if(popBtn.getAttribute('data-toggle') == "closed"){
        form.style.display = 'block';
        popBtn.style.borderTop = '2px solid black';
        popBtn.style.height = '40px';
        popBtn.style.backgroundColor = 'rgb(255, 90, 90)';
        popBtn.innerHTML = 'Close Form';
        popup.style.height = '150px';
        popup.style.top = '52px';
        cont.style.top = (cont.offsetTop - 108) + 'px';
        popBtn.setAttribute('data-toggle', 'open');
    }else if(popBtn.getAttribute('data-toggle') == "open"){
        form.style.display = 'none';
        popBtn.style.borderTop = 'none';
        popBtn.style.height = '38px';
        popBtn.style.backgroundColor = 'rgb(146, 150, 155)';
        popBtn.innerHTML = 'Open Form';
        popup.style.height = '42px'
        popup.style.top = '160px';
        cont.style.top = (cont.offsetTop + 108) + 'px';
        popBtn.setAttribute('data-toggle', 'closed');
    }
}

document.getElementById('popBtn').addEventListener('mouseenter', function(event){
    let popBtn = document.getElementById('popBtn');
    if(popBtn.getAttribute('data-toggle') == 'closed'){
        popBtn.style.backgroundColor = 'rgb(146, 150, 155)';
    }else{
        popBtn.style.backgroundColor = 'rgb(255, 90, 90)';
    }
});

document.getElementById('popBtn').addEventListener('mouseleave', function(event){
    let popBtn = document.getElementById('popBtn');
    if(popBtn.getAttribute('data-toggle') == 'closed'){
        popBtn.style.backgroundColor = 'rgb(119, 136, 153)';
    }else{
        popBtn.style.backgroundColor = 'rgb(255, 60, 60)';
    }
});


/* Animation challenge */
const spinner = document.querySelector('.vw-challenge');
let animated = false;

spinner.addEventListener('mouseenter', function(){
    if(animated){
        return
    }
    animated = true;
    spinner.style.animation = 'spin 2s linear';
    setTimeout(() => {
        spinner.style.animation = 'none';
        animated = false;
    }, 2000);
});


/* Slideshow challenge */
function cycle(active){
    var nextSlide = active + 1;
    var imgs = document.getElementsByClassName('image');
    for(i=0; i<imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    if(nextSlide < imgs.length){
        imgs[nextSlide].style.display = 'block';
    }else{
        imgs[0].style.display = 'block';
        nextSlide = 0;
    }
    setTimeout(() => {
        cycle(nextSlide)
    }, 5000);
}

window.addEventListener('load', () => {
    document.getElementById('slide1').style.display = 'block';
    setTimeout(cycle(-1), 5000);
});