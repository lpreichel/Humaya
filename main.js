let imagen = document.getElementById("imagen");

/* for (let i = 1; i <= 3; i++){
    let newimg = document.createElement("img");
    newimg.setAttribute("src", "img/carrusel1/img"+i+".png"); 
    images.appendChild(newimg);
} */

var imagenes =[];
imagenes[0] = "img/carrusel1/img1.png";
imagenes[1] = "img/carrusel1/img2";
imagenes[2] = "img/carrusel1/img3";

var indiceImagenes =0;
var tiempo =1000;

function cargarImagenes(){
    document.slider.src = imagenes[indiceImagenes];

    if(indiceImagenes < imagenes.length-1){
        indiceImagenes++;
    }else{
        indiceImagenes =0;
    }
}

setInterval(cargarImagenes, tiempo);