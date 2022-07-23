/*
seleccionar elementos a travéz de su TagName */
//coleccion de HTML
let listItems = document.getElementsByTagName("li")
console.log(listItems)

console.log("getElementsByTagName va a traer todos los elementos que cumplan con el Tag que especifique en el parametro")
console.log("listItems.forEach( element => console.log( element )); no se puede aplicar la funcion por que listItems no es un array, se puede iterar con el metodo ( .for ) unicamente")
console.log("console.log(listItems[0]) --> ",listItems[0])

/*
seleccionar elementos a travéz de de su Clase */
//let successItem = document.getElementsByClassName("bg-success")
let successItem = document.getElementsByClassName("bg-primary")
let successItem2 = document.getElementsByClassName("bg-secondary")
console.log(successItem)
console.log(successItem2)

console.log("getElementsByClassName va a traer unicamente aquellos elementos que tengan en su lista de clases la clase que indique en el parametro ")

/*
seleccionar elementos a travéz de de su id */
//Elemento de HTML
let koderslist = document.getElementById("Koders-list")
console.log(koderslist)

console.log("getElementById regresa un elemento de HTML con el id indicado en el parametro")
console.log(" ")

/* Seleccion de multiples elementos */

let italicItem = document.querySelector("#Koders-list .bg-success .text-italic")
console.log(italicItem)

console.log("document.querySelector me permite seleccionar un elemento con base en cualquier selector valido de css y me va a traer la primer coincidencia que se encuentre de ese elemento, si hay mas los va a descartar")
console.log(" ")

let spans = document.querySelectorAll("#Koders-list li span")
console.log(spans)
spans.forEach( node => console.log( node ))
/*     spans.map()
    spans.reduce()
    spans.filter()

    VM2113:1 Uncaught TypeError: spans.map is not a function
        at <anonymous>:1:7
    (anónimo) @ VM2113:1 */
console.log("document.querySelectorAll me permite seleccionar todos los elementos con base en cualquier selector valido de css y me va a traer la primer coincidencia que se encuentre de ese elemento, y solo se le puede hacer forEach")

let listItems2 = document.querySelectorAll("#Koders-list li")

listItems2.forEach( element => {
    element.classList.add("list-group-item")
    console.log(element.innerText)// inertext es una propiedad para imprimir el texto interde de un elemento de HTML

    let elemenText = element.innerText
    elemenText.length > 4 ? element.classList.add("bg-primary") : element.classList.add("bg-secondary")
})



//ejemplo 1

let notesArray = [
    {
        signature:"Español",
        note:8
    },
    {
        signature:"Matematicas",
        note:9
    },
    {
        signature:"ingles",
        note:8.5
    },
    {
        signature:"fisica",
        note:7
    }
]

/*Queremos una lista que diga lo siguiente:

calificaciones:
_____________________
{signature}:{note}
_____________________
{signature}:{note}
_____________________

*/

//seleccionamoe nuestro note-list
//let notesList = document.getElementById("notes-list")

//creamos la lista "li"
//let noteLi = document.createElement("li")

//creamos el contenido
//let noteText = document.createTextNode("Matematicas: 10")

//agrego el texto al li y el li a la ul
//noteLi.appendChild(noteText)
//notesList.appendChild(noteLi)

//creamos una funcion
const addItem = (signature, note) => {
//metemos lo que ya habiamos creado antes
    let notesList = document.getElementById("notes-list")
   
    let noteLi = document.createElement("li")
//  let noteText = document.createTextNode("Matematicas; 10")
    let noteText = document.createTextNode(`${signature}:${note}`)
   
    noteLi.appendChild(noteText)

//  Agrego el estilo"list-group-item"
    noteLi.classList.add("list-group-item")


//  identificamos por color si es mayor a 8 y menor a 8
    note < 8 ? noteLi.classList.add("bg-warning") : noteLi.classList.add("bg-success")

    notesList.appendChild(noteLi)
}

//  Ahora voy a tomar mi notesArray y por cada nota llamare mi funcion addItem, voy a agregar un item con los siguientes parametros:
    notesArray.forEach( note => {
    addItem(note.signature, note.note )
})

