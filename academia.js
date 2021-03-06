"use strict"
/** 
 * @fileOverview Listado de los alumnos
 * @description Determina la lista de alumnos
 * @author Jose Lagoa  
 * @version 2.2  
 */  
/** 
 * @description Determina la lista de alumnos
 * @param {Array} listaAlumnos Array de objetos de tipo alumno
 * @return {nombres} Devuelve el objeto de tipo alumno
 */  

function nombreAlumnos(listaAlumnos){
    let nombres=[];
    for(let alumno of listaAlumnos){       
        nombre.push(alumno.nombre); //Cambiar nombres por nombre
    }
    return nombres;
}
/** 
 * @description Función que nos devuelve un objeto alumno, buscamos por nombre
 * @param {Array} nombre Nombre del alumno 
 * @param {Array} listaAlumno Array de objetos de tipo de alumno
 * @param {string} alumno Nombre de los alumnos
 * @return {alumno} Devuelve la variable alumno
 * @return {null} Devuelve un valor null
 */  


//Función que nos devuelve un objeto alumno, buscamos por nombre
//Si no encuentra ningún alumno con ese nombre devuelve null
function buscarAlumno(nombre,listaAlumnos){
    for(let alumno of listaAlumnos){       
        if(alumno.nombre==nombre){
            return alumno;
        }
        return null;
    }
}
/** 
 * @description Función que nos devuelve el nombre completo de un alumno
 * @param {Array} alumno Array de nombre de alumno
 * @return {nombre} Devuelve nombre de alumno
 */ 


//función que nos devuelve el nombre completo de un alumno
//recibe como parametro un objeto alumno
function nombreCompleto(alumno){
    let nombre="";
    nombre=alumno.nombre;
    for(let apellido of alumno.apellidos){
        nombre=nombre+apellido;
    }
    return nombre;
}
/** 
 * @description función que devuelve los alumnos que pertenecen a determinado curso
 * @param {Array} curso
 * @param {Aray} listaAlumno
 * @return {alumnosCurso} recibe como parametro un objeto alumno
 */ 

//función que devuelve los alumnos que pertenecen a determinado curso
function alumnosCurso(curso,listaAlumnos){
    let alumnosCurso=[];
    for(let alumno of listaAlumnos){
        if(alumno.curso==curso){
            alumnosCurso.push(alumno);
        }
        
    }
    return alumnosCurso;
}
/** 
 * @description Función que devuelve los alumnos matriculados en la asignatura
 * @param {Array} 
 * @param {number}
 * @return {alumnosAsignatura} recibe como parametro un objeto alumno
 */ 

//Función que devuelve los alumnos matriculados en la asignatura
//que pasamos como parámetro
function alumnosAsignatura(asignatura,listaAlumnos){
    let alumnosAsignatura=[];
    
    //Completar código

    return alumnosAsignatura;
}


//////////////////////////EMPIEZA EL PROGRAMA//////////////////////////////////////////

console.log("Empieza el programa");
let fs = require("fs");
let alumnos = fs.readFileSync("alumnos.json","utf-8");
let alumnosArray=JSON.parse(alumnos);

console.log("El número de alumnos del ficheros es: "+alumnos.length);

console.log("Los nombres de los alumnos matriculados son:");
//let nombres_de_alumnos=nombreAlumnos(alumnosArray);

console.log("Voy a comprobar si hay una alumna llamada Olivia")
//let alumno=buscarAlumno("Olivia",alumnosArray); //Como no hay tendría que mostrar null
//console.log(alumno);

console.log("Voy a comprobar si hay un alumno llamado Pedro");
//let alumno=buscarAlumno("Pedro",alumnosArray); //Como si lo hay tendría que mostrar el alumno Pedro
//console.log(alumno);


console.log("Ahora voy a mostrar el nombre completo de Pedro");
let alumno=buscarAlumno("Pedro",alumnosArray); //Es necesario que buscarAlumno funcione bien
let nombre_completo=nombreCompleto(alumno);
console.log(nombre_completo);

console.log("Alumnos de Primero")
let alumnos_primero=alumnosCurso("primero",alumnosArray);
console.log(alumnos_primero);





