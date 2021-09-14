/* 
1-levantar el valor del input, cuando se aprete cualquiera de los 3 botones
2-hacer que se requiera el nombre al apretar el boton con el input vacio
3-asignarle al input una variable con el valor que el usuario escriba
4-en cada uno de los botones guardar una variable diferente con direfentes cantidades de intentos(2 clikc vale 1 intento)
5-a medida que avanza el juego, mostrar un input que vaya cambiando en tipo real la cantidad de intentos
6-cuando finaliza el juego, mostrar un mensaje alert con el nombre,el nivel,la cantidad de intentos y un boton para volver a jugar
7-cada vez que se reinici el juego, tambien se reinicia las pocisiones de las cartas 




*/

const mainBox = document.getElementById("main-box");
const box2 = document.getElementById("box2");

function addItem(){
    const taskValue = document.getElementById("inputTask").value;
    console.log(taskValue);
    

    addElement(taskValue);

    mainBox.classList.add("hide");
    box2.classList.remove("hide");

}

function addElement(type,content){
    const elem = document.createElement(type);
    const text = document.createTextNode(content);
   
   

    elem.appendChild(text);

    

}

function addBtn(btnOne, btnTwo, btnThree){
    const facil = document.getElementById("btn1"); //18
    const intermedio = document.getElementById("btn2"); //12
    const dificil = document.getElementById("btn3"); //9  

    const boton1 = document.createElement("p");
    console.log(boton1);
    const boton2 = document.createTextNode(btnOne);

    facil.appendChild(boton1);



}

