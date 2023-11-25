const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageNames=["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];


/* Declaring the alternative text for each image file */
const altTexts={"pic1.jpg" : "This is close up of eye",
"pic2.jpg":"This is a rock", "pic3.jpg":"This is flower","pic4.jpg":"Picture from tomb in pyramids","pic5.jpg":"This is a butterfly"}

/* Looping through images */
for (let imageName of imageNames){
const newImage = document.createElement('img');
newImage.setAttribute('src', "images/${imageName}");
newImage.setAttribute('alt',altTexts[imageName]);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', e=>{
    displayedImage.src= e.target.src;
    displayedImage.alt=e.taret.alt;
});
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', ()=>{
const btnClass = btn.getAttribute('class');
if (btnClass==='dark'){
    btn.setAttribute('class','light');
    btn.textContent='lighten';
    overlay.style.backgroundColor='rgba(0,0,0,0.5)';

} else{
    btn.setAttribute('class','dark');
    btn.textContent='Darken';
    overlay.style.backgroundColor='rgba(0,0,0,0)';

}
});


