import { createProducto } from "./firebase";


const prod =     {
    "id" : 1,
    "idCat":1,
    "nombre": "Riñonera",
    "modelo": "Prudence Brown",
    "precio": 2500,
    "stock": 10,
    "img": "https://firebasestorage.googleapis.com/v0/b/wiccashop-react-2022.appspot.com/o/prudence-brown.png?alt=media&token=bf9b708c-188d-4a2c-bae9-83dc89b76a9a"
}

createProducto(prod).then(mensaje=> console.log(mensaje))