import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCJ59H2cs5q2dWrCGD1hKr7zUQAZ3nHOM",
  authDomain: "rctjs-crow.firebaseapp.com",
  projectId: "rctjs-crow",
  storageBucket: "rctjs-crow.appspot.com",
  messagingSenderId: "1076457915808",
  appId: "1:1076457915808:web:7107de632a5bd2062210c5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function obtenerProducts() {
  const productsRef = collection(db, "productoStock");
  const snapshot = await getDocs(productsRef);
  const products = snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
  return products;
}

export async function getProduct(id) {
  const productsRef = collection(db, "productoStock");
  const docRef = doc(productsRef, id);
  const snapshot = await getDoc(docRef);
  return { ...snapshot.data(), id: snapshot.id };
}

export async function getProductBycat(cat) {
  const productsRef = collection(db, "productoStock");
  const q = query(productsRef, where("cat", "==", cat));
  const snapshot = await getDocs(q);
  const products = snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
  return products;
}

export async function createCompra(compra) {
  const compraRef = collection(db, "compra");
  let respuesta = await addDoc(compraRef, compra);
  return respuesta.id;
}

/*export async function exportArray() {
  const productoStock = [
    {
      cat: "remera",
      title: "Remera face your demons",
      img: "/img/remeras/remera1.jpeg",
      price: 6325,
      stock: 12,
    },
    {
      cat: "pantalon",
      title: "Pantalón cargo rústico",
      img: "/img/pantalones/pantalon1.jpeg",
      price: 9890,
      stock: 6,
    },

    {
      cat: "top",
      title: "Reme Crop Cosmic",
      img: "/img/tops/top1.jpeg",
      price: 4000,
      stock: 10,
    },
  ];
  for (let item of productoStock) {
    addDoc(collection(db, "productoStock"), item);
  }
}*/
