// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    else {
    amigos.push(nombre);
    listaamigos(); 
    limpiartexto();   
    console.log(amigos);

    }


}
function limpiartexto() {
    document.getElementById("amigo").value = "";
}
function listaamigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos amigos
    for (i=0; i<amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);  
    }

}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    else {
        let numerodeAmigos = amigos.length;
        let numeroAleatorio = Math.floor(Math.random() * numerodeAmigos);
        let amigoSorteado = amigos[numeroAleatorio];
        // Limpiar la lista de nombres
        document.getElementById("listaAmigos").innerHTML = "";
        // Mostrar el resultado en el elemento con id="resultado"
        document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
    }
}
