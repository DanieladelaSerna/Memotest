/* 
1-levantar el valor del input, cuando se aprete cualquiera de los 3 botones
2-hacer que se requiera el nombre al apretar el boton con el input vacio
3-asignarle al input una variable con el valor que el usuario escriba
4-en cada uno de los botones guardar una variable diferente con direfentes cantidades de intentos(2 clikc vale 1 intento)
5-a medida que avanza el juego, mostrar un input que vaya cambiando en tipo real la cantidad de intentos
6-cuando finaliza el juego, mostrar un mensaje alert con el nombre,el nivel,la cantidad de intentos y un boton para volver a jugar
7-cada vez que se reinici el juego, tambien se reinicia las pocisiones de las cartas 




*/ 
let cantidadPares = 0;
let contador =0;
let img = [];
let cantidadIntentos = 0;
let nivel = "";
/*trayendo los ids de las cajas principales */
const mainBox = document.getElementById("main-box");
const box2 = document.getElementById("box2");

let arrayImg = [
    {
        img: "imagenes/nena.jpg",
        dataId: 0,
    },
    {
        img: "imagenes/nena.jpg",
        dataId: 1,
    },
    {
        img: "imagenes/peces.jpg",
        dataId: 2,
    },
    {
        img: "imagenes/peces.jpg",
        dataId: 3,
    },
    {
        img: "imagenes/zapas.jpg",
        dataId: 4,
    },
    {
        img: "imagenes/zapas.jpg",
        dataId: 5,
    },
    {
        img: "imagenes/epelante.jpg",
        dataId: 6,
    },
    {
        img: "imagenes/epelante.jpg",
        dataId: 7,
    },
    {
        img: "imagenes/unichancho.jpg",
        dataId: 8,
    },
    {
        img: "imagenes/unichancho.jpg",
        dataId: 9,
    },
    {
        img: "imagenes/alce.jpg",
        dataId: 10,
    },
    {
        img: "imagenes/alce.jpg",
        dataId: 11,
    },


];



function shuffle(cardsArray) {
    var j
    var x
    var i
    for (i = cardsArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cardsArray[i].dataId;
        cardsArray[i].dataId = cardsArray[j].dataId;
        cardsArray[j].dataId = x;
    }
    return cardsArray;
}

shuffle(arrayImg);

function addItem(e) {


    /*levantando el valor del input  */
    const taskValue = document.getElementById("inputTask").value;

    addElement(taskValue);

    setDificulty(e)
    /*dejando la primer caja estatica para poder mostrar la segunda caja */
    mainBox.classList.add("hide");
    box2.classList.remove("hide");




}

function addElement(content) {
    const span = document.getElementById("span");
    span.classList.add("span-input");


    const text = document.createTextNode(content);

    span.appendChild(text);


}


function setDificulty(e) {
    /* trayendo el id p1, p2 para poder agregarle la cantidad de intentos y el respectivo nivel*/
    const intentos = document.getElementById("p1");
    const dificultad = document.getElementById("p2");
    const btnId = e.target.attributes.id.value;

    if (btnId == "btn1") {
        cantidadIntentos = 18;
        nivel = " Nivel Facil";

    } else if (btnId == "btn2") {
        cantidadIntentos = 12;
        nivel = "Nivel Intermedio";

    } else if (btnId == "btn3") {
        cantidadIntentos = 9;
        nivel = "Nivel Experto";

    }

    intentos.innerHTML = cantidadIntentos;
    dificultad.innerHTML = nivel;



}


function addImg(e) {
    /*reemplazando la cara de atras de las tarjetas con la cara de adelante */
    const tapadaEvent = e.target.attributes[0].value;
    for (let i = 0; i < arrayImg.length; i++) {
        if (tapadaEvent == arrayImg[i].dataId) {
            e.target.src = arrayImg[i].img


        }
       

    }

    addClick(e)
   
 
}


function addClick(e){
    const contadorInt = document.getElementById("int")
    let obj = { src: "",
                id: "",
 }
   
   
     if (img.length == 2){
        img= [];

      } if (img.length <=1) {
          obj ={ src: e.target.attributes[4].value,
            
                 id:e.target.attributes[0].value

          }
    img.push(obj);
    

    }  
    let firstImg = img[0].src;
    let secondImg = img[1].src;
 
    if (firstImg == secondImg && img.length==2 ) {
        contador++
        cantidadPares++
        checkWin()
        
      
   
    } if (firstImg != secondImg && img.length==2 ){
    
        setTimeout(function()
        {e.target.src="imagenes/tapada.jpg"
        let id = img[0].id+""      
        let varId = document.getElementById(id+ "")
       
       varId.src = "imagenes/tapada.jpg"    }, 500);
       contador++
       checkWin()

    }

    contadorInt.innerHTML = "Intentos: " + contador;

    
}

function checkWin(){
    let box = document.getElementById("final-box")
    let background = document.getElementById("background")
    let spanFinal= document.getElementById("final")
    if (contador <= cantidadIntentos && cantidadPares==6) {
        box.classList.remove("hide");
        background.classList.remove("hide")
        spanFinal.innerHTML= "GANASTE"

    
    } else if (contador > cantidadIntentos && cantidadPares <6 ){
        box.classList.remove("hide");
        background.classList.remove("hide")
        spanFinal.innerHTML= "PERDISTE"
        
    }

}

function reload(){
    location.reload();
}

    
    

   
   
   
   
   
   




  