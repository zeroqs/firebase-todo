import {db} from "../firebase";

export function getTodos(collection) {
    return db.collection(collection)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        })
        .catch((error) => {
            return error
        });
}

export function createTodo(data) {
    return db.collection("todos").add({
        ...data,
        completed : false
    })
        .then(docRef => docRef.get() )
        .then(doc => ({
            id : doc.id,
            ...doc.data()
        }))
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

export function deleteTodo(id) {
    return db.collection("todos").doc(id).delete()
        .then(() => id)
        .catch((error) => {
        console.error("Error removing document: ", error);
    });
}