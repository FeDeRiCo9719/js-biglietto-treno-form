/* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente 
il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina 
(formattato con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca. */

//-------------------------------------------------------------------------------

// PROGRAMMA 
// 1. seleziono il bottone
var btnGenera = document.getElementById("genera"); 
var btnAnnulla = document.getElementById("annulla");

// 2. al click del bottone genera
btnGenera.addEventListener( "click",

    // inserire la logica di programmazione per generare il biglietto
    function() {

        // 3. raccolgo i valori dei campi input e select all'interno di variabili
        var nome = document.getElementById("name").value;
        console.log(nome);
        var km = parseInt(document.getElementById("km").value);
        console.log(km);
        var age = document.getElementById("age").value;
        console.log(age);
        // var price = 0;

        // // 4. calcolo il prezzo del biglietto
        // if (age < 18) {
        //     var price = km * 0.21 * 80 /100; 
         
        // } else if (age > 65) {
        //     var price = km * 0.21 * 60 /100;
        // } else {
        //     var price = km * 0.21
        // }  

    }

); 

// 5. al click del bottone annulla
// nascondere il biglietto
// svuotare i campi 