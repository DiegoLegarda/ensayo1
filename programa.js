


url='datos.json'
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    llenarDatos(data);
})
.catch(error => console.error('Error:', error))

function llenarDatos(datos){
    for(elemento of datos){
        let nodo = document.createElement("option");
        let texto = document.createTextNode(elemento.nombre);
        let lista=document.getElementById('estudiantes');
        let cont=lista.childElementCount;
        nodo.appendChild(texto);
        lista.appendChild(nodo);
        console.log(cont);
    }
}



