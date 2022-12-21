const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr")
    const contenido = `<tr>
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
            <li>
                <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button"> Eliminar </button>
            </li>
            </ul>
        </td>
    </tr>`;
    linea.innerHTML = contenido
    return linea
};

const table = document.querySelector("[data-table]")


// CRUD   - Metodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - Delete

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        //Abrir http(metodo,url)
        http.open("GET", "http://localhost:3000/perfil")
        //Envia la peticion
        http.send()

        http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status >= 400) {
                reject(response)
            } else {
                resolve(response)
            }
        }
    });

    return promise
};

listaClientes().then((data) => {
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
        table.appendChild(nuevaLinea)
    })
}).catch((error) => alert("Ocurrió un error"))