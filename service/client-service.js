// CRUD   - Metodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - Delete


//FETCH
const listaClientes = () => fetch("http://localhost:3000/perfil").then( (respuesta) => respuesta.json());


export const clientServices = {
    listaClientes,
};