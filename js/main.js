/* Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news, creare un carosello come nella foto allegata.
 Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi - titolo e - testo.
 Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
 */

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

/*  1. creo le due costanti per richiamare i div che dovranno contenere le immagini
    2. creo le due variabili vuote che verrano sovrascritte dagli itmes
      2.1 creo un ciclo per inserire le immagini all'interno delle variabili
    3. stampo nel dom gli elementi creati duranti il ciclio
    4. creo una funzione con evento click
       4.1 cliccando sulle freccie avanti e indietro aggiungo o rimuovo la classe active
*/

// richiamo con delle variabili gli elementi che dovranno contenere le immagini

let itemsCont = document.querySelector(".items");

let thumbsCont = document.querySelector(".thumbs");

// creo delle variabili vuote

let contenutoItem = "";

let contenutoThumb = "";

// creo un ciclo per andare creare all'interno delle varibili i div

for (let i = 0; i < items.length; i++){

    contenutoItem +=`
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>`;

    contenutoThumb += `
    <div class="thumb">
        <img src="${items[i]}" alt="${title[i]}">
    </div>`;

}
// stampo gli elementi nel DOM

itemsCont.innerHTML += contenutoItem;

document.getElementsByClassName("item")[0].classList.add("active");

thumbsCont.innerHTML += contenutoThumb;

document.getElementsByClassName("thumb")[0].classList.add("active");

// creo una funzione con un evento "click" dove all'interno aggiungo e rimuovo la classe active

let activePosition = 0;


document.querySelector(".avanti").addEventListener("click",

function(){

    if (activePosition < items.length -1){

        activePosition = activePosition + 1;

    } else {

        activePosition = 0;

    }

    document.querySelector(".item.active").classList.remove("active");

    document.getElementsByClassName("item")[activePosition].classList.add("active");

    document.querySelector(".thumb.active").classList.remove("active");

    document.getElementsByClassName("thumb")[activePosition].classList.add("active");

}

);


document.querySelector(".indietro").addEventListener("click",

function(){

    if (activePosition === 0){

        activePosition = items.length -1;

    } else {

        activePosition = activePosition - 1;

    }

    document.querySelector(".thumb.active").classList.remove("active");

    document.querySelector(".item.active").classList.remove("active");

    document.getElementsByClassName("item")[activePosition].classList.add("active");

    document.getElementsByClassName("thumb")[activePosition].classList.add("active");

}

);