const getLowerScore = () => {
    let scores = document.querySelectorAll(`li.bg-warning`).length;
    console.log(scores);
    return scores;
}

//sintaxis para agregar un listering
/* element.addEventListener( {event} , callback )*/

/* ------------------ funcion
document.getElementById("button").addEventListener("click", 
function(){
    console.log("hola")
}) */

/* ------------------ funcion flecha anonima 
document.getElementById("button").addEventListener("click", () => {
    console.log( "Hola" )
}) */

document.getElementById("button").addEventListener("click", getLowerScore)




getLowerScore()

//practica 1

//Practica
/*hacer una tabla con los nombres de los mentores y 
los promedios de cada asignatura junto con el promedio general*/
console.log(" ")

var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
//              score:8
                score:0
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]


const printTable1 = () => {

    let headersArray = [
        "Mentor__",
        "HTML____",
        "CSS_____",
        "JS______",
        "ReactJS_",
        "suma____",
        "Promedio"
    ]

     let dataTable = document.createElement( "table" )
     let dataHeader = document.createElement( "thead" )
     let headerRow = document.createElement( "tr" )

     headersArray.forEach( header => {

         let head = document.createElement( "th" )
         let headText = document.createTextNode( header )
         head.appendChild(headText)
         headerRow.appendChild(head)

     })

     dataHeader.appendChild( headerRow )
     dataTable.appendChild( dataHeader )
     document.body.appendChild( dataTable )

//   Agrego el estilo "list-group-item" a dataTable.appendChild( dataHeader )
     dataTable.classList.add("list-group-item")

     let dataTableBody = document.createElement("tbody")

     mentorsArray.forEach( item => {

//        console.log(item)

            let suma = item.scores.reduce((accum,current)=>{
                return accum += current.score
            },0)
            let promedio = Math.round(suma / item.scores.length)

     let HTML = item.scores.find( score => score.signature === "HTML").score
     let CSS = item.scores.find( score => score.signature === "CSS").score
     let JS = item.scores.find( score => score.signature === "JS").score
     let ReactJS = item.scores.find( score => score.signature === "ReactJS").score

        let itemRow = document.createElement("tr")      // creamos la fila

        let nameTd = document.createElement("td")           
        let htmlTd = document.createElement("td")
        let cssTd = document.createElement("td")
        let jscriptTd = document.createElement("td")
        let reacTd = document.createElement("td")

        let sumaTd = document.createElement("td")
        let promTd = document.createElement("td")

        let nameText = document.createTextNode( item.name)  
        let htmlText = document.createTextNode( HTML )
        let cssText = document.createTextNode( CSS )
        let jscriptText = document.createTextNode( JS )
        let reacText = document.createTextNode( ReactJS )
        
        let sumaText = document.createTextNode( suma )
        let promText = document.createTextNode( promedio )

        nameTd.appendChild(nameText)                        
        htmlTd.appendChild(htmlText)
        cssTd.appendChild(cssText)
        jscriptTd.appendChild(jscriptText)
        reacTd.appendChild(reacText)

        sumaTd.appendChild(sumaText)
        promTd.appendChild(promText)

        itemRow.appendChild(nameTd)                         
        itemRow.appendChild(htmlTd)
        itemRow.appendChild(cssTd)
        itemRow.appendChild(jscriptTd)
        itemRow.appendChild(reacTd)
        
        itemRow.appendChild(sumaTd)
        itemRow.appendChild(promTd)
        
//      Agrego el estilo "list-group-item"
        nameTd.classList.add("list-group-item")


//      Identificamos por color si es mayor y menor a 8
        promedio < 9 ? promTd.classList.add("bg-warning") : promTd.classList.add("bg-success")
        HTML < 9 ? htmlTd.classList.add("bg-warning") : htmlTd.classList.add("bg-success")
        CSS < 9 ? cssTd.classList.add("bg-warning") : cssTd.classList.add("bg-success")
        JS < 9 ? jscriptTd.classList.add("bg-warning") : jscriptTd.classList.add("bg-success")
        ReactJS < 9 ? reacTd.classList.add("bg-warning") : reacTd.classList.add("bg-success")


        dataTableBody.appendChild( itemRow )
     })

     dataTable.appendChild(dataTableBody)
 }
 
 printTable1()
