const productoStock = [
  {
    id: 1,
    cat: "remera",
    title: "Remera face your demons",
    img: "/img/remeras/remera1.jpeg",
    price: 6325,
    stock: 12,
  },
  {
    id: 2,
    cat: "remera",
    title: "Remera blanca Rata",
    img: "/img/remeras/remera2.jpeg",
    price: 6325,
    stock: 10,
  },
  {
    id: 3,
    cat: "remera",
    title: "Remera Rata",
    img: "/img/remeras/remera3.jpeg",
    price: 6325,
    stock: 17,
  },
  {
    id: 4,
    cat: "remera",
    title: "Remera Bone Hands",
    img: "/img/remeras/remera4.jpeg",
    price: 6325,
    stock: 8,
  },
  {
    id: 5,
    cat: "remera",
    title: "Remera Molo",
    img: "/img/remeras/remera5.jpeg",
    price: 6325,
    stock: 11,
  },
  {
    id: 6,
    cat: "remera",
    title: "Remera Cheating Death",
    img: "/img/remeras/remera6.jpeg",
    price: 6325,
    stock: 2,
  },
  {
    id: 7,
    cat: "remera",
    title: "Remera La Muerte",
    img: "/img/remeras/remera7.jpeg",
    price: 6325,
    stock: 15,
  },
  {
    id: 8,
    cat: "remera",
    title: "Remera Evil Dead",
    img: "/img/remeras/remera8.jpeg",
    price: 6325,
    stock: 4,
  },
  {
    id: 9,
    cat: "pantalon",
    title: "Pantalón cargo rústico",
    img: "/img/pantalones/pantalon1.jpeg",
    price: 9890,
    stock: 6,
  },
  {
    id: 10,
    cat: "pantalon",
    title: "Pantalon eco-cuero costuras",
    img: "/img/pantalones/pantalon2.jpeg",
    price: 14927,
    stock: 10,
  },
  {
    id: 11,
    cat: "pantalon",
    title: "Pantalón Parachute gris topo",
    img: "/img/pantalones/pantalon3.jpeg",
    price: 6000,
    stock: 2,
  },
  {
    id: 12,
    cat: "pantalon",
    title: "Pantalón Wideleg Escoces",
    img: "/img/pantalones/pantalon4.jpeg",
    price: 12075,
    stock: 7,
  },
  {
    id: 13,
    cat: "pantalon",
    title: "Pantalon Yessi",
    img: "/img/pantalones/pantalon5.jpeg",
    price: 8165,
    stock: 21,
  },
  {
    id: 14,
    cat: "pantalon",
    title: "Pantalon Morphosis",
    img: "/img/pantalones/pantalon6.jpeg",
    price: 10695,
    stock: 10,
  },
  {
    id: 15,
    cat: "pantalon",
    title: "Jogger Siré",
    img: "/img/pantalones/pantalon7.jpeg",
    price: 7360,
    stock: 4,
  },
  {
    id: 16,
    cat: "pantalon",
    title: "Jogger cadenas y tiras",
    img: "/img/pantalones/pantalon8.jpeg",
    price: 5060,
    stock: 14,
  },
  {
    id: 17,
    cat: "top",
    title: "Reme Crop Cosmic",
    img: "/img/tops/top1.jpeg",
    price: 4000,
    stock: 10,
  },
  {
    id: 18,
    cat: "top",
    title: "Top Lurex Frunce",
    img: "/img/tops/top2.jpeg",
    price: 3220,
    stock: 8,
  },
  {
    id: 19,
    cat: "top",
    title: "Top Espalda Estrella",
    img: "/img/tops/top3.jpeg",
    price: 2875,
    stock: 17,
  },
  {
    id: 20,
    cat: "top",
    title: "Top Roulette Puntilla",
    img: "/img/tops/top4.jpeg",
    price: 3220,
    stock: 10,
  },
  {
    id: 21,
    cat: "top",
    title: "Top Musculosa Cruzada",
    img: "/img/tops/top5.jpeg",
    price: 3150,
    stock: 7,
  },
  {
    id: 22,
    cat: "top",
    title: "Top Musculosa básica blanca",
    img: "/img/tops/top6.jpeg",
    price: 3335,
    stock: 3,
  },
  {
    id: 23,
    cat: "top",
    title: "Top tiras frunce lateral negro",
    img: "/img/tops/top7.jpeg",
    price: 3335,
    stock: 9,
  },
  {
    id: 24,
    cat: "top",
    title: "Crop musculosa chomba",
    img: "/img/tops/top8.jpeg",
    price: 3680,
    stock: 13,
  },
];

const obtenerProducts = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) reject();
      else resolve(productoStock);
    }, 2000);
  });
};

const getProduct = (id) => {
  return new Promise((resolve) => {
    const requestedProd = productoStock.find((item) => {
      return item.id === parseInt(id);
    });
    setTimeout(() => {
      resolve(requestedProd);
    }, 2000);
  });
};

const getProductBycat = (cat) => {
  return new Promise((resolve) => {
    let reqProd = productoStock.filter((item) => item.cat === cat);
    setTimeout(() => {
      resolve(reqProd);
    }, 2000);
  });
};

export default obtenerProducts;
export { getProduct, getProductBycat };
