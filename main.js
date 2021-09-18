/* 
1-levantar el valor del input, cuando se aprete cualquiera de los 3 botones
2-hacer que se requiera el nombre al apretar el boton con el input vacio
3-asignarle al input una variable con el valor que el usuario escriba
4-en cada uno de los botones guardar una variable diferente con direfentes cantidades de intentos(2 clikc vale 1 intento)
5-a medida que avanza el juego, mostrar un input que vaya cambiando en tipo real la cantidad de intentos
6-cuando finaliza el juego, mostrar un mensaje alert con el nombre,el nivel,la cantidad de intentos y un boton para volver a jugar
7-cada vez que se reinici el juego, tambien se reinicia las pocisiones de las cartas 




*/

let cantidadIntentos = 0;
let nivel = "";
/*trayendo los ids de las cajas principales */
const mainBox = document.getElementById("main-box");
const box2 = document.getElementById("box2");

function addItem(e){

    
     /*levantando el valor del input  */
    const taskValue = document.getElementById("inputTask").value;

    addElement(taskValue);

    setDificulty(e)
    /*dejando la primer caja estatica para poder mostrar la segunda caja */
    mainBox.classList.add("hide");
    box2.classList.remove("hide");
   

   
   
}

function addElement(content){
    const span = document.getElementById("span");
    span.classList.add("span-input");


    const text = document.createTextNode(content);

    span.appendChild(text);


}
 

function setDificulty(e){
    /* trayendo el id p1, p2 para poder agregarle la cantidad de intentos y el respectivo nivel*/  
    const intentos = document.getElementById("p1");
    const dificultad = document.getElementById("p2"); 
    const btnId = e.target.attributes.id.value;

    if (btnId == "btn1") {
         cantidadIntentos = 18;
        nivel =" Nivel Facil";
        
    } else if (btnId == "btn2"){
        cantidadIntentos = 12;
        nivel ="Nivel Intermedio";

    } else if (btnId== "btn3"){
       cantidadIntentos = 9;
        nivel = "Nivel Experto";

    }

    intentos.innerHTML =cantidadIntentos;
    dificultad.innerHTML =nivel;
    


}

