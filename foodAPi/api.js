const { v4: uuid } = require("uuid");

const 
  data = [
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    no_of_rating: "2k",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "02b7211af051f497dc4f1aa1f551305e",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "3a2ed5a05138fb8515048ca6a80a019c",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "3a6d2530c0ee11b22e60f660f6482fde",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "3d0066feb489529b6b11f2fbbe4ac442",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "3e8740afbcbdef8a85a4f75c0f892c82",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "4aa094716b875bbb7d85f46e9227b745",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "4c1deeb2b721195866081d3125d2c292",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "5b2b7de351ec839e97c5dfcc73ceed32",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "6b56d9668f782664f7d0c358678add42",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "9e678aa4e87851ec21ca38bc135ec4db",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "9fb8df622c0b26e310de2e13793de590",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "13cb77bde21712de052312b001696b95",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "34a5e24659d53616dbb06d3cff59f55c",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Mr. Gram & Mrs. Grills",
    rating: "4.1",
    no_of_rating: "1k",
    address: "North Indian, Biryani sector 72",
    price: "400 for two",
    image: "49c27c020e946f8f4fc13fdc9038525c",
    menu: [
      {
        name: "Bhatti Wala Chaap",
        price: "339",
        desc: "[Serves 1-2 Person] Soya chaap marinated in tangy secret chef's spices tossed with butter then grilled.",
        image: "69a061b7e0f951cef2b4947946f94ec6",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "98f592d53f1fbe3b0db3cc935355f09f",
      },

      {
        name: "Paneer Tikka",
        price: "349",
        desc: "[Serves 1-2 person] Chunks of paneer [8 Nos] marinated in hung curd and blend of home made spices, grilled in clay oven and served with Onion & Capsicum Shashlik .",
        image: "427b41084e344493a60c78f336a4cc74",
      },

      {
        name: "Veg Chaap",
        price: "349",
        desc: "[Serves 1-2 Person] Chunks of Soya chargrilled with creamy and mildly spices marination to add flavours. Served with rich milk based cream.",
        image: "0547edcd0018c7e182e0689821db5f97",
      },

      {
        name: "Tandoori Stuffed Aloo",
        price: "339",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "2349d4f6fabc766a4e5efc9cc48c0930",
      },

      {
        name: "Veg Seekh Kebab",
        price: "339",
        desc: "[Serves 1-2 person, 8 nos] Minced fresh chopped vegetable seasoned with indian aromatic spices and smoky grilled to perfect your starter plate.",
        image: "6126c9b45de2cb222405c1af8a321e74",
      },

      {
        name: "Tandoori Chicken",
        price: "349",
        desc: "A king of kebab, Chicken soaked for hrs in marinated paste with our own secret spices, grilled in charcoal tandoor and served in aluminum foil to keep as hot as possible. ",
        image: "06614d33a0adb57e8baf7c0f736937da",
      },

      {
        name: "Chicken Tikka",
        price: "419",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with hung curd and home made spices for hours and grilled to perfection in Tandoor, brushed with butter before serve.",
        image: "7100e3b63a4cba3ee6729c76616efbc0",
      },

      {
        name: "Chicken Malai Tikka",
        price: "439",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with cashew nut paste and selected spices for hours and grilled to perfection in Tandoor, served with fresh cream for heavenly taste. ",
        image: "7423c03fa94719826e270ef5e291e880",
      },

      {
        name: "Afghani Chicken",
        price: "379",
        desc: "A creamy Chicken experience, marinated with cashew nut paste and select spices for hours and grilled to perfection in Tandoor. Served with fresh cream for heavenly taste.",
        image: "9577ea1cb88f585264ecc4e7ace0bb77",
      },

      {
        name: "Bhatti Wala Chicken ",
        price: "379",
        desc: "Chicken with bone pieces marinated in tangy secret chef's spices tossed with egg and butter then grilled.",
        image: "286903d6fa0dfafc6241f4f7d57c8f43",
      },

      {
        name: "Tangdi Kebab",
        price: "459",
        desc: "[4 pcs, Serves 1-2 person] Chicken Drumstick marinated in indian spices and hung curd cooked in clay oven-Tandoor and served with Salad mix and Mint Chutney .Tangdi Kabab for any occasion",

        image: "326646d57beaaad4b0bf2a7c5ce62f29",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Dana Choga",
    rating: "4.4",
    address: "North Indian ,Mughlai Shahdara",
    price: "500 for two",
    time: "33",
    image: "a3qsihk7xnojbajimp4b",
    menu: [
      {
        name: "Paneer Tikka Shashlik (8 Pcs)",
        price: "345",
        desc: "Barbequed cottage cheese with capsicum, onion, tomatoes",
        image: "a4d0693afd597ecb385ef4a942c6f37f",
      },

      {
        name: "Dahi Kebab (8 Pcs)",
        price: "345",
        desc: "Shallow fried kebabs prepared with hung curd & cottage cheese ,fresh coriander and green chillies.",
        image: "a8cbbc91e1e01ce78d3bfd50f29f9f34",
      },

      {
        name: "Afghani Soya Chaap (8 Pcs)",
        price: "345",
        desc: "Healthy soya chunks marinated with cashewnuts and cheese paste roasted in tandoor.",
        image: "a77d755d52654a84a72b88e790c66491",
      },

      {
        name: "Murgh Tandoori",
        price: "375",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "a644e4f46cf520055985d21eb16b4d6d",
      },

      {
        name: "Chicken Tikka (8 Pcs)",
        price: "445",
        desc: "Roasted boneless chicken marinated with curd masala",
        image: "aaa8c1adc2002025b2dbc9217d34bdd4",
      },

      {
        name: "Murgh Malai Tikka (8 Pcs)",
        price: "485",
        desc: "Boneless roasted chicken marinated in mild cheesy cashew blend.",
        image: "ab664a851365040282ce595c8e6172e2",
      },

      {
        name: "Lasooni Murgh Tikka (8 Pcs)",
        price: "455",
        desc: "Boneless garlic flavoured clay oven roasted chicken tikka.",
        image: "abf875a929ce8c3db2478db9634af7eb",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "445",
        desc: "Minced chicken skewered & grilled.",
        image: "aec0gdrgbtrenpg1suis",
      },

      {
        name: "Dal Makhani",
        price: "355",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "af33b81798b11deba338e94b7585d348",
      },

      {
        name: "Paneer Butter Masala (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cubes cooked with tomato onion based butter masal ",
        image: "agav43hd0mnwe7h2gdne",
      },

      {
        name: "Paneer Makhani ( Shahi Paneer ) (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cooked in rich & creamy tomato gravy perfumed with kasoori methi .",
        image: "agphtkolnnu7hqf2yzh8",
      },

      {
        name: "Paneer Adrak Hara Dhaniya (8 Pcs)",
        price: "395",
        desc: "500 Gram, Serves 2) Cottage cheese cooked in a blend of silky cashew gravy and fresh tomato gravy tempered with chopped ginger and coriander.",
        image: "apw30ulybjurp7qs0ypn",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Chacha Soya Chaap",
    rating: "4",
    address: "Indian, Chinese Sector 72",
    price: "200 for two",
    time: "41",
    image: "as2drmwhlzjizcvzl7hq",
    menu: [
      {
        name: "Paneer Tikka",
        price:
          "Cottage cheese cubes, marinated with handpicked indian spices and cooked to perfection in a tandoor with onion and capsicum",
        image: "avu7eglicgrdizwkx7bp",
      },

      {
        name: " Tandoori Momos",
        price: "169",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "ayxu0xhe73fg3ic8cdut",
      },

      {
        name: "Honey Chilly Potato",
        price: "219",
        desc: "Fried potato strips tossed in a balanced honey & chilli extra garlic sauce garnished with sesame seeds.",
        image: "b3tytzd75ukqj7a3bcvb",
      },

      {
        name: "Paneer Malai Tikka",
        price: "255",
        desc: "A popular medium spiced tikka recipe made with marinated paneer cubes and veggies.",
        image: "b87e0a6371cbbbb104ea9b17ebc29177",
      },

      {
        name: "Chilly Paneer Dry.",
        price: "239",
        desc: "One can never go wrong with this choice. Fried paneer chunks wok-tossed with capsicum and onions in a spicy chilli sauce.",
        image: "b372f03cac692917d30d9d7b60f5ec8d",
      },

      {
        name: "Tandoori Malai Chaap",
        price:
          "Soya chaap, served with a delicious mixture of cream and spices. Cooked to perfection in tandoor with onion and capsicum",
        image: "b8345fb7339daec1b1dcd0d2d7d88773",
      },

      {
        name: "Afghani Chaap(stuff) Sabut",
        price:
          "Soy chaap is first marinated with kaju paste and indian herbs and spices and than cooled for 2 hours and than grilled over coal flames. A mouth watering snack.",
        image: "ba00f46f3aeff89c31f5734885477062",
      },

      {
        name: "Tandoori Chaap (stuff)sabut",
        price: "189",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ba51178hgftorhi0c0t2",
      },

      {
        name: "Chole With Rice",
        price: "240",
        desc: "Gravy bale choley with basmati rice  ",
        image: "baeed03b51fc5217595ef9d6ca6a471e",
      },

      {
        name: "Rajma With Rice",
        price: "240",
        desc: "Tari wale rajma with basmati rice.",
        image: "bc3fd56e76e0e4e3afc12f48c83c9ce1",
      },

      {
        name: "Spring Roll",
        price: "169",
        desc: "A deligt for delhi-ites golden fried rolls stuffed with garden fresh vegetable served with a hot garlic dip.",
        image: "bdyubumvwgsxsaav5q7y",
      },

      {
        name: "Tandoor Veg Momos",
        price: "149",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "blloturnznfyafpdchlq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "bzyhr51ni4z4e0xvjlhf",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "c7o9rcpmarvsxkscjkes",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "c36d164e3bc33e6fa5ecdf2fd08e2241",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "c2886f097cc7ecc85285901469b5d754",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ccpjitc9rrs0ua0hzjbx",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ccvffu5wlpgcznp09svs",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "cf791l0sgesh1w6olcae",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "cg5oty8tgmzoay9rf9qc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "cmg7fjmuacjzgyqwpdkq",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "czbzrp5lplpoz0doxmwg",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "d1f427e88dde5cc6fb1a6eae2f56a700",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "d3wcmgcwvsj96ij99nwq",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "dar86zdcbgdigdm3hjyy",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "dd7n9s9dgxgdytloquov",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "ddf44ea489d2ce063ef81d66b1d2484d",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "dskzz3ii662blux8rg6h",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "dve6gexmiyufsghcnuio",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ebbxrxyha1ih02xcpe3g",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ebotib44qvbjzfeqq8so",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ecbd9a23c0fdeb8efad7d5cb847ccb35",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "el8poekyopb3zig7zx98",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "equmjidyatcapyyckg5n",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "f1gwkwhb9zolarqvy5m1",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "f4zerwdvdhcxxpz1uc5o",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "fc25b56a5fea99c3390f386bd8a0d705",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "fd6ume8lf0giugb1y5qd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "fpaspk19tcubrfswxf20",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "fpwxddrxvvpl3tjew3vq",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "fw8lo5clwgoywor5xvsv",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "fwpiighxso7i6zpldaia",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "fybhamuxerws5pn6laf5",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "g1gfujzmul4bd1pvz9mk",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ggbirydgtwkqyuvvbtrn",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ghq89tc8led3i0nbsl7j",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "gitmubso856hha080ksa",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "gkzyzajiv0kymx4nfdim",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "gqrfllpzoo4qgtzydz0x",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "gy1m0pnrcmt63nbbqzbw",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "gzghdk01hao3cdqiiygw",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "h4q56agn8dzsjfzgf6zw",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "hagpdc56zjx2sw1jpqc1",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "htxhoew1qudshgn6hria",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "hxaezorcvnahplc2hv8u",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "i5sv59jc9f5rspk4irlq",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "i7pp6oonouk4buvjxoub",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "i8rx0bg4qztiyoliujz4",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ibmrvcacjsqoo1e654ce",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "if1l0ja5cgp2uullbqi1",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "igomp9xzaifri1f6l42v",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "ihgfvvc0byglegwfspdc",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "ijkrz2oxi4g5zcrubgor",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "ijwt9qfher5idkbhgahs",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "ilq6prwc4vy0vzd4vfsl",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "joesaiwxosorbrirdz7a",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "jx1npqlh93xyokrexx8o",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "k2qjcx4lfpykgx1zpsmk",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "katx8tdts4pgytuunvh2",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "kefrzjz4uojowp76spxy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "kjcvclhcpo3hhbx3oisr",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "kq7uazf1cbobkwrpjcf4",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "kulxssd5pbuxync3wybt",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "lczmmddifkbobtccrpue",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "lhtkqzcwmwhpey1yynkp",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "mconaut2hv6s4kgewnkz",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "me9i6xl5wavoi6bcsdhh",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "mnrvwwovgoqolkhg7vjz",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "mrnvoibp0kxkdfa8e50v",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "mu9kdhaby6aqo7c7lffh",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "mulkobv0fo9gdeenjeld",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "neeeg013tk02pk3ucaa8",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "njmsqatdpeeqdf3tr6cr",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "nmmvaslk9l2dhwhqgfoc",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "nn0jsvbzq4eflt9fiyg3",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "nocubl7vjanfmgtarvxk",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "nwga69cymaedrjuovel6",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "o3fwwp9bpdeajuu5a19r",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "oafygp02039mmijzwjdi",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "oghcfks09mggyzg5sxbd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "omwojvhscbplbe5yyudd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "oociiqapklgk4xak5xsl",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "opxki2mofi2ntqlha9cm",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "oslorkitwpuwgjhm1von",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "otduf1zz0oz1kvxioqy1",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "oxa4uqeqhmxjd7yegzzy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "p4vop43ga0tzufsvx0ie",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "p8rkdvs4azobh0vid1mc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "pbrybjyng9xozddnespp",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "pefg5x4ktwyhigj9kf4q",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "phbu6d1a5ib1mobhk0di",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "pipooiwlbkbmkc5y3ofe",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "pkpshsjwekn9loy6bavq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "pmby7ghk7ituecpxgwyv",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "prpiih8g6yfzvbrlhnrr",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "qdeeph1mohguh6m4kisa",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "qrmpetqijtgcqv7hnvl9",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "qsoonis3ixqfuveliye7",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "qvdwrzh19btg3rygjw8y",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "qztgko7zzlxf8d6hkpwr",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "rdxmzu14nvgnszcl3oou",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "reg6reqfdm41tktp5icm",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "rh6vhoain7yltoynbadw",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "rmers4eudpvvxstriqm3",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "rosvjkt8qnovv7u5ybul ",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "rp66rf9g7uyxtlho0f9j",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "rztfbjbw6jxkw7q76kwd",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "s7rcbkpkaxtio1lopkb1",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "sf8jv9i4fliv5yobau6y",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "srxbnzagw1epyfret5sq",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "sxhdwl8nf8p5egyu9qvj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "t9xysogxwhqtl1sedfju",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "tb4c1ieuam1v6fnj29gk",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "u4xwhkutur2wtkzphte7",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "u8k0cefnox0s4l6ixa6n",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "uajox9er5zqioraadzsg",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "udhcvud8uxfkuq8ud1lt",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "ueyguxgsrfeup0taxfyz",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ul6gtnnviatyghoqj5pz",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "uqsnhg8rah1arto98fku",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "urpuvkfpqausubgiz5pu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ux0yrybasbah57rf8rsi",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "v0yvnk9lj6nhvw1avgzh",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "vpeuantq2ee9mac3orct",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "wfc2zpehcatoichbnfqd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "wr4qw6q1htjzt2lxtsco",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "wrxmauxelivhrixqemni",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wuw0blf6sbuuxzjegpu1",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "wzk5zpirbiyv8qh932og",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "x9oz2gqcmhnjejpqwrmu",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "xc3vq7lpuclbtbyh0lgt",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "xebei0vysai9oluqhevx",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "xejdiy8atukuuaxrvtep",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "xfxuqmpdqw4h5p35ybon",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "xg6gy8o9np2n7vaucdvy",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "xloljk2b8hmbjo6npv7h",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "xvaw2uvpxfawsaiodb1p",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "xvnljpaextexlvy93sce",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "xxzh0lapcyvvufxpdsh8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "y1mwlal6ovgnliql4qt5",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ybbue57oq3nhfwm1yifo",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "yc31zlxaowyxlbgkadmy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "yljl7fk7bsrxybp6ifvm",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "yln3lw56sbsqvwuffv7b",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "yprxwlmvapkflwxwrhce",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "ysu16nken6anreeuew6g",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "yvgwgenmdupeagb5tn0q",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "zk259u3lq1nokmy2fego",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "zvbdc0i6ujtstqffbk9i",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "zwgnpsl9jvbeax8dgfhd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "zwslrje5oaa3x0z8fzec",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "rosvjkt8qnovv7u5ybul",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "sf8jv9i4fliv5yobau6y",
      },
    ],
  },

  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    no_of_rating: "2k",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "02b7211af051f497dc4f1aa1f551305e",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "3a2ed5a05138fb8515048ca6a80a019c",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "3a6d2530c0ee11b22e60f660f6482fde",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "3d0066feb489529b6b11f2fbbe4ac442",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "3e8740afbcbdef8a85a4f75c0f892c82",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "4aa094716b875bbb7d85f46e9227b745",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "4c1deeb2b721195866081d3125d2c292",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "5b2b7de351ec839e97c5dfcc73ceed32",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "6b56d9668f782664f7d0c358678add42",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "9e678aa4e87851ec21ca38bc135ec4db",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "9fb8df622c0b26e310de2e13793de590",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "13cb77bde21712de052312b001696b95",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "34a5e24659d53616dbb06d3cff59f55c",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Mr. Gram & Mrs. Grills",
    rating: "4.1",
    no_of_rating: "1k",
    address: "North Indian, Biryani sector 72",
    price: "400 for two",
    image: "49c27c020e946f8f4fc13fdc9038525c",
    menu: [
      {
        name: "Bhatti Wala Chaap",
        price: "339",
        desc: "[Serves 1-2 Person] Soya chaap marinated in tangy secret chef's spices tossed with butter then grilled.",
        image: "69a061b7e0f951cef2b4947946f94ec6",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "98f592d53f1fbe3b0db3cc935355f09f",
      },

      {
        name: "Paneer Tikka",
        price: "349",
        desc: "[Serves 1-2 person] Chunks of paneer [8 Nos] marinated in hung curd and blend of home made spices, grilled in clay oven and served with Onion & Capsicum Shashlik .",
        image: "427b41084e344493a60c78f336a4cc74",
      },

      {
        name: "Veg Chaap",
        price: "349",
        desc: "[Serves 1-2 Person] Chunks of Soya chargrilled with creamy and mildly spices marination to add flavours. Served with rich milk based cream.",
        image: "0547edcd0018c7e182e0689821db5f97",
      },

      {
        name: "Tandoori Stuffed Aloo",
        price: "339",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "2349d4f6fabc766a4e5efc9cc48c0930",
      },

      {
        name: "Veg Seekh Kebab",
        price: "339",
        desc: "[Serves 1-2 person, 8 nos] Minced fresh chopped vegetable seasoned with indian aromatic spices and smoky grilled to perfect your starter plate.",
        image: "6126c9b45de2cb222405c1af8a321e74",
      },

      {
        name: "Tandoori Chicken",
        price: "349",
        desc: "A king of kebab, Chicken soaked for hrs in marinated paste with our own secret spices, grilled in charcoal tandoor and served in aluminum foil to keep as hot as possible. ",
        image: "06614d33a0adb57e8baf7c0f736937da",
      },

      {
        name: "Chicken Tikka",
        price: "419",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with hung curd and home made spices for hours and grilled to perfection in Tandoor, brushed with butter before serve.",
        image: "7100e3b63a4cba3ee6729c76616efbc0",
      },

      {
        name: "Chicken Malai Tikka",
        price: "439",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with cashew nut paste and selected spices for hours and grilled to perfection in Tandoor, served with fresh cream for heavenly taste. ",
        image: "7423c03fa94719826e270ef5e291e880",
      },

      {
        name: "Afghani Chicken",
        price: "379",
        desc: "A creamy Chicken experience, marinated with cashew nut paste and select spices for hours and grilled to perfection in Tandoor. Served with fresh cream for heavenly taste.",
        image: "9577ea1cb88f585264ecc4e7ace0bb77",
      },

      {
        name: "Bhatti Wala Chicken ",
        price: "379",
        desc: "Chicken with bone pieces marinated in tangy secret chef's spices tossed with egg and butter then grilled.",
        image: "286903d6fa0dfafc6241f4f7d57c8f43",
      },

      {
        name: "Tangdi Kebab",
        price: "459",
        desc: "[4 pcs, Serves 1-2 person] Chicken Drumstick marinated in indian spices and hung curd cooked in clay oven-Tandoor and served with Salad mix and Mint Chutney .Tangdi Kabab for any occasion",

        image: "326646d57beaaad4b0bf2a7c5ce62f29",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Dana Choga",
    rating: "4.4",
    address: "North Indian ,Mughlai Shahdara",
    price: "500 for two",
    time: "33",
    image: "a3qsihk7xnojbajimp4b",
    menu: [
      {
        name: "Paneer Tikka Shashlik (8 Pcs)",
        price: "345",
        desc: "Barbequed cottage cheese with capsicum, onion, tomatoes",
        image: "a4d0693afd597ecb385ef4a942c6f37f",
      },

      {
        name: "Dahi Kebab (8 Pcs)",
        price: "345",
        desc: "Shallow fried kebabs prepared with hung curd & cottage cheese ,fresh coriander and green chillies.",
        image: "a8cbbc91e1e01ce78d3bfd50f29f9f34",
      },

      {
        name: "Afghani Soya Chaap (8 Pcs)",
        price: "345",
        desc: "Healthy soya chunks marinated with cashewnuts and cheese paste roasted in tandoor.",
        image: "a77d755d52654a84a72b88e790c66491",
      },

      {
        name: "Murgh Tandoori",
        price: "375",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "a644e4f46cf520055985d21eb16b4d6d",
      },

      {
        name: "Chicken Tikka (8 Pcs)",
        price: "445",
        desc: "Roasted boneless chicken marinated with curd masala",
        image: "aaa8c1adc2002025b2dbc9217d34bdd4",
      },

      {
        name: "Murgh Malai Tikka (8 Pcs)",
        price: "485",
        desc: "Boneless roasted chicken marinated in mild cheesy cashew blend.",
        image: "ab664a851365040282ce595c8e6172e2",
      },

      {
        name: "Lasooni Murgh Tikka (8 Pcs)",
        price: "455",
        desc: "Boneless garlic flavoured clay oven roasted chicken tikka.",
        image: "abf875a929ce8c3db2478db9634af7eb",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "445",
        desc: "Minced chicken skewered & grilled.",
        image: "aec0gdrgbtrenpg1suis",
      },

      {
        name: "Dal Makhani",
        price: "355",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "af33b81798b11deba338e94b7585d348",
      },

      {
        name: "Paneer Butter Masala (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cubes cooked with tomato onion based butter masal ",
        image: "agav43hd0mnwe7h2gdne",
      },

      {
        name: "Paneer Makhani ( Shahi Paneer ) (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cooked in rich & creamy tomato gravy perfumed with kasoori methi .",
        image: "agphtkolnnu7hqf2yzh8",
      },

      {
        name: "Paneer Adrak Hara Dhaniya (8 Pcs)",
        price: "395",
        desc: "500 Gram, Serves 2) Cottage cheese cooked in a blend of silky cashew gravy and fresh tomato gravy tempered with chopped ginger and coriander.",
        image: "apw30ulybjurp7qs0ypn",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Chacha Soya Chaap",
    rating: "4",
    address: "Indian, Chinese Sector 72",
    price: "200 for two",
    time: "41",
    image: "as2drmwhlzjizcvzl7hq",
    menu: [
      {
        name: "Paneer Tikka",
        price:
          "Cottage cheese cubes, marinated with handpicked indian spices and cooked to perfection in a tandoor with onion and capsicum",
        image: "avu7eglicgrdizwkx7bp",
      },

      {
        name: " Tandoori Momos",
        price: "169",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "ayxu0xhe73fg3ic8cdut",
      },

      {
        name: "Honey Chilly Potato",
        price: "219",
        desc: "Fried potato strips tossed in a balanced honey & chilli extra garlic sauce garnished with sesame seeds.",
        image: "b3tytzd75ukqj7a3bcvb",
      },

      {
        name: "Paneer Malai Tikka",
        price: "255",
        desc: "A popular medium spiced tikka recipe made with marinated paneer cubes and veggies.",
        image: "b87e0a6371cbbbb104ea9b17ebc29177",
      },

      {
        name: "Chilly Paneer Dry.",
        price: "239",
        desc: "One can never go wrong with this choice. Fried paneer chunks wok-tossed with capsicum and onions in a spicy chilli sauce.",
        image: "b372f03cac692917d30d9d7b60f5ec8d",
      },

      {
        name: "Tandoori Malai Chaap",
        price:
          "Soya chaap, served with a delicious mixture of cream and spices. Cooked to perfection in tandoor with onion and capsicum",
        image: "b8345fb7339daec1b1dcd0d2d7d88773",
      },

      {
        name: "Afghani Chaap(stuff) Sabut",
        price:
          "Soy chaap is first marinated with kaju paste and indian herbs and spices and than cooled for 2 hours and than grilled over coal flames. A mouth watering snack.",
        image: "ba00f46f3aeff89c31f5734885477062",
      },

      {
        name: "Tandoori Chaap (stuff)sabut",
        price: "189",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ba51178hgftorhi0c0t2",
      },

      {
        name: "Chole With Rice",
        price: "240",
        desc: "Gravy bale choley with basmati rice  ",
        image: "baeed03b51fc5217595ef9d6ca6a471e",
      },

      {
        name: "Rajma With Rice",
        price: "240",
        desc: "Tari wale rajma with basmati rice.",
        image: "bc3fd56e76e0e4e3afc12f48c83c9ce1",
      },

      {
        name: "Spring Roll",
        price: "169",
        desc: "A deligt for delhi-ites golden fried rolls stuffed with garden fresh vegetable served with a hot garlic dip.",
        image: "bdyubumvwgsxsaav5q7y",
      },

      {
        name: "Tandoor Veg Momos",
        price: "149",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "blloturnznfyafpdchlq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "bzyhr51ni4z4e0xvjlhf",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "c7o9rcpmarvsxkscjkes",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "c36d164e3bc33e6fa5ecdf2fd08e2241",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "c2886f097cc7ecc85285901469b5d754",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ccpjitc9rrs0ua0hzjbx",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ccvffu5wlpgcznp09svs",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "cf791l0sgesh1w6olcae",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "cg5oty8tgmzoay9rf9qc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "cmg7fjmuacjzgyqwpdkq",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "czbzrp5lplpoz0doxmwg",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "d1f427e88dde5cc6fb1a6eae2f56a700",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "d3wcmgcwvsj96ij99nwq",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "dar86zdcbgdigdm3hjyy",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "dd7n9s9dgxgdytloquov",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "ddf44ea489d2ce063ef81d66b1d2484d",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "dskzz3ii662blux8rg6h",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "dve6gexmiyufsghcnuio",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ebbxrxyha1ih02xcpe3g",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ebotib44qvbjzfeqq8so",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ecbd9a23c0fdeb8efad7d5cb847ccb35",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "el8poekyopb3zig7zx98",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "equmjidyatcapyyckg5n",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "f1gwkwhb9zolarqvy5m1",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "f4zerwdvdhcxxpz1uc5o",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "fc25b56a5fea99c3390f386bd8a0d705",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "fd6ume8lf0giugb1y5qd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "fpaspk19tcubrfswxf20",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "fpwxddrxvvpl3tjew3vq",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "fw8lo5clwgoywor5xvsv",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "fwpiighxso7i6zpldaia",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "fybhamuxerws5pn6laf5",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "g1gfujzmul4bd1pvz9mk",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ggbirydgtwkqyuvvbtrn",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ghq89tc8led3i0nbsl7j",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "gitmubso856hha080ksa",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "gkzyzajiv0kymx4nfdim",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "gqrfllpzoo4qgtzydz0x",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "gy1m0pnrcmt63nbbqzbw",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "gzghdk01hao3cdqiiygw",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "h4q56agn8dzsjfzgf6zw",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "hagpdc56zjx2sw1jpqc1",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "htxhoew1qudshgn6hria",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "hxaezorcvnahplc2hv8u",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "i5sv59jc9f5rspk4irlq",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "i7pp6oonouk4buvjxoub",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "i8rx0bg4qztiyoliujz4",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ibmrvcacjsqoo1e654ce",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "if1l0ja5cgp2uullbqi1",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "igomp9xzaifri1f6l42v",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "ihgfvvc0byglegwfspdc",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "ijkrz2oxi4g5zcrubgor",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "ijwt9qfher5idkbhgahs",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "ilq6prwc4vy0vzd4vfsl",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "joesaiwxosorbrirdz7a",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "jx1npqlh93xyokrexx8o",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "k2qjcx4lfpykgx1zpsmk",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "katx8tdts4pgytuunvh2",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "kefrzjz4uojowp76spxy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "kjcvclhcpo3hhbx3oisr",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "kq7uazf1cbobkwrpjcf4",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "kulxssd5pbuxync3wybt",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "lczmmddifkbobtccrpue",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "lhtkqzcwmwhpey1yynkp",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "mconaut2hv6s4kgewnkz",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "me9i6xl5wavoi6bcsdhh",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "mnrvwwovgoqolkhg7vjz",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "mrnvoibp0kxkdfa8e50v",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "mu9kdhaby6aqo7c7lffh",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "mulkobv0fo9gdeenjeld",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "neeeg013tk02pk3ucaa8",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "njmsqatdpeeqdf3tr6cr",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "nmmvaslk9l2dhwhqgfoc",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "nn0jsvbzq4eflt9fiyg3",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "nocubl7vjanfmgtarvxk",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "nwga69cymaedrjuovel6",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "o3fwwp9bpdeajuu5a19r",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "oafygp02039mmijzwjdi",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "oghcfks09mggyzg5sxbd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "omwojvhscbplbe5yyudd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "oociiqapklgk4xak5xsl",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "opxki2mofi2ntqlha9cm",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "oslorkitwpuwgjhm1von",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "otduf1zz0oz1kvxioqy1",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "oxa4uqeqhmxjd7yegzzy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "p4vop43ga0tzufsvx0ie",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "p8rkdvs4azobh0vid1mc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "pbrybjyng9xozddnespp",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "pefg5x4ktwyhigj9kf4q",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "phbu6d1a5ib1mobhk0di",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "pipooiwlbkbmkc5y3ofe",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "pkpshsjwekn9loy6bavq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "pmby7ghk7ituecpxgwyv",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "prpiih8g6yfzvbrlhnrr",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "qdeeph1mohguh6m4kisa",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "qrmpetqijtgcqv7hnvl9",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "qsoonis3ixqfuveliye7",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "qvdwrzh19btg3rygjw8y",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "qztgko7zzlxf8d6hkpwr",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "rdxmzu14nvgnszcl3oou",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "reg6reqfdm41tktp5icm",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "rh6vhoain7yltoynbadw",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "rmers4eudpvvxstriqm3",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "rosvjkt8qnovv7u5ybul ",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "rp66rf9g7uyxtlho0f9j",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "rztfbjbw6jxkw7q76kwd",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "s7rcbkpkaxtio1lopkb1",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "sf8jv9i4fliv5yobau6y",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "srxbnzagw1epyfret5sq",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "sxhdwl8nf8p5egyu9qvj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "t9xysogxwhqtl1sedfju",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "tb4c1ieuam1v6fnj29gk",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "u4xwhkutur2wtkzphte7",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "u8k0cefnox0s4l6ixa6n",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "uajox9er5zqioraadzsg",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "udhcvud8uxfkuq8ud1lt",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "ueyguxgsrfeup0taxfyz",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ul6gtnnviatyghoqj5pz",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "uqsnhg8rah1arto98fku",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "urpuvkfpqausubgiz5pu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ux0yrybasbah57rf8rsi",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "v0yvnk9lj6nhvw1avgzh",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "vpeuantq2ee9mac3orct",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "wfc2zpehcatoichbnfqd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "wr4qw6q1htjzt2lxtsco",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "wrxmauxelivhrixqemni",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wuw0blf6sbuuxzjegpu1",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "wzk5zpirbiyv8qh932og",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "x9oz2gqcmhnjejpqwrmu",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "xc3vq7lpuclbtbyh0lgt",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "xebei0vysai9oluqhevx",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "xejdiy8atukuuaxrvtep",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "xfxuqmpdqw4h5p35ybon",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "xg6gy8o9np2n7vaucdvy",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "xloljk2b8hmbjo6npv7h",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "xvaw2uvpxfawsaiodb1p",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "xvnljpaextexlvy93sce",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "xxzh0lapcyvvufxpdsh8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "y1mwlal6ovgnliql4qt5",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ybbue57oq3nhfwm1yifo",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "yc31zlxaowyxlbgkadmy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "yljl7fk7bsrxybp6ifvm",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "yln3lw56sbsqvwuffv7b",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "yprxwlmvapkflwxwrhce",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "ysu16nken6anreeuew6g",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "yvgwgenmdupeagb5tn0q",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "zk259u3lq1nokmy2fego",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "zvbdc0i6ujtstqffbk9i",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "zwgnpsl9jvbeax8dgfhd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "zwslrje5oaa3x0z8fzec",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "rosvjkt8qnovv7u5ybul",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "sf8jv9i4fliv5yobau6y",
      },
    ],
  },
  
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    no_of_rating: "2k",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "02b7211af051f497dc4f1aa1f551305e",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "3a2ed5a05138fb8515048ca6a80a019c",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "3a6d2530c0ee11b22e60f660f6482fde",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "3d0066feb489529b6b11f2fbbe4ac442",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "3e8740afbcbdef8a85a4f75c0f892c82",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "4aa094716b875bbb7d85f46e9227b745",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "4c1deeb2b721195866081d3125d2c292",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "5b2b7de351ec839e97c5dfcc73ceed32",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "6b56d9668f782664f7d0c358678add42",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "9e678aa4e87851ec21ca38bc135ec4db",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "9fb8df622c0b26e310de2e13793de590",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "13cb77bde21712de052312b001696b95",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "34a5e24659d53616dbb06d3cff59f55c",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Mr. Gram & Mrs. Grills",
    rating: "4.1",
    no_of_rating: "1k",
    address: "North Indian, Biryani sector 72",
    price: "400 for two",
    image: "49c27c020e946f8f4fc13fdc9038525c",
    menu: [
      {
        name: "Bhatti Wala Chaap",
        price: "339",
        desc: "[Serves 1-2 Person] Soya chaap marinated in tangy secret chef's spices tossed with butter then grilled.",
        image: "69a061b7e0f951cef2b4947946f94ec6",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "98f592d53f1fbe3b0db3cc935355f09f",
      },

      {
        name: "Paneer Tikka",
        price: "349",
        desc: "[Serves 1-2 person] Chunks of paneer [8 Nos] marinated in hung curd and blend of home made spices, grilled in clay oven and served with Onion & Capsicum Shashlik .",
        image: "427b41084e344493a60c78f336a4cc74",
      },

      {
        name: "Veg Chaap",
        price: "349",
        desc: "[Serves 1-2 Person] Chunks of Soya chargrilled with creamy and mildly spices marination to add flavours. Served with rich milk based cream.",
        image: "0547edcd0018c7e182e0689821db5f97",
      },

      {
        name: "Tandoori Stuffed Aloo",
        price: "339",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "2349d4f6fabc766a4e5efc9cc48c0930",
      },

      {
        name: "Veg Seekh Kebab",
        price: "339",
        desc: "[Serves 1-2 person, 8 nos] Minced fresh chopped vegetable seasoned with indian aromatic spices and smoky grilled to perfect your starter plate.",
        image: "6126c9b45de2cb222405c1af8a321e74",
      },

      {
        name: "Tandoori Chicken",
        price: "349",
        desc: "A king of kebab, Chicken soaked for hrs in marinated paste with our own secret spices, grilled in charcoal tandoor and served in aluminum foil to keep as hot as possible. ",
        image: "06614d33a0adb57e8baf7c0f736937da",
      },

      {
        name: "Chicken Tikka",
        price: "419",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with hung curd and home made spices for hours and grilled to perfection in Tandoor, brushed with butter before serve.",
        image: "7100e3b63a4cba3ee6729c76616efbc0",
      },

      {
        name: "Chicken Malai Tikka",
        price: "439",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with cashew nut paste and selected spices for hours and grilled to perfection in Tandoor, served with fresh cream for heavenly taste. ",
        image: "7423c03fa94719826e270ef5e291e880",
      },

      {
        name: "Afghani Chicken",
        price: "379",
        desc: "A creamy Chicken experience, marinated with cashew nut paste and select spices for hours and grilled to perfection in Tandoor. Served with fresh cream for heavenly taste.",
        image: "9577ea1cb88f585264ecc4e7ace0bb77",
      },

      {
        name: "Bhatti Wala Chicken ",
        price: "379",
        desc: "Chicken with bone pieces marinated in tangy secret chef's spices tossed with egg and butter then grilled.",
        image: "286903d6fa0dfafc6241f4f7d57c8f43",
      },

      {
        name: "Tangdi Kebab",
        price: "459",
        desc: "[4 pcs, Serves 1-2 person] Chicken Drumstick marinated in indian spices and hung curd cooked in clay oven-Tandoor and served with Salad mix and Mint Chutney .Tangdi Kabab for any occasion",

        image: "326646d57beaaad4b0bf2a7c5ce62f29",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Dana Choga",
    rating: "4.4",
    address: "North Indian ,Mughlai Shahdara",
    price: "500 for two",
    time: "33",
    image: "a3qsihk7xnojbajimp4b",
    menu: [
      {
        name: "Paneer Tikka Shashlik (8 Pcs)",
        price: "345",
        desc: "Barbequed cottage cheese with capsicum, onion, tomatoes",
        image: "a4d0693afd597ecb385ef4a942c6f37f",
      },

      {
        name: "Dahi Kebab (8 Pcs)",
        price: "345",
        desc: "Shallow fried kebabs prepared with hung curd & cottage cheese ,fresh coriander and green chillies.",
        image: "a8cbbc91e1e01ce78d3bfd50f29f9f34",
      },

      {
        name: "Afghani Soya Chaap (8 Pcs)",
        price: "345",
        desc: "Healthy soya chunks marinated with cashewnuts and cheese paste roasted in tandoor.",
        image: "a77d755d52654a84a72b88e790c66491",
      },

      {
        name: "Murgh Tandoori",
        price: "375",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "a644e4f46cf520055985d21eb16b4d6d",
      },

      {
        name: "Chicken Tikka (8 Pcs)",
        price: "445",
        desc: "Roasted boneless chicken marinated with curd masala",
        image: "aaa8c1adc2002025b2dbc9217d34bdd4",
      },

      {
        name: "Murgh Malai Tikka (8 Pcs)",
        price: "485",
        desc: "Boneless roasted chicken marinated in mild cheesy cashew blend.",
        image: "ab664a851365040282ce595c8e6172e2",
      },

      {
        name: "Lasooni Murgh Tikka (8 Pcs)",
        price: "455",
        desc: "Boneless garlic flavoured clay oven roasted chicken tikka.",
        image: "abf875a929ce8c3db2478db9634af7eb",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "445",
        desc: "Minced chicken skewered & grilled.",
        image: "aec0gdrgbtrenpg1suis",
      },

      {
        name: "Dal Makhani",
        price: "355",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "af33b81798b11deba338e94b7585d348",
      },

      {
        name: "Paneer Butter Masala (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cubes cooked with tomato onion based butter masal ",
        image: "agav43hd0mnwe7h2gdne",
      },

      {
        name: "Paneer Makhani ( Shahi Paneer ) (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cooked in rich & creamy tomato gravy perfumed with kasoori methi .",
        image: "agphtkolnnu7hqf2yzh8",
      },

      {
        name: "Paneer Adrak Hara Dhaniya (8 Pcs)",
        price: "395",
        desc: "500 Gram, Serves 2) Cottage cheese cooked in a blend of silky cashew gravy and fresh tomato gravy tempered with chopped ginger and coriander.",
        image: "apw30ulybjurp7qs0ypn",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Chacha Soya Chaap",
    rating: "4",
    address: "Indian, Chinese Sector 72",
    price: "200 for two",
    time: "41",
    image: "as2drmwhlzjizcvzl7hq",
    menu: [
      {
        name: "Paneer Tikka",
        price:
          "Cottage cheese cubes, marinated with handpicked indian spices and cooked to perfection in a tandoor with onion and capsicum",
        image: "avu7eglicgrdizwkx7bp",
      },

      {
        name: " Tandoori Momos",
        price: "169",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "ayxu0xhe73fg3ic8cdut",
      },

      {
        name: "Honey Chilly Potato",
        price: "219",
        desc: "Fried potato strips tossed in a balanced honey & chilli extra garlic sauce garnished with sesame seeds.",
        image: "b3tytzd75ukqj7a3bcvb",
      },

      {
        name: "Paneer Malai Tikka",
        price: "255",
        desc: "A popular medium spiced tikka recipe made with marinated paneer cubes and veggies.",
        image: "b87e0a6371cbbbb104ea9b17ebc29177",
      },

      {
        name: "Chilly Paneer Dry.",
        price: "239",
        desc: "One can never go wrong with this choice. Fried paneer chunks wok-tossed with capsicum and onions in a spicy chilli sauce.",
        image: "b372f03cac692917d30d9d7b60f5ec8d",
      },

      {
        name: "Tandoori Malai Chaap",
        price:
          "Soya chaap, served with a delicious mixture of cream and spices. Cooked to perfection in tandoor with onion and capsicum",
        image: "b8345fb7339daec1b1dcd0d2d7d88773",
      },

      {
        name: "Afghani Chaap(stuff) Sabut",
        price:
          "Soy chaap is first marinated with kaju paste and indian herbs and spices and than cooled for 2 hours and than grilled over coal flames. A mouth watering snack.",
        image: "ba00f46f3aeff89c31f5734885477062",
      },

      {
        name: "Tandoori Chaap (stuff)sabut",
        price: "189",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ba51178hgftorhi0c0t2",
      },

      {
        name: "Chole With Rice",
        price: "240",
        desc: "Gravy bale choley with basmati rice  ",
        image: "baeed03b51fc5217595ef9d6ca6a471e",
      },

      {
        name: "Rajma With Rice",
        price: "240",
        desc: "Tari wale rajma with basmati rice.",
        image: "bc3fd56e76e0e4e3afc12f48c83c9ce1",
      },

      {
        name: "Spring Roll",
        price: "169",
        desc: "A deligt for delhi-ites golden fried rolls stuffed with garden fresh vegetable served with a hot garlic dip.",
        image: "bdyubumvwgsxsaav5q7y",
      },

      {
        name: "Tandoor Veg Momos",
        price: "149",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "blloturnznfyafpdchlq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "bzyhr51ni4z4e0xvjlhf",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "c7o9rcpmarvsxkscjkes",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "c36d164e3bc33e6fa5ecdf2fd08e2241",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "c2886f097cc7ecc85285901469b5d754",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ccpjitc9rrs0ua0hzjbx",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ccvffu5wlpgcznp09svs",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "cf791l0sgesh1w6olcae",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "cg5oty8tgmzoay9rf9qc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "cmg7fjmuacjzgyqwpdkq",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "czbzrp5lplpoz0doxmwg",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "d1f427e88dde5cc6fb1a6eae2f56a700",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "d3wcmgcwvsj96ij99nwq",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "dar86zdcbgdigdm3hjyy",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "dd7n9s9dgxgdytloquov",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "ddf44ea489d2ce063ef81d66b1d2484d",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "dskzz3ii662blux8rg6h",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "dve6gexmiyufsghcnuio",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ebbxrxyha1ih02xcpe3g",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ebotib44qvbjzfeqq8so",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ecbd9a23c0fdeb8efad7d5cb847ccb35",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "el8poekyopb3zig7zx98",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "equmjidyatcapyyckg5n",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "f1gwkwhb9zolarqvy5m1",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "f4zerwdvdhcxxpz1uc5o",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "fc25b56a5fea99c3390f386bd8a0d705",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "fd6ume8lf0giugb1y5qd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "fpaspk19tcubrfswxf20",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "fpwxddrxvvpl3tjew3vq",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "fw8lo5clwgoywor5xvsv",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "fwpiighxso7i6zpldaia",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "fybhamuxerws5pn6laf5",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "g1gfujzmul4bd1pvz9mk",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ggbirydgtwkqyuvvbtrn",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ghq89tc8led3i0nbsl7j",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "gitmubso856hha080ksa",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "gkzyzajiv0kymx4nfdim",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "gqrfllpzoo4qgtzydz0x",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "gy1m0pnrcmt63nbbqzbw",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "gzghdk01hao3cdqiiygw",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "h4q56agn8dzsjfzgf6zw",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "hagpdc56zjx2sw1jpqc1",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "htxhoew1qudshgn6hria",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "hxaezorcvnahplc2hv8u",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "i5sv59jc9f5rspk4irlq",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "i7pp6oonouk4buvjxoub",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "i8rx0bg4qztiyoliujz4",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ibmrvcacjsqoo1e654ce",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "if1l0ja5cgp2uullbqi1",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "igomp9xzaifri1f6l42v",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "ihgfvvc0byglegwfspdc",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "ijkrz2oxi4g5zcrubgor",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "ijwt9qfher5idkbhgahs",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "ilq6prwc4vy0vzd4vfsl",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "joesaiwxosorbrirdz7a",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "jx1npqlh93xyokrexx8o",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "k2qjcx4lfpykgx1zpsmk",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "katx8tdts4pgytuunvh2",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "kefrzjz4uojowp76spxy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "kjcvclhcpo3hhbx3oisr",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "kq7uazf1cbobkwrpjcf4",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "kulxssd5pbuxync3wybt",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "lczmmddifkbobtccrpue",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "lhtkqzcwmwhpey1yynkp",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "mconaut2hv6s4kgewnkz",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "me9i6xl5wavoi6bcsdhh",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "mnrvwwovgoqolkhg7vjz",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "mrnvoibp0kxkdfa8e50v",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "mu9kdhaby6aqo7c7lffh",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "mulkobv0fo9gdeenjeld",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "neeeg013tk02pk3ucaa8",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "njmsqatdpeeqdf3tr6cr",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "nmmvaslk9l2dhwhqgfoc",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "nn0jsvbzq4eflt9fiyg3",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "nocubl7vjanfmgtarvxk",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "nwga69cymaedrjuovel6",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "o3fwwp9bpdeajuu5a19r",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "oafygp02039mmijzwjdi",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "oghcfks09mggyzg5sxbd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "omwojvhscbplbe5yyudd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "oociiqapklgk4xak5xsl",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "opxki2mofi2ntqlha9cm",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "oslorkitwpuwgjhm1von",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "otduf1zz0oz1kvxioqy1",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "oxa4uqeqhmxjd7yegzzy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "p4vop43ga0tzufsvx0ie",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "p8rkdvs4azobh0vid1mc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "pbrybjyng9xozddnespp",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "pefg5x4ktwyhigj9kf4q",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "phbu6d1a5ib1mobhk0di",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "pipooiwlbkbmkc5y3ofe",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "pkpshsjwekn9loy6bavq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "pmby7ghk7ituecpxgwyv",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "prpiih8g6yfzvbrlhnrr",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "qdeeph1mohguh6m4kisa",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "qrmpetqijtgcqv7hnvl9",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "qsoonis3ixqfuveliye7",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "qvdwrzh19btg3rygjw8y",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "qztgko7zzlxf8d6hkpwr",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "dxmzu14nvgnszcl3oou",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "reg6reqfdm41tktp5icm",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "rh6vhoain7yltoynbadw",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "rmers4eudpvvxstriqm3",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "rosvjkt8qnovv7u5ybul ",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "rp66rf9g7uyxtlho0f9j",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "rztfbjbw6jxkw7q76kwd",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "s7rcbkpkaxtio1lopkb1",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "sf8jv9i4fliv5yobau6y",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "srxbnzagw1epyfret5sq",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "sxhdwl8nf8p5egyu9qvj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "t9xysogxwhqtl1sedfju",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "tb4c1ieuam1v6fnj29gk",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "u4xwhkutur2wtkzphte7",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "u8k0cefnox0s4l6ixa6n",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "uajox9er5zqioraadzsg",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "udhcvud8uxfkuq8ud1lt",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "ueyguxgsrfeup0taxfyz",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ul6gtnnviatyghoqj5pz",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "uqsnhg8rah1arto98fku",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "urpuvkfpqausubgiz5pu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ux0yrybasbah57rf8rsi",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "v0yvnk9lj6nhvw1avgzh",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "vpeuantq2ee9mac3orct",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "wfc2zpehcatoichbnfqd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "wr4qw6q1htjzt2lxtsco",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "wrxmauxelivhrixqemni",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wuw0blf6sbuuxzjegpu1",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "wzk5zpirbiyv8qh932og",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "x9oz2gqcmhnjejpqwrmu",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "xc3vq7lpuclbtbyh0lgt",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "xebei0vysai9oluqhevx",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "xejdiy8atukuuaxrvtep",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "xfxuqmpdqw4h5p35ybon",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "xg6gy8o9np2n7vaucdvy",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "xloljk2b8hmbjo6npv7h",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "xvaw2uvpxfawsaiodb1p",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "xvnljpaextexlvy93sce",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "xxzh0lapcyvvufxpdsh8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "y1mwlal6ovgnliql4qt5",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ybbue57oq3nhfwm1yifo",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "yc31zlxaowyxlbgkadmy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "yljl7fk7bsrxybp6ifvm",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "yln3lw56sbsqvwuffv7b",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "yprxwlmvapkflwxwrhce",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "ysu16nken6anreeuew6g",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "yvgwgenmdupeagb5tn0q",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "zk259u3lq1nokmy2fego",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "zvbdc0i6ujtstqffbk9i",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "zwgnpsl9jvbeax8dgfhd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "zwslrje5oaa3x0z8fzec",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "rosvjkt8qnovv7u5ybul",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "sf8jv9i4fliv5yobau6y",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    no_of_rating: "2k",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "02b7211af051f497dc4f1aa1f551305e",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "3a2ed5a05138fb8515048ca6a80a019c",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "3a6d2530c0ee11b22e60f660f6482fde",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "3d0066feb489529b6b11f2fbbe4ac442",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "3e8740afbcbdef8a85a4f75c0f892c82",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "4aa094716b875bbb7d85f46e9227b745",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "4c1deeb2b721195866081d3125d2c292",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "5b2b7de351ec839e97c5dfcc73ceed32",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "6b56d9668f782664f7d0c358678add42",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "9e678aa4e87851ec21ca38bc135ec4db",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "9fb8df622c0b26e310de2e13793de590",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "13cb77bde21712de052312b001696b95",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "34a5e24659d53616dbb06d3cff59f55c",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Mr. Gram & Mrs. Grills",
    rating: "4.1",
    no_of_rating: "1k",
    address: "North Indian, Biryani sector 72",
    price: "400 for two",
    image: "49c27c020e946f8f4fc13fdc9038525c",
    menu: [
      {
        name: "Bhatti Wala Chaap",
        price: "339",
        desc: "[Serves 1-2 Person] Soya chaap marinated in tangy secret chef's spices tossed with butter then grilled.",
        image: "69a061b7e0f951cef2b4947946f94ec6",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "98f592d53f1fbe3b0db3cc935355f09f",
      },

      {
        name: "Paneer Tikka",
        price: "349",
        desc: "[Serves 1-2 person] Chunks of paneer [8 Nos] marinated in hung curd and blend of home made spices, grilled in clay oven and served with Onion & Capsicum Shashlik .",
        image: "427b41084e344493a60c78f336a4cc74",
      },

      {
        name: "Veg Chaap",
        price: "349",
        desc: "[Serves 1-2 Person] Chunks of Soya chargrilled with creamy and mildly spices marination to add flavours. Served with rich milk based cream.",
        image: "0547edcd0018c7e182e0689821db5f97",
      },

      {
        name: "Tandoori Stuffed Aloo",
        price: "339",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "2349d4f6fabc766a4e5efc9cc48c0930",
      },

      {
        name: "Veg Seekh Kebab",
        price: "339",
        desc: "[Serves 1-2 person, 8 nos] Minced fresh chopped vegetable seasoned with indian aromatic spices and smoky grilled to perfect your starter plate.",
        image: "6126c9b45de2cb222405c1af8a321e74",
      },

      {
        name: "Tandoori Chicken",
        price: "349",
        desc: "A king of kebab, Chicken soaked for hrs in marinated paste with our own secret spices, grilled in charcoal tandoor and served in aluminum foil to keep as hot as possible. ",
        image: "06614d33a0adb57e8baf7c0f736937da",
      },

      {
        name: "Chicken Tikka",
        price: "419",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with hung curd and home made spices for hours and grilled to perfection in Tandoor, brushed with butter before serve.",
        image: "7100e3b63a4cba3ee6729c76616efbc0",
      },

      {
        name: "Chicken Malai Tikka",
        price: "439",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with cashew nut paste and selected spices for hours and grilled to perfection in Tandoor, served with fresh cream for heavenly taste. ",
        image: "7423c03fa94719826e270ef5e291e880",
      },

      {
        name: "Afghani Chicken",
        price: "379",
        desc: "A creamy Chicken experience, marinated with cashew nut paste and select spices for hours and grilled to perfection in Tandoor. Served with fresh cream for heavenly taste.",
        image: "9577ea1cb88f585264ecc4e7ace0bb77",
      },

      {
        name: "Bhatti Wala Chicken ",
        price: "379",
        desc: "Chicken with bone pieces marinated in tangy secret chef's spices tossed with egg and butter then grilled.",
        image: "286903d6fa0dfafc6241f4f7d57c8f43",
      },

      {
        name: "Tangdi Kebab",
        price: "459",
        desc: "[4 pcs, Serves 1-2 person] Chicken Drumstick marinated in indian spices and hung curd cooked in clay oven-Tandoor and served with Salad mix and Mint Chutney .Tangdi Kabab for any occasion",

        image: "326646d57beaaad4b0bf2a7c5ce62f29",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Dana Choga",
    rating: "4.4",
    address: "North Indian ,Mughlai Shahdara",
    price: "500 for two",
    time: "33",
    image: "a3qsihk7xnojbajimp4b",
    menu: [
      {
        name: "Paneer Tikka Shashlik (8 Pcs)",
        price: "345",
        desc: "Barbequed cottage cheese with capsicum, onion, tomatoes",
        image: "a4d0693afd597ecb385ef4a942c6f37f",
      },

      {
        name: "Dahi Kebab (8 Pcs)",
        price: "345",
        desc: "Shallow fried kebabs prepared with hung curd & cottage cheese ,fresh coriander and green chillies.",
        image: "a8cbbc91e1e01ce78d3bfd50f29f9f34",
      },

      {
        name: "Afghani Soya Chaap (8 Pcs)",
        price: "345",
        desc: "Healthy soya chunks marinated with cashewnuts and cheese paste roasted in tandoor.",
        image: "a77d755d52654a84a72b88e790c66491",
      },

      {
        name: "Murgh Tandoori",
        price: "375",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "a644e4f46cf520055985d21eb16b4d6d",
      },

      {
        name: "Chicken Tikka (8 Pcs)",
        price: "445",
        desc: "Roasted boneless chicken marinated with curd masala",
        image: "aaa8c1adc2002025b2dbc9217d34bdd4",
      },

      {
        name: "Murgh Malai Tikka (8 Pcs)",
        price: "485",
        desc: "Boneless roasted chicken marinated in mild cheesy cashew blend.",
        image: "ab664a851365040282ce595c8e6172e2",
      },

      {
        name: "Lasooni Murgh Tikka (8 Pcs)",
        price: "455",
        desc: "Boneless garlic flavoured clay oven roasted chicken tikka.",
        image: "abf875a929ce8c3db2478db9634af7eb",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "445",
        desc: "Minced chicken skewered & grilled.",
        image: "aec0gdrgbtrenpg1suis",
      },

      {
        name: "Dal Makhani",
        price: "355",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "af33b81798b11deba338e94b7585d348",
      },

      {
        name: "Paneer Butter Masala (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cubes cooked with tomato onion based butter masal ",
        image: "agav43hd0mnwe7h2gdne",
      },

      {
        name: "Paneer Makhani ( Shahi Paneer ) (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cooked in rich & creamy tomato gravy perfumed with kasoori methi .",
        image: "agphtkolnnu7hqf2yzh8",
      },

      {
        name: "Paneer Adrak Hara Dhaniya (8 Pcs)",
        price: "395",
        desc: "500 Gram, Serves 2) Cottage cheese cooked in a blend of silky cashew gravy and fresh tomato gravy tempered with chopped ginger and coriander.",
        image: "apw30ulybjurp7qs0ypn",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Chacha Soya Chaap",
    rating: "4",
    address: "Indian, Chinese Sector 72",
    price: "200 for two",
    time: "41",
    image: "as2drmwhlzjizcvzl7hq",
    menu: [
      {
        name: "Paneer Tikka",
        price:
          "Cottage cheese cubes, marinated with handpicked indian spices and cooked to perfection in a tandoor with onion and capsicum",
        image: "avu7eglicgrdizwkx7bp",
      },

      {
        name: " Tandoori Momos",
        price: "169",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "ayxu0xhe73fg3ic8cdut",
      },

      {
        name: "Honey Chilly Potato",
        price: "219",
        desc: "Fried potato strips tossed in a balanced honey & chilli extra garlic sauce garnished with sesame seeds.",
        image: "b3tytzd75ukqj7a3bcvb",
      },

      {
        name: "Paneer Malai Tikka",
        price: "255",
        desc: "A popular medium spiced tikka recipe made with marinated paneer cubes and veggies.",
        image: "b87e0a6371cbbbb104ea9b17ebc29177",
      },

      {
        name: "Chilly Paneer Dry.",
        price: "239",
        desc: "One can never go wrong with this choice. Fried paneer chunks wok-tossed with capsicum and onions in a spicy chilli sauce.",
        image: "b372f03cac692917d30d9d7b60f5ec8d",
      },

      {
        name: "Tandoori Malai Chaap",
        price:
          "Soya chaap, served with a delicious mixture of cream and spices. Cooked to perfection in tandoor with onion and capsicum",
        image: "b8345fb7339daec1b1dcd0d2d7d88773",
      },

      {
        name: "Afghani Chaap(stuff) Sabut",
        price:
          "Soy chaap is first marinated with kaju paste and indian herbs and spices and than cooled for 2 hours and than grilled over coal flames. A mouth watering snack.",
        image: "ba00f46f3aeff89c31f5734885477062",
      },

      {
        name: "Tandoori Chaap (stuff)sabut",
        price: "189",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ba51178hgftorhi0c0t2",
      },

      {
        name: "Chole With Rice",
        price: "240",
        desc: "Gravy bale choley with basmati rice  ",
        image: "baeed03b51fc5217595ef9d6ca6a471e",
      },

      {
        name: "Rajma With Rice",
        price: "240",
        desc: "Tari wale rajma with basmati rice.",
        image: "bc3fd56e76e0e4e3afc12f48c83c9ce1",
      },

      {
        name: "Spring Roll",
        price: "169",
        desc: "A deligt for delhi-ites golden fried rolls stuffed with garden fresh vegetable served with a hot garlic dip.",
        image: "bdyubumvwgsxsaav5q7y",
      },

      {
        name: "Tandoor Veg Momos",
        price: "149",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "blloturnznfyafpdchlq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "bzyhr51ni4z4e0xvjlhf",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "c7o9rcpmarvsxkscjkes",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "c36d164e3bc33e6fa5ecdf2fd08e2241",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "c2886f097cc7ecc85285901469b5d754",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ccpjitc9rrs0ua0hzjbx",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ccvffu5wlpgcznp09svs",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "cf791l0sgesh1w6olcae",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "cg5oty8tgmzoay9rf9qc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "cmg7fjmuacjzgyqwpdkq",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "czbzrp5lplpoz0doxmwg",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "d1f427e88dde5cc6fb1a6eae2f56a700",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "d3wcmgcwvsj96ij99nwq",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "dar86zdcbgdigdm3hjyy",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "dd7n9s9dgxgdytloquov",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "ddf44ea489d2ce063ef81d66b1d2484d",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "dskzz3ii662blux8rg6h",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "dve6gexmiyufsghcnuio",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ebbxrxyha1ih02xcpe3g",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ebotib44qvbjzfeqq8so",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ecbd9a23c0fdeb8efad7d5cb847ccb35",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "el8poekyopb3zig7zx98",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "equmjidyatcapyyckg5n",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "f1gwkwhb9zolarqvy5m1",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "f4zerwdvdhcxxpz1uc5o",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "fc25b56a5fea99c3390f386bd8a0d705",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "fd6ume8lf0giugb1y5qd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "fpaspk19tcubrfswxf20",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "fpwxddrxvvpl3tjew3vq",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "fw8lo5clwgoywor5xvsv",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "fwpiighxso7i6zpldaia",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "fybhamuxerws5pn6laf5",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "g1gfujzmul4bd1pvz9mk",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ggbirydgtwkqyuvvbtrn",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ghq89tc8led3i0nbsl7j",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "gitmubso856hha080ksa",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "gkzyzajiv0kymx4nfdim",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "gqrfllpzoo4qgtzydz0x",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "gy1m0pnrcmt63nbbqzbw",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "gzghdk01hao3cdqiiygw",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "h4q56agn8dzsjfzgf6zw",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "hagpdc56zjx2sw1jpqc1",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "htxhoew1qudshgn6hria",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "hxaezorcvnahplc2hv8u",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "i5sv59jc9f5rspk4irlq",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "i7pp6oonouk4buvjxoub",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "i8rx0bg4qztiyoliujz4",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ibmrvcacjsqoo1e654ce",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "if1l0ja5cgp2uullbqi1",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "igomp9xzaifri1f6l42v",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "ihgfvvc0byglegwfspdc",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "ijkrz2oxi4g5zcrubgor",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "ijwt9qfher5idkbhgahs",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "ilq6prwc4vy0vzd4vfsl",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "joesaiwxosorbrirdz7a",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "jx1npqlh93xyokrexx8o",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "k2qjcx4lfpykgx1zpsmk",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "katx8tdts4pgytuunvh2",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "kefrzjz4uojowp76spxy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "kjcvclhcpo3hhbx3oisr",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "kq7uazf1cbobkwrpjcf4",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "kulxssd5pbuxync3wybt",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "lczmmddifkbobtccrpue",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "lhtkqzcwmwhpey1yynkp",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "mconaut2hv6s4kgewnkz",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "me9i6xl5wavoi6bcsdhh",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "mnrvwwovgoqolkhg7vjz",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "mrnvoibp0kxkdfa8e50v",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "mu9kdhaby6aqo7c7lffh",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "mulkobv0fo9gdeenjeld",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "neeeg013tk02pk3ucaa8",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "njmsqatdpeeqdf3tr6cr",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "nmmvaslk9l2dhwhqgfoc",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "nn0jsvbzq4eflt9fiyg3",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "nocubl7vjanfmgtarvxk",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "nwga69cymaedrjuovel6",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "o3fwwp9bpdeajuu5a19r",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "oafygp02039mmijzwjdi",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "oghcfks09mggyzg5sxbd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "omwojvhscbplbe5yyudd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "oociiqapklgk4xak5xsl",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "opxki2mofi2ntqlha9cm",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "oslorkitwpuwgjhm1von",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "otduf1zz0oz1kvxioqy1",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "oxa4uqeqhmxjd7yegzzy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "p4vop43ga0tzufsvx0ie",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "p8rkdvs4azobh0vid1mc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "pbrybjyng9xozddnespp",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "pefg5x4ktwyhigj9kf4q",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "phbu6d1a5ib1mobhk0di",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "pipooiwlbkbmkc5y3ofe",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "pkpshsjwekn9loy6bavq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "pmby7ghk7ituecpxgwyv",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "prpiih8g6yfzvbrlhnrr",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "qdeeph1mohguh6m4kisa",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "qrmpetqijtgcqv7hnvl9",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "qsoonis3ixqfuveliye7",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "qvdwrzh19btg3rygjw8y",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "qztgko7zzlxf8d6hkpwr",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "rdxmzu14nvgnszcl3oou",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "reg6reqfdm41tktp5icm",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "rh6vhoain7yltoynbadw",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "rmers4eudpvvxstriqm3",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "rosvjkt8qnovv7u5ybul ",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "rp66rf9g7uyxtlho0f9j",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "rztfbjbw6jxkw7q76kwd",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "s7rcbkpkaxtio1lopkb1",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "sf8jv9i4fliv5yobau6y",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "srxbnzagw1epyfret5sq",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "sxhdwl8nf8p5egyu9qvj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "t9xysogxwhqtl1sedfju",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "tb4c1ieuam1v6fnj29gk",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "u4xwhkutur2wtkzphte7",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "u8k0cefnox0s4l6ixa6n",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "uajox9er5zqioraadzsg",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "udhcvud8uxfkuq8ud1lt",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "ueyguxgsrfeup0taxfyz",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ul6gtnnviatyghoqj5pz",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "uqsnhg8rah1arto98fku",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "urpuvkfpqausubgiz5pu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ux0yrybasbah57rf8rsi",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "v0yvnk9lj6nhvw1avgzh",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "vpeuantq2ee9mac3orct",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "wfc2zpehcatoichbnfqd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "wr4qw6q1htjzt2lxtsco",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "wrxmauxelivhrixqemni",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wuw0blf6sbuuxzjegpu1",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "wzk5zpirbiyv8qh932og",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "x9oz2gqcmhnjejpqwrmu",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "xc3vq7lpuclbtbyh0lgt",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "xebei0vysai9oluqhevx",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "xejdiy8atukuuaxrvtep",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "xfxuqmpdqw4h5p35ybon",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "xg6gy8o9np2n7vaucdvy",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "xloljk2b8hmbjo6npv7h",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "xvaw2uvpxfawsaiodb1p",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "xvnljpaextexlvy93sce",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "xxzh0lapcyvvufxpdsh8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "y1mwlal6ovgnliql4qt5",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ybbue57oq3nhfwm1yifo",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "yc31zlxaowyxlbgkadmy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "yljl7fk7bsrxybp6ifvm",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "yln3lw56sbsqvwuffv7b",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "yprxwlmvapkflwxwrhce",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "ysu16nken6anreeuew6g",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "yvgwgenmdupeagb5tn0q",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "zk259u3lq1nokmy2fego",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "zvbdc0i6ujtstqffbk9i",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "zwgnpsl9jvbeax8dgfhd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "zwslrje5oaa3x0z8fzec",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "rosvjkt8qnovv7u5ybul",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "sf8jv9i4fliv5yobau6y",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    no_of_rating: "2k",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "02b7211af051f497dc4f1aa1f551305e",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "3a2ed5a05138fb8515048ca6a80a019c",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "3a6d2530c0ee11b22e60f660f6482fde",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "3d0066feb489529b6b11f2fbbe4ac442",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "3e8740afbcbdef8a85a4f75c0f892c82",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "4aa094716b875bbb7d85f46e9227b745",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "4c1deeb2b721195866081d3125d2c292",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "5b2b7de351ec839e97c5dfcc73ceed32",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "6b56d9668f782664f7d0c358678add42",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "9e678aa4e87851ec21ca38bc135ec4db",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "9fb8df622c0b26e310de2e13793de590",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "13cb77bde21712de052312b001696b95",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "34a5e24659d53616dbb06d3cff59f55c",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Mr. Gram & Mrs. Grills",
    rating: "4.1",
    no_of_rating: "1k",
    address: "North Indian, Biryani sector 72",
    price: "400 for two",
    image: "49c27c020e946f8f4fc13fdc9038525c",
    menu: [
      {
        name: "Bhatti Wala Chaap",
        price: "339",
        desc: "[Serves 1-2 Person] Soya chaap marinated in tangy secret chef's spices tossed with butter then grilled.",
        image: "69a061b7e0f951cef2b4947946f94ec6",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "98f592d53f1fbe3b0db3cc935355f09f",
      },

      {
        name: "Paneer Tikka",
        price: "349",
        desc: "[Serves 1-2 person] Chunks of paneer [8 Nos] marinated in hung curd and blend of home made spices, grilled in clay oven and served with Onion & Capsicum Shashlik .",
        image: "427b41084e344493a60c78f336a4cc74",
      },

      {
        name: "Veg Chaap",
        price: "349",
        desc: "[Serves 1-2 Person] Chunks of Soya chargrilled with creamy and mildly spices marination to add flavours. Served with rich milk based cream.",
        image: "0547edcd0018c7e182e0689821db5f97",
      },

      {
        name: "Tandoori Stuffed Aloo",
        price: "339",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "2349d4f6fabc766a4e5efc9cc48c0930",
      },

      {
        name: "Veg Seekh Kebab",
        price: "339",
        desc: "[Serves 1-2 person, 8 nos] Minced fresh chopped vegetable seasoned with indian aromatic spices and smoky grilled to perfect your starter plate.",
        image: "6126c9b45de2cb222405c1af8a321e74",
      },

      {
        name: "Tandoori Chicken",
        price: "349",
        desc: "A king of kebab, Chicken soaked for hrs in marinated paste with our own secret spices, grilled in charcoal tandoor and served in aluminum foil to keep as hot as possible. ",
        image: "06614d33a0adb57e8baf7c0f736937da",
      },

      {
        name: "Chicken Tikka",
        price: "419",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with hung curd and home made spices for hours and grilled to perfection in Tandoor, brushed with butter before serve.",
        image: "7100e3b63a4cba3ee6729c76616efbc0",
      },

      {
        name: "Chicken Malai Tikka",
        price: "439",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with cashew nut paste and selected spices for hours and grilled to perfection in Tandoor, served with fresh cream for heavenly taste. ",
        image: "7423c03fa94719826e270ef5e291e880",
      },

      {
        name: "Afghani Chicken",
        price: "379",
        desc: "A creamy Chicken experience, marinated with cashew nut paste and select spices for hours and grilled to perfection in Tandoor. Served with fresh cream for heavenly taste.",
        image: "9577ea1cb88f585264ecc4e7ace0bb77",
      },

      {
        name: "Bhatti Wala Chicken ",
        price: "379",
        desc: "Chicken with bone pieces marinated in tangy secret chef's spices tossed with egg and butter then grilled.",
        image: "286903d6fa0dfafc6241f4f7d57c8f43",
      },

      {
        name: "Tangdi Kebab",
        price: "459",
        desc: "[4 pcs, Serves 1-2 person] Chicken Drumstick marinated in indian spices and hung curd cooked in clay oven-Tandoor and served with Salad mix and Mint Chutney .Tangdi Kabab for any occasion",

        image: "326646d57beaaad4b0bf2a7c5ce62f29",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Dana Choga",
    rating: "4.4",
    address: "North Indian ,Mughlai Shahdara",
    price: "500 for two",
    time: "33",
    image: "a3qsihk7xnojbajimp4b",
    menu: [
      {
        name: "Paneer Tikka Shashlik (8 Pcs)",
        price: "345",
        desc: "Barbequed cottage cheese with capsicum, onion, tomatoes",
        image: "a4d0693afd597ecb385ef4a942c6f37f",
      },

      {
        name: "Dahi Kebab (8 Pcs)",
        price: "345",
        desc: "Shallow fried kebabs prepared with hung curd & cottage cheese ,fresh coriander and green chillies.",
        image: "a8cbbc91e1e01ce78d3bfd50f29f9f34",
      },

      {
        name: "Afghani Soya Chaap (8 Pcs)",
        price: "345",
        desc: "Healthy soya chunks marinated with cashewnuts and cheese paste roasted in tandoor.",
        image: "a77d755d52654a84a72b88e790c66491",
      },

      {
        name: "Murgh Tandoori",
        price: "375",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "a644e4f46cf520055985d21eb16b4d6d",
      },

      {
        name: "Chicken Tikka (8 Pcs)",
        price: "445",
        desc: "Roasted boneless chicken marinated with curd masala",
        image: "aaa8c1adc2002025b2dbc9217d34bdd4",
      },

      {
        name: "Murgh Malai Tikka (8 Pcs)",
        price: "485",
        desc: "Boneless roasted chicken marinated in mild cheesy cashew blend.",
        image: "ab664a851365040282ce595c8e6172e2",
      },

      {
        name: "Lasooni Murgh Tikka (8 Pcs)",
        price: "455",
        desc: "Boneless garlic flavoured clay oven roasted chicken tikka.",
        image: "abf875a929ce8c3db2478db9634af7eb",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "445",
        desc: "Minced chicken skewered & grilled.",
        image: "aec0gdrgbtrenpg1suis",
      },

      {
        name: "Dal Makhani",
        price: "355",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "af33b81798b11deba338e94b7585d348",
      },

      {
        name: "Paneer Butter Masala (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cubes cooked with tomato onion based butter masal ",
        image: "agav43hd0mnwe7h2gdne",
      },

      {
        name: "Paneer Makhani ( Shahi Paneer ) (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cooked in rich & creamy tomato gravy perfumed with kasoori methi .",
        image: "agphtkolnnu7hqf2yzh8",
      },

      {
        name: "Paneer Adrak Hara Dhaniya (8 Pcs)",
        price: "395",
        desc: "500 Gram, Serves 2) Cottage cheese cooked in a blend of silky cashew gravy and fresh tomato gravy tempered with chopped ginger and coriander.",
        image: "apw30ulybjurp7qs0ypn",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Chacha Soya Chaap",
    rating: "4",
    address: "Indian, Chinese Sector 72",
    price: "200 for two",
    time: "41",
    image: "as2drmwhlzjizcvzl7hq",
    menu: [
      {
        name: "Paneer Tikka",
        price:
          "Cottage cheese cubes, marinated with handpicked indian spices and cooked to perfection in a tandoor with onion and capsicum",
        image: "avu7eglicgrdizwkx7bp",
      },

      {
        name: " Tandoori Momos",
        price: "169",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "ayxu0xhe73fg3ic8cdut",
      },

      {
        name: "Honey Chilly Potato",
        price: "219",
        desc: "Fried potato strips tossed in a balanced honey & chilli extra garlic sauce garnished with sesame seeds.",
        image: "b3tytzd75ukqj7a3bcvb",
      },

      {
        name: "Paneer Malai Tikka",
        price: "255",
        desc: "A popular medium spiced tikka recipe made with marinated paneer cubes and veggies.",
        image: "b87e0a6371cbbbb104ea9b17ebc29177",
      },

      {
        name: "Chilly Paneer Dry.",
        price: "239",
        desc: "One can never go wrong with this choice. Fried paneer chunks wok-tossed with capsicum and onions in a spicy chilli sauce.",
        image: "b372f03cac692917d30d9d7b60f5ec8d",
      },

      {
        name: "Tandoori Malai Chaap",
        price:
          "Soya chaap, served with a delicious mixture of cream and spices. Cooked to perfection in tandoor with onion and capsicum",
        image: "b8345fb7339daec1b1dcd0d2d7d88773",
      },

      {
        name: "Afghani Chaap(stuff) Sabut",
        price:
          "Soy chaap is first marinated with kaju paste and indian herbs and spices and than cooled for 2 hours and than grilled over coal flames. A mouth watering snack.",
        image: "ba00f46f3aeff89c31f5734885477062",
      },

      {
        name: "Tandoori Chaap (stuff)sabut",
        price: "189",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ba51178hgftorhi0c0t2",
      },

      {
        name: "Chole With Rice",
        price: "240",
        desc: "Gravy bale choley with basmati rice  ",
        image: "baeed03b51fc5217595ef9d6ca6a471e",
      },

      {
        name: "Rajma With Rice",
        price: "240",
        desc: "Tari wale rajma with basmati rice.",
        image: "bc3fd56e76e0e4e3afc12f48c83c9ce1",
      },

      {
        name: "Spring Roll",
        price: "169",
        desc: "A deligt for delhi-ites golden fried rolls stuffed with garden fresh vegetable served with a hot garlic dip.",
        image: "bdyubumvwgsxsaav5q7y",
      },

      {
        name: "Tandoor Veg Momos",
        price: "149",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "blloturnznfyafpdchlq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "bzyhr51ni4z4e0xvjlhf",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "c7o9rcpmarvsxkscjkes",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "c36d164e3bc33e6fa5ecdf2fd08e2241",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "c2886f097cc7ecc85285901469b5d754",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ccpjitc9rrs0ua0hzjbx",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ccvffu5wlpgcznp09svs",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "cf791l0sgesh1w6olcae",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "cg5oty8tgmzoay9rf9qc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "cmg7fjmuacjzgyqwpdkq",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "czbzrp5lplpoz0doxmwg",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "d1f427e88dde5cc6fb1a6eae2f56a700",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "d3wcmgcwvsj96ij99nwq",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "dar86zdcbgdigdm3hjyy",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "dd7n9s9dgxgdytloquov",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "ddf44ea489d2ce063ef81d66b1d2484d",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "dskzz3ii662blux8rg6h",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "dve6gexmiyufsghcnuio",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ebbxrxyha1ih02xcpe3g",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ebotib44qvbjzfeqq8so",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ecbd9a23c0fdeb8efad7d5cb847ccb35",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "el8poekyopb3zig7zx98",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "equmjidyatcapyyckg5n",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "f1gwkwhb9zolarqvy5m1",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "f4zerwdvdhcxxpz1uc5o",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "fc25b56a5fea99c3390f386bd8a0d705",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "fd6ume8lf0giugb1y5qd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "fpaspk19tcubrfswxf20",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "fpwxddrxvvpl3tjew3vq",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "fw8lo5clwgoywor5xvsv",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "fwpiighxso7i6zpldaia",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "fybhamuxerws5pn6laf5",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "g1gfujzmul4bd1pvz9mk",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ggbirydgtwkqyuvvbtrn",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ghq89tc8led3i0nbsl7j",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "gitmubso856hha080ksa",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "gkzyzajiv0kymx4nfdim",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "gqrfllpzoo4qgtzydz0x",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "gy1m0pnrcmt63nbbqzbw",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "gzghdk01hao3cdqiiygw",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "h4q56agn8dzsjfzgf6zw",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "hagpdc56zjx2sw1jpqc1",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "htxhoew1qudshgn6hria",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "hxaezorcvnahplc2hv8u",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "i5sv59jc9f5rspk4irlq",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "i7pp6oonouk4buvjxoub",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "i8rx0bg4qztiyoliujz4",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ibmrvcacjsqoo1e654ce",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "if1l0ja5cgp2uullbqi1",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "igomp9xzaifri1f6l42v",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "ihgfvvc0byglegwfspdc",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "ijkrz2oxi4g5zcrubgor",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "ijwt9qfher5idkbhgahs",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "ilq6prwc4vy0vzd4vfsl",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "joesaiwxosorbrirdz7a",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "jx1npqlh93xyokrexx8o",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "k2qjcx4lfpykgx1zpsmk",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "katx8tdts4pgytuunvh2",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "kefrzjz4uojowp76spxy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "kjcvclhcpo3hhbx3oisr",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "kq7uazf1cbobkwrpjcf4",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "kulxssd5pbuxync3wybt",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "lczmmddifkbobtccrpue",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "lhtkqzcwmwhpey1yynkp",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "mconaut2hv6s4kgewnkz",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "me9i6xl5wavoi6bcsdhh",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "mnrvwwovgoqolkhg7vjz",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "mrnvoibp0kxkdfa8e50v",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "mu9kdhaby6aqo7c7lffh",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "mulkobv0fo9gdeenjeld",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "neeeg013tk02pk3ucaa8",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "njmsqatdpeeqdf3tr6cr",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "nmmvaslk9l2dhwhqgfoc",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "nn0jsvbzq4eflt9fiyg3",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "nocubl7vjanfmgtarvxk",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "nwga69cymaedrjuovel6",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "o3fwwp9bpdeajuu5a19r",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "oafygp02039mmijzwjdi",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "oghcfks09mggyzg5sxbd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "omwojvhscbplbe5yyudd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "oociiqapklgk4xak5xsl",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "opxki2mofi2ntqlha9cm",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "oslorkitwpuwgjhm1von",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "otduf1zz0oz1kvxioqy1",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "oxa4uqeqhmxjd7yegzzy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "p4vop43ga0tzufsvx0ie",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "p8rkdvs4azobh0vid1mc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "pbrybjyng9xozddnespp",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "pefg5x4ktwyhigj9kf4q",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "phbu6d1a5ib1mobhk0di",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "pipooiwlbkbmkc5y3ofe",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "pkpshsjwekn9loy6bavq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "pmby7ghk7ituecpxgwyv",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "prpiih8g6yfzvbrlhnrr",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "qdeeph1mohguh6m4kisa",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "qrmpetqijtgcqv7hnvl9",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "qsoonis3ixqfuveliye7",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "qvdwrzh19btg3rygjw8y",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "qztgko7zzlxf8d6hkpwr",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "rdxmzu14nvgnszcl3oou",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "reg6reqfdm41tktp5icm",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "rh6vhoain7yltoynbadw",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "rmers4eudpvvxstriqm3",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "rosvjkt8qnovv7u5ybul ",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "rp66rf9g7uyxtlho0f9j",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "rztfbjbw6jxkw7q76kwd",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "s7rcbkpkaxtio1lopkb1",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "sf8jv9i4fliv5yobau6y",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "srxbnzagw1epyfret5sq",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "sxhdwl8nf8p5egyu9qvj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "t9xysogxwhqtl1sedfju",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "tb4c1ieuam1v6fnj29gk",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "u4xwhkutur2wtkzphte7",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "u8k0cefnox0s4l6ixa6n",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "uajox9er5zqioraadzsg",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "udhcvud8uxfkuq8ud1lt",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "ueyguxgsrfeup0taxfyz",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ul6gtnnviatyghoqj5pz",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "uqsnhg8rah1arto98fku",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "urpuvkfpqausubgiz5pu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ux0yrybasbah57rf8rsi",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "v0yvnk9lj6nhvw1avgzh",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "vpeuantq2ee9mac3orct",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "wfc2zpehcatoichbnfqd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "wr4qw6q1htjzt2lxtsco",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "wrxmauxelivhrixqemni",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wuw0blf6sbuuxzjegpu1",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "wzk5zpirbiyv8qh932og",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "x9oz2gqcmhnjejpqwrmu",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "xc3vq7lpuclbtbyh0lgt",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "xebei0vysai9oluqhevx",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "xejdiy8atukuuaxrvtep",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "xfxuqmpdqw4h5p35ybon",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "xg6gy8o9np2n7vaucdvy",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "xloljk2b8hmbjo6npv7h",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "xvaw2uvpxfawsaiodb1p",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "xvnljpaextexlvy93sce",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "xxzh0lapcyvvufxpdsh8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "y1mwlal6ovgnliql4qt5",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ybbue57oq3nhfwm1yifo",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "yc31zlxaowyxlbgkadmy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "yljl7fk7bsrxybp6ifvm",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "yln3lw56sbsqvwuffv7b",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "yprxwlmvapkflwxwrhce",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "ysu16nken6anreeuew6g",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "yvgwgenmdupeagb5tn0q",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "zk259u3lq1nokmy2fego",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "zvbdc0i6ujtstqffbk9i",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "zwgnpsl9jvbeax8dgfhd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "zwslrje5oaa3x0z8fzec",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "wz8mzecbadksutqp1br8",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "vvbujvjl82ntrn0fri5i",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "xbwpdifd9byyziywwhop",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "rosvjkt8qnovv7u5ybul",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "uo8vbq0abhtfutpunf9u",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "sf8jv9i4fliv5yobau6y",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    no_of_rating: "2k",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "02b7211af051f497dc4f1aa1f551305e",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "3a2ed5a05138fb8515048ca6a80a019c",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "3a6d2530c0ee11b22e60f660f6482fde",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "3d0066feb489529b6b11f2fbbe4ac442",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "3e8740afbcbdef8a85a4f75c0f892c82",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "4aa094716b875bbb7d85f46e9227b745",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "4c1deeb2b721195866081d3125d2c292",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "5b2b7de351ec839e97c5dfcc73ceed32",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "6b56d9668f782664f7d0c358678add42",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "9e678aa4e87851ec21ca38bc135ec4db",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "9fb8df622c0b26e310de2e13793de590",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "13cb77bde21712de052312b001696b95",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "34a5e24659d53616dbb06d3cff59f55c",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Mr. Gram & Mrs. Grills",
    rating: "4.1",
    no_of_rating: "1k",
    address: "North Indian, Biryani sector 72",
    price: "400 for two",
    image: "49c27c020e946f8f4fc13fdc9038525c",
    menu: [
      {
        name: "Bhatti Wala Chaap",
        price: "339",
        desc: "[Serves 1-2 Person] Soya chaap marinated in tangy secret chef's spices tossed with butter then grilled.",
        image: "69a061b7e0f951cef2b4947946f94ec6",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "98f592d53f1fbe3b0db3cc935355f09f",
      },

      {
        name: "Paneer Tikka",
        price: "349",
        desc: "[Serves 1-2 person] Chunks of paneer [8 Nos] marinated in hung curd and blend of home made spices, grilled in clay oven and served with Onion & Capsicum Shashlik .",
        image: "427b41084e344493a60c78f336a4cc74",
      },

      {
        name: "Veg Chaap",
        price: "349",
        desc: "[Serves 1-2 Person] Chunks of Soya chargrilled with creamy and mildly spices marination to add flavours. Served with rich milk based cream.",
        image: "0547edcd0018c7e182e0689821db5f97",
      },

      {
        name: "Tandoori Stuffed Aloo",
        price: "339",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "2349d4f6fabc766a4e5efc9cc48c0930",
      },

      {
        name: "Veg Seekh Kebab",
        price: "339",
        desc: "[Serves 1-2 person, 8 nos] Minced fresh chopped vegetable seasoned with indian aromatic spices and smoky grilled to perfect your starter plate.",
        image: "6126c9b45de2cb222405c1af8a321e74",
      },

      {
        name: "Tandoori Chicken",
        price: "349",
        desc: "A king of kebab, Chicken soaked for hrs in marinated paste with our own secret spices, grilled in charcoal tandoor and served in aluminum foil to keep as hot as possible. ",
        image: "06614d33a0adb57e8baf7c0f736937da",
      },

      {
        name: "Chicken Tikka",
        price: "419",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with hung curd and home made spices for hours and grilled to perfection in Tandoor, brushed with butter before serve.",
        image: "7100e3b63a4cba3ee6729c76616efbc0",
      },

      {
        name: "Chicken Malai Tikka",
        price: "439",
        desc: "[8 Pcs serves 1-2 person] Chicken thigh chunks marinated with cashew nut paste and selected spices for hours and grilled to perfection in Tandoor, served with fresh cream for heavenly taste. ",
        image: "7423c03fa94719826e270ef5e291e880",
      },

      {
        name: "Afghani Chicken",
        price: "379",
        desc: "A creamy Chicken experience, marinated with cashew nut paste and select spices for hours and grilled to perfection in Tandoor. Served with fresh cream for heavenly taste.",
        image: "9577ea1cb88f585264ecc4e7ace0bb77",
      },

      {
        name: "Bhatti Wala Chicken ",
        price: "379",
        desc: "Chicken with bone pieces marinated in tangy secret chef's spices tossed with egg and butter then grilled.",
        image: "286903d6fa0dfafc6241f4f7d57c8f43",
      },

      {
        name: "Tangdi Kebab",
        price: "459",
        desc: "[4 pcs, Serves 1-2 person] Chicken Drumstick marinated in indian spices and hung curd cooked in clay oven-Tandoor and served with Salad mix and Mint Chutney .Tangdi Kabab for any occasion",

        image: "326646d57beaaad4b0bf2a7c5ce62f29",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Dana Choga",
    rating: "4.4",
    address: "North Indian ,Mughlai Shahdara",
    price: "500 for two",
    time: "33",
    image: "a3qsihk7xnojbajimp4b",
    menu: [
      {
        name: "Paneer Tikka Shashlik (8 Pcs)",
        price: "345",
        desc: "Barbequed cottage cheese with capsicum, onion, tomatoes",
        image: "a4d0693afd597ecb385ef4a942c6f37f",
      },

      {
        name: "Dahi Kebab (8 Pcs)",
        price: "345",
        desc: "Shallow fried kebabs prepared with hung curd & cottage cheese ,fresh coriander and green chillies.",
        image: "a8cbbc91e1e01ce78d3bfd50f29f9f34",
      },

      {
        name: "Afghani Soya Chaap (8 Pcs)",
        price: "345",
        desc: "Healthy soya chunks marinated with cashewnuts and cheese paste roasted in tandoor.",
        image: "a77d755d52654a84a72b88e790c66491",
      },

      {
        name: "Murgh Tandoori",
        price: "375",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "a644e4f46cf520055985d21eb16b4d6d",
      },

      {
        name: "Chicken Tikka (8 Pcs)",
        price: "445",
        desc: "Roasted boneless chicken marinated with curd masala",
        image: "aaa8c1adc2002025b2dbc9217d34bdd4",
      },

      {
        name: "Murgh Malai Tikka (8 Pcs)",
        price: "485",
        desc: "Boneless roasted chicken marinated in mild cheesy cashew blend.",
        image: "ab664a851365040282ce595c8e6172e2",
      },

      {
        name: "Lasooni Murgh Tikka (8 Pcs)",
        price: "455",
        desc: "Boneless garlic flavoured clay oven roasted chicken tikka.",
        image: "abf875a929ce8c3db2478db9634af7eb",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "445",
        desc: "Minced chicken skewered & grilled.",
        image: "aec0gdrgbtrenpg1suis",
      },

      {
        name: "Dal Makhani",
        price: "355",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "af33b81798b11deba338e94b7585d348",
      },

      {
        name: "Paneer Butter Masala (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cubes cooked with tomato onion based butter masal ",
        image: "agav43hd0mnwe7h2gdne",
      },

      {
        name: "Paneer Makhani ( Shahi Paneer ) (8 Pcs)",
        price: "395",
        desc: "(500 Gram, Serves 2) Cottage cheese cooked in rich & creamy tomato gravy perfumed with kasoori methi .",
        image: "agphtkolnnu7hqf2yzh8",
      },

      {
        name: "Paneer Adrak Hara Dhaniya (8 Pcs)",
        price: "395",
        desc: "500 Gram, Serves 2) Cottage cheese cooked in a blend of silky cashew gravy and fresh tomato gravy tempered with chopped ginger and coriander.",
        image: "apw30ulybjurp7qs0ypn",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Chacha Soya Chaap",
    rating: "4",
    address: "Indian, Chinese Sector 72",
    price: "200 for two",
    time: "41",
    image: "as2drmwhlzjizcvzl7hq",
    menu: [
      {
        name: "Paneer Tikka",
        price:
          "Cottage cheese cubes, marinated with handpicked indian spices and cooked to perfection in a tandoor with onion and capsicum",
        image: "avu7eglicgrdizwkx7bp",
      },

      {
        name: " Tandoori Momos",
        price: "169",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "ayxu0xhe73fg3ic8cdut",
      },

      {
        name: "Honey Chilly Potato",
        price: "219",
        desc: "Fried potato strips tossed in a balanced honey & chilli extra garlic sauce garnished with sesame seeds.",
        image: "b3tytzd75ukqj7a3bcvb",
      },

      {
        name: "Paneer Malai Tikka",
        price: "255",
        desc: "A popular medium spiced tikka recipe made with marinated paneer cubes and veggies.",
        image: "b87e0a6371cbbbb104ea9b17ebc29177",
      },

      {
        name: "Chilly Paneer Dry.",
        price: "239",
        desc: "One can never go wrong with this choice. Fried paneer chunks wok-tossed with capsicum and onions in a spicy chilli sauce.",
        image: "b372f03cac692917d30d9d7b60f5ec8d",
      },

      {
        name: "Tandoori Malai Chaap",
        price:
          "Soya chaap, served with a delicious mixture of cream and spices. Cooked to perfection in tandoor with onion and capsicum",
        image: "b8345fb7339daec1b1dcd0d2d7d88773",
      },

      {
        name: "Afghani Chaap(stuff) Sabut",
        price:
          "Soy chaap is first marinated with kaju paste and indian herbs and spices and than cooled for 2 hours and than grilled over coal flames. A mouth watering snack.",
        image: "ba00f46f3aeff89c31f5734885477062",
      },

      {
        name: "Tandoori Chaap (stuff)sabut",
        price: "189",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "ba51178hgftorhi0c0t2",
      },

      {
        name: "Chole With Rice",
        price: "240",
        desc: "Gravy bale choley with basmati rice  ",
        image: "baeed03b51fc5217595ef9d6ca6a471e",
      },

      {
        name: "Rajma With Rice",
        price: "240",
        desc: "Tari wale rajma with basmati rice.",
        image: "bc3fd56e76e0e4e3afc12f48c83c9ce1",
      },

      {
        name: "Spring Roll",
        price: "169",
        desc: "A deligt for delhi-ites golden fried rolls stuffed with garden fresh vegetable served with a hot garlic dip.",
        image: "bdyubumvwgsxsaav5q7y",
      },

      {
        name: "Tandoor Veg Momos",
        price: "149",
        desc: "Tandoor grilled Steamed dumpling made of wheat with tandoori sauce and the filling of mildly spiced shredded veggies",
        image: "blloturnznfyafpdchlq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "bzyhr51ni4z4e0xvjlhf",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "c7o9rcpmarvsxkscjkes",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "c36d164e3bc33e6fa5ecdf2fd08e2241",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "c2886f097cc7ecc85285901469b5d754",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ccpjitc9rrs0ua0hzjbx",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ccvffu5wlpgcznp09svs",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "cf791l0sgesh1w6olcae",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "cg5oty8tgmzoay9rf9qc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "cmg7fjmuacjzgyqwpdkq",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "czbzrp5lplpoz0doxmwg",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "d1f427e88dde5cc6fb1a6eae2f56a700",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "d3wcmgcwvsj96ij99nwq",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "dar86zdcbgdigdm3hjyy",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "dd7n9s9dgxgdytloquov",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "ddf44ea489d2ce063ef81d66b1d2484d",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "dskzz3ii662blux8rg6h",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "dve6gexmiyufsghcnuio",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "ebbxrxyha1ih02xcpe3g",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "ebotib44qvbjzfeqq8so",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ecbd9a23c0fdeb8efad7d5cb847ccb35",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "el8poekyopb3zig7zx98",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "equmjidyatcapyyckg5n",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "f1gwkwhb9zolarqvy5m1",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "f4zerwdvdhcxxpz1uc5o",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "fc25b56a5fea99c3390f386bd8a0d705",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "fd6ume8lf0giugb1y5qd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "fpaspk19tcubrfswxf20",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "fpwxddrxvvpl3tjew3vq",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "fw8lo5clwgoywor5xvsv",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "fwpiighxso7i6zpldaia",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "fybhamuxerws5pn6laf5",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "g1gfujzmul4bd1pvz9mk",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "ggbirydgtwkqyuvvbtrn",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ghq89tc8led3i0nbsl7j",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "gitmubso856hha080ksa",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "gkzyzajiv0kymx4nfdim",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "gqrfllpzoo4qgtzydz0x",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "gy1m0pnrcmt63nbbqzbw",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "gzghdk01hao3cdqiiygw",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "h4q56agn8dzsjfzgf6zw",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "hagpdc56zjx2sw1jpqc1",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "htxhoew1qudshgn6hria",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "hxaezorcvnahplc2hv8u",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "i5sv59jc9f5rspk4irlq",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "i7pp6oonouk4buvjxoub",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "i8rx0bg4qztiyoliujz4",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "ibmrvcacjsqoo1e654ce",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "if1l0ja5cgp2uullbqi1",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "igomp9xzaifri1f6l42v",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "ihgfvvc0byglegwfspdc",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "ijkrz2oxi4g5zcrubgor",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "ijwt9qfher5idkbhgahs",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "ilq6prwc4vy0vzd4vfsl",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "joesaiwxosorbrirdz7a",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "jx1npqlh93xyokrexx8o",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "k2qjcx4lfpykgx1zpsmk",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "katx8tdts4pgytuunvh2",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "kefrzjz4uojowp76spxy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "kjcvclhcpo3hhbx3oisr",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "kq7uazf1cbobkwrpjcf4",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "kulxssd5pbuxync3wybt",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "lczmmddifkbobtccrpue",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "lhtkqzcwmwhpey1yynkp",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "mconaut2hv6s4kgewnkz",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "me9i6xl5wavoi6bcsdhh",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "mnrvwwovgoqolkhg7vjz",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "mrnvoibp0kxkdfa8e50v",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "mu9kdhaby6aqo7c7lffh",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "mulkobv0fo9gdeenjeld",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "neeeg013tk02pk3ucaa8",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "njmsqatdpeeqdf3tr6cr",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "nmmvaslk9l2dhwhqgfoc",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "nn0jsvbzq4eflt9fiyg3",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "nocubl7vjanfmgtarvxk",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "nwga69cymaedrjuovel6",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "o3fwwp9bpdeajuu5a19r",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "oafygp02039mmijzwjdi",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "oghcfks09mggyzg5sxbd",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "omwojvhscbplbe5yyudd",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "oociiqapklgk4xak5xsl",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "opxki2mofi2ntqlha9cm",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "oslorkitwpuwgjhm1von",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "otduf1zz0oz1kvxioqy1",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "oxa4uqeqhmxjd7yegzzy",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "p4vop43ga0tzufsvx0ie",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "p8rkdvs4azobh0vid1mc",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "pbrybjyng9xozddnespp",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "pefg5x4ktwyhigj9kf4q",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "phbu6d1a5ib1mobhk0di",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "pipooiwlbkbmkc5y3ofe",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "pkpshsjwekn9loy6bavq",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "pmby7ghk7ituecpxgwyv",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "prpiih8g6yfzvbrlhnrr",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "qdeeph1mohguh6m4kisa",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "qk0xgg4qxt0cy4gdmonx",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "qrmpetqijtgcqv7hnvl9",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "qsoonis3ixqfuveliye7",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "qvdwrzh19btg3rygjw8y",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "qztgko7zzlxf8d6hkpwr",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "rdxmzu14nvgnszcl3oou",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "reg6reqfdm41tktp5icm",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "rh6vhoain7yltoynbadw",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "rmers4eudpvvxstriqm3",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "rosvjkt8qnovv7u5ybul ",
      },
    ],
  },
  {
    uuid: uuid(),
    resturant: "Jalandhari Vibes",
    rating: "4",
    address: "North India,Muhlai,Biryani sector 45",
    price: "250 for two",
    image: "rp66rf9g7uyxtlho0f9j",
    menu: [
      {
        name: "Paneer Tikka",
        price: "230",
        desc: "Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
        image: "rysvmddp4off3w0mnsdw",
      },

      {
        name: " Pudhina Chaap",
        price: "230",
        desc: "Tender Pieces Of Soya Chunks, Marinated In Yoghurt, Spices and Spearmint.",
        image: "rztfbjbw6jxkw7q76kwd",
      },

      {
        name: "Stuffed Mushroom Tikka",
        price: "314",
        desc: "Roasted Mushrooms, Stuffed with Cottage Cheese, Spices and Herbs, Grilled To Perfection.",
        image: "s7rcbkpkaxtio1lopkb1",
      },

      {
        name: "Cheese Corn Seekh",
        price: "314",
        desc: "Finely minced mixed vegetables patties mixed with exotic spices, pan made. - Matar methi malai.",
        image: "sets2pxqjugzdzdw5neu",
      },

      {
        name: "Tandoori Chicken",
        price: "373",
        desc: "Classic chicken dish, roasted to perfection.",
        image: "sf8jv9i4fliv5yobau6y",
      },

      {
        name: "Afghani Chicken",
        price: "384",
        desc: "Delicious Chicken, Marinated in yogurt, cream, peanut, and cashew nut paste.",
        image: "srxbnzagw1epyfret5sq",
      },

      {
        name: "Chicken Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Yoghurt and Spices, Roasted To Perfection.",
        image: "suiklbwtlxqnnfcnz4wj",
      },

      {
        name: "Chicken Seekh Kebab",
        price: "230",
        desc: "Minced chicken, mixed with onions and traditional spices.",
        image: "sxhdwl8nf8p5egyu9qvj",
      },

      {
        name: "Chicken Malai Tikka",
        price: "274",
        desc: "Tender chicken pieces, marinated in cream, yoghurt, spices, topped with butter. ",
        image: "t6lk1dbz9gzzdv9qt36o",
      },

      {
        name: "Chicken Lehsuni Tikka",
        price: "274",
        desc: "Juicy Chicken Pieces, Marinated In Garlic, Butter and Roasted To Perfection.",
        image: "t9xysogxwhqtl1sedfju",
      },

      {
        name: "Chicken Tangri",
        price: "373",
        desc: "Roasted Chicken Drumsticks, Marinated In Yoghurt and Indian Spices.",
        image: "tb4c1ieuam1v6fnj29gk",
      },

      {
        name: "Mutton Galauti Kebab (4 Pcs)",
        price: "450",
        desc: "Lucknow taste in mouth",
        image: "u4xwhkutur2wtkzphte7",
      },
    ],
  },
]


module.exports = data;
