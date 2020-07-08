import { db } from './setup';

//Servicios api
export async function updateUsuario(id, data){
    return await db
    .collection('usuarios')
    .doc(id)
    .update(data);
}
export async function deleteUsuario(id,data){
    return await db
    .collection('usuarios')
    .doc(id)
    .delete();
}
export async function createUsuario(id,data){
    return await db
    .collection('usuarios')
    .doc(id)
    .set(data);
}
//comidas

export async function updateComidas(id, data){
    return await db
    .collection('comidas')
    .doc(id)
    .update(data);
}
export async function deleteComidas(id,data){
    return await db
    .collection('comidas')
    .doc(id)
    .delete();
}
export async function createComidas(id,data){
    return await db
    .collection('comidas')
    .doc(id)
    .set(data);
}
//Restaurantes 

export async function updateRestaurante(id, data){
    return await db
    .collection('restaurantes')
    .doc(id)
    .update(data);
}
export async function deleteRestaurante(id,data){
    return await db
    .collection('restaurantes')
    .doc(id)
    .delete();
}
export async function createRestaurante(id,data,){
    return await db
    .collection('restaurantes')
    .doc(id)
    .set(data);
}

