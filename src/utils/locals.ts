import { Local } from "./types";

const locals: Local[] = [
  {
    id: "1",
    name: "Subway",
    productsTypes: ["Sandwiches", "Snacks", "Bebestibles"],
    rating: 4.7,
    deliveryTime: 8,
    imageUrl:
      "https://1000marcas.net/wp-content/uploads/2020/03/Subway-logo.jpg",
    products: [
      {
        id: "1",
        name: "Pollo estilo teriyaki 15cm ",
        imageUrl:
          "https://mostosydestilados.cl/wp-content/uploads/2021/02/Subway_PolloTeriyaki-X.jpg",
        price: 4900,
        type: "Sandwiches",
        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "2",
        name: "Carne Mechada 15cm",
        imageUrl:
          "https://tb-static.uber.com/prod/image-proc/processed_images/05e70c8058db5c1147c444e799a62a79/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        price: 5400,
        type: "Sandwiches",
        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "3",
        name: "Salame 15cm ",
        imageUrl:
          "https://tb-static.uber.com/prod/image-proc/processed_images/618fac1504810981edeb6abd63ef6187/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        price: 4100,
        type: "Sandwiches",
        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "4",
        name: "Costillas BBQ 15cm ",
        imageUrl:
          "https://www.bienestarengrande.com/wp-content/uploads/2020/06/RPLC-all-sandwiches-BBQRib-594x334_PR.jpg",
        price: 4900,
        type: "Sandwiches",

        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "5",
        name: "Jamón de Cerdo 15cm ",
        imageUrl:
          "https://www.bienestarengrande.com/wp-content/uploads/2020/06/RPLC-all-sandwiches-ham-MX-594x334_PR.jpg",
        price: 4100,
        type: "Sandwiches",

        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "6",
        name: "Sub Palta 15cm ",
        imageUrl:
          "https://tb-static.uber.com/prod/image-proc/processed_images/8febeb98338b37c7f97e26d9d6dee4e3/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
        price: 3700,
        type: "Sandwiches",

        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "7",
        name: "Pollo Apanado 15cm ",
        imageUrl:
          "https://d1ralsognjng37.cloudfront.net/8379dd52-5a98-4b60-b2af-715c87d887c5.jpeg",
        price: 4500,
        type: "Sandwiches",

        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "8",
        name: "Pechuga de Pollo 15cm ",
        imageUrl:
          "https://subwayspain.com/images/menus/6-gramos/Pollo_2016.jpg",
        price: 4500,
        type: "Sandwiches",

        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "9",
        name: "Pollo Asado 15cm ",
        imageUrl: "https://www.subwaypanama.com/content/20220616114152-1.jpg",
        price: 5400,
        type: "Sandwiches",
        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "10",
        name: "Galleta Vainilla con Chocochips",
        imageUrl: "https://www.subwaypanama.com/content/20220616163822-1.jpg",
        price: 2050,
        type: "Snacks",

        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "11",
        name: "Galleta Choco Choco Chips",
        imageUrl: "https://www.subwaypanama.com/content/20220616163822-1.jpg",
        price: 2050,
        type: "Snacks",

        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "12",
        name: "Coca Cola Light",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0620/8461/2267/products/Bebida-Gaseosa-Light-Lata-350cc-Pack-De-6-Unidades-Coca-Cola.png?v=1654185000",
        price: 990,
        type: "Bebestibles",
        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "13",
        name: "Sprite Zero",
        imageUrl:
          "https://tofuu.getjusto.com/orioneat-prod/8ffTdE2KLK2ocQsTh-Sprite-Zero-350-lata.jpg",
        price: 990,
        type: "Bebestibles",
        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "14",
        name: "Coca Cola Normal",
        imageUrl:
          "https://ofipack.cl/1483-large_default/coca-cola-tradicional-en-lata-350-ml.jpg",
        price: 990,
        type: "Bebestibles",
        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
      {
        id: "15",
        name: "Agua Mineral",
        imageUrl:
          "https://d1tjllbjmslitt.cloudfront.net/spree/products/19382/large_webp/8940582.webp?1641480071",
        price: 990,
        type: "Bebestibles",
        description:
          "Frango, alface, tomate, cebola roxa, pimentão verde, pimentão vermelho, azeitona preta, pepino, cenoura, molho de pimenta, maionese, mostarda e mel.",
      },
    ],
  },
  {
    id: "2",
    name: "Spacio 1",
    productsTypes: ["Sandwiches", "Snacks", "Bebestibles"],
    rating: 4.3,
    deliveryTime: 10,
    imageUrl: "https://www.100franquicias.cl/imagenes/logo-spacio1.jpg",
    products: [
      {
        id: "2",
        name: "Media Luna",
        imageUrl: "https://assets.unileversolutions.com/recipes-v2/210027.png",
        price: 1350,
        type: "Snacks",
        description: "Delicious media luna.",
      },
      {
        id: "3",
        name: "Coca Cola Lata",
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/004/805/923/large_2x/belgrade-serbia-2014-can-of-coca-cola-with-white-background-coca-cola-is-a-carbonated-soft-drink-produced-by-the-coca-cola-company-of-atlanta-georgia-free-photo.jpg",
        price: 1190,
        type: "Bebestibles",
        description: "Refreshing Coca Cola in a can.",
      },
      {
        id: "4",
        name: "Agua Vital 600ml Sin Gas",
        imageUrl:
          "https://i0.wp.com/prointegral.cl/wp-content/uploads/2022/04/AGUASINGAS600ML.png?fit=800%2C800&ssl=1",
        price: 990,
        type: "Bebestibles",
        description: "Refreshing bottled water without gas.",
      },
      {
        id: "5",
        name: "Hot Dog",
        imageUrl:
          "https://media.istockphoto.com/id/936334008/es/foto/perrito-caliente-con-ketchup-y-mostaza-en-blanco.jpg?s=612x612&w=0&k=20&c=mcokqeuh70CPZs-nacnOIe9nd4XXzKzSCR_TjScpzaE=",
        price: 1390,
        type: "Sandwiches",
        description: "Delicious hot dog with condiments.",
      },
      {
        id: "6",
        name: "Muffin Chocolate",
        imageUrl:
          "https://static.onecms.io/wp-content/uploads/sites/43/2022/05/19/228553-MoistChocolateMuffins-mfs-2X3-0923.jpg",
        price: 1490,
        type: "Snacks",
        description: "Delicious chocolate muffin.",
      },
      {
        id: "7",
        name: "Muffin Red Velvet",
        imageUrl:
          "https://ccdd0cc7c8.clvaw-cdnwnd.com/e3ce4f9a990809a91f4e2e257cb0b18f/200000206-5d1a55d1a8/WhatsApp%20Image%202022-08-03%20at%202.06.39%20PM.jpeg?ph=ccdd0cc7c8",
        price: 1790,
        type: "Snacks",
        description: "Delicious red velvet muffin.",
      },
      {
        id: "8",
        name: "Muffin Chips Chocolate",
        imageUrl:
          "https://s.cornershopapp.com/product-images/451611.jpg?versionId=db8J7MVij4qPcGJfT.H4VPoI_u1fxTKf",
        price: 1490,
        type: "Snacks",
        description: "Delicious chocolate chip muffin.",
      },
      {
        id: "9",
        name: "Marley Coffe Pequeño",
        imageUrl:
          "https://s.cornershopapp.com/product-images/5493536.jpg?versionId=mattHo2VOlM8Y9JIDet3o5p.7omd8dGB",
        price: 1450,
        type: "Bebestibles",
        description: "Refreshing small Marley coffee.",
      },
      {
        id: "10",
        name: "Marley Coffee Grande",
        imageUrl:
          "https://carrubo.cl/wp-content/uploads/2021/05/942C2280-F9B0-4BC6-A3AB-B183E210DC80.png",
        price: 2150,
        type: "Bebestibles",
        description: "Refreshing large Marley coffee.",
      },
      {
        id: "11",
        name: "Ave Mayo",
        imageUrl:
          "https://comidastipicaschilenas.cl/wp-content/uploads/2023/04/Receta-de-sandwich-ave-mayo.jpg",
        price: 3090,
        type: "Sandwiches",
        description: "Delicious Ave Mayo sandwich.",
      },
      {
        id: "12",
        name: "Croissant Jamón Queso",
        imageUrl:
          "https://cafepeumo.cl/wp-content/uploads/2020/07/Croissant-Jamon-Queso.jpg",
        price: 2890,
        type: "Snacks",
        description: "Delicious ham and cheese croissant.",
      },
    ],
  },
  {
    id: "3",
    name: "Coffee Time",
    productsTypes: ["Café", "Snacks", "Gohan", "Bebestibles"],
    rating: 4.3,
    deliveryTime: 10,
    imageUrl:
      "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/300969234_143971104988688_7383212255990778926_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aIUuRMb8pJ4AX-6WhEj&_nc_ht=scontent.fscl1-1.fna&oh=00_AfAiooZHUNYyP5s4PEUuYTJxuVOVfCxr3lUYq7sEUF10IQ&oe=64952249",
    products: [
      {
        id: "1",
        name: "Cafe latte Normal",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/47067288_266664547349126_6983371336196384039_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=J-mIZYZ3M8IAX8cloTb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTkzMjExMDI0OTgwNDk2ODI4Ng%3D%3D.2-ccb7-5&oh=00_AfAkIrksNDPIsMhrRVp2S14-27pzbq1WbLqFZYC7zo52Ag&oe=6495D470&_nc_sid=a1ad6c",
        price: 1290,
        type: "Café",
        description: "",
      },
      {
        id: "2",
        name: "Cafe latte Largo",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/47067288_266664547349126_6983371336196384039_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=J-mIZYZ3M8IAX8cloTb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTkzMjExMDI0OTgwNDk2ODI4Ng%3D%3D.2-ccb7-5&oh=00_AfAkIrksNDPIsMhrRVp2S14-27pzbq1WbLqFZYC7zo52Ag&oe=6495D470&_nc_sid=a1ad6c",
        price: 2000,
        type: "Café",
        description: "",
      },
      {
        id: "3",
        name: "Capuchino Normal",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/47067288_266664547349126_6983371336196384039_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=J-mIZYZ3M8IAX8cloTb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTkzMjExMDI0OTgwNDk2ODI4Ng%3D%3D.2-ccb7-5&oh=00_AfAkIrksNDPIsMhrRVp2S14-27pzbq1WbLqFZYC7zo52Ag&oe=6495D470&_nc_sid=a1ad6c",
        price: 1290,
        type: "Café",
        description: "",
      },
      {
        id: "4",
        name: "Capuchino Largo",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/47067288_266664547349126_6983371336196384039_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=J-mIZYZ3M8IAX8cloTb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTkzMjExMDI0OTgwNDk2ODI4Ng%3D%3D.2-ccb7-5&oh=00_AfAkIrksNDPIsMhrRVp2S14-27pzbq1WbLqFZYC7zo52Ag&oe=6495D470&_nc_sid=a1ad6c",
        price: 2000,
        type: "Café",
        description: "",
      },
      {
        id: "5",
        name: "Capuchino Vainilla Normal",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/47067288_266664547349126_6983371336196384039_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=J-mIZYZ3M8IAX8cloTb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTkzMjExMDI0OTgwNDk2ODI4Ng%3D%3D.2-ccb7-5&oh=00_AfAkIrksNDPIsMhrRVp2S14-27pzbq1WbLqFZYC7zo52Ag&oe=6495D470&_nc_sid=a1ad6c",
        price: 1290,
        type: "Café",
        description: "",
      },
      {
        id: "6",
        name: "Capuchino Vainilla Largo",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/47067288_266664547349126_6983371336196384039_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=J-mIZYZ3M8IAX8cloTb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MTkzMjExMDI0OTgwNDk2ODI4Ng%3D%3D.2-ccb7-5&oh=00_AfAkIrksNDPIsMhrRVp2S14-27pzbq1WbLqFZYC7zo52Ag&oe=6495D470&_nc_sid=a1ad6c",
        price: 2000,
        type: "Café",
        description: "",
      },
      {
        id: "7",
        name: "Agua Mineral",
        imageUrl:
          "https://d1tjllbjmslitt.cloudfront.net/spree/products/19382/large_webp/8940582.webp?1641480071",
        price: 850,
        type: "Bebestibles",
        description: "",
      },
      {
        id: "8",
        name: "Coca Cola Light 500 cc",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0620/8461/2267/products/Bebida-Gaseosa-Light-Lata-350cc-Pack-De-6-Unidades-Coca-Cola.png?v=1654185000",
        price: 990,
        type: "Bebestibles",
        description: "",
      },
      // ... previos productos aquí ...
      {
        id: "9",
        name: "Sprite Zero 500 cc",
        imageUrl:
          "https://tofuu.getjusto.com/orioneat-prod/8ffTdE2KLK2ocQsTh-Sprite-Zero-350-lata.jpg",
        price: 990,
        type: "Bebestibles",
        description: "",
      },
      {
        id: "10",
        name: "Jugo Natura Naranja",
        imageUrl:
          "https://comercializadoracrecer.cl/assets/pages/img/products/vasos/vasos-2-c.jpg",
        price: 1490,
        type: "Bebestibles",
        description: "",
      },
      {
        id: "11",
        name: "Jugo Natural Frutilla",
        imageUrl:
          "https://comercializadoracrecer.cl/assets/pages/img/products/vasos/vasos-2-b.jpg",
        price: 1490,
        type: "Bebestibles",
        description: "",
      },
      {
        id: "12",
        name: "Jugo Natura Mora",
        imageUrl:
          "https://comercializadoracrecer.cl/assets/pages/img/products/vasos/vasos-2-b.jpg",
        price: 1490,
        type: "Bebestibles",
        description: "",
      },
      {
        id: "13",
        name: "Yogurt con Cereal y Fruta",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/61202820_2308313592715348_8775381355098200767_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=M7gN0taLb7YAX9rtSDk&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjA1MDkwMDUwNTMzMzI1OTIyMQ%3D%3D.2-ccb7-5&oh=00_AfDR2kOU9wB3v_OgjIvdnEKNNwJ6sRhq2cFXDmcHMhXRbA&oe=6494DAA4&_nc_sid=b3163e",
        price: 3400,
        type: "Snacks",
        description: "",
      },
      {
        id: "14",
        name: "1/2 Luna",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/57451436_417389482378440_4126787704751164274_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=pH2jpRaR6NIAX-QCgAL&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjAzMDU3NDI5MTE2ODEzNDIzNQ%3D%3D.2-ccb7-5&oh=00_AfDHgRL295O1GA_QUlf7Eeg5XAjkfJF7w0-kR6GfxcF8uQ&oe=6495F789&_nc_sid=b3163e",
        price: 550,
        type: "Snacks",
        description: "",
      },
      {
        id: "15",
        name: "Brownie",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/66088510_388250291806562_3905713127924022465_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=QewOlSGBzNQAX_-OFPw&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjA4MTMwNTU3OTkyNjM2NDI5Ng%3D%3D.2-ccb7-5&oh=00_AfANZX_I8sPRjhGRjhKQ8DgnHoevEFNtSNZxfNqao6qfyg&oe=64948D64&_nc_sid=b3163e",
        price: 1290,
        type: "Snacks",
        description: "",
      },
      {
        id: "16",
        name: "Muffin Vainilla con Chips de Chocolate",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/62609990_137505377442543_1774119189744403942_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7dD--aXmj2wAX_iV4K7&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjA3MzM1NTA5MzE5MzY4NzI5OQ%3D%3D.2-ccb7-5&oh=00_AfCXgBJsINJ8NVxv-5iwyTn2UwRDE_CHyGekA9LVTj_FGA&oe=6495A34C&_nc_sid=b3163e",
        price: 1250,
        type: "Snacks",
        description: "",
      },
      {
        id: "17",
        name: "Muffin Chocolate con Chips de Chocolate",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/62609990_137505377442543_1774119189744403942_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7dD--aXmj2wAX_iV4K7&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjA3MzM1NTA5MzE5MzY4NzI5OQ%3D%3D.2-ccb7-5&oh=00_AfCXgBJsINJ8NVxv-5iwyTn2UwRDE_CHyGekA9LVTj_FGA&oe=6495A34C&_nc_sid=b3163e",
        price: 1250,
        type: "Snacks",
        description: "",
      },
      {
        id: "18",
        name: "Muffin Limón",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/62609990_137505377442543_1774119189744403942_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7dD--aXmj2wAX_iV4K7&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjA3MzM1NTA5MzE5MzY4NzI5OQ%3D%3D.2-ccb7-5&oh=00_AfCXgBJsINJ8NVxv-5iwyTn2UwRDE_CHyGekA9LVTj_FGA&oe=6495A34C&_nc_sid=b3163e",
        price: 1250,
        type: "Snacks",
        description: "",
      },
      {
        id: "19",
        name: "Muffin Arándanos",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/62609990_137505377442543_1774119189744403942_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7dD--aXmj2wAX_iV4K7&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjA3MzM1NTA5MzE5MzY4NzI5OQ%3D%3D.2-ccb7-5&oh=00_AfCXgBJsINJ8NVxv-5iwyTn2UwRDE_CHyGekA9LVTj_FGA&oe=6495A34C&_nc_sid=b3163e",
        price: 1250,
        type: "Snacks",
        description: "",
      },
      {
        id: "20",
        name: "Donut Relleno Nutella",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/47003026_126429181715725_2700604308120077076_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=QhoxzT7RZroAX_FYeXK&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTkzOTM1NzgyNjc3MDMzOTcyNw%3D%3D.2-ccb7-5&oh=00_AfCw9FIfMzWq5jTceUReOdl_ZCT1HyuOP1cMVKG99-5LWw&oe=64955C3A&_nc_sid=b3163e",
        price: 550,
        type: "Snacks",
        description: "",
      },

      {
        id: "21",
        name: "Croissant Jamón Serrano",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/66140257_345852522984622_7447268961684172588_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=QbPn2LOoMPgAX9s5Keh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjEwNjYzNjkzNDMxNDc1NDMyNg%3D%3D.2-ccb7-5&oh=00_AfBY92hvtU8MWF7tOmW4u1W-s1oNXkhI8T4eQ2RXaK5HBQ&oe=6495A16E&_nc_sid=b3163e",
        price: 3280,
        type: "Sandwiches",
        description: "",
      },
      {
        id: "22",
        name: "Baguette Queso, Tomate y Lechuga",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/30948595_121015585357899_899719850929160192_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Rb8-082kK5YAX_WvOIR&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTc2MDI5ODM1OTE3OTg0NjgxOQ%3D%3D.2-ccb7-5&oh=00_AfDQuL8_bJ8FUFvfNVmbSQ3GtBzLYfIV1Nc956fI0XnaPQ&oe=6495F585&_nc_sid=b3163e",
        price: 3280,
        type: "Sandwiches",
        description: "",
      },
      {
        id: "23",
        name: "Bagel Salmon",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/37826612_2113185802337011_7370662272235995136_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Fmtl2-dVxn4AX_xvTpb&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTg0MTg5NzI5OTk5NzExNTAxMA%3D%3D.2-ccb7-5&oh=00_AfClrFUu4pjWz7zyKzi9WjsYcLWmgNmgspDwqXuYeLYeVw&oe=6495B7A6&_nc_sid=b3163e",
        price: 3400,
        type: "Sandwiches",
        description: "",
      },
      {
        id: "24",
        name: "Gohan de Pollo Apanado",
        imageUrl:
          "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/56936293_2308603469361911_5131680113119445844_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=_WvOwG30G-QAX-BClgj&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjAyOTE2MDI0NjE4MjEwMjk2OQ%3D%3D.2-ccb7-5&oh=00_AfCAHvRnvoq9dp6WAOEbUHHGUGuecZFuUBKBCBBSQ0r18g&oe=6494B2DE&_nc_sid=b3163e",
        price: 4000,
        type: "Gohan",
        description: "",
      },
    ],
  },
];

export default locals;
