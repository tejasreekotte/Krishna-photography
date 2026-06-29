const gallery=document.getElementById("gallery");

const totalImages=50;

let currentImage=0;

const images=[];

for(let i=1;i<=totalImages;i++){

let number=String(i).padStart(3,"0");

let file=`images/${number}.jpg`;

images.push(file);

let img=document.createElement("img");

img.src=file;

img.loading="lazy";

img.alt=`Photo ${number}`;

img.onclick=()=>openImage(i-1);

gallery.appendChild(img);

}

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

function openImage(index){

currentImage=index;

lightbox.style.display="flex";

lightboxImage.src=images[index];

}

document.getElementById("close").onclick=()=>{

lightbox.style.display="none";

}

document.getElementById("prev").onclick=()=>{

currentImage=(currentImage-1+images.length)%images.length;

lightboxImage.src=images[currentImage];

}

document.getElementById("next").onclick=()=>{

currentImage=(currentImage+1)%images.length;

lightboxImage.src=images[currentImage];

}

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display!=="flex") return;

if(e.key==="ArrowRight"){

document.getElementById("next").click();

}

if(e.key==="ArrowLeft"){

document.getElementById("prev").click();

}

if(e.key==="Escape"){

document.getElementById("close").click();

}

});

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}