let superHeroes = [
    {
        foto: './Assets/batman.jpg',
        nombre: 'Batman',
        poder: 'Billonario',
        edad: 40
    },
    {
        foto: './Assets/capitan.jpg',
        nombre: 'Capitan America',
        poder: 'Fuerza',
        edad: 130
    },
    {
        foto: './Assets/hulk.jpg',
        nombre: 'Hulk',
        poder: 'Fuerza',
        edad: 30
    },
    {
        foto: './Assets/ironman.jpg',
        nombre: 'Iron Man',
        poder: 'Billonario',
        edad: 50
    },
    {
        foto: './Assets/linterna.jpg',
        nombre: 'Linterna Verde',
        poder: 'Una linterna',
        edad: 25
    },
    {
        foto: './Assets/spiderman.jpg',
        nombre: 'Spider-Man',
        poder: 'Trepar',
        edad: 17
    },
    {
        foto: './Assets/superman.png',
        nombre: 'Superman',
        poder: 'Vuela',
        edad: 35
    },
    {
        foto: './Assets/wonder.jpg',
        nombre: 'Wonder Woman',
        poder: 'Fuerza',
        edad: 350
    },
]



function agregarTodos(){
    heroe = '';
    document.getElementById('agregarTodos').addEventListener('click', function(){
        superHeroes.forEach(el => {
            heroe += `<div class="wraper">
            <img src='${el.foto}' class="img">
            <h2>${el.nombre}</h2>
            <h4>Tiene el poder de: ${el.poder}</h4>
            <h5>Tiene ${el.edad} de años</h5>
            </div>`
        })
        document.getElementById('container').innerHTML = heroe;
    })
}
agregarTodos()
//esta funciona



function agregarUno(){
    contador = 0;
    unHeroe = '';
    document.getElementById('agregar').addEventListener('click', function(){
        unHeroe.push(superHeroes);
        unHeroe += `<div class="wraper">
        <img src='${superHeroes[contador].foto}' class="img">
        <h2>${superHeroes[contador].nombre}</h2>
        <h4>Tiene el poder de: ${superHeroes[contador].poder}</h4>
        <h5>Tiene ${superHeroes[contador].edad} de años</h5>
        </div>`
    })
    document.getElementById('container').innerHTML = unHeroe;
    contador++;
}
agregarUno()
//No funciona



function ocultarTodos(){
    document.getElementById('quitarTodos').addEventListener('click', function(){
        document.getElementById('container').style.display = 'none'
    })
}
ocultarTodos();
//Anda, pero despues hay que refrescar la pagina



function ocultarUno(){
    nuevoArray = ''
    document.getElementById('quitar').addEventListener('click', function(){
        nuevoArray -= superHeroes.pop();
        superHeroes.forEach(el => {
            nuevoArray += `<div class="wraper">
            <img src='${el.foto}' class="img">
            <h2>${el.nombre}</h2>
            <h4>Tiene el poder de: ${el.poder}</h4>
            <h5>Tiene ${el.edad} de años</h5>
            </div>`
        })
        document.getElementById('container').innerHTML = nuevoArray;
    })
}
ocultarUno()
//Al parecer funciona