const productos = [

/* Camaras */

  {
    id: "1100",
    name: "SONY A7RIII",
    category: "camaras",
    description: "Incluye:  3 baterias + cargador + memoria 32gb",
    price: 6500,
    img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/ad8c4287-cd30-49de-879d-e3124c34390f/large_photo.jpg",
    stock: 3,
  },
  {
    id: "1101",
    name: "BLACKMAGIC POCKET 4K",
    category: "camaras",
    description: "Incluye:  5 baterias + cargador + memoria sshd 120 gb",
    price: 9500,
    img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/9850ef07-6630-41e4-879b-7839e0b2f616/large_photo.jpg",
    stock: 2,
  },
  {
    id: "1102",
    name: "SONY NX5R (HDMI - SDI)",
    category: "camaras",
    description:
      "Incluye: fuente (x     ) O + valija (x     ) O + Batería (x     ) O + Memoria 32/64gb. (x     ) O Nº de Serial: Valor de Reposición: U$D2900",
    price: 12500,
    img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/0a9bbd8a-be8e-492d-94cc-5dbede6c3402/large_photo.jpg",
    stock: 1,
  },

  /*   Accesorios */

  {
    id: "2200",
    name: "ROKINON AF 14mm f2.8 APS-C",
    category: "accesorios",
    description: "Incluye:Tapas (x2) Funda (x1)",
    price: 2200,
    img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/f9fdf9df-f77a-4b27-acb6-6e929ddaf18e/large_photo.jpg",
    stock: 1,
  },
  {
    id: "2201",
    name: "ROKINON AF 50mm f1.4",
    category: "camaras",
    description: "Incluye:Tapas (x2) Funda (x1)",
    price: 2500,
    img: "https://cdn3.booqable.com/uploads/7266beb5060dfda17c4446e230fb3645/photo/photo/c1e6c8a6-fc52-4832-8a01-658e4a0fe048/large_photo.jpg",
    stock: 1,
  },
  
];

export const data = new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(productos);
    } else {
      reject("jajant");
    }
  }, 1500);
});
