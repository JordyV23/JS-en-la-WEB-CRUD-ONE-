// CRUD   - Metodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - Delete


//FETCH
const listaClientes = () => fetch("http://localhost:3000/perfil").then( (respuesta) => respuesta.json());

const crearCliente = (nombre,email) =>{
    return fetch("http://localhost:3000/perfil",{
        method:"POST",
        headers:{"Content-Type":"application/json"}, //estandar para el tipo de archivo que va a recibir
        body: JSON.stringify({nombre,email,id:uuid.v4()}),//Aqui va la informacion que queremos enviar
    })
}

const eliminarCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "DELETE"
    })
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then( respuesta => respuesta.json())
}

const actualizarCliente = (nombre,email,id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({nombre,email})
    }).then( (respuesta) => respuesta)
    .catch( (err) => console.log(err))
}

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};