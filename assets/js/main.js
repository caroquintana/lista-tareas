var tareas = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
];


//Mostra 10 elementos
var mostrar = tareas.forEach(function(el){

   document.write("<li><strong>Títulos: </strong>" + el.title + "<br></li>" 
   	)});

//Función para rescatar y añadir en un <li> lo que vamos ingresando 
	function myFunction() {
		var nombre = document.getElementById("titulousuario");
		
		var resultado = document.getElementById("añadir");
		resultado.innerHTML += "<li><strong>" + nombre.value + "</strong><br>";
		nombre.value = " ";		
	}

/*
//Constructor
function Nuevostitulos(userId, id, title, completed){
	this.userId = userId,
	this.id = id,
	this.title = title,
	this.completed = completed,
	this.nuevoDato = function(){
		var ntitulo = this.title;
		tareas.push(document.getElementById("titulousuario").value);
	}
}
*/








