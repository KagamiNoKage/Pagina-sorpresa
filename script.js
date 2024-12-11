let ancho = 100
let perdido = 0
function hambre(){
    perdido = perdido+0.01
    ancho = ancho-0.01
    document.getElementById("barra").style.width = ancho + "%"
    document.getElementById("numero").innerHTML = Math.ceil(ancho) + "%"
    end = "Has perdido"
    if (ancho == 0){
        clearInterval(intervalo)
        fin("HAS MATADO AL PERRO")
        document.getElementById("alimentar").style.visibility = "hidden"
        document.getElementById("restart").style.visibility = "visible"
    }
    if (ancho < 100){
        document.getElementById("barra").style.backgroundColor = "green"
        document.getElementById("perro").src = "/mascota.png"

    }
    if (ancho < 50){
        document.getElementById("barra").style.backgroundColor = "yellow"
        
    }
    if (ancho < 25){
        document.getElementById("barra").style.backgroundColor = "orange"
        
    }
    if (ancho < 10){
        document.getElementById("barra").style.backgroundColor = "red"
        
    }
    if(ancho == 0){
        document.getElementById("perro").src = "/mascota muerta.png"
    }
}
function restart(){
    ancho = 100
    document.getElementById("alimentar").style.visibility = "visible"
    document.getElementById("fin").style.visibility = "hidden"
    start()
}
function start(){
    document.getElementById("restart").style.visibility = "hidden"
    document.getElementById("empezar").style.visibility = "hidden"
    intervalo = setInterval(hambre, 15)
}

function alimentar(){
    if(ancho < 99){
        ancho = Math.ceil(ancho + perdido/2)
    }
    perdido = perdido/2
    document.getElementById("barra").style.width = ancho + "%"
}
function fin(msg){
    
    document.getElementById("fin").innerHTML = msg
}