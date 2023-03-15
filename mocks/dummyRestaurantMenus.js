const dummyRestaurantMenus = [
    {
        "data": {
            "id": "583088",
            "name": "Simple Burger",
            "city": "Noida 1",
            "area": "Sector 51",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+ ratings",
            "cloudinaryImageId": "d3to7amcs0pu8jwauayb",
            "costForTwoMsg": "₹300 for two",
            "cuisines": ["Burgers", "Snacks"],
            "menu": {
                "items": {
                    "97164398": {
                        "id": 97164398,
                        "name": "Classic Veg Burger",
                        "description": "Our bestseller crunchy veg patty burger with special seasoning and sauce. ",
                        "cloudinaryImageId": "hoctvludtx5jd7tdpsgh",
                        "price": 19900
                    },
                    "97164399": {
                        "id": 97164399,
                        "name": "Egg Burger",
                        "description": "Fluffy egg patty sprinkled with special seasoning is your go to breakfast burger, tastes best with our home brewed chai. ",
                        "cloudinaryImageId": "levhswu56ceu5qahsxoc",
                        "price": 17900
                    },
                    "97164400": {
                        "id": 97164400,
                        "name": "Crispy Paneer Burger",
                        "description": "Thick dairy paneer patty, soft inside and crispy outside, handcrafted with special seasoning. ",
                        "cloudinaryImageId": "cvn6y74s35lu7xmkl7xc",
                        "price": 22900
                    },
                    "97164402": {
                        "id": 97164402,
                        "name": "Crispy Chicken Burger",
                        "description": "A no-brainer for all chicken lovers. Fresh crispy chicken patty with a blend of special seasoning. ",
                        "cloudinaryImageId": "ydaonisuscj7urdae9c4",
                        "price": 22900
                    },
                    "97164404": {
                        "id": 97164404,
                        "name": "Ridiculous Chicken Burger",
                        "description": "Our crispy and flavourful fried chicken patty topped with our mildly spicy in-house sauce, cheese slice and nachos for some extra crunch. ",
                        "cloudinaryImageId": "axo6xmdnktcl85cxyxvm",
                        "price": 26500
                    },
                    "97164405": {
                        "id": 97164405,
                        "name": "Tandoori Chicken Burger",
                        "description": "A boneless smokey patty of chicken marinated and grilled to perfection. Every bite has a tandoori vibe. ",
                        "cloudinaryImageId": "znd2jp1fwkrautvva3an",
                        "price": 24500
                    },
                    "97164408": {
                        "id": 97164408,
                        "name": "Chicken Popcorn",
                        "description": "Tender fried chicken popcorn sprinkled with our special seasoning. ",
                        "cloudinaryImageId": "ofedg7vzvbt6a2kpybm6",
                        "price": 21900
                    },
                    "97164410": {
                        "id": 97164410,
                        "name": "Chicken Strips",
                        "description": "Spiced crispy boneless chicken strips, juicy and tender. Tastes best with our in-house chipotle sauce. ",
                        "cloudinaryImageId": "n3r3cytdhn5sehr2e5ly",
                        "price": 23900
                    },
                    "97164412": {
                        "id": 97164412,
                        "name": "Classic Fries",
                        "description": "Long and crispy fries made from high quality potatoes. ",
                        "cloudinaryImageId": "pskukjzxloqrydrcwoh1",
                        "price": 13900
                    },
                    "97164416": {
                        "id": 97164416,
                        "name": "Peri Peri Fries",
                        "description": "Long and crispy fries tossed in our special peri peri seasoning. ",
                        "cloudinaryImageId": "x0aymk4ha1haassghr1u",
                        "price": 15900
                    },
                    "97164439": {
                        "id": 97164439,
                        "name": "Virgin Mojito",
                        "description": "The goodness of lime juice, refreshing mint leaves perfectly balanced in a mojito. ",
                        "cloudinaryImageId": "itkydipbben9qaphadmg",
                        "price": 15900
                    },
                    "97164447": {
                        "id": 97164447,
                        "name": "Orange Mojito",
                        "description": "The goodness of orange juice, refreshing mint leaves perfectly balanced in a mojito. ",
                        "cloudinaryImageId": "mpdnukqmbv3le31bzxq8",
                        "price": 15900
                    },
                    "97164449": {
                        "id": 97164449,
                        "name": "Classic Cold Coffee",
                        "description": "A refreshingly cold, bold, creamy and caffeinated drink. ",
                        "cloudinaryImageId": "iypfmqr3pniz8mn0z4g3",
                        "price": 23900
                    },
                    "97164450": {
                        "id": 97164450,
                        "name": "Hazelnut Cold Coffee",
                        "description": "This is a classic flavour combo made with refreshing cold coffee and hazelnut syrup, made to suit your palette. ",
                        "cloudinaryImageId": "iypfmqr3pniz8mn0z4g3",
                        "price": 24900
                    },
                    "97648903": {
                        "id": 97648903,
                        "name": "Classic Vanilla Shake",
                        "description": "Some good essence from vanilla leaves blended with vanilla icecream and toned milk. ",
                        "cloudinaryImageId": "kxjeimltxnvglcbox8kf",
                        "price": 21900
                    },
                    "97648904": {
                        "id": 97648904,
                        "name": "Blueberry Cheesecake Shake",
                        "description": "Thick creamy milkshake made from real blueberries, toned milk and cream cheese. ",
                        "cloudinaryImageId": "x78tjzbsfthwwlnpfozs",
                        "price": 23900
                    },
                    "97648905": {
                        "id": 97648905,
                        "name": "Chocolate Brownie Shake",
                        "description": "Smoothest chocolate brownie milkshake made from bakery-fresh brownie, chocolate icecream and toned milk. ",
                        "cloudinaryImageId": "lttjiu6fcwq9itpmy6ns",
                        "price": 25900
                    },
                    "97648906": {
                        "id": 97648906,
                        "name": "Chocolate Peanut Butter Shake",
                        "description": "Your favorite peanut butter blended with 5 star, chocolate icecream, and toned milk. ",
                        "cloudinaryImageId": "wsqwbdxicppkqtfgqow8",
                        "price": 24900
                    },
                    "97648907": {
                        "id": 97648907,
                        "name": "Oreo Cookie And Cream Shake",
                        "description": "Goodness of oreo cookies blended with icecream and toned milk. ",
                        "cloudinaryImageId": "mds6cg8sib5yp74r0gxl",
                        "price": 23900
                    },
                    "97648908": {
                        "id": 97648908,
                        "name": "Strawberry Banana Shake",
                        "description": "Thick creamy milkshake made from sweet strawberries and real banana blended with toned milk. ",
                        "cloudinaryImageId": "o3jtmktvq4fghxo7kvm8",
                        "price": 23900
                    },
                    "97648909": {
                        "id": 97648909,
                        "name": "Strawberry Cheesecake Shake",
                        "description": "Thick creamy milkshake made from real strawberries, toned milk and cream cheese. ",
                        "cloudinaryImageId": "wyksecgoiejw9oyg6bqn",
                        "price": 23900
                    },
                    "97648910": {
                        "id": 97648910,
                        "name": "Walnut Butterscotch Shake",
                        "description": "A classic blend of walnut, caramel and butterscotch icecream with toned milk. ",
                        "cloudinaryImageId": "pbkw7s4edqkiodmri2jm",
                        "price": 23900
                    },
                    "97648911": {
                        "id": 97648911,
                        "name": "Chocolate Overloaded Shake",
                        "description": "Heaven for chocolate lovers. 50g of dark chocolate blended with chocolate icecream and toned milk. ",
                        "cloudinaryImageId": "pv54ehuofrnodelxtlbi",
                        "price": 28900
                    },
                    "97809679": {
                        "id": 97809679,
                        "name": "Chilly Cheese Burger",
                        "description": "A big crunchy and cheesy veg patty with a twist of spice, made extra cheesy with a cheese slice. ",
                        "cloudinaryImageId": "dlj51aquhmzhlnfhsdvf",
                        "price": 21900
                    },
                    "97824020": {
                        "id": 97824020,
                        "name": "Veg Momos",
                        "description": "Delicious mixture of chopped vegetables enveloped in a thin wrapper, served with a spicy dip and mayo. ",
                        "cloudinaryImageId": "mrkvfl5k8eklleyt6dzu",
                        "price": 0,
                        "defaultPrice": 15900
                    },
                    "97824021": {
                        "id": 97824021,
                        "name": "Chicken Momos",
                        "description": "Delicious mix of juicy minced chicken filling enveloped in a thin wrapper, served with a spicy dip and mayo. ",
                        "cloudinaryImageId": "zjn71atjmobjtkhursyc",
                        "price": 0,
                        "defaultPrice": 18900
                    },
                    "97824022": {
                        "id": 97824022,
                        "name": "Corn And Cheese Momos",
                        "description": "Momos filled with shredded cheese and corn, served with a spicy dip and mayo. ",
                        "cloudinaryImageId": "bjndsw2grwc2eubduah1",
                        "price": 0,
                        "defaultPrice": 23900
                    },
                    "97824023": {
                        "id": 97824023,
                        "name": "Paneer Momos",
                        "description": "Momos made of all purpose flour and stuffed with grated and spiced paneer, served with a spicy dip and mayo. ",
                        "cloudinaryImageId": "bjndsw2grwc2eubduah1",
                        "price": 0,
                        "defaultPrice": 18900
                    },
                    "99267890": {
                        "id": 99267890,
                        "name": "Lemon Pepper Fries",
                        "description": "Long and crispy fries tossed in our lemon pepper seasoning. ",
                        "cloudinaryImageId": "x0aymk4ha1haassghr1u",
                        "price": 15900
                    },
                    "99267891": {
                        "id": 99267891,
                        "name": "Lemon Pepper Chicken Popcorn",
                        "description": "Tender fried chicken popcorn sprinkled with our special lemon pepper seasoning. ",
                        "cloudinaryImageId": "ofedg7vzvbt6a2kpybm6",
                        "price": 21900
                    },
                    "99267892": {
                        "id": 99267892,
                        "name": "Lemon Pepper Chicken Strips",
                        "description": "Crispy boneless chicken strips, juicy and tender. Sprinkled with our special lemon pepper seasoning. ",
                        "cloudinaryImageId": "n3r3cytdhn5sehr2e5ly",
                        "price": 23900
                    },
                    "101184351": {
                        "id": 101184351,
                        "name": "Classic Fried Chicken Burger",
                        "description": "100g of chicken patty fried to make it ultra crisp with our delicious classic mayo sauce. ",
                        "cloudinaryImageId": "jsywsa8oorpmwbzolyha",
                        "price": 24500
                    },
                    "101184352": {
                        "id": 101184352,
                        "name": "Honey Mustard Chicken Burger",
                        "description": "100g of chicken patty fried to make it ultra crisp with our in-house honey mustard sauce. ",
                        "cloudinaryImageId": "vrbalv6su0ziazuqwnvz",
                        "price": 24500
                    },
                    "101495458": {
                        "id": 101495458,
                        "name": "Crispy Corn Burger",
                        "description": "Crispy corn patty with our special in-house sauce topped with coleslaw placed between soft and fresh buns. ",
                        "cloudinaryImageId": "vtpw1mukdrsazdo9li9g",
                        "price": 22900
                    },
                    "105329252": {
                        "id": 105329252,
                        "name": "Chicken Kurkure Momos",
                        "description": "A mouthwatering serving of kurkure chicken momos fried to perfection, crispy outside and tasty inside, served with a spicy dip and mayo. ",
                        "cloudinaryImageId": "qejmcqr7aynx2akfx53w",
                        "price": 22500
                    },
                    "105329253": {
                        "id": 105329253,
                        "name": "Veg Kurkure Momos",
                        "description": "Everyone's go-to kurkure momos, stuffed with a mixture of finely chopped vegetables, fried to perfection, served with a spicy dip and mayo. ",
                        "cloudinaryImageId": "qejmcqr7aynx2akfx53w",
                        "price": 19500
                    },
                    "105329254": {
                        "id": 105329254,
                        "name": "Paneer Kurkure Momos",
                        "description": "All time favourite kurkure paneer momos with grated and spiced paneer inside, crispy outside, served with a spicy dip and mayo. ",
                        "cloudinaryImageId": "qejmcqr7aynx2akfx53w",
                        "price": 22500
                    },
                    "105938741": {
                        "id": 105938741,
                        "name": "Chicken Manchurian Momos",
                        "description": "Delicious minced chicken fully stuffed and tossed in special manchurian sauce. ",
                        "cloudinaryImageId": "a94f62ea71e48d009ea32cfc15260cba",
                        "price": 22500
                    },
                    "105938743": {
                        "id": 105938743,
                        "name": "Veg Manchurian Momos",
                        "description": "Made with freshly chopped vegetables, tossed in our secret manchurian sauce. ",
                        "cloudinaryImageId": "a94f62ea71e48d009ea32cfc15260cba",
                        "price": 19500
                    },
                    "106102657": {
                        "id": 106102657,
                        "name": "Hot Chicken Burger",
                        "description": "[limited edition] fried chicken burger gets a bold new avatar, our crispy fried chicken patty is now topped with a new spicy in-house sauce to give you enough heat to beat the winter season. ",
                        "cloudinaryImageId": "db8bea7e5eccd2f66bf7b8c7fbe3126a",
                        "price": 25500
                    },
                    "106602936": {
                        "id": 106602936,
                        "name": "Coke (330ml)",
                        "description": "",
                        "cloudinaryImageId": "1a0d2c3831d818e41cd4a1045d05d68e",
                        "price": 6000
                    },
                    "106602937": {
                        "id": 106602937,
                        "name": "Coke Zero (330ml)",
                        "description": "",
                        "cloudinaryImageId": "5748a2343b4fb32daa767d33caddbc4b",
                        "price": 6000
                    },
                    "106602938": {
                        "id": 106602938,
                        "name": "Thums Up (330ml)",
                        "description": "",
                        "cloudinaryImageId": "e31eb8de8cb9c51999f536f35fcfda9c",
                        "price": 6000
                    },
                    "107501928": {
                        "id": 107501928,
                        "name": "Veg Ridiculous Burger",
                        "description": "Lip-smacking crispy and cheesy veg patty with a twist of sweet chilli sauce and nachos for some extra crunch. ",
                        "cloudinaryImageId": "94ff9d12c7da1a28474cdc45e85e97ec",
                        "price": 24500
                    },
                    "107630189": {
                        "id": 107630189,
                        "name": "Paneer Hot Burger",
                        "description": "Big crunchy paneer patty with a new spicy in-house sauce that will leave you wanting more. ",
                        "cloudinaryImageId": "b13c00400d29c17c82f845626f18f24c",
                        "price": 23500
                    },
                    "108025315": {
                        "id": 108025315,
                        "name": "Gunsberg Ginger Ale (330ml)",
                        "description": "",
                        "cloudinaryImageId": "5b70ad8f7d90e4f89e84ad87e1a59d9f",
                        "price": 14900
                    },
                    "108025316": {
                        "id": 108025316,
                        "name": "Gunsberg Grapefruits Ale (330ml)",
                        "description": "",
                        "cloudinaryImageId": "c2785bd40d899139de2f0a01556e9c24",
                        "price": 14900
                    },
                    "108025318": {
                        "id": 108025318,
                        "name": "Gunsberg Non Alcoholic Ginger Beer (330mll)",
                        "description": "",
                        "cloudinaryImageId": "4079f3ef74e5f780ad6f7950ef7c5fe8",
                        "price": 14900
                    },
                    "108473985": {
                        "id": 108473985,
                        "name": "Cheesy Fries",
                        "description": "Long and crispy fries made from high quality potatos sprinkled with our special peri peri seasoning and topped with our special in house sauce. ",
                        "cloudinaryImageId": "",
                        "price": 19500
                    },
                    "108473986": {
                        "id": 108473986,
                        "name": "Chicken Peri Peri Fries",
                        "description": "Our special peri peri fries topped with tender chicken popcorn and and our special in house sauce. ",
                        "cloudinaryImageId": "",
                        "price": 21500
                    },
                    "109417437": {
                        "id": 109417437,
                        "name": "Classic Veg Burger + Classic Veg Burger + Classic Fries + Classic Fries",
                        "description": "",
                        "cloudinaryImageId": "fdeba2257986104ad157b0b4d3cd01fb",
                        "price": 57200
                    },
                    "109417438": {
                        "id": 109417438,
                        "name": "Hot Paneer Burger + Hot Paneer Burger + Peri Peri Fries + Chocolate Overloaded Milkshake",
                        "description": "",
                        "cloudinaryImageId": "76dc25223a275c4b77eea9d350f70c37",
                        "price": 77200
                    },
                    "109417439": {
                        "id": 109417439,
                        "name": "Veg Ridiculous Burger + Peri Peri Fries + Hazelnut Cold Coffee",
                        "description": "",
                        "cloudinaryImageId": "ed693975501fc83f13c51739bff2fffb",
                        "price": 55100
                    },
                    "109417440": {
                        "id": 109417440,
                        "name": "Veg Ridiculous Burger + Veg Ridiculous Burger + Peri Peri Fries + Hazelnut Cold Coffee",
                        "description": "",
                        "cloudinaryImageId": "ddb7496b40ebf3e1c37f827a658121a8",
                        "price": 76300
                    },
                    "109417441": {
                        "id": 109417441,
                        "name": "Ridiculous Chicken Burger + Peri Peri Fries + Chocolate Overloaded Milkshake",
                        "description": "",
                        "cloudinaryImageId": "8fd17968e79d47085871aaf010e4c035",
                        "price": 58700
                    },
                    "109417442": {
                        "id": 109417442,
                        "name": "Hot Chicken Burger + Peri Peri Fries + Hazelnut Cold Coffee",
                        "description": "",
                        "cloudinaryImageId": "eceff66bdb3dcf62944fc8038233c2ee",
                        "price": 56000
                    },
                    "109417443": {
                        "id": 109417443,
                        "name": "Classic Fried Chicken Burger + Classic Fried Chicken Burger + Classic Fries + Classic Fries",
                        "description": "",
                        "cloudinaryImageId": "8bee3b2e231e85d747ff83fbcb117060",
                        "price": 65500
                    },
                    "109417444": {
                        "id": 109417444,
                        "name": "2 Classic Veg Burger + Classic Fries + Any Milkshake",
                        "description": "",
                        "cloudinaryImageId": "f7a9231bf1cccc7ad941012bbe225d71",
                        "price": 0,
                        "defaultPrice": 67100
                    },
                    "109417445": {
                        "id": 109417445,
                        "name": "Classic Veg Burger + Chilly Cheese Burger + Peri Peri Fries + Any Milkshake Worth 239",
                        "description": "",
                        "cloudinaryImageId": "616f2dd1e048a2573457f10aa5e67ab9",
                        "price": 0,
                        "defaultPrice": 70700
                    },
                    "109417446": {
                        "id": 109417446,
                        "name": "Crispy Paneer Burger+ Classic Fries + Any Mojito",
                        "description": "",
                        "cloudinaryImageId": "8b5212e2ad216871caadb40920433c85",
                        "price": 0,
                        "defaultPrice": 45600
                    },
                    "109417447": {
                        "id": 109417447,
                        "name": "Veg Ridiculous Burger + Hot Paneer Burger + Peri Peri Fries + Mojito",
                        "description": "",
                        "cloudinaryImageId": "74aa1d113e81189c8f1d6b2d8bcfb9ee",
                        "price": 0,
                        "defaultPrice": 69100
                    },
                    "109417448": {
                        "id": 109417448,
                        "name": "Classic Veg Burger + Classic Veg Burger + Classic Fries + Classic Fries + Mojito + Mojito",
                        "description": "",
                        "cloudinaryImageId": "11455f2765df49c68f089bac39e902f0",
                        "price": 0,
                        "defaultPrice": 85600
                    },
                    "109417449": {
                        "id": 109417449,
                        "name": "Crispy Chicken Burger + Crispy Chicken Burger + Peri Peri Fries + Any Milkshake Worth 239",
                        "description": "",
                        "cloudinaryImageId": "69d11f6f2e1f74ee28a769ae07fe2738",
                        "price": 0,
                        "defaultPrice": 74300
                    },
                    "109417450": {
                        "id": 109417450,
                        "name": "Ridiculous Chicken Burger + Hot Chicken Burger + Peri Peri Fries + Any Milkshake Worth 239",
                        "description": "",
                        "cloudinaryImageId": "f9e325a9f6dbb997b87540a59c42a554",
                        "price": 0,
                        "defaultPrice": 79000
                    },
                    "109417451": {
                        "id": 109417451,
                        "name": "2 Ridiculous Chicken Burger + Peri Peri Fries + Peri Peri Fries + Mojito + Mojito",
                        "description": "",
                        "cloudinaryImageId": "7e51e5030527a82ca41c63a2e78708cf",
                        "price": 0,
                        "defaultPrice": 99500
                    },
                    "109417452": {
                        "id": 109417452,
                        "name": "2 Hot Chicken Burger + 2 Peri Peri Fries + Any Milkshake Worth 239 + Any Milkshake Worth 239",
                        "description": "",
                        "cloudinaryImageId": "0407169663e9325729cbc6a2daa19a65",
                        "price": 0,
                        "defaultPrice": 113600
                    },
                    "109417453": {
                        "id": 109417453,
                        "name": "Classic Fried Chicken Burger + Classic Fries + Mojito",
                        "description": "",
                        "cloudinaryImageId": "3689296254e364e804a78c68d49e0648",
                        "price": 0,
                        "defaultPrice": 47000
                    },
                    "109417454": {
                        "id": 109417454,
                        "name": "Veg Steamed Momos + Paneer Steamed Momos + Any Milkshake Worth 239",
                        "description": "",
                        "cloudinaryImageId": "461a950d444468e3a85105a847533b9f",
                        "price": 0,
                        "defaultPrice": 52800
                    },
                    "109417455": {
                        "id": 109417455,
                        "name": "Chicken Steamed Momos + Chicken Steamed Momos + Mojito + Mojito",
                        "description": "",
                        "cloudinaryImageId": "fafeee6dc48733947c69af7c4b7c761d",
                        "price": 0,
                        "defaultPrice": 62600
                    },
                    "109417456": {
                        "id": 109417456,
                        "name": "Chicken Steamed Momos + Chicken Kurkure Momos + Any Milkshake Worth 239",
                        "description": "",
                        "cloudinaryImageId": "a19d52b528e914b165143a3666bc27e4",
                        "price": 0,
                        "defaultPrice": 58700
                    },
                    "109417457": {
                        "id": 109417457,
                        "name": "Chicken Kurkure Momos + Chicken Kurkure Momos + Mojito + Mojito",
                        "description": "",
                        "cloudinaryImageId": "fc0c0d74a46271bd569c45697696db38",
                        "price": 0,
                        "defaultPrice": 69100
                    },
                    "109417458": {
                        "id": 109417458,
                        "name": "Chicken Kurkure Momos + Chicken Kurkure Momos + Any Milkshake Worth 239 + Any Milkshake Worth 239",
                        "description": "",
                        "cloudinaryImageId": "e9dff290382fcc28cd6aec8f98876e9f",
                        "price": 0,
                        "defaultPrice": 83500
                    },
                    "109417459": {
                        "id": 109417459,
                        "name": "Veg Steamed Momos + Veg Steamed Momos + Mojito + Mojito",
                        "description": "",
                        "cloudinaryImageId": "cef0f3456bf5220ec3d40ab772d214ee",
                        "price": 0,
                        "defaultPrice": 57200
                    },
                    "109548124": {
                        "id": 109548124,
                        "name": "Paneer Tandoori Burger",
                        "description": "Tandoori paneer patty marinated and grilled to perfection. Every bite has a tandoori vibe. ",
                        "cloudinaryImageId": "b1f918207b9e9c4688fa12a823ff4f9b",
                        "price": 23500
                    },
                    "109948877": {
                        "id": 109948877,
                        "name": "Veg Spring Roll (8pcs)",
                        "description": "",
                        "cloudinaryImageId": "56799d9c359d48621c9a6312e90c298a",
                        "price": 22500
                    },
                    "109948878": {
                        "id": 109948878,
                        "name": "Chicken Spring Roll (8pcs)",
                        "description": "",
                        "cloudinaryImageId": "56799d9c359d48621c9a6312e90c298a",
                        "price": 24500
                    },
                    "110345974": {
                        "id": 110345974,
                        "name": "Choco Lava Cake",
                        "description": "With a crisp exterior and motlen chocolate oozing out it's centre, treat yourself with our heavenly chocolava. ",
                        "cloudinaryImageId": "5ed72689b411b550da32d9eb8c576b62",
                        "price": 10500
                    },
                    "111691721": {
                        "id": 111691721,
                        "name": "Sprite (330ml)",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 6000
                    },
                    "111998635": {
                        "id": 111998635,
                        "name": "Classic Fries",
                        "description": "Long and crispy fries made from high quality potatoes. ",
                        "cloudinaryImageId": "6e283796c8813f416d71a97f22fe149a",
                        "price": 13900
                    },
                    "111998636": {
                        "id": 111998636,
                        "name": "Lemon Pepper Fries",
                        "description": "Long and crispy fries tossed in our lemon pepper seasoning. ",
                        "cloudinaryImageId": "56f5c6bc6d327c07b9bbb94de4db25e9",
                        "price": 15900
                    },
                    "111998637": {
                        "id": 111998637,
                        "name": "Peri Peri Fries",
                        "description": "Long and crispy fries tossed in our special peri peri seasoning. ",
                        "cloudinaryImageId": "56f5c6bc6d327c07b9bbb94de4db25e9",
                        "price": 15900
                    },
                    "111998638": {
                        "id": 111998638,
                        "name": "Chicken Popcorn",
                        "description": "Tender fried chicken popcorn sprinkled with our special seasoning. ",
                        "cloudinaryImageId": "3975fa1b12134c63f779c64ab4d8cffc",
                        "price": 21900
                    },
                    "111998639": {
                        "id": 111998639,
                        "name": "Lemon Pepper Chicken Popcorn",
                        "description": "Tender fried chicken popcorn sprinkled with our special lemon pepper seasoning. ",
                        "cloudinaryImageId": "3975fa1b12134c63f779c64ab4d8cffc",
                        "price": 21900
                    },
                    "111998640": {
                        "id": 111998640,
                        "name": "Lemon Pepper Chicken Strips",
                        "description": "Crispy boneless chicken strips, juicy and tender. Sprinkled with our special lemon pepper seasoning. ",
                        "cloudinaryImageId": "746bb9789beb404b0d8e3e061c4bcf64",
                        "price": 23900
                    },
                    "111998641": {
                        "id": 111998641,
                        "name": "Chicken Strips",
                        "description": "Spiced crispy boneless chicken strips, juicy and tender. Tastes best with our in-house chipotle sauce. ",
                        "cloudinaryImageId": "746bb9789beb404b0d8e3e061c4bcf64",
                        "price": 23900
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "235728",
            "name": "Chilli Vada Pav",
            "city": "Noida 1",
            "area": "Ghaziabad",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "ug4abycw5givfeibfyfi",
            "costForTwoMsg": "₹200 for two",
            "cuisines": ["Maharashtrian", "Snacks"],
            "menu": {
                "items": {
                    "47547507": {
                        "id": 47547507,
                        "name": "Classic Vada Pav",
                        "description": "Classic vada pav is prepared by applying tom chilli sause and dry garlic chutney on the pav. the classic vada which contains fine qulity potato,mixed with our special thecha is placed  in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "q8sjiblzfhapckn3wiae",
                        "price": 7000
                    },
                    "47547508": {
                        "id": 47547508,
                        "name": "Crispy Vada Pav",
                        "description": "Crispy vada pav is prepared by applying tom chilli sause and dry garlic chutney on the pav. the crispy vada which contains fine qulity potato, rice, green capsicum, chilli flakes mixed  with our special thecha is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "llsfegafl0wlog8vnrei",
                        "price": 8500
                    },
                    "47547509": {
                        "id": 47547509,
                        "name": "Mix Veg Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "wx0amq21zrlmarzwbcne",
                        "price": 9000
                    },
                    "47547510": {
                        "id": 47547510,
                        "name": "Masala Vada Pav",
                        "description": "Masala vada pav is prepared by applying tom chilli sause and dry garlic chutney on the pav. the spicy masala vada which contains fine qulity potato, mutter, mixed spicy masale then with our special thecha is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "fky2tioitq7itbxcz1j3",
                        "price": 9000
                    },
                    "47547511": {
                        "id": 47547511,
                        "name": "Chatpata Vada Pav",
                        "description": "Chatpata vada pav is prepared by applying with zesty mayonnaise followed by dry garlic  chutney.the spicy chatpata vada and other spices, is place in between the pav which is then rapped in  the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "nvlxzvbjj01stq799krx",
                        "price": 9000
                    },
                    "47547512": {
                        "id": 47547512,
                        "name": "Maharaja Vada Pav",
                        "description": "Maharaja vada pav is prepared by applying premium quility veg mayonnaise on the pav. the maharaja vada which contains pieces of carrots, green peas, potato flakes and other spices,  is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "guoacpjsuoflm98ziorr",
                        "price": 9500
                    },
                    "47547513": {
                        "id": 47547513,
                        "name": "Schezwan Vada Pav",
                        "description": "Batata vada in a combination of spicy schezwan sauce and tom chilli sause in fresh pav",
                        "cloudinaryImageId": "ldzwufohzw9lsa78mwpu",
                        "price": 9000
                    },
                    "47547514": {
                        "id": 47547514,
                        "name": "Harabhara Vada Pav",
                        "description": "Makka palak vada pav is prepared by applying premium quility veg mayonnaise on the pav. the makka palak vada which contains nutritious spinach, corn, potato and palak, is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "osesjuyqhwbl0npzvcea",
                        "price": 9000
                    },
                    "47547515": {
                        "id": 47547515,
                        "name": "Makka Palak Vada Pav",
                        "description": "Makka palak vada pav is prepared by applying premium quility veg mayonnaise on the pav. the makka palak vada which contains nutritious spinach, corn, potato and palak, is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "zhptycels7n5rxsdmib4",
                        "price": 9000
                    },
                    "47547516": {
                        "id": 47547516,
                        "name": "Cheese Vada Pav",
                        "description": "Cheese vada pav is prepared by applying tom chilli sause and cheese slice or dry garlic chutney on the pav. the cheese vada which contains fine qulity potato, mixed with our special thecha is placed  in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "jgfpoz0vjuhrdmm5tszi",
                        "price": 8500
                    },
                    "47547517": {
                        "id": 47547517,
                        "name": "Paneer Supreme Vada Pav",
                        "description": "Paneer vada pav is prepared by applying premium quility veg mayonnaise on the pav. the spicy panner vada and other spices, is place in between the pav which is then rapped in  the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "xrdxgyk48poxlm0wqimz",
                        "price": 13000
                    },
                    "47547518": {
                        "id": 47547518,
                        "name": "Fries",
                        "description": "Fine quility salted french fries with kechup",
                        "cloudinaryImageId": "o6vkqlax7uf0gltshafq",
                        "price": 9900
                    },
                    "47547519": {
                        "id": 47547519,
                        "name": "Sabudana",
                        "description": "Two sabudana vadas ontaining sago and potato are fried and served hot crispy with green chillies and kechup sauces.",
                        "cloudinaryImageId": "ubx7bacd9xnsmbpkiusw",
                        "price": 8000
                    },
                    "47547521": {
                        "id": 47547521,
                        "name": "Cheese Corn Balls",
                        "description": "Cheese corn pops are small trangle shaped nuggets containing cheese, and potato with other seasoning, the are fried and served hot in wrapped with butter paper.",
                        "cloudinaryImageId": "twwgviu1gul0wsiqgojg",
                        "price": 9800
                    },
                    "47547522": {
                        "id": 47547522,
                        "name": "Chilli Potato Shots",
                        "description": "Spicy potato garlic nugguts 10 pcs",
                        "cloudinaryImageId": "j1xg3rw9ex7fb51ndvnz",
                        "price": 7500
                    },
                    "47547524": {
                        "id": 47547524,
                        "name": "Goli Pav Bhaji",
                        "description": "",
                        "cloudinaryImageId": "fnvsudo7onwwapl5j9i1",
                        "price": 19900
                    },
                    "47547531": {
                        "id": 47547531,
                        "name": "Pav Bhaji Meals",
                        "description": "Pav bhaji + classic vada pav + fries.",
                        "cloudinaryImageId": "nmd7ygd2y8b7sp7rumkp",
                        "price": 29900
                    },
                    "47547532": {
                        "id": 47547532,
                        "name": "Roll Vadapav Meals",
                        "description": "Crunchy roll + classic vada pav + fries.",
                        "cloudinaryImageId": "utv23lvyn3do4qwkujrv",
                        "price": 24900
                    },
                    "47547533": {
                        "id": 47547533,
                        "name": "Crispy Meals",
                        "description": "Crispy vada pav + fries + shikanji",
                        "cloudinaryImageId": "hsens92qbiume2okuh3a",
                        "price": 24900
                    },
                    "47547534": {
                        "id": 47547534,
                        "name": "Masala Meals",
                        "description": "Masala vada + fries+ shikanji",
                        "cloudinaryImageId": "dfbju1ciogqmkq1en6fj",
                        "price": 24900
                    },
                    "47547535": {
                        "id": 47547535,
                        "name": "Mix Veg Meals",
                        "description": "Mix veg vada + fires + shikanji",
                        "cloudinaryImageId": "bigysmegtqxgjkowzmd0",
                        "price": 26900
                    },
                    "47547536": {
                        "id": 47547536,
                        "name": "Makka Palak Meals",
                        "description": "Makka palak + fries + shikanaji",
                        "cloudinaryImageId": "rtro9vnqzvcjmylrsm28",
                        "price": 26900
                    },
                    "47547538": {
                        "id": 47547538,
                        "name": "Maharaja Meals",
                        "description": "Maharaja vada + fries + shikanji",
                        "cloudinaryImageId": "wojnwu6sd4sbjzoqsxfh",
                        "price": 26900
                    },
                    "47547539": {
                        "id": 47547539,
                        "name": "Paneer Meals",
                        "description": "Paneer vada + fries + shikanji",
                        "cloudinaryImageId": "h1qnilojclqy3jtpjhfb",
                        "price": 29900
                    },
                    "47547540": {
                        "id": 47547540,
                        "name": "Shikanji",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 8000
                    },
                    "71404704": {
                        "id": 71404704,
                        "name": "Missal Pav",
                        "description": "",
                        "cloudinaryImageId": "t2ftryby1zwnwihjcd8t",
                        "price": 19900
                    },
                    "72113005": {
                        "id": 72113005,
                        "name": "Crunchy Roll",
                        "description": "Crunchy wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. vegetable vada which contains carrots, green peas, potato, flakes  and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "zbqwzlijforgw5zjljpd",
                        "price": 13000
                    },
                    "72113018": {
                        "id": 72113018,
                        "name": "Masala Roll",
                        "description": "Spicy masala wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. veg masala vada which contains carrots, green peas, potato, flakes  and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "rikztzunrk4b8pxb5tqd",
                        "price": 12500
                    },
                    "72113031": {
                        "id": 72113031,
                        "name": "Makka Palak Roll",
                        "description": "Makka palak wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. The makka palak vada which contains nutritious spinach, corn, potato and palak, and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "hhcterirkqsqpj6ceabo",
                        "price": 14900
                    },
                    "72123674": {
                        "id": 72123674,
                        "name": "Paneer Roll",
                        "description": "Paneer wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. the paneer vada which contains spicy paneer is place in the salad, which is then  loaded with veg mayonnaise followed by dry garlic chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "xjgzj3ecuwkwcfajlara",
                        "price": 16000
                    },
                    "72126093": {
                        "id": 72126093,
                        "name": "Harabhara Roll",
                        "description": "Harabhara wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. The harabhara wrap which contains multiple nutritious spinach, corn, potato and palak, and other spices is place in the salad, which is then loaded with zesty mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "jfkrlxqtrwc8ux0ztrln",
                        "price": 14900
                    },
                    "75472477": {
                        "id": 75472477,
                        "name": "Masala Vada Pav(2) + Masala Roll (2) + Fries (1) + 500 Ml Coldrink (2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 59900
                    },
                    "75472483": {
                        "id": 75472483,
                        "name": "Makka Palak (3) + Makka Palak Roll (3) + Fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 69900
                    },
                    "75472484": {
                        "id": 75472484,
                        "name": "Masala Vada Pav(3) + Masala Roll (3) + Fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 69900
                    },
                    "75472489": {
                        "id": 75472489,
                        "name": "Makka Palak (3) + Makka Palak Roll (3) + Fries (2) + 500 Ml Coldrink(2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "ghairdup0czeq3iofcre",
                        "price": 79900
                    },
                    "75472490": {
                        "id": 75472490,
                        "name": "Masala Vada Pav(3)+ Masala Roll (3) + Fries (2)+ 500 Ml Coldrink(2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "iyqqvcsmsbme65mvxr47",
                        "price": 79900
                    },
                    "75472495": {
                        "id": 75472495,
                        "name": "Makka Palak (2) + Makka Palak Roll (1) + Fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "swfquqwuhifx70hykswu",
                        "price": 39900
                    },
                    "75472496": {
                        "id": 75472496,
                        "name": "Masala Vada Pav(2) + Masala Roll (1) + Fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "grhh114w2uh3as3srrrq",
                        "price": 39900
                    },
                    "75472501": {
                        "id": 75472501,
                        "name": "Makka Palak (2) + Makka Palak Roll (2) + Fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 49900
                    },
                    "75472502": {
                        "id": 75472502,
                        "name": "Masala Vada Pav(2) + Masala Roll (2) + Fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 49900
                    },
                    "75472507": {
                        "id": 75472507,
                        "name": "Makka Palak (2) + Makka Palak Roll (2) + Fries (1) + 500 Ml Coldrink (2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "tbu3svlkyvwewnayyzso",
                        "price": 59900
                    },
                    "77728072": {
                        "id": 77728072,
                        "name": "Crispy Vada Pav (2) + Crispy Roll (1) +fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "xhbcgwpqowtarlgf4gb7",
                        "price": 39900
                    },
                    "77728074": {
                        "id": 77728074,
                        "name": "Crispy Vada Pav (2) + Crispy Roll (2) +fries (1) + 500 Ml Coldrink (2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 59900
                    },
                    "77728075": {
                        "id": 77728075,
                        "name": "Crispy Vada Pav (2) + Crispy Roll (2) +fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 49900
                    },
                    "77728076": {
                        "id": 77728076,
                        "name": "Crispy Vada Pav (3)+ Crispy Roll (3) +fries (2) + 500 Ml Coldrink(2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "iqigpkya9eeyag4acpz4",
                        "price": 79900
                    },
                    "77728077": {
                        "id": 77728077,
                        "name": "Crispy Vada Pav (3)+ Crispy Roll (3)+fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "tp2qft2wfw1avcbc0yhl",
                        "price": 69900
                    },
                    "77728079": {
                        "id": 77728079,
                        "name": "Harabhara Vada Pav (2) + Harbhara Roll (1) +fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "mqr4la8yesg1gdxlbwhx",
                        "price": 39900
                    },
                    "77728080": {
                        "id": 77728080,
                        "name": "Harabhara Vada Pav (2) + Harbhara Roll (2) +fries (1) + 500 Ml Coldrink (2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 59900
                    },
                    "77728081": {
                        "id": 77728081,
                        "name": "Harabhara Vada Pav (2) + Harbhara Roll (2) +fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 49900
                    },
                    "77728082": {
                        "id": 77728082,
                        "name": "Harabhara Vada Pav (3) + Harbhara Roll (3) +fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 69900
                    },
                    "77728083": {
                        "id": 77728083,
                        "name": "Harabhara Vada Pav (3) + Harbhara Roll (3) +fries (2) + 500 Ml Coldrink(2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "duq8ksiqhii56etxmjbl",
                        "price": 79900
                    },
                    "77728084": {
                        "id": 77728084,
                        "name": "Maharaja Vada (2) + Cruchy Roll (1) + Fries (1) + 500ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "t3ukwih2cp9hlatvhslg",
                        "price": 39900
                    },
                    "77728085": {
                        "id": 77728085,
                        "name": "Maharaja Vada (2) + Cruchy Roll (2) + Fries (1) + 500ml Coldrink (2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 59900
                    },
                    "77728086": {
                        "id": 77728086,
                        "name": "Maharaja Vada (2) + Cruchy Roll (2) + Fries (1) + 500ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 49900
                    },
                    "77728087": {
                        "id": 77728087,
                        "name": "Maharaja Vada (3) + Cruchy Roll (3) + Fries (1) + 500ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 69900
                    },
                    "77728088": {
                        "id": 77728088,
                        "name": "Maharaja Vada (3) + Cruchy Roll (3) + Fries (2) + 500ml Coldrink (2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "rkpyqnmmzeegyiekbyps",
                        "price": 79900
                    },
                    "77728090": {
                        "id": 77728090,
                        "name": "Paneer Vada (1) + Panner Roll (1) +fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "fxggqvoqhga1dumcmzeq",
                        "price": 39900
                    },
                    "77728091": {
                        "id": 77728091,
                        "name": "Paneer Vada (2) + Panner Roll (1) +fries (1) + 500 Ml Coldrink (2)",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 59900
                    },
                    "77728092": {
                        "id": 77728092,
                        "name": "Paneer Vada (2) + Panner Roll (1) +fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "uphsyqkjiixqp7mms3zl",
                        "price": 49900
                    },
                    "77728094": {
                        "id": 77728094,
                        "name": "Paneer Vada (3) + Panner Roll (2) +fries (1) + 500 Ml Coldrink",
                        "description": "Served with thumps up or coke.",
                        "cloudinaryImageId": "khttjqi0qqy4zhntbk0r",
                        "price": 69900
                    },
                    "77728146": {
                        "id": 77728146,
                        "name": "Harabhara Meals",
                        "description": "Hara bhara vada + fries + shikanji",
                        "cloudinaryImageId": "nx0hk89gs9hbzz1kcgzb",
                        "price": 26900
                    },
                    "84401514": {
                        "id": 84401514,
                        "name": "Keema Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "k36fiigph5ige3tdtteb",
                        "price": 8500
                    },
                    "84401516": {
                        "id": 84401516,
                        "name": "Veg Spicy Keema Roll",
                        "description": "SPICY KEEMA VADA WITH ZESTY MAYO ITS SO YUMMY TASTE",
                        "cloudinaryImageId": "xtoflgoiqt6ul2vygqzz",
                        "price": 12900
                    },
                    "88630364": {
                        "id": 88630364,
                        "name": "Veg Paneer Cheese Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "hle2vicppayryclvjnro",
                        "price": 13900
                    },
                    "88630366": {
                        "id": 88630366,
                        "name": "Veg Cheese Corn Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "o5x7hfkglcx07cmidtzq",
                        "price": 12000
                    },
                    "88630368": {
                        "id": 88630368,
                        "name": "Spicy Paneer Burgur",
                        "description": "SPICY PANEER WITH VEGIES and our signature sauce",
                        "cloudinaryImageId": "je0sgsz8kc7yiq4llufv",
                        "price": 12900
                    },
                    "88630369": {
                        "id": 88630369,
                        "name": "Aalu Tikki Burger",
                        "description": "",
                        "cloudinaryImageId": "y9wc7joe53ve9xlhqywo",
                        "price": 9900
                    },
                    "88630371": {
                        "id": 88630371,
                        "name": "Maharaja Burger",
                        "description": "Our best selling burger with crispy veg patty fresh onion and our signature sauce",
                        "cloudinaryImageId": "y0leujotp0hryezbbnh5",
                        "price": 9900
                    },
                    "88873139": {
                        "id": 88873139,
                        "name": "Crispy Vada Pav + Goli Fries + Crunchy Roll",
                        "description": "",
                        "cloudinaryImageId": "qpfwgblp19gguc3q89ok",
                        "price": 29900
                    },
                    "88873189": {
                        "id": 88873189,
                        "name": "Goli Pav Bhaji",
                        "description": "Choice of quick bites, choice of beverages.",
                        "cloudinaryImageId": "psdz65hogrrdgique5ly",
                        "price": 19900
                    },
                    "88873197": {
                        "id": 88873197,
                        "name": "Onion Ring",
                        "description": "",
                        "cloudinaryImageId": "hjr8lagjhiqrijw0wg1t",
                        "price": 9900
                    },
                    "88873265": {
                        "id": 88873265,
                        "name": "Cheesy Ungli",
                        "description": "",
                        "cloudinaryImageId": "ehsb5ufeve2e6at1udil",
                        "price": 12000
                    },
                    "88873283": {
                        "id": 88873283,
                        "name": "Peach Ice Tea",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 8000
                    },
                    "89031606": {
                        "id": 89031606,
                        "name": "Cheesy Ungli(cvp)",
                        "description": "",
                        "cloudinaryImageId": "zhhdqr4lrxzcornftqmi",
                        "price": 12000
                    },
                    "89031607": {
                        "id": 89031607,
                        "name": "Chilli Veg Paneer Cheese Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "omkagbrquvmf7z6dotz6",
                        "price": 14000
                    },
                    "89031608": {
                        "id": 89031608,
                        "name": "Veg Cheese Corn Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "wxtyht07mxp6pdvwt1ae",
                        "price": 14000
                    },
                    "89031616": {
                        "id": 89031616,
                        "name": "Veg  Grill Sandwich",
                        "description": "Vegetable with our special saus with brwn bred",
                        "cloudinaryImageId": "pznjl02vdt1yiyyxqey3",
                        "price": 9900
                    },
                    "89031617": {
                        "id": 89031617,
                        "name": "Choco Lava Cake",
                        "description": "",
                        "cloudinaryImageId": "kdpcvavozj68ykv8cnp6",
                        "price": 12000
                    },
                    "89031623": {
                        "id": 89031623,
                        "name": "Onion Ring(cvp)",
                        "description": "",
                        "cloudinaryImageId": "dvbd6o5jajejlsagjapw",
                        "price": 9900
                    },
                    "89031624": {
                        "id": 89031624,
                        "name": "Classic Roll",
                        "description": "Choice of quick bites, choice of beverages.",
                        "cloudinaryImageId": "fbvigyrho4nebxjugzi3",
                        "price": 12000
                    },
                    "89031629": {
                        "id": 89031629,
                        "name": "Veg Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "eyblnqyuwxy9krugcxr4",
                        "price": 12000
                    },
                    "90024489": {
                        "id": 90024489,
                        "name": "Makkai Palak Vada Pav",
                        "description": "Makka palak vada pav is prepared by applying premium quality veg mayonnaise on the pav. The makka palak vada which contains nutritious spinach, corn, potato and other spices, is placed in between the pav which is then wrapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "so38l0gnncynb0zhyhti",
                        "price": 11000
                    },
                    "90024491": {
                        "id": 90024491,
                        "name": "Paneer Supreme Vada Pav",
                        "description": "Paneer vada pav is prepared by applying premium quality veg mayonnaise on the pav. The paneer vada which contains spicy paneer is placed in between the pav which is then wrapped in the butter paper and served hot.",
                        "cloudinaryImageId": "czzioyvgt2c2s9lp0uiu",
                        "price": 15500
                    },
                    "90024499": {
                        "id": 90024499,
                        "name": "Classic Vada Pav",
                        "description": "Classic vada pav is prepared by applying sweet/tom chilli garlic saus and dry garlic chatni on the pav. The classic vada which contains fine quility potato, mixed with our special goli thecha is placed in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "udpuww2gdsfi1t1arwoe",
                        "price": 8500
                    },
                    "90024523": {
                        "id": 90024523,
                        "name": "Crispy Vada Pav",
                        "description": "Veg crispy vada is prepared by applying tom-chilli sauce on the pav. The veg crispy vada which contains fine quality potato, green capsicum, chilli flakes, mixed with our special goli veg crispy. The vada is placed in between the pav which is then wrapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "rxxchpvqtwjejjoghnih",
                        "price": 10000
                    },
                    "90024546": {
                        "id": 90024546,
                        "name": "Masala Vada Pav",
                        "description": "Masala vada pav is prepared by applying tom-chilli sauce on the pav. The spicy masala vada which contains fine quility potato, mixed with our special garlic masala is placed in between the pav which is then rapped in the butter paper and served hot.",
                        "cloudinaryImageId": "hyljofixiuhmvo9nphkp",
                        "price": 11000
                    },
                    "90024564": {
                        "id": 90024564,
                        "name": "Schezwan Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "tew1bwcumzvfrizbvclg",
                        "price": 10000
                    },
                    "90024566": {
                        "id": 90024566,
                        "name": "Maharaja Vada Pav",
                        "description": "Maharaja vada pav is prepared by premium quality veg mayonnaise on the pav . The maharaja vada which contains pieces of carrrots, green peas, potato flakes and other spices, is placed in between the pav which is then wrapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "vsu2mtr7bv9yx8rji0eg",
                        "price": 11000
                    },
                    "90024569": {
                        "id": 90024569,
                        "name": "Crunchy Hara Bhara",
                        "description": "Crunchy harabhara vada pav is prepared by applying our customized zesty mayonnaise on the pav. The harbhara vada which contains multipul vegetables, the vada when fried gives kabab taste is placed in between the pav which is then rapped in the butter paper and served hot.",
                        "cloudinaryImageId": "n91amjwxh94penozjgqb",
                        "price": 11000
                    },
                    "90024570": {
                        "id": 90024570,
                        "name": "Chatpata Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "xdbolgtj1elrsmrur7us",
                        "price": 9000
                    },
                    "90038971": {
                        "id": 90038971,
                        "name": "Veg Keema Burger",
                        "description": "SPICY SOYA POTATO PATTY WITH VAGIES",
                        "cloudinaryImageId": "ag8voigq19cmlnn3bela",
                        "price": 9900
                    },
                    "96723925": {
                        "id": 96723925,
                        "name": "Paneer Delight Spicy Burger",
                        "description": "",
                        "cloudinaryImageId": "hzetrq65aomjbu160lzl",
                        "price": 13900
                    },
                    "96723926": {
                        "id": 96723926,
                        "name": "Allu Tikki Burger",
                        "description": "",
                        "cloudinaryImageId": "wxiunrq6oazlipnfjdit",
                        "price": 7500
                    },
                    "101868348": {
                        "id": 101868348,
                        "name": "Grilled Classic Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 7500
                    },
                    "101868349": {
                        "id": 101868349,
                        "name": "Grilled Maharaja Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 9900
                    },
                    "101868350": {
                        "id": 101868350,
                        "name": "Grilled Makka Palak Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 9500
                    },
                    "101868351": {
                        "id": 101868351,
                        "name": "Grilled Masala Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 9500
                    },
                    "101868352": {
                        "id": 101868352,
                        "name": "Grilled Paneer Supreme Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 13500
                    },
                    "101868353": {
                        "id": 101868353,
                        "name": "Grilled Schezwan Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 9000
                    },
                    "101881381": {
                        "id": 101881381,
                        "name": "Raw Mango",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 8000
                    },
                    "101881382": {
                        "id": 101881382,
                        "name": "Shikanji",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 8000
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "531070",
            "name": "Gol vada pav no 1",
            "city": "Noida 1",
            "area": "Ghaziabad",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "gcc4dkeya7whyxgp7xst",
            "costForTwoMsg": "₹200 for two",
            "cuisines": ["Street Food", "Snacks"],
            "menu": {
                "items": {
                    "90943762": {
                        "id": 90943762,
                        "name": "Classic Vada Pav",
                        "description": "Classic vada pav is prepared by applying tom chilli sause and dry garlic chutney on the pav. the classic vada which contains fine qulity potato,mixed with our special thecha is placed  in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "q8sjiblzfhapckn3wiae",
                        "price": 7000
                    },
                    "90943763": {
                        "id": 90943763,
                        "name": "Crispy Vada Pav",
                        "description": "Crispy vada pav is prepared by applying tom chilli sause and dry garlic chutney on the pav. the crispy vada which contains fine qulity potato, rice, green capsicum, chilli flakes mixed  with our special thecha is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "llsfegafl0wlog8vnrei",
                        "price": 8500
                    },
                    "90943764": {
                        "id": 90943764,
                        "name": "Masala Vada Pav",
                        "description": "Masala vada pav is prepared by applying tom chilli sause and dry garlic chutney on the pav. the spicy masala vada which contains fine qulity potato, mutter, mixed spicy masale then with our special thecha is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "fky2tioitq7itbxcz1j3",
                        "price": 9000
                    },
                    "90943765": {
                        "id": 90943765,
                        "name": "Schezwan Vada Pav",
                        "description": "Batata vada in a combination of spicy schezwan sauce and tom chilli sause in fresh pav",
                        "cloudinaryImageId": "ldzwufohzw9lsa78mwpu",
                        "price": 9000
                    },
                    "90943766": {
                        "id": 90943766,
                        "name": "Maharaja Vada Pav",
                        "description": "Maharaja vada pav is prepared by applying premium quility veg mayonnaise on the pav. the maharaja vada which contains pieces of carrots, green peas, potato flakes and other spices,  is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "guoacpjsuoflm98ziorr",
                        "price": 9500
                    },
                    "90943767": {
                        "id": 90943767,
                        "name": "Mix Veg Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "wx0amq21zrlmarzwbcne",
                        "price": 9000
                    },
                    "90943770": {
                        "id": 90943770,
                        "name": "Crunchy Roll",
                        "description": "Crunchy wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. vegetable vada which contains carrots, green peas, potato, flakes  and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "zbqwzlijforgw5zjljpd",
                        "price": 13000
                    },
                    "90943771": {
                        "id": 90943771,
                        "name": "Makka Palak Roll",
                        "description": "Makka palak wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. The makka palak vada which contains nutritious spinach, corn, potato and palak, and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "hhcterirkqsqpj6ceabo",
                        "price": 14900
                    },
                    "90943772": {
                        "id": 90943772,
                        "name": "Paneer Roll",
                        "description": "Paneer wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. the paneer vada which contains spicy paneer is place in the salad, which is then  loaded with veg mayonnaise followed by dry garlic chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "xjgzj3ecuwkwcfajlara",
                        "price": 16000
                    },
                    "91270164": {
                        "id": 91270164,
                        "name": "Harabhara Roll",
                        "description": "Harabhara wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. The harabhara wrap which contains multiple nutritious spinach, corn, potato and palak, and other spices is place in the salad, which is then loaded with zesty mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "jfkrlxqtrwc8ux0ztrln",
                        "price": 14900
                    },
                    "91270165": {
                        "id": 91270165,
                        "name": "Masala Roll",
                        "description": "Spicy masala wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. veg masala vada which contains carrots, green peas, potato, flakes  and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "rikztzunrk4b8pxb5tqd",
                        "price": 12500
                    },
                    "91270166": {
                        "id": 91270166,
                        "name": "Veg Spicy Keema Roll",
                        "description": "SPICY KEEMA VADA WITH ZESTY MAYO ITS SO YUMMY TASTE",
                        "cloudinaryImageId": "xtoflgoiqt6ul2vygqzz",
                        "price": 12900
                    },
                    "91270199": {
                        "id": 91270199,
                        "name": "Chatpata Vada Pav",
                        "description": "Chatpata vada pav is prepared by applying with zesty mayonnaise followed by dry garlic  chutney.the spicy chatpata vada and other spices, is place in between the pav which is then rapped in  the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "nvlxzvbjj01stq799krx",
                        "price": 9000
                    },
                    "91270200": {
                        "id": 91270200,
                        "name": "Cheese Vada Pav",
                        "description": "Cheese vada pav is prepared by applying tom chilli sause and cheese slice or dry garlic chutney on the pav. the cheese vada which contains fine qulity potato, mixed with our special thecha is placed  in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "jgfpoz0vjuhrdmm5tszi",
                        "price": 8500
                    },
                    "91270201": {
                        "id": 91270201,
                        "name": "Harabhara Vada Pav",
                        "description": "Makka palak vada pav is prepared by applying premium quility veg mayonnaise on the pav. the makka palak vada which contains nutritious spinach, corn, potato and palak, is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "osesjuyqhwbl0npzvcea",
                        "price": 9000
                    },
                    "91270202": {
                        "id": 91270202,
                        "name": "Keema Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "k36fiigph5ige3tdtteb",
                        "price": 8500
                    },
                    "91270203": {
                        "id": 91270203,
                        "name": "Makka Palak Vada Pav",
                        "description": "Makka palak vada pav is prepared by applying premium quility veg mayonnaise on the pav. the makka palak vada which contains nutritious spinach, corn, potato and palak, is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "zhptycels7n5rxsdmib4",
                        "price": 9000
                    },
                    "91270205": {
                        "id": 91270205,
                        "name": "Paneer Supreme Vada Pav",
                        "description": "Paneer vada pav is prepared by applying premium quility veg mayonnaise on the pav. the spicy panner vada and other spices, is place in between the pav which is then rapped in  the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "xrdxgyk48poxlm0wqimz",
                        "price": 13000
                    },
                    "91270206": {
                        "id": 91270206,
                        "name": "Cheese Corn Balls",
                        "description": "Cheese corn pops are small trangle shaped nuggets containing cheese, and potato with other seasoning, the are fried and served hot in wrapped with butter paper.",
                        "cloudinaryImageId": "twwgviu1gul0wsiqgojg",
                        "price": 9800
                    },
                    "91270207": {
                        "id": 91270207,
                        "name": "Cheesy Ungli(cvp)",
                        "description": "",
                        "cloudinaryImageId": "zhhdqr4lrxzcornftqmi",
                        "price": 12000
                    },
                    "91270208": {
                        "id": 91270208,
                        "name": "Chilli Potato Shots",
                        "description": "Spicy potato garlic nugguts 10 pcs",
                        "cloudinaryImageId": "j1xg3rw9ex7fb51ndvnz",
                        "price": 7500
                    },
                    "91270209": {
                        "id": 91270209,
                        "name": "Choco Lava Cake",
                        "description": "",
                        "cloudinaryImageId": "kdpcvavozj68ykv8cnp6",
                        "price": 12000
                    },
                    "91270210": {
                        "id": 91270210,
                        "name": "Fries",
                        "description": "Fine quility salted french fries with kechup",
                        "cloudinaryImageId": "o6vkqlax7uf0gltshafq",
                        "price": 9900
                    },
                    "91270211": {
                        "id": 91270211,
                        "name": "Onion Ring(cvp)",
                        "description": "",
                        "cloudinaryImageId": "dvbd6o5jajejlsagjapw",
                        "price": 9900
                    },
                    "91270212": {
                        "id": 91270212,
                        "name": "Sabudana",
                        "description": "Two sabudana vadas ontaining sago and potato are fried and served hot crispy with green chillies and kechup sauces.",
                        "cloudinaryImageId": "ubx7bacd9xnsmbpkiusw",
                        "price": 8000
                    },
                    "91270213": {
                        "id": 91270213,
                        "name": "Goli Pav Bhaji",
                        "description": "",
                        "cloudinaryImageId": "fnvsudo7onwwapl5j9i1",
                        "price": 19900
                    },
                    "91270214": {
                        "id": 91270214,
                        "name": "Missal Pav",
                        "description": "",
                        "cloudinaryImageId": "t2ftryby1zwnwihjcd8t",
                        "price": 19900
                    },
                    "91270215": {
                        "id": 91270215,
                        "name": "Pav Bhaji Meals",
                        "description": "Pav bhaji + classic vada pav + fries.",
                        "cloudinaryImageId": "nmd7ygd2y8b7sp7rumkp",
                        "price": 29900
                    },
                    "91270216": {
                        "id": 91270216,
                        "name": "Roll Vadapav Meals",
                        "description": "Crunchy roll + classic vada pav + fries.",
                        "cloudinaryImageId": "utv23lvyn3do4qwkujrv",
                        "price": 24900
                    },
                    "91270224": {
                        "id": 91270224,
                        "name": "Shikanji",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 8000
                    },
                    "97008161": {
                        "id": 97008161,
                        "name": "Chilli Veg Paneer Cheese Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "omkagbrquvmf7z6dotz6",
                        "price": 14000
                    },
                    "97008162": {
                        "id": 97008162,
                        "name": "Paneer Delight Spicy Burger",
                        "description": "",
                        "cloudinaryImageId": "hzetrq65aomjbu160lzl",
                        "price": 13900
                    },
                    "97008163": {
                        "id": 97008163,
                        "name": "Allu Tikki Burger",
                        "description": "",
                        "cloudinaryImageId": "wxiunrq6oazlipnfjdit",
                        "price": 7500
                    },
                    "97008164": {
                        "id": 97008164,
                        "name": "Maharaja Burger",
                        "description": "Our best selling burger with crispy veg patty fresh onion and our signature sauce",
                        "cloudinaryImageId": "y0leujotp0hryezbbnh5",
                        "price": 9900
                    },
                    "97008165": {
                        "id": 97008165,
                        "name": "Veg Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "eyblnqyuwxy9krugcxr4",
                        "price": 12000
                    },
                    "100931082": {
                        "id": 100931082,
                        "name": "Veg Cheese Corn Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "wxtyht07mxp6pdvwt1ae",
                        "price": 14000
                    },
                    "101868354": {
                        "id": 101868354,
                        "name": "Grilled Classic Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 7500
                    },
                    "101868355": {
                        "id": 101868355,
                        "name": "Grilled Maharaja Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 9900
                    },
                    "101868356": {
                        "id": 101868356,
                        "name": "Grilled Makka Palak Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 9500
                    },
                    "101868357": {
                        "id": 101868357,
                        "name": "Grilled Masala Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 9500
                    },
                    "101868358": {
                        "id": 101868358,
                        "name": "Grilled Paneer Supreme Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 13500
                    },
                    "101868359": {
                        "id": 101868359,
                        "name": "Grilled Schezwan Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "cloudinaryImageId": "",
                        "price": 9000
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "649038",
            "name": "Wrappers",
            "city": "Noida 1",
            "area": "Sector 72",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "4af8e5f85ec08b3a05596aadd3868fef",
            "costForTwoMsg": "₹300 for two",
            "cuisines": ["Chinese", "Indian"],
            "menu": {
                "items": {
                    "106053253": {
                        "id": 106053253,
                        "name": "Veg Manchurian Combo ",
                        "description": "1 Veg Manchurian Gravy + 1 Noodles or Fried Rice",
                        "cloudinaryImageId": "fb4234f551ffecdeb7d3f5da02688e90",
                        "price": 23000
                    },
                    "106053254": {
                        "id": 106053254,
                        "name": "Mutton Seekh Roll",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 20000
                    },
                    "106053256": {
                        "id": 106053256,
                        "name": "Mushroom Tiika Roll",
                        "description": "",
                        "cloudinaryImageId": "ff1dcdf9050951e6bb75ce4095b5feac",
                        "price": 18000
                    },
                    "106053258": {
                        "id": 106053258,
                        "name": "Paneer Hot Garlic Combo ",
                        "description": "1 Paneer Hot Garlic Gravy + 1 Noodles",
                        "cloudinaryImageId": "",
                        "price": 28000
                    },
                    "106053261": {
                        "id": 106053261,
                        "name": "Chilli Paneer Combo ",
                        "description": "Chilli Paneer Gravy + Noodles or Fried Rice",
                        "cloudinaryImageId": "004a976f3b8060924820bf10353921d9",
                        "price": 28000
                    },
                    "106053263": {
                        "id": 106053263,
                        "name": "Chilli Mutton Seekh Roll",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22500
                    },
                    "106053265": {
                        "id": 106053265,
                        "name": "Chilli Chaap Combo ",
                        "description": "1 Chilli Chaap Gravy + 1 Noodles or Fried Rice",
                        "cloudinaryImageId": "",
                        "price": 27500
                    },
                    "106053266": {
                        "id": 106053266,
                        "name": "Masala Chaap Roll",
                        "description": "A deliciously hearty roll stuffed with protein-rich soya chunks, onions and vegetables in tasty sauce; served with green chutney.",
                        "cloudinaryImageId": "037bdbc1bd70781c429fddd70556c9ec",
                        "price": 21000
                    },
                    "106053268": {
                        "id": 106053268,
                        "name": "Chicken Manchurian Combo ",
                        "description": "1 Chicken Manchurian Gravy + 1 Noodles or Fried Rice",
                        "cloudinaryImageId": "fb4234f551ffecdeb7d3f5da02688e90",
                        "price": 28000
                    },
                    "106053270": {
                        "id": 106053270,
                        "name": "Makhani Chaap Roll",
                        "description": "",
                        "cloudinaryImageId": "ff1dcdf9050951e6bb75ce4095b5feac",
                        "price": 20000
                    },
                    "106053271": {
                        "id": 106053271,
                        "name": "Chilli Chicken Combo ",
                        "description": "1 Chilli Chicken Gravy + 1 Noodles or Fried Rice",
                        "cloudinaryImageId": "004a976f3b8060924820bf10353921d9",
                        "price": 28000
                    },
                    "106053272": {
                        "id": 106053272,
                        "name": "Cheese Chaap Roll",
                        "description": "",
                        "cloudinaryImageId": "msjga9iitqlqy0framn9",
                        "price": 21000
                    },
                    "106053273": {
                        "id": 106053273,
                        "name": "Chicken Hot Garlic Combo ",
                        "description": "Chicken hot garlic gravy + Fried rice or Noodles",
                        "cloudinaryImageId": "",
                        "price": 28000
                    },
                    "106053274": {
                        "id": 106053274,
                        "name": "Kurkure Chaap Roll",
                        "description": "",
                        "cloudinaryImageId": "3ce75ab6d6a1855ce559ce19ba62b963",
                        "price": 22000
                    },
                    "106053275": {
                        "id": 106053275,
                        "name": "Chilli Chaap Roll",
                        "description": "",
                        "cloudinaryImageId": "e4d04ef46d13fb8a1baf4c8a3345babe",
                        "price": 21000
                    },
                    "106053277": {
                        "id": 106053277,
                        "name": "Chaap 65 Roll",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053279": {
                        "id": 106053279,
                        "name": "Veg Sweet Corn Soup",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 15000
                    },
                    "106053281": {
                        "id": 106053281,
                        "name": "Veg Hot & Sour Soup",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 15000
                    },
                    "106053282": {
                        "id": 106053282,
                        "name": "Veg Manchow Soup",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 15000
                    },
                    "106053284": {
                        "id": 106053284,
                        "name": "Veg Lemon Coriander Soup",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 15000
                    },
                    "106053287": {
                        "id": 106053287,
                        "name": "Chicken Sweet Corn Soup",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 20000
                    },
                    "106053289": {
                        "id": 106053289,
                        "name": "Chicken Hot & Sour Soup",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 20000
                    },
                    "106053291": {
                        "id": 106053291,
                        "name": "Chicken Manchow Soup",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 20000
                    },
                    "106053293": {
                        "id": 106053293,
                        "name": "Chicken Lemon Coriander Soup",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 20000
                    },
                    "106053301": {
                        "id": 106053301,
                        "name": "Special Kurkure Chicken Momos (8 Pcs)",
                        "description": "A mouthwatering serving of delectable chicken kurkure momos made to perfection, rich and flavourful",
                        "cloudinaryImageId": "",
                        "price": 24000
                    },
                    "106053303": {
                        "id": 106053303,
                        "name": "Special Honey Chilli Chicken Momos (8 Pcs)",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 24000
                    },
                    "106053305": {
                        "id": 106053305,
                        "name": "Chicken Manchurian Momos (8 Pcs)",
                        "description": "",
                        "cloudinaryImageId": "c25b1ddabf652ab91b57b69ed862a1d9",
                        "price": 24000
                    },
                    "106053313": {
                        "id": 106053313,
                        "name": "Kurkure Paneer Strips",
                        "description": "",
                        "cloudinaryImageId": "1a2c359671033058260eac164409974a",
                        "price": 39000
                    },
                    "106053315": {
                        "id": 106053315,
                        "name": "Kurkure Chaap Strips",
                        "description": "",
                        "cloudinaryImageId": "1a2c359671033058260eac164409974a",
                        "price": 39000
                    },
                    "106053317": {
                        "id": 106053317,
                        "name": "Creamy Chilli Paneer",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 41000
                    },
                    "106053318": {
                        "id": 106053318,
                        "name": "Chicken 65 Momos (8 Pcs)",
                        "description": "",
                        "cloudinaryImageId": "4c780728d998a33cf1b4425626c7691f",
                        "price": 24500
                    },
                    "106053319": {
                        "id": 106053319,
                        "name": "Creamy Chilli Chaap",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 41000
                    },
                    "106053321": {
                        "id": 106053321,
                        "name": "Creamy Chilli Potato",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 29000
                    },
                    "106053324": {
                        "id": 106053324,
                        "name": "Kurkure Paneer Momos (6 Pcs)",
                        "description": "A mouthwatering serving of delectable paneer kurkure momos made to perfection, rich and flavourful",
                        "cloudinaryImageId": "",
                        "price": 24000
                    },
                    "106053326": {
                        "id": 106053326,
                        "name": "Paneer Chilli Momos (8 Pcs)",
                        "description": "",
                        "cloudinaryImageId": "c25b1ddabf652ab91b57b69ed862a1d9",
                        "price": 23500
                    },
                    "106053327": {
                        "id": 106053327,
                        "name": "Kurkure Chicken Strips",
                        "description": "",
                        "cloudinaryImageId": "1a2c359671033058260eac164409974a",
                        "price": 41000
                    },
                    "106053329": {
                        "id": 106053329,
                        "name": "Chicken Seekh Popcorn",
                        "description": "",
                        "cloudinaryImageId": "128bf39e642de5de6009759e29e82906",
                        "price": 26000
                    },
                    "106053330": {
                        "id": 106053330,
                        "name": "Paneer Manchurian Momos (8 Pcs)",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 23500
                    },
                    "106053331": {
                        "id": 106053331,
                        "name": "Creamy Chilli Chicken",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 44000
                    },
                    "106053332": {
                        "id": 106053332,
                        "name": "Paneer 65 Momos",
                        "description": "",
                        "cloudinaryImageId": "4c780728d998a33cf1b4425626c7691f",
                        "price": 23500
                    },
                    "106053333": {
                        "id": 106053333,
                        "name": "Creamy Chicken Lollipop",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 44000
                    },
                    "106053335": {
                        "id": 106053335,
                        "name": "Mutton Seekh Popcorn",
                        "description": "",
                        "cloudinaryImageId": "128bf39e642de5de6009759e29e82906",
                        "price": 29000
                    },
                    "106053340": {
                        "id": 106053340,
                        "name": "Special Kurkure Veg Momos (8 Pcs)",
                        "description": "A mouthwatering serving of delectable vegetable kurkure momos made to perfection, rich and flavourful",
                        "cloudinaryImageId": "656defd672ea57c1f158118f3969d578",
                        "price": 22500
                    },
                    "106053342": {
                        "id": 106053342,
                        "name": "Special Honey Chilli Veg Momos (8 Pcs)",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22500
                    },
                    "106053345": {
                        "id": 106053345,
                        "name": "Veg Manchurian Momos (8 Pcs)",
                        "description": "",
                        "cloudinaryImageId": "c25b1ddabf652ab91b57b69ed862a1d9",
                        "price": 22500
                    },
                    "106053347": {
                        "id": 106053347,
                        "name": "Veg Chilli Potato",
                        "description": "A popular Indo-Chinese cuisine which is addictive here, potatoes are boiled and fried , mixed with a variety of spices.",
                        "cloudinaryImageId": "96bad641697ad9a22432dd8c6dacac53",
                        "price": 23000
                    },
                    "106053349": {
                        "id": 106053349,
                        "name": "Honey Chilli Potato",
                        "description": "",
                        "cloudinaryImageId": "c67618cf0a4364bf7cad35e9d86c42cd",
                        "price": 24500
                    },
                    "106053351": {
                        "id": 106053351,
                        "name": "Chili Paneer Gravy",
                        "description": "A dish, made from batter-coated paneer deep fried in oil and tossed in a mixture of sauteed capsicum, red chillies, and onions.",
                        "cloudinaryImageId": "p4c8cu9ahaetllgso0et",
                        "price": 22000
                    },
                    "106053353": {
                        "id": 106053353,
                        "name": "Veg Manchurian Dry",
                        "description": "",
                        "cloudinaryImageId": "429964b6ed2dde4a032b04f68bb461a6",
                        "price": 31500
                    },
                    "106053354": {
                        "id": 106053354,
                        "name": "Veg Manchurian Gravy",
                        "description": "A delightfully flavorful dish prepared with fresh veggies made into balls and cooked with flavorful sauces and other masalas.",
                        "cloudinaryImageId": "",
                        "price": 19000
                    },
                    "106053355": {
                        "id": 106053355,
                        "name": "Chilli Paneer Dry",
                        "description": "",
                        "cloudinaryImageId": "8c1478362abf92a3ef066c0e36d97c2b",
                        "price": 36000
                    },
                    "106053356": {
                        "id": 106053356,
                        "name": "Paneer 65",
                        "description": "",
                        "cloudinaryImageId": "7f4ee2725e4b737d694c2d729c83b188",
                        "price": 36500
                    },
                    "106053357": {
                        "id": 106053357,
                        "name": "Chaap 65",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 34500
                    },
                    "106053358": {
                        "id": 106053358,
                        "name": "Veg Singapuri Fried Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053359": {
                        "id": 106053359,
                        "name": "Veg Schezwan Fried Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053360": {
                        "id": 106053360,
                        "name": "Egg Classic Fried Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 23000
                    },
                    "106053361": {
                        "id": 106053361,
                        "name": "Chicken Classic Fried Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 27500
                    },
                    "106053362": {
                        "id": 106053362,
                        "name": "Chicken Singapuri Fried Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 27500
                    },
                    "106053363": {
                        "id": 106053363,
                        "name": "Chicken Schezwan Fried Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 27500
                    },
                    "106053364": {
                        "id": 106053364,
                        "name": "Egg Chilli Garlic Fried Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 23000
                    },
                    "106053365": {
                        "id": 106053365,
                        "name": "Veg Manchurian Combo",
                        "description": "1 Veg Manchurian Gravy + 1 Noodles or Fried Rice",
                        "cloudinaryImageId": "fb4234f551ffecdeb7d3f5da02688e90",
                        "price": 23000
                    },
                    "106053366": {
                        "id": 106053366,
                        "name": "Paneer Hot Garlic Combo",
                        "description": "1 Paneer Hot Garlic Gravy + 1 Noodles",
                        "cloudinaryImageId": "",
                        "price": 28000
                    },
                    "106053367": {
                        "id": 106053367,
                        "name": "Chilli Paneer Combo",
                        "description": "Chilli Paneer Gravy + Noodles or Fried Rice",
                        "cloudinaryImageId": "004a976f3b8060924820bf10353921d9",
                        "price": 28000
                    },
                    "106053368": {
                        "id": 106053368,
                        "name": "Chilli Chaap Combo",
                        "description": "1 Chilli Chaap Gravy + 1 Noodles or Fried Rice",
                        "cloudinaryImageId": "",
                        "price": 27500
                    },
                    "106053369": {
                        "id": 106053369,
                        "name": "Chicken Manchurian Combo",
                        "description": "1 Chicken Manchurian Gravy + 1 Noodles or Fried Rice",
                        "cloudinaryImageId": "fb4234f551ffecdeb7d3f5da02688e90",
                        "price": 28000
                    },
                    "106053370": {
                        "id": 106053370,
                        "name": "Chilli Chicken Combo",
                        "description": "1 Chilli Chicken Gravy + 1 Noodles or Fried Rice",
                        "cloudinaryImageId": "004a976f3b8060924820bf10353921d9",
                        "price": 28000
                    },
                    "106053371": {
                        "id": 106053371,
                        "name": "Chicken Hot Garlic Combo",
                        "description": "Chicken hot garlic gravy + Fried rice or  Noodles",
                        "cloudinaryImageId": "",
                        "price": 28000
                    },
                    "106053372": {
                        "id": 106053372,
                        "name": "Double Egg Roll",
                        "description": "Golden brown rolls prepared with double servings of egg; pan fried till golden brown - perfect treat for your taste buds.",
                        "cloudinaryImageId": "8c7f4a3bd071d8c44e2b3b9202a85dc3",
                        "price": 9900
                    },
                    "106053373": {
                        "id": 106053373,
                        "name": "Triple Egg Roll",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 11000
                    },
                    "106053374": {
                        "id": 106053374,
                        "name": "Egg Cheese Roll",
                        "description": "An indulgent roll stuffed with protein-packed eggs and generous helping of grated cheese; served with green chutney and onions.",
                        "cloudinaryImageId": "",
                        "price": 12000
                    },
                    "106053375": {
                        "id": 106053375,
                        "name": "Egg Makhni Roll",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 12000
                    },
                    "106053376": {
                        "id": 106053376,
                        "name": "Single Chicken Masala Roll",
                        "description": "",
                        "cloudinaryImageId": "15c60efd22d801ada58304b0d8cbc69b",
                        "price": 20000
                    },
                    "106053377": {
                        "id": 106053377,
                        "name": "Chicken Seekh Roll",
                        "description": "Soft rumali rotis rolled in with minced chicken cooked to tender perfection.",
                        "cloudinaryImageId": "5f9466a79a25f66662c50d3039341745",
                        "price": 19000
                    },
                    "106053378": {
                        "id": 106053378,
                        "name": "Hot Garlic Paneer",
                        "description": "",
                        "cloudinaryImageId": "8c1478362abf92a3ef066c0e36d97c2b",
                        "price": 37500
                    },
                    "106053379": {
                        "id": 106053379,
                        "name": "Double Chicken Masala Roll",
                        "description": "",
                        "cloudinaryImageId": "e4d04ef46d13fb8a1baf4c8a3345babe",
                        "price": 24500
                    },
                    "106053380": {
                        "id": 106053380,
                        "name": "Chicken Tikka Roll",
                        "description": "A scrumptious roll containing Pcs of spicy chicken tikka layered along with select vegetables and stuffed in a rumali roti.",
                        "cloudinaryImageId": "15c60efd22d801ada58304b0d8cbc69b",
                        "price": 23000
                    },
                    "106053381": {
                        "id": 106053381,
                        "name": "Chicken Roll",
                        "description": "A scrumptious roll stuffed generously with juicy chicken chunks and assorted veggies served with 2 dips.",
                        "cloudinaryImageId": "e71a8cecb3fee4d37964973c00498dc3",
                        "price": 20000
                    },
                    "106053382": {
                        "id": 106053382,
                        "name": "Chilli Chaap",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 34500
                    },
                    "106053383": {
                        "id": 106053383,
                        "name": "Cheese Chicken Tikka Roll",
                        "description": "Roll filled with chunks of chicken tikka,seasoned with garlic and red chilli for added taste.",
                        "cloudinaryImageId": "15c60efd22d801ada58304b0d8cbc69b",
                        "price": 24000
                    },
                    "106053384": {
                        "id": 106053384,
                        "name": "Butter Chicken Roll",
                        "description": "Soft rumali rotis filled with a delicious butter chicken stuffing.",
                        "cloudinaryImageId": "5f9466a79a25f66662c50d3039341745",
                        "price": 24500
                    },
                    "106053386": {
                        "id": 106053386,
                        "name": "Chicken Malai Tikka Roll",
                        "description": "",
                        "cloudinaryImageId": "17e21ccadb5f4303938896f43515a9c4",
                        "price": 23500
                    },
                    "106053387": {
                        "id": 106053387,
                        "name": "Chilli Chicken Roll",
                        "description": "A deliciously spicy roll stuffed with crispy and irresistible chilli chicken.",
                        "cloudinaryImageId": "45b94863f8ef73f8dc068917703f2b71",
                        "price": 23000
                    },
                    "106053388": {
                        "id": 106053388,
                        "name": "Chicken 65 Roll",
                        "description": "",
                        "cloudinaryImageId": "e4d04ef46d13fb8a1baf4c8a3345babe",
                        "price": 22500
                    },
                    "106053390": {
                        "id": 106053390,
                        "name": "Kurkure Chicken Roll",
                        "description": "",
                        "cloudinaryImageId": "3ce75ab6d6a1855ce559ce19ba62b963",
                        "price": 22000
                    },
                    "106053391": {
                        "id": 106053391,
                        "name": "Kurkure Chicken Seekh Roll",
                        "description": "",
                        "cloudinaryImageId": "3ce75ab6d6a1855ce559ce19ba62b963",
                        "price": 22500
                    },
                    "106053392": {
                        "id": 106053392,
                        "name": "Crispy Sweet Corn",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33000
                    },
                    "106053393": {
                        "id": 106053393,
                        "name": "Honey Chilli Chicken Roll",
                        "description": "",
                        "cloudinaryImageId": "9fbc7fbdb74daedec9f3c7805d6b3feb",
                        "price": 22000
                    },
                    "106053394": {
                        "id": 106053394,
                        "name": "Garlic Chicken Tikka Roll",
                        "description": "",
                        "cloudinaryImageId": "e71a8cecb3fee4d37964973c00498dc3",
                        "price": 24000
                    },
                    "106053396": {
                        "id": 106053396,
                        "name": "Cheese Chicken Malai Tikka Roll",
                        "description": "",
                        "cloudinaryImageId": "975a10fe92ef03a81dd211484da77c07",
                        "price": 24500
                    },
                    "106053397": {
                        "id": 106053397,
                        "name": "Cheese Chicken Masala Roll",
                        "description": "",
                        "cloudinaryImageId": "a1069058fb010f88495838165a831fcc",
                        "price": 22000
                    },
                    "106053398": {
                        "id": 106053398,
                        "name": "Single Paneer Masala Roll",
                        "description": "",
                        "cloudinaryImageId": "e71a8cecb3fee4d37964973c00498dc3",
                        "price": 20000
                    },
                    "106053399": {
                        "id": 106053399,
                        "name": "Paneer Tikka Roll",
                        "description": "A wholesome roll stuffed with soft paneer chunks in a flavor-packed dressing.",
                        "cloudinaryImageId": "8c7f4a3bd071d8c44e2b3b9202a85dc3",
                        "price": 23500
                    },
                    "106053400": {
                        "id": 106053400,
                        "name": "Chilli Chaap Gravy",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 20000
                    },
                    "106053401": {
                        "id": 106053401,
                        "name": "Double Paneer Masala Roll",
                        "description": "",
                        "cloudinaryImageId": "8c7f4a3bd071d8c44e2b3b9202a85dc3",
                        "price": 24500
                    },
                    "106053402": {
                        "id": 106053402,
                        "name": "Paneer Roll",
                        "description": "Rumali rotis rolled with squelchy paneer.",
                        "cloudinaryImageId": "8c7f4a3bd071d8c44e2b3b9202a85dc3",
                        "price": 20000
                    },
                    "106053403": {
                        "id": 106053403,
                        "name": "Chilli Paneer Roll",
                        "description": "A scrumptious roll stuffed with hot and spicy chilli paneer chunks.",
                        "cloudinaryImageId": "45b94863f8ef73f8dc068917703f2b71",
                        "price": 22000
                    },
                    "106053404": {
                        "id": 106053404,
                        "name": "Paneer Bhurji Roll",
                        "description": "",
                        "cloudinaryImageId": "5f9466a79a25f66662c50d3039341745",
                        "price": 21000
                    },
                    "106053406": {
                        "id": 106053406,
                        "name": "Achari Paneer Tikka Roll",
                        "description": "",
                        "cloudinaryImageId": "e4d04ef46d13fb8a1baf4c8a3345babe",
                        "price": 22000
                    },
                    "106053407": {
                        "id": 106053407,
                        "name": "Cheese Paneer Roll",
                        "description": "",
                        "cloudinaryImageId": "975a10fe92ef03a81dd211484da77c07",
                        "price": 22000
                    },
                    "106053408": {
                        "id": 106053408,
                        "name": "Kurkure Paneer Roll",
                        "description": "",
                        "cloudinaryImageId": "3ce75ab6d6a1855ce559ce19ba62b963",
                        "price": 23000
                    },
                    "106053409": {
                        "id": 106053409,
                        "name": "Paneer Hot Garlic Gravy",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22500
                    },
                    "106053411": {
                        "id": 106053411,
                        "name": "Cheese Paneer Masala Roll",
                        "description": "",
                        "cloudinaryImageId": "037bdbc1bd70781c429fddd70556c9ec",
                        "price": 21000
                    },
                    "106053412": {
                        "id": 106053412,
                        "name": "Mix Veg Roll",
                        "description": "A scrumptious roll stuffed with assorted vegetables seasoned to perfection.",
                        "cloudinaryImageId": "fe6e11802f706c91c0d6ff487f1d8105",
                        "price": 12000
                    },
                    "106053413": {
                        "id": 106053413,
                        "name": "Kurkure Mutton Seekh Roll",
                        "description": "",
                        "cloudinaryImageId": "3ce75ab6d6a1855ce559ce19ba62b963",
                        "price": 23000
                    },
                    "106053414": {
                        "id": 106053414,
                        "name": "Chicken Lollipop",
                        "description": "",
                        "cloudinaryImageId": "h8kqa9cpnlaiabpna2sf",
                        "price": 37500
                    },
                    "106053415": {
                        "id": 106053415,
                        "name": "Chilli Potato Roll",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 18000
                    },
                    "106053416": {
                        "id": 106053416,
                        "name": "Veg Manchurian Roll",
                        "description": "A hot and spicy roll packed generously with crispy vegetable Manchurian chunks; served with sauce.",
                        "cloudinaryImageId": "e4d04ef46d13fb8a1baf4c8a3345babe",
                        "price": 20000
                    },
                    "106053417": {
                        "id": 106053417,
                        "name": "Drums Of Heaven",
                        "description": "Chicken.",
                        "cloudinaryImageId": "e2fa17aaddad8856ae100cd8774e3384",
                        "price": 41000
                    },
                    "106053419": {
                        "id": 106053419,
                        "name": "Chicken Manchurian Dry",
                        "description": "",
                        "cloudinaryImageId": "f4ccb8f7aec7666eba17fe9a34aaa3bd",
                        "price": 37500
                    },
                    "106053420": {
                        "id": 106053420,
                        "name": "Chilli Chicken Dry",
                        "description": "",
                        "cloudinaryImageId": "31a54556881c668d7c447bbab5aa0514",
                        "price": 37500
                    },
                    "106053421": {
                        "id": 106053421,
                        "name": "Lemon Chilli Chicken Dry",
                        "description": "",
                        "cloudinaryImageId": "31a54556881c668d7c447bbab5aa0514",
                        "price": 37500
                    },
                    "106053422": {
                        "id": 106053422,
                        "name": "Chicken 65",
                        "description": "",
                        "cloudinaryImageId": "7f4ee2725e4b737d694c2d729c83b188",
                        "price": 38000
                    },
                    "106053423": {
                        "id": 106053423,
                        "name": "Chicken Salt & Pepper",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 37500
                    },
                    "106053424": {
                        "id": 106053424,
                        "name": "Hot Garlic Chicken",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 37500
                    },
                    "106053425": {
                        "id": 106053425,
                        "name": "Crispy Honey Chicken",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 37500
                    },
                    "106053426": {
                        "id": 106053426,
                        "name": "Crispy Chicken",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 37500
                    },
                    "106053428": {
                        "id": 106053428,
                        "name": "Chilli Chicken Gravy",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053429": {
                        "id": 106053429,
                        "name": "Chicken Manchurian Gravy",
                        "description": "",
                        "cloudinaryImageId": "t4w0de4g68xtszeumqml",
                        "price": 22000
                    },
                    "106053430": {
                        "id": 106053430,
                        "name": "Chicken In Hot Garlic Sauce",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053431": {
                        "id": 106053431,
                        "name": "Honey Chilli Chicken Gravy",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053440": {
                        "id": 106053440,
                        "name": "Kurkure Chicken Roll ",
                        "description": "",
                        "cloudinaryImageId": "3ce75ab6d6a1855ce559ce19ba62b963",
                        "price": 16000
                    },
                    "106053441": {
                        "id": 106053441,
                        "name": "Special Kurkure Chicken Momos",
                        "description": "",
                        "cloudinaryImageId": "f49d244362381f18195ceee8b86e7b15",
                        "price": 17000
                    },
                    "106053442": {
                        "id": 106053442,
                        "name": "Veg Classic Noodles",
                        "description": "A delectable dish with slippery strands of noodles dressed in a flavorful sauce and tossed along with veggies and spices.",
                        "cloudinaryImageId": "6482422572d0026a86e0e228cfdf5ec3",
                        "price": 21000
                    },
                    "106053443": {
                        "id": 106053443,
                        "name": "Veg Chilli Garlic Noodles",
                        "description": "A scrumptious combo of aromatic veg garlic noodles served with veg chilli gravy and a spicy dip.",
                        "cloudinaryImageId": "f49f2ab44281c4714d3a86888e9503df",
                        "price": 21000
                    },
                    "106053444": {
                        "id": 106053444,
                        "name": "Veg Singapuri Noodles",
                        "description": "A popular fusion Chinese dish, chopsuey is that delicious option that is loved by kids and adults alike. An all time favorite Chinese dish that never fails to delight, you can serve this chopsuey for brunch, lunch or even as a light snack.",
                        "cloudinaryImageId": "b8ffe63c86c0a85de5169433151e7065",
                        "price": 21000
                    },
                    "106053445": {
                        "id": 106053445,
                        "name": "Veg Hakka Noodles",
                        "description": "A delectable dish with slippery strands of noodles dressed in a flavorful sauce and tossed along with veggies and spices.",
                        "cloudinaryImageId": "d15ce96d55a30242a705b7f38fc8554d",
                        "price": 21000
                    },
                    "106053446": {
                        "id": 106053446,
                        "name": "Veg Schezwan Noodles",
                        "description": "",
                        "cloudinaryImageId": "6482422572d0026a86e0e228cfdf5ec3",
                        "price": 21000
                    },
                    "106053447": {
                        "id": 106053447,
                        "name": "Chicken Chilli Garlic Noodles",
                        "description": "A delightfully indulgent combo of aromatic chicken garlic noodles served with chicken chilli gravy and a spicy dip.",
                        "cloudinaryImageId": "f49f2ab44281c4714d3a86888e9503df",
                        "price": 26500
                    },
                    "106053448": {
                        "id": 106053448,
                        "name": "Chicken Classic Noodles",
                        "description": "",
                        "cloudinaryImageId": "6482422572d0026a86e0e228cfdf5ec3",
                        "price": 26500
                    },
                    "106053449": {
                        "id": 106053449,
                        "name": "Chicken Singapuri Noodles",
                        "description": "",
                        "cloudinaryImageId": "b8ffe63c86c0a85de5169433151e7065",
                        "price": 26500
                    },
                    "106053450": {
                        "id": 106053450,
                        "name": "Chicken Schezwan Noodles",
                        "description": "",
                        "cloudinaryImageId": "6482422572d0026a86e0e228cfdf5ec3",
                        "price": 26500
                    },
                    "106053451": {
                        "id": 106053451,
                        "name": "Chicken Hakka Noodles",
                        "description": "",
                        "cloudinaryImageId": "d15ce96d55a30242a705b7f38fc8554d",
                        "price": 26500
                    },
                    "106053452": {
                        "id": 106053452,
                        "name": "Egg Chilli Garlic Noodles",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053453": {
                        "id": 106053453,
                        "name": "Egg Clasic Noodles",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053454": {
                        "id": 106053454,
                        "name": "Egg Singapori Noodles",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053455": {
                        "id": 106053455,
                        "name": "Veg Classic Fried Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053456": {
                        "id": 106053456,
                        "name": "Chicken Chilli Garlic Fried Rice",
                        "description": "A deliciously aromatic dish prepared with rice and juicy chicken chunks tossed in spicy chilli garlic sauce.",
                        "cloudinaryImageId": "",
                        "price": 27500
                    },
                    "106053457": {
                        "id": 106053457,
                        "name": "Veg Chilli Garlic Fried Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 22000
                    },
                    "106053459": {
                        "id": 106053459,
                        "name": "Special Veg 65 Momos (8 Pcs)",
                        "description": "",
                        "cloudinaryImageId": "4c780728d998a33cf1b4425626c7691f",
                        "price": 23000
                    },
                    "106053460": {
                        "id": 106053460,
                        "name": "Plain Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 15000
                    },
                    "106053461": {
                        "id": 106053461,
                        "name": "Jeera Rice",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 16000
                    },
                    "106053469": {
                        "id": 106053469,
                        "name": "Classic Chicken Shawarma",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 13000
                    },
                    "106053470": {
                        "id": 106053470,
                        "name": "Tandoori Chicken Shawarma",
                        "description": "",
                        "cloudinaryImageId": "47cadc6a118b67e0287e3dd9fe073a6b",
                        "price": 14000
                    },
                    "106053471": {
                        "id": 106053471,
                        "name": "Cheese Chicken Shawarma",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 14000
                    },
                    "106053472": {
                        "id": 106053472,
                        "name": "Special Butter Chicken Shawarma",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 14000
                    },
                    "106053473": {
                        "id": 106053473,
                        "name": "Special Kurkure Chicken Shawarma",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 18000
                    },
                    "106053474": {
                        "id": 106053474,
                        "name": "Classic Paneer Shawarma",
                        "description": "",
                        "cloudinaryImageId": "04efecc43a007a3fd4760a1260815427",
                        "price": 13000
                    },
                    "106053475": {
                        "id": 106053475,
                        "name": "Tandoori Paneer Shawarma",
                        "description": "",
                        "cloudinaryImageId": "98b4af5713b88bc8e4c4eda77b34295f",
                        "price": 14000
                    },
                    "106053476": {
                        "id": 106053476,
                        "name": "Cheese Paneer Shawarma",
                        "description": "",
                        "cloudinaryImageId": "04efecc43a007a3fd4760a1260815427",
                        "price": 14000
                    },
                    "106053477": {
                        "id": 106053477,
                        "name": "Special Makhani Paneer Shawarma",
                        "description": "",
                        "cloudinaryImageId": "98b4af5713b88bc8e4c4eda77b34295f",
                        "price": 14000
                    },
                    "106053478": {
                        "id": 106053478,
                        "name": "Special Kurkure Paneer Shawarma",
                        "description": "",
                        "cloudinaryImageId": "3c81697bb3e9ccc649b85bf9d6c3f945",
                        "price": 18000
                    },
                    "106053479": {
                        "id": 106053479,
                        "name": "French Fries",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 16500
                    },
                    "106053480": {
                        "id": 106053480,
                        "name": "Peri Peri Fries",
                        "description": "",
                        "cloudinaryImageId": "tdx9ggydbxjwuruzlnr1",
                        "price": 16500
                    },
                    "106053483": {
                        "id": 106053483,
                        "name": "Cheese Fries",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 19500
                    },
                    "106053484": {
                        "id": 106053484,
                        "name": "Veg Shawarma Burger",
                        "description": "",
                        "cloudinaryImageId": "47cadc6a118b67e0287e3dd9fe073a6b",
                        "price": 14000
                    },
                    "106053485": {
                        "id": 106053485,
                        "name": "Kurkure Paneer Burger",
                        "description": "",
                        "cloudinaryImageId": "7c8734e5449b64d6ffa94ea704ba06df",
                        "price": 16000
                    },
                    "106053486": {
                        "id": 106053486,
                        "name": "Kurkure Chaap Burger",
                        "description": "",
                        "cloudinaryImageId": "7c8734e5449b64d6ffa94ea704ba06df",
                        "price": 16000
                    },
                    "106053487": {
                        "id": 106053487,
                        "name": "Chicken Shawarma Burger",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 14000
                    },
                    "106053488": {
                        "id": 106053488,
                        "name": "Kurkure Chicken Kabab Burger",
                        "description": "",
                        "cloudinaryImageId": "7c8734e5449b64d6ffa94ea704ba06df",
                        "price": 17000
                    },
                    "106053489": {
                        "id": 106053489,
                        "name": "Chicken Tikka Cheese Nanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33000
                    },
                    "106053490": {
                        "id": 106053490,
                        "name": "Chicken Malai Tikka Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33500
                    },
                    "106053491": {
                        "id": 106053491,
                        "name": "Butter Chicken Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33500
                    },
                    "106053492": {
                        "id": 106053492,
                        "name": "Garlic Chicken Tikka Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33500
                    },
                    "106053493": {
                        "id": 106053493,
                        "name": "Chicken Seekh Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33000
                    },
                    "106053494": {
                        "id": 106053494,
                        "name": "Mutton Seekh Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 34000
                    },
                    "106053495": {
                        "id": 106053495,
                        "name": "Chicken 65 Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 34000
                    },
                    "106053496": {
                        "id": 106053496,
                        "name": "Paneer Tikka Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33000
                    },
                    "106053497": {
                        "id": 106053497,
                        "name": "Achari Paneer Tikka Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33500
                    },
                    "106053499": {
                        "id": 106053499,
                        "name": "Masala Chaap Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33000
                    },
                    "106053500": {
                        "id": 106053500,
                        "name": "Paneer 65 Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 34000
                    },
                    "106053501": {
                        "id": 106053501,
                        "name": "Chaap 65 Cheese Naanwich",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 33000
                    },
                    "107140671": {
                        "id": 107140671,
                        "name": "Chicken Shawarma Burger  ",
                        "description": "An irresistibly delicious burger with crispy chicken pieces layered on a bed of fresh vegetables.",
                        "cloudinaryImageId": "",
                        "price": 20900
                    },
                    "107159767": {
                        "id": 107159767,
                        "name": "Kurkure Chicken Seekh Burger",
                        "description": "An irresistibly delicious burger with crispy chicken seekh pieces layered on a bed of fresh vegetables.",
                        "cloudinaryImageId": "",
                        "price": 20900
                    },
                    "107210241": {
                        "id": 107210241,
                        "name": "Paneer Shawarma Burger",
                        "description": "An appetizing burger filled with strips of juicy paneer.",
                        "cloudinaryImageId": "",
                        "price": 18000
                    },
                    "107269596": {
                        "id": 107269596,
                        "name": "Tandoori Chaap Roll",
                        "description": "A delectable roll with a generous stuffing of perfectly cooked, tandoori chaap chunks.",
                        "cloudinaryImageId": "",
                        "price": 18000
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "355356",
            "name": "Grameen Kulfi",
            "city": "Noida 1",
            "area": "Indirapuram",
            "avgRatingString": "4.7",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "bonyktezt5gx95vunmal",
            "costForTwoMsg": "₹120 for two",
            "cuisines": ["Desserts", "Ice Cream"],
            "menu": {
                "items": {
                    "66751874": {
                        "id": 66751874,
                        "name": "Alphonso Mango Stick Kulfi",
                        "description": "Enjoy summer-y kulfi made with the king of fruits -- alphonso mango pulp is combines with rich milk rabdi, slow-churned for hours. ",
                        "cloudinaryImageId": "29b6554da804190c3ef34eea0c93c960",
                        "price": 5085
                    },
                    "66751878": {
                        "id": 66751878,
                        "name": "Anjeer Stick Kulfi",
                        "description": "This royal-like treat, is loaded with anjeer (figs) folded into creamy 100% pure milk rabdi slow-churned for hours, fits perfectly for the small wins in life!",
                        "cloudinaryImageId": "326766cd5e14478c87a219ed0934ea34",
                        "price": 5085
                    },
                    "66751883": {
                        "id": 66751883,
                        "name": "Calcutta Paan Stick Kulfi",
                        "description": "Refreshingly famous at desi post meal sessions, meetha paan flavours with saunf & tutti-frutti are folded into 100% pure milk rabdi slow-churned for hours. ",
                        "cloudinaryImageId": "oorbpgljpprluuhztcu2",
                        "price": 5085
                    },
                    "66751887": {
                        "id": 66751887,
                        "name": "Choco+aam Jugalbandi Slice Kulfi (Pack Of 3)",
                        "description": "2 in 1 kulfis are a careful balance of taste & flavour with the best of both worlds put together. Enjoy our alphonso mango & sinful chocolate kulfi jugalbandi. ",
                        "cloudinaryImageId": "cb0bafa6781d7ec690fda80bb033bf68",
                        "price": 16949
                    },
                    "66751901": {
                        "id": 66751901,
                        "name": "Chocolate Stick Kulfi",
                        "description": "A chocolate lover's delight, made special with decadent chocolate folded into 100% pure milk rabdi slow-churned for hours. ",
                        "cloudinaryImageId": "0c7c10ac0d3f3f337be9b42d51d8e1b0",
                        "price": 5085
                    },
                    "66751908": {
                        "id": 66751908,
                        "name": "Desi Malai Stick Kulfi",
                        "description": "A quintessential desi favourite, made with 100% pure milk rabdi slow-churned for hours. Does not contain any colours or preservatives",
                        "cloudinaryImageId": "7857df1597058220319252ad7d882939",
                        "price": 5508
                    },
                    "66751915": {
                        "id": 66751915,
                        "name": "Desi Malai Slice Kulfi (Pack Of 3)",
                        "description": "The classic, authentic, rustic avatar of your favourite kulfi, in form of easy-to-devour slices. This one has been custom-made to deliver creamy perfection. ",
                        "cloudinaryImageId": "axavxo7wytht2iswgt6p",
                        "price": 15254
                    },
                    "66751979": {
                        "id": 66751979,
                        "name": "Desi Malai Matka Kulfi (Pack Of 2)",
                        "description": "Our pack of 2 kulfis, served in matkas, re-create the yester-years together. Enjoy these desi malai matkas made with special rabdi slow-churned for hours. ",
                        "cloudinaryImageId": "c55dd9bd350753007ef7a44aa6e2f7c2",
                        "price": 13559
                    },
                    "66751998": {
                        "id": 66751998,
                        "name": "Shahi Gulkand Stick Kulfi",
                        "description": "This desi kulfi is folded with aromatic gulkand into 100% pure milk rabdi slow-churned for hours",
                        "cloudinaryImageId": "azdc8yo7i1urqroxwwdf",
                        "price": 5085
                    },
                    "87902559": {
                        "id": 87902559,
                        "name": "Shahi Gulkand Matka Kulfi (Pack Of 2)",
                        "description": "The rosy refreshment of gulkand, served in the traditional matka, to make your day all the more special, no matter what the occasion is. ",
                        "cloudinaryImageId": "na0f8k0abd1074ngsq1t",
                        "price": 15254
                    },
                    "87902561": {
                        "id": 87902561,
                        "name": "Alphonso Mango Matka Kulfi (Pack Of 2)",
                        "description": "The crowning flavour of the fruit kingdom is now in the soothing company of the soulful matka, to deliver a tasteful experience that’s uniquely-delicious. ",
                        "cloudinaryImageId": "uqsbeebux5wgzquavkst",
                        "price": 15254
                    },
                    "96297347": {
                        "id": 96297347,
                        "name": "Shahi Gulkand Slice Kulfi (Pack Of 3)",
                        "description": "If you’d like to experience the regal side of the good life, the shahi gulkand slice kulfi is an ideal pick that you can simply not afford to miss out on. ",
                        "cloudinaryImageId": "q1x4ih3zr6h7cxx81l16",
                        "price": 16949
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "49433",
            "name": "Goli Vada Pav No.1",
            "city": "Noida 1",
            "area": "Ghaziabad",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "aw5btqdfxp7xkzyiuwdr",
            "costForTwoMsg": "₹100 for two",
            "cuisines": ["Maharashtrian", "North Indian"],
            "menu": {
                "items": {
                    "11862207": {
                        "id": 11862207,
                        "name": "Makkai Palak Vada Pav",
                        "description": "Makka palak vada pav is prepared by applying premium quality veg mayonnaise on the pav. The makka palak vada which contains nutritious spinach, corn, potato and other spices, is placed in between the pav which is then wrapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "so38l0gnncynb0zhyhti",
                        "price": 0,
                        "defaultPrice": 8500
                    },
                    "11862209": {
                        "id": 11862209,
                        "name": "Masala Vada Pav",
                        "description": "Masala vada pav is prepared by applying tom-chilli sauce on the pav. The spicy masala vada which contains fine quility potato, mixed with our special garlic masala is placed in between the pav which is then rapped in the butter paper and served hot.",
                        "cloudinaryImageId": "hyljofixiuhmvo9nphkp",
                        "price": 0,
                        "defaultPrice": 8500
                    },
                    "11862211": {
                        "id": 11862211,
                        "name": "Classic Vada Pav",
                        "description": "Classic vada pav is prepared by applying sweet/tom chilli garlic saus and dry garlic chatni on the pav. The classic vada which contains fine quility potato, mixed with our special goli thecha is placed in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "udpuww2gdsfi1t1arwoe",
                        "price": 0,
                        "defaultPrice": 6500
                    },
                    "11862212": {
                        "id": 11862212,
                        "name": "Crispy Vada Pav",
                        "description": "Veg crispy vada is prepared by applying tom-chilli sauce on the pav. The veg crispy vada which contains fine quality potato, green capsicum, chilli flakes, mixed with our special goli veg crispy. The vada is placed in between the pav which is then wrapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "rxxchpvqtwjejjoghnih",
                        "price": 0,
                        "defaultPrice": 8000
                    },
                    "11862214": {
                        "id": 11862214,
                        "name": "Paneer Supreme Vada Pav",
                        "description": "Paneer vada pav is prepared by applying premium quality veg mayonnaise on the pav. The paneer vada which contains spicy paneer is placed in between the pav which is then wrapped in the butter paper and served hot.",
                        "cloudinaryImageId": "czzioyvgt2c2s9lp0uiu",
                        "price": 0,
                        "defaultPrice": 12500
                    },
                    "11862215": {
                        "id": 11862215,
                        "name": "Maharaja Vada Pav",
                        "description": "Maharaja vada pav is prepared by premium quality veg mayonnaise on the pav . The maharaja vada which contains pieces of carrrots, green peas, potato flakes and other spices, is placed in between the pav which is then wrapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "vsu2mtr7bv9yx8rji0eg",
                        "price": 0,
                        "defaultPrice": 9000
                    },
                    "11862216": {
                        "id": 11862216,
                        "name": "Schezwan Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "tew1bwcumzvfrizbvclg",
                        "price": 0,
                        "defaultPrice": 8500
                    },
                    "11862218": {
                        "id": 11862218,
                        "name": "Crunchy Roll",
                        "description": "Crunchy wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. vegetable vada which contains carrots, green peas, potato, flakes  and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "kkvlproqziozydjlmg16",
                        "price": 0,
                        "defaultPrice": 12500
                    },
                    "11862219": {
                        "id": 11862219,
                        "name": "Makka Palak Roll",
                        "description": "Makka palak wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. The makka palak vada which contains nutritious spinach, corn, potato and palak, and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "hhcterirkqsqpj6ceabo",
                        "price": 0,
                        "defaultPrice": 14900
                    },
                    "11862220": {
                        "id": 11862220,
                        "name": "Paneer Roll",
                        "description": "Paneer wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. the paneer vada which contains spicy paneer is place in the salad, which is then  loaded with veg mayonnaise followed by dry garlic chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "yf4nutxvidpx4nibvsk3",
                        "price": 0,
                        "defaultPrice": 15600
                    },
                    "11862233": {
                        "id": 11862233,
                        "name": "Chilli Garlic Pops",
                        "description": "Spicy potato garlic nuggut 10 pcs",
                        "cloudinaryImageId": "vykvkbthlrlkiso2u287",
                        "price": 7000
                    },
                    "12932974": {
                        "id": 12932974,
                        "name": "Makka Palak Vada Pav",
                        "description": "Makka palak vada pav is prepared by applying premium quility veg mayonnaise on the pav. the makka palak vada which contains nutritious spinach, corn, potato and palak, is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "zhptycels7n5rxsdmib4",
                        "price": 8500
                    },
                    "29843418": {
                        "id": 29843418,
                        "name": "Goli Pav Bhaji",
                        "description": "Choice of quick bites, choice of beverages.",
                        "cloudinaryImageId": "psdz65hogrrdgique5ly",
                        "price": 17900
                    },
                    "29843421": {
                        "id": 29843421,
                        "name": "Sabudana Vada",
                        "description": "Two sabudana vadas ontaining sago and potato are fried and served hot crispy with green chillies and ketchup sauces.",
                        "cloudinaryImageId": "gipcotjyrs6bxbvczaoy",
                        "price": 6500
                    },
                    "42499900": {
                        "id": 42499900,
                        "name": "Misal",
                        "description": "Choice of quick bites, choice of beverages.",
                        "cloudinaryImageId": "msgkrsti5ut0rdggsdnx",
                        "price": 17900
                    },
                    "44630028": {
                        "id": 44630028,
                        "name": "Raw Mango",
                        "description": "",
                        "cloudinaryImageId": "in4xco2nkmsjjqtszxdf",
                        "price": 8000
                    },
                    "44630029": {
                        "id": 44630029,
                        "name": "Shikanji",
                        "description": "",
                        "cloudinaryImageId": "wvz2n4umx6iamihaykn4",
                        "price": 8000
                    },
                    "44630227": {
                        "id": 44630227,
                        "name": "Classic Roll",
                        "description": "Choice of quick bites, choice of beverages.",
                        "cloudinaryImageId": "fbvigyrho4nebxjugzi3",
                        "price": 12000
                    },
                    "44630240": {
                        "id": 44630240,
                        "name": "Cheese Vada Pav",
                        "description": "Cheese vada pav is prepared by applying sweet/tom chilli garlic saus and cheese slice or dry garlic chatni on the pav. The cheese vada which contains fine quility potato, mixed with our special goli thecha is placed in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "b2u4tt0kifkyi2eztwe4",
                        "price": 8500
                    },
                    "44630241": {
                        "id": 44630241,
                        "name": "Crispy Roll",
                        "description": "Crispy wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotill potato rice vada which contains carrots, green peas, potato, flakes  and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "rhorgkgxelotchiif4yu",
                        "price": 12000
                    },
                    "44630255": {
                        "id": 44630255,
                        "name": "Misal Meals.",
                        "description": "Misal + classic + fries + coke (300 ml). Choice of quick bites, choice of beverages.",
                        "cloudinaryImageId": "wqxwq2gg4z34aidxfozx",
                        "price": 29900
                    },
                    "44630264": {
                        "id": 44630264,
                        "name": "Pav Bhaji Meals.",
                        "description": "Pav bhaji + classic + fries + coke (300 ml). Choice of quick bites, choice of beverages.",
                        "cloudinaryImageId": "xuqwqclgdtzznkdybpii",
                        "price": 29900
                    },
                    "44630282": {
                        "id": 44630282,
                        "name": "Goli Fries",
                        "description": "Fine quality plan salted french fries",
                        "cloudinaryImageId": "h3vcjrudetwa5srqpuxg",
                        "price": 9900
                    },
                    "48450719": {
                        "id": 48450719,
                        "name": "Pav Bhaji + French Fries + Shikanji",
                        "description": "",
                        "cloudinaryImageId": "x6fvohoywmnsghip8hol",
                        "price": 29900
                    },
                    "48450754": {
                        "id": 48450754,
                        "name": "2 Classic Vada Pav + 2 Masala Vada Pav + Shikanji",
                        "description": "",
                        "cloudinaryImageId": "b5oxpfkletj9yfomeu3f",
                        "price": 29900
                    },
                    "48450791": {
                        "id": 48450791,
                        "name": "Crispy Vada Pav + French Fries + Crunchy Roll + Shikanji",
                        "description": "",
                        "cloudinaryImageId": "irrivgrveu2zxzgg7uko",
                        "price": 29900
                    },
                    "48450835": {
                        "id": 48450835,
                        "name": "Schezwan Vada Pav + Paneer Roll With Cheese + Shikanji",
                        "description": "",
                        "cloudinaryImageId": "tvwipmwmh2sp6i2navao",
                        "price": 32500
                    },
                    "48450961": {
                        "id": 48450961,
                        "name": "Pav Bhaji Meals. + Shikanji",
                        "description": "",
                        "cloudinaryImageId": "iba5rcwuvch9sy6mhvt7",
                        "price": 34900
                    },
                    "48450985": {
                        "id": 48450985,
                        "name": "Paneer Vada Pav + Paneer Roll With Cheese + Shikanji",
                        "description": "",
                        "cloudinaryImageId": "i1dirbfebh9go5zcesys",
                        "price": 32500
                    },
                    "48451020": {
                        "id": 48451020,
                        "name": "4 Cheese Vada Pav + Shikanji",
                        "description": "",
                        "cloudinaryImageId": "glrsihtrdrqmm6zsp345",
                        "price": 32500
                    },
                    "78588404": {
                        "id": 78588404,
                        "name": "Crunchy Hara Bhara",
                        "description": "Crunchy harabhara vada pav is prepared by applying our customized zesty mayonnaise on the pav. The harbhara vada which contains multipul vegetables, the vada when fried gives kabab taste is placed in between the pav which is then rapped in the butter paper and served hot.",
                        "cloudinaryImageId": "n91amjwxh94penozjgqb",
                        "price": 0,
                        "defaultPrice": 8500
                    },
                    "78588458": {
                        "id": 78588458,
                        "name": "Cheese Corn Ball",
                        "description": "Cheese corn pops are small ball shaped nuggets containing cheese, and potato with other seasoning, the are fried and served hot in wrapped with buteer paper .",
                        "cloudinaryImageId": "bv5ntu78lresotrg4wyl",
                        "price": 9900
                    },
                    "78802801": {
                        "id": 78802801,
                        "name": "Crispy Vada Pav (2) + Crispy Roll (1) +fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "fd1mqsmwq8b4vu9qwenj",
                        "price": 39900
                    },
                    "78802802": {
                        "id": 78802802,
                        "name": "Crispy Vada Pav (2) + Crispy Roll (2) +fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "wdirrnqujtdvvctoc1db",
                        "price": 49900
                    },
                    "78802803": {
                        "id": 78802803,
                        "name": "Crispy Vada Pav (2) + Crispy Roll (2) +fries (1) + 500 Ml Coldrink (2)",
                        "description": "",
                        "cloudinaryImageId": "rqxgoobpbg38z5s2j9cr",
                        "price": 59900
                    },
                    "78802804": {
                        "id": 78802804,
                        "name": "Crispy Vada Pav (3)+ Crispy Roll (3) +fries (2) + 500 Ml Coldrink(2)",
                        "description": "",
                        "cloudinaryImageId": "ddqexcvfni5ckt4119bj",
                        "price": 79900
                    },
                    "78802805": {
                        "id": 78802805,
                        "name": "Crispy Vada Pav (3)+ Crispy Roll (3)+fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "gccnka1fndndadabissu",
                        "price": 69900
                    },
                    "78802806": {
                        "id": 78802806,
                        "name": "Harabhara Vada Pav (2) + Harbhara Roll (1) +fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "vq5o4fldz4gokudgrnnm",
                        "price": 39900
                    },
                    "78802807": {
                        "id": 78802807,
                        "name": "Harabhara Vada Pav (2) + Harbhara Roll (2) +fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "x1k5hk5csc8zinp9sx0w",
                        "price": 49900
                    },
                    "78802808": {
                        "id": 78802808,
                        "name": "Harabhara Vada Pav (2) + Harbhara Roll (2) +fries (1) + 500 Ml Coldrink (2)",
                        "description": "",
                        "cloudinaryImageId": "odjuthmu0icjkgtlnbwi",
                        "price": 59900
                    },
                    "78802809": {
                        "id": 78802809,
                        "name": "Harabhara Vada Pav (3) + Harbhara Roll (3) +fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "lqya5tkvuh55dtbwdx1w",
                        "price": 69900
                    },
                    "78802810": {
                        "id": 78802810,
                        "name": "Harabhara Vada Pav (3) + Harbhara Roll (3) +fries (2) + 500 Ml Coldrink(2)",
                        "description": "",
                        "cloudinaryImageId": "uyfat9igkoyycijsd7lw",
                        "price": 79900
                    },
                    "78802811": {
                        "id": 78802811,
                        "name": "Maharaja Vada (2) + Cruchy Roll (1) + Fries (1) + 500ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "pyixkwfrserh6vozs2nv",
                        "price": 39900
                    },
                    "78802812": {
                        "id": 78802812,
                        "name": "Maharaja Vada (2) + Cruchy Roll (2) + Fries (1) + 500ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "thb4vaxh5r0v6rcmlkp2",
                        "price": 49900
                    },
                    "78802813": {
                        "id": 78802813,
                        "name": "Maharaja Vada (2) + Cruchy Roll (2) + Fries (1) + 500ml Coldrink (2)",
                        "description": "",
                        "cloudinaryImageId": "hhoiozy5iyrenmrzmqcq",
                        "price": 59900
                    },
                    "78802814": {
                        "id": 78802814,
                        "name": "Maharaja Vada (3) + Cruchy Roll (3) + Fries (1) + 500ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "mbch9lkz1sw6gkxo7xii",
                        "price": 69900
                    },
                    "78802815": {
                        "id": 78802815,
                        "name": "Maharaja Vada (3) + Cruchy Roll (3) + Fries (2) + 500ml Coldrink (2)",
                        "description": "",
                        "cloudinaryImageId": "gazycs96gyoh9neszhva",
                        "price": 79900
                    },
                    "78802816": {
                        "id": 78802816,
                        "name": "Makka Palak (2) + Makka Palak Roll (1) + Fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "zpg5c7a8g50cjuutml9q",
                        "price": 39900
                    },
                    "78802817": {
                        "id": 78802817,
                        "name": "Makka Palak (2) + Makka Palak Roll (2) + Fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "xxgbeulnuicnlt17ahyi",
                        "price": 49900
                    },
                    "78802818": {
                        "id": 78802818,
                        "name": "Makka Palak (2) + Makka Palak Roll (2) + Fries (1) + 500 Ml Coldrink (2)",
                        "description": "",
                        "cloudinaryImageId": "pzp7nb5d1xuwqz63im6t",
                        "price": 59900
                    },
                    "78802819": {
                        "id": 78802819,
                        "name": "Makka Palak (3) + Makka Palak Roll (3) + Fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "jickopvlsoxujtoeorua",
                        "price": 69900
                    },
                    "78802820": {
                        "id": 78802820,
                        "name": "Makka Palak (3) + Makka Palak Roll (3) + Fries (2) + 500 Ml Coldrink(2)",
                        "description": "",
                        "cloudinaryImageId": "tmvfnf4f27wsi2izgksv",
                        "price": 79900
                    },
                    "78802821": {
                        "id": 78802821,
                        "name": "Masala Vada Pav(2) + Masala Roll (1) + Fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "kmdlptgpetah47kqmum4",
                        "price": 39900
                    },
                    "78802822": {
                        "id": 78802822,
                        "name": "Masala Vada Pav(2) + Masala Roll (2) + Fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "adn3cu2vosnn1jagk4ul",
                        "price": 49900
                    },
                    "78802823": {
                        "id": 78802823,
                        "name": "Masala Vada Pav(2) + Masala Roll (2) + Fries (1) + 500 Ml Coldrink (2)",
                        "description": "",
                        "cloudinaryImageId": "nf3tdpqeyitsryuamlmf",
                        "price": 59900
                    },
                    "78802824": {
                        "id": 78802824,
                        "name": "Masala Vada Pav(3) + Masala Roll (3) + Fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "c1tudcdh7h2ce4gc3f4j",
                        "price": 69900
                    },
                    "78802825": {
                        "id": 78802825,
                        "name": "Masala Vada Pav(3)+ Masala Roll (3) + Fries (2)+ 500 Ml Coldrink(2)",
                        "description": "",
                        "cloudinaryImageId": "izpy5tau9t3iels3rln3",
                        "price": 79900
                    },
                    "78802826": {
                        "id": 78802826,
                        "name": "Paneer Vada (1) + Panner Roll (1) +fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "hw6knzr9x39tdx2a2hng",
                        "price": 39900
                    },
                    "78802827": {
                        "id": 78802827,
                        "name": "Paneer Vada (2) + Panner Roll (1) +fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "tpefkuwns7nwjkrn3mtm",
                        "price": 49900
                    },
                    "78802828": {
                        "id": 78802828,
                        "name": "Paneer Vada (2) + Panner Roll (1) +fries (1) + 500 Ml Coldrink (2)",
                        "description": "",
                        "cloudinaryImageId": "jewmzungka0zac0svbsw",
                        "price": 59900
                    },
                    "78802829": {
                        "id": 78802829,
                        "name": "Paneer Vada (2) + Panner Roll (2) +fries (2) + 500 Ml Coldrink(2)",
                        "description": "",
                        "cloudinaryImageId": "fzpmslqcqji9gunztwo7",
                        "price": 79900
                    },
                    "78802830": {
                        "id": 78802830,
                        "name": "Paneer Vada (3) + Panner Roll (2) +fries (1) + 500 Ml Coldrink",
                        "description": "",
                        "cloudinaryImageId": "oh9igot4rhoez8xbxit5",
                        "price": 69900
                    },
                    "84375936": {
                        "id": 84375936,
                        "name": "Veg Keema Vada Pav",
                        "description": "VEG KEEMA VADA WITH ZESTY MAYO",
                        "cloudinaryImageId": "eui0zdbsxrgbhtyfvspe",
                        "price": 8000
                    },
                    "84375937": {
                        "id": 84375937,
                        "name": "Veg Keema Roll",
                        "description": "SOYA KEEMA VADA WITH ZESTY MAYO",
                        "cloudinaryImageId": "sc1n6wtxs6zdnryik8tm",
                        "price": 14900
                    },
                    "88873707": {
                        "id": 88873707,
                        "name": "Aalu Tikki Burger",
                        "description": "",
                        "cloudinaryImageId": "y9wc7joe53ve9xlhqywo",
                        "price": 9900
                    },
                    "88873744": {
                        "id": 88873744,
                        "name": "Veg  Grill Sandwich",
                        "description": "Vegetable with our special saus with brwn bred",
                        "cloudinaryImageId": "pznjl02vdt1yiyyxqey3",
                        "price": 9900
                    },
                    "88873761": {
                        "id": 88873761,
                        "name": "Crispy Vada Pav + Goli Fries + Crunchy Roll",
                        "description": "",
                        "cloudinaryImageId": "qpfwgblp19gguc3q89ok",
                        "price": 29900
                    },
                    "88873830": {
                        "id": 88873830,
                        "name": "Crunchy Roll",
                        "description": "Crunchy wrap contains the salad comprising of shredded onion, capsicum and cabbage which is  placed on the trotilla. vegetable vada which contains carrots, green peas, potato, flakes  and other spices is place in the salad, which is then loaded with veg mayonnaise followed by dry garlic  chutney. the trotilla is rolled, grilled with amul butter and then placed in the roll pocket and served hot.",
                        "cloudinaryImageId": "zbqwzlijforgw5zjljpd",
                        "price": 12500
                    },
                    "88873983": {
                        "id": 88873983,
                        "name": "Chatpata Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "xdbolgtj1elrsmrur7us",
                        "price": 9000
                    },
                    "88874005": {
                        "id": 88874005,
                        "name": "Onion Ring",
                        "description": "",
                        "cloudinaryImageId": "hjr8lagjhiqrijw0wg1t",
                        "price": 9900
                    },
                    "88874020": {
                        "id": 88874020,
                        "name": "Cheesy Ungli",
                        "description": "",
                        "cloudinaryImageId": "ehsb5ufeve2e6at1udil",
                        "price": 12000
                    },
                    "88874060": {
                        "id": 88874060,
                        "name": "Peach Ice Tea",
                        "description": "",
                        "cloudinaryImageId": "in4xco2nkmsjjqtszxdf",
                        "price": 8000
                    },
                    "89121249": {
                        "id": 89121249,
                        "name": "Cheesy Ungli(cvp)",
                        "description": "",
                        "cloudinaryImageId": "zhhdqr4lrxzcornftqmi",
                        "price": 12000
                    },
                    "89121256": {
                        "id": 89121256,
                        "name": "Onion Ring(cvp)",
                        "description": "",
                        "cloudinaryImageId": "dvbd6o5jajejlsagjapw",
                        "price": 9900
                    },
                    "90022412": {
                        "id": 90022412,
                        "name": "Classic Vada Pav",
                        "description": "Classic vada pav is prepared by applying tom chilli sause and dry garlic chutney on the pav. the classic vada which contains fine qulity potato,mixed with our special thecha is placed  in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "q8sjiblzfhapckn3wiae",
                        "price": 6500
                    },
                    "90022413": {
                        "id": 90022413,
                        "name": "Crispy Vada Pav",
                        "description": "Crispy vada pav is prepared by applying tom chilli sause and dry garlic chutney on the pav. the crispy vada which contains fine qulity potato, rice, green capsicum, chilli flakes mixed  with our special thecha is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "llsfegafl0wlog8vnrei",
                        "price": 8000
                    },
                    "90022414": {
                        "id": 90022414,
                        "name": "Keema Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "k36fiigph5ige3tdtteb",
                        "price": 8000
                    },
                    "90022415": {
                        "id": 90022415,
                        "name": "Masala Vada Pav",
                        "description": "Masala vada pav is prepared by applying tom chilli sause and dry garlic chutney on the pav. the spicy masala vada which contains fine qulity potato, mutter, mixed spicy masale then with our special thecha is place in between the pav which is then rapped in the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "fky2tioitq7itbxcz1j3",
                        "price": 8500
                    },
                    "90022416": {
                        "id": 90022416,
                        "name": "Mix Veg Vada Pav",
                        "description": "",
                        "cloudinaryImageId": "wx0amq21zrlmarzwbcne",
                        "price": 9000
                    },
                    "90022417": {
                        "id": 90022417,
                        "name": "Paneer Supreme Vada Pav",
                        "description": "Paneer vada pav is prepared by applying premium quility veg mayonnaise on the pav. the spicy panner vada and other spices, is place in between the pav which is then rapped in  the butter paper and served with salted green chillies.",
                        "cloudinaryImageId": "xrdxgyk48poxlm0wqimz",
                        "price": 12500
                    },
                    "90022418": {
                        "id": 90022418,
                        "name": "Schezwan Vada Pav",
                        "description": "Batata vada in a combination of spicy schezwan sauce and tom chilli sause in fresh pav",
                        "cloudinaryImageId": "ldzwufohzw9lsa78mwpu",
                        "price": 8000
                    },
                    "90022419": {
                        "id": 90022419,
                        "name": "Spicy Paneer Burgur",
                        "description": "SPICY PANEER WITH VEGIES and our signature sauce",
                        "cloudinaryImageId": "je0sgsz8kc7yiq4llufv",
                        "price": 12900
                    },
                    "90022420": {
                        "id": 90022420,
                        "name": "Veg Keema Burger",
                        "description": "SPICY SOYA POTATO PATTY WITH VAGIES",
                        "cloudinaryImageId": "ag8voigq19cmlnn3bela",
                        "price": 9900
                    },
                    "90022425": {
                        "id": 90022425,
                        "name": "Veg Cheese Corn Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "o5x7hfkglcx07cmidtzq",
                        "price": 12000
                    },
                    "90022426": {
                        "id": 90022426,
                        "name": "Veg Paneer Cheese Grill Sandwich",
                        "description": "",
                        "cloudinaryImageId": "hle2vicppayryclvjnro",
                        "price": 13900
                    },
                    "101868335": {
                        "id": 101868335,
                        "name": "Grilled Classic Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "price": 6500
                    },
                    "101868336": {
                        "id": 101868336,
                        "name": "Grilled Maharaja Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "price": 9000
                    },
                    "101868338": {
                        "id": 101868338,
                        "name": "Grilled Makka Palak Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "price": 9000
                    },
                    "101868339": {
                        "id": 101868339,
                        "name": "Grilled Masala Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "price": 8500
                    },
                    "101868340": {
                        "id": 101868340,
                        "name": "Grilled Paneer Supreme Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "price": 12500
                    },
                    "101868341": {
                        "id": 101868341,
                        "name": "Grilled Schezwan Vada Pav",
                        "description": "Grilled Vada Pavs With Whole Wheat Breads ,Low Fat, Oils And No Cheese",
                        "price": 8000
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "339318",
            "name": "Marv's Pizza",
            "city": "Noida 1",
            "area": "Indirapuram",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+ ratings",
            "cloudinaryImageId": "oeuwmulapmt7iteyyps0",
            "costForTwoMsg": "₹300 for two",
            "cuisines": ["Pizzas", "Italian"],
            "menu": {
                "items": {
                    "63853631": {
                        "id": 63853631,
                        "name": "Cheese Garlic Bread",
                        "description": "Cheese Garlic Bread",
                        "cloudinaryImageId": "d99kdp3mdd3hjpcmq0qx",
                        "price": 14900
                    },
                    "63853639": {
                        "id": 63853639,
                        "name": "Supreme Garlic Bread",
                        "description": "Sweet Corn, Onion, Jalapeno & Olive",
                        "cloudinaryImageId": "yxz4rurhj71ejcfrqens",
                        "price": 18900
                    },
                    "63853646": {
                        "id": 63853646,
                        "name": "Cheezo Garlic Sticks",
                        "description": "Cheezo Garlic Sticks",
                        "cloudinaryImageId": "yuv7f1tkk9wfosqrrz4f",
                        "price": 14900
                    },
                    "63853651": {
                        "id": 63853651,
                        "name": "Chicken Tikka Garlic Bread",
                        "description": "Chicken Tikka with Cheese",
                        "cloudinaryImageId": "awtulap7imxgrasgaspn",
                        "price": 19900
                    },
                    "63853663": {
                        "id": 63853663,
                        "name": "Calzone (veg)",
                        "description": "Sweet Corn, Jalapenos with Cheese",
                        "cloudinaryImageId": "hnxorfffx9eh3o8veylp",
                        "price": 17900
                    },
                    "63853668": {
                        "id": 63853668,
                        "name": "Chicken Tikka Calzone",
                        "description": "Chicken Tikka, Jalapenos with Cheese",
                        "cloudinaryImageId": "lbbl8e3wwqhvmg892rsc",
                        "price": 19900
                    },
                    "63853672": {
                        "id": 63853672,
                        "name": "Mutton Calzone",
                        "description": "Mutton Keema, Jalapenos with Cheese",
                        "cloudinaryImageId": "rzuvmw2epqgpr7udvg81",
                        "price": 19900
                    },
                    "63853713": {
                        "id": 63853713,
                        "name": "Choco Lava Cake",
                        "description": "Choco Lava Cake",
                        "cloudinaryImageId": "tkgyccaydmjc3atbxbyt",
                        "price": 12900
                    },
                    "63853783": {
                        "id": 63853783,
                        "name": "Paneer Quesadillas",
                        "description": "Paneer, Sweet Corn & Cheese",
                        "cloudinaryImageId": "jg3khmdx4y0xjf2pyc5s",
                        "price": 17900
                    },
                    "63853784": {
                        "id": 63853784,
                        "name": "Mushroom Quesadillas",
                        "description": "Mushroom, Black Olive & Cheese",
                        "cloudinaryImageId": "pn5w2yjsksfisxlssxqf",
                        "price": 17900
                    },
                    "63853786": {
                        "id": 63853786,
                        "name": "Chicken Tikka Quesadillas",
                        "description": "Chicken Tikka, Jalapenos & Cheese",
                        "cloudinaryImageId": "zp93hrwdmvu4lggkbdke",
                        "price": 19900
                    },
                    "69247394": {
                        "id": 69247394,
                        "name": "Chesse Dip",
                        "description": "",
                        "cloudinaryImageId": "j4gqbqee7xrx5vwhetbn",
                        "price": 2500
                    },
                    "69247395": {
                        "id": 69247395,
                        "name": "Hot & Garlic Dip",
                        "description": "",
                        "cloudinaryImageId": "j4gqbqee7xrx5vwhetbn",
                        "price": 2500
                    },
                    "69247396": {
                        "id": 69247396,
                        "name": "Jalapeno Dip",
                        "description": "",
                        "cloudinaryImageId": "j4gqbqee7xrx5vwhetbn",
                        "price": 2500
                    },
                    "69247397": {
                        "id": 69247397,
                        "name": "Korma Dip",
                        "description": "",
                        "cloudinaryImageId": "j4gqbqee7xrx5vwhetbn",
                        "price": 2500
                    },
                    "69247398": {
                        "id": 69247398,
                        "name": "Peri Peri Dip",
                        "description": "",
                        "cloudinaryImageId": "j4gqbqee7xrx5vwhetbn",
                        "price": 2500
                    },
                    "69247399": {
                        "id": 69247399,
                        "name": "Salsa Dip",
                        "description": "",
                        "cloudinaryImageId": "j4gqbqee7xrx5vwhetbn",
                        "price": 2500
                    },
                    "69247400": {
                        "id": 69247400,
                        "name": "Chicken Overload Combo (meal For 4)",
                        "description": "Large Chicken Overload Pizza + 2 Cheese Garlic Bread + 2 Coco Lava Cake + 1 Coke 750ml",
                        "cloudinaryImageId": "dtch65ryjqjecm0aaqww",
                        "price": 129900
                    },
                    "69247401": {
                        "id": 69247401,
                        "name": "Veg Mac N Cheese Combo (meal For 4)",
                        "description": "Large Veg Mac N Cheese Pizza + 2 Cheese Garlic Bread + 2 Coco Lava Cake + 1 Coke 750ml",
                        "cloudinaryImageId": "ugrjihdcexec6s0qt7xs",
                        "price": 129900
                    },
                    "69247402": {
                        "id": 69247402,
                        "name": "Marv's Chicken Special Combo (meal For 2)",
                        "description": "Medium Marv's Chicken Special Pizza + 1 Cheese Garlic Bread + 1 Coke 750ml",
                        "cloudinaryImageId": "fcleyqvjdodviu3suhmi",
                        "price": 79900
                    },
                    "69247404": {
                        "id": 69247404,
                        "name": "Farmstead Combo  (meal For 2)",
                        "description": "Medium Farmstead Pizza + 1 Cheese Garlic Bread + 1 Coke 750ml",
                        "cloudinaryImageId": "sbtuf7ihliesrdtpnoph",
                        "price": 79900
                    },
                    "69247406": {
                        "id": 69247406,
                        "name": "Chicken BBQ Onion Combo (meal For 1)",
                        "description": "Regular Onion Chicken BBQ Pizza + 1 Cheese Garlic Bread + 1 Coke 750ml",
                        "cloudinaryImageId": "jdq2nqewwn3ds92cccxk",
                        "price": 37900
                    },
                    "69247408": {
                        "id": 69247408,
                        "name": "Onion Paneer Combo (meal For 1)",
                        "description": "Regular Onion Paneer Pizza + 1 Cheese Garlic Bread + 1 Coke 750ml",
                        "cloudinaryImageId": "xknhyozoowawrh7eupaw",
                        "price": 37900
                    },
                    "69247409": {
                        "id": 69247409,
                        "name": "Chicken Tikka Onion Combo (meal For 1)",
                        "description": "Regular Onion Chicken Tikka Pizza + 1 Cheese Garlic Bread + 1 Coke 750ml",
                        "cloudinaryImageId": "zyz8cihgtpjjeimnxnnc",
                        "price": 37900
                    },
                    "69247411": {
                        "id": 69247411,
                        "name": "Paneer Capsicum Combo (meal For 1)",
                        "description": "Regular Paneer Capsicum Pizza + 1 Cheese Garlic Bread + 1 Coke 750ml",
                        "cloudinaryImageId": "xmeyzjddbjtvceboeir4",
                        "price": 37900
                    },
                    "69247413": {
                        "id": 69247413,
                        "name": "Chicken Overload Combo  (meal For 2)",
                        "description": "Medium Chicken Overload Pizza + 1 Cheese Garlic Bread + 1 Coke 750ml",
                        "cloudinaryImageId": "g5bkc3dnsozwvzu4nizs",
                        "price": 79900
                    },
                    "69247414": {
                        "id": 69247414,
                        "name": "Paneer Tikka Twist Combo  (meal For 2)",
                        "description": "Medium Paneer Tikka Twist Pizza + 1 Cheese Garlic Bread + 1 Coke 750ml",
                        "cloudinaryImageId": "umgmjijm7u3ox0ircxbp",
                        "price": 79900
                    },
                    "69247415": {
                        "id": 69247415,
                        "name": "Farm Fresh Pizza",
                        "description": "Onion, Tomato & Capsicum",
                        "cloudinaryImageId": "gn2ngyrzkccnarmt1mbr",
                        "price": 0,
                        "defaultPrice": 17900
                    },
                    "69247419": {
                        "id": 69247419,
                        "name": "Garden Style Pizza",
                        "description": "Paneer, Capsicum, Sweet Corn",
                        "cloudinaryImageId": "so7bfayfupmdit3cakrj",
                        "price": 0,
                        "defaultPrice": 17900
                    },
                    "69247422": {
                        "id": 69247422,
                        "name": "Veg Make Your Own Pizza",
                        "description": "Choose upto 3 Veg toppings",
                        "cloudinaryImageId": "gn2ngyrzkccnarmt1mbr",
                        "price": 0,
                        "defaultPrice": 17900
                    },
                    "69247426": {
                        "id": 69247426,
                        "name": "Farmstead Pizza",
                        "description": "Onion, Tomato, Capsicum, Sweet Corn & Mushroom",
                        "cloudinaryImageId": "gimfthexoeiqx5mqmopf",
                        "price": 0,
                        "defaultPrice": 27900
                    },
                    "69247431": {
                        "id": 69247431,
                        "name": "Hawaiian Treat Pizza",
                        "description": "Pineapple, Paneer, Sweet Corn & Jalapenos with Extra Cheese",
                        "cloudinaryImageId": "cofmtawzh4jiex4j4iyt",
                        "price": 0,
                        "defaultPrice": 27900
                    },
                    "69247449": {
                        "id": 69247449,
                        "name": "Mexican Magic Pizza",
                        "description": "Onions, Capsicum, Jalapenos & Black Olives layered with Salsa Dip",
                        "cloudinaryImageId": "quduczul37xztcqcvdse",
                        "price": 0,
                        "defaultPrice": 27900
                    },
                    "69247454": {
                        "id": 69247454,
                        "name": "Paneer Tikka Twist Pizza",
                        "description": "Paneer Tikka, Onion, Capsicum & Red Paprika",
                        "cloudinaryImageId": "g8hzgjowqxzdriapfbkh",
                        "price": 0,
                        "defaultPrice": 27900
                    },
                    "69247467": {
                        "id": 69247467,
                        "name": "White Pasta Pizza",
                        "description": "Onion, Capsicum, Mushroom, Babycorn & White Sauce Pasta",
                        "cloudinaryImageId": "ewrguogvzsittx3evuow",
                        "price": 0,
                        "defaultPrice": 27900
                    },
                    "69247477": {
                        "id": 69247477,
                        "name": "Hot N Fiery Pizza",
                        "description": "Onion, Tomato, Jalapeno, Mushroom, Red Paprika, Black Olives layered with Hot Garlic Dip",
                        "cloudinaryImageId": "wyslzzb9cl2un6dgjgqw",
                        "price": 0,
                        "defaultPrice": 30900
                    },
                    "69247512": {
                        "id": 69247512,
                        "name": "Marv's Bite Pizza",
                        "description": "Tomato, Capsicum, Mushroom, Baby Corn, Jalapenos, Red Paprika layered with Jalapeno Dip",
                        "cloudinaryImageId": "lnbdcqxynpzz4cr7txlf",
                        "price": 0,
                        "defaultPrice": 30900
                    },
                    "69247588": {
                        "id": 69247588,
                        "name": "Marv's Paneer Special Pizza",
                        "description": "Onion, Capsicum, Paneer, Sweet Corn, Black Olives layered with Korma dip",
                        "cloudinaryImageId": "rc2qzx6me2itlsqzl4in",
                        "price": 0,
                        "defaultPrice": 30900
                    },
                    "69247659": {
                        "id": 69247659,
                        "name": "Signature Peri Peri Veg Pizza",
                        "description": "Onion, Tomato, Capsicum, Paneer, Mushroom, Jalapenos layered with Peri Peri Dip",
                        "cloudinaryImageId": "t1y2pqd3ezhtzwph5eer",
                        "price": 0,
                        "defaultPrice": 30900
                    },
                    "69247725": {
                        "id": 69247725,
                        "name": "Spicy Pasta Pizza",
                        "description": "Onion, Capsicum, Paneer, Black Olive, Red Paprika & Korma Sauce Pasta",
                        "cloudinaryImageId": "jziftt8m1txjdcg1mkj1",
                        "price": 0,
                        "defaultPrice": 27900
                    },
                    "69247803": {
                        "id": 69247803,
                        "name": "Veg Mac N Cheese Pizza",
                        "description": "Paneer, Onion, Capsicum, Black Olives, Baby Corn, Cheesy Mac topped with Jalapeno Dip",
                        "cloudinaryImageId": "fpf3kru29zuoskeiq0fc",
                        "price": 0,
                        "defaultPrice": 30900
                    },
                    "69247858": {
                        "id": 69247858,
                        "name": "Exotic Veg Paradise Pizza",
                        "description": "All Veg. Topping with Extra Cheese",
                        "cloudinaryImageId": "owpq8xwaeovia4ukvl8i",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "69247894": {
                        "id": 69247894,
                        "name": "Margherita Pizza",
                        "description": "Cheese",
                        "cloudinaryImageId": "e6qg0sjge0ujhkgjsfu3",
                        "price": 0,
                        "defaultPrice": 15800
                    },
                    "69247931": {
                        "id": 69247931,
                        "name": "Classic - Onion & Chicken Meatball Pizza",
                        "description": "Onion & Chicken Meatball",
                        "cloudinaryImageId": "j1x5e4i4r7m8u5y0mghg",
                        "price": 0,
                        "defaultPrice": 19900
                    },
                    "69247971": {
                        "id": 69247971,
                        "name": "Classic - Onion & Chicken Tikka Pizza",
                        "description": "Onion & Chicken Tikka",
                        "cloudinaryImageId": "ujmbfwubffkpr79zv3zp",
                        "price": 0,
                        "defaultPrice": 19900
                    },
                    "69248055": {
                        "id": 69248055,
                        "name": "Chicken BBQ Onion Capsicum Pizza",
                        "description": "Chicken BBQ, Onion, Capsicum",
                        "cloudinaryImageId": "d9iwfrj1xc7k9whz8qlc",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "69248103": {
                        "id": 69248103,
                        "name": "Chicken Tikka Salami Pizza & Onion",
                        "description": "Chicken Tikka, Chicken Salami, Onion",
                        "cloudinaryImageId": "aowuyyqythyfyxcwl6ik",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "69248180": {
                        "id": 69248180,
                        "name": "Chicken Tikka Smoke Pizza",
                        "description": "Chicken Tikka, Chicken Smoke, Jalapenos",
                        "cloudinaryImageId": "z6vsqvlpwlmjpqj7rdbm",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "69248305": {
                        "id": 69248305,
                        "name": "Non Veg Make Your Own Pizza",
                        "description": "Choose upto 1 Veg & 2 Non-Veg toppings",
                        "cloudinaryImageId": "qctwcwjeqxvpyeukcvvd",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "69248434": {
                        "id": 69248434,
                        "name": "Chicken Overload Pizza",
                        "description": "Chicken Tikka, Smoke Chicken, Seekh Kabab & Chicken BBQ",
                        "cloudinaryImageId": "hejmr7ucrfp5uxsc043z",
                        "price": 0,
                        "defaultPrice": 28900
                    },
                    "69248521": {
                        "id": 69248521,
                        "name": "Chicken White Pasta Pizza",
                        "description": "Chicken Seekh, Chicken Smoke, Chicken Salami & White Sauce Pasta",
                        "cloudinaryImageId": "wa8j9vlarqbtdsz9llpw",
                        "price": 0,
                        "defaultPrice": 28900
                    },
                    "69248636": {
                        "id": 69248636,
                        "name": "Marv's Chicken Special Pizza",
                        "description": "Chicken Tikka, Chicken BBQ, Smoke Chicken, Onion layered with Korma Dip",
                        "cloudinaryImageId": "wa8j9vlarqbtdsz9llpw",
                        "price": 0,
                        "defaultPrice": 28900
                    },
                    "69248701": {
                        "id": 69248701,
                        "name": "Marv's Meatball Pizza",
                        "description": "Chicken MeatBall, Chicken Tikka, Onion & Jalapenos layered with Hot Garlic Dip",
                        "cloudinaryImageId": "rj7iaodmum3nq5ivd2xw",
                        "price": 0,
                        "defaultPrice": 28900
                    },
                    "69248720": {
                        "id": 69248720,
                        "name": "Non-veg Hawaiian Pizza",
                        "description": "Pineapple, Chicken Salami, Smoke Chicken & Jalapenos with Extra Cheese",
                        "cloudinaryImageId": "t1rl5mfgukub4vmm0wcg",
                        "price": 0,
                        "defaultPrice": 28900
                    },
                    "69248759": {
                        "id": 69248759,
                        "name": "Pork Pepperoni Pizza",
                        "description": "100% Pork Pepperoni with Extra Cheese",
                        "cloudinaryImageId": "d6ycq5npbkqzfp0vrv81",
                        "price": 0,
                        "defaultPrice": 32900
                    },
                    "69248775": {
                        "id": 69248775,
                        "name": "Chicken Spicy Pasta Pizza",
                        "description": "Chicken Tikka, Chicken Smoke, Chicken Salami, Red Paprika & Korma Sauce Pasta",
                        "cloudinaryImageId": "rahhe9j5xhy4da7hgzfm",
                        "price": 0,
                        "defaultPrice": 28900
                    },
                    "69248786": {
                        "id": 69248786,
                        "name": "Hot N Fiery Chicken Pizza",
                        "description": "Onion, Jalapenos, Chicken Salami, Seekh Kabab, Chicken Tikka & Chicken BBQ layered with Hot Garlic Dip",
                        "cloudinaryImageId": "f4dh68abkr3czye7riio",
                        "price": 0,
                        "defaultPrice": 32900
                    },
                    "69248799": {
                        "id": 69248799,
                        "name": "Mexican Chicken Fiesta Pizza",
                        "description": "Seekh Kabab, Chicken Tikka, Chicken Smoke, Capsicum, Black Olive & Jalapenos layered with Salsa Dip",
                        "cloudinaryImageId": "ursqgqa1xo8jbkxczlmc",
                        "price": 0,
                        "defaultPrice": 32900
                    },
                    "69248816": {
                        "id": 69248816,
                        "name": "Mighty Meaty Pizza",
                        "description": "Double Mutton, Chicken Tikka, Onion, Jalapeno & Red Peprika with Extra Cheese",
                        "cloudinaryImageId": "rbm1yjc3wqcqlweuqhby",
                        "price": 0,
                        "defaultPrice": 32900
                    },
                    "69248833": {
                        "id": 69248833,
                        "name": "Non Veg Mac N Cheese Pizza",
                        "description": "Chicken Tikka, Chicken Smoke, Chicken Salami, Chicken Seekh & Cheesy Mac topped layered with Jalapeno Dip",
                        "cloudinaryImageId": "mx6wcsk6fqriujrr03ft",
                        "price": 0,
                        "defaultPrice": 32900
                    },
                    "69248851": {
                        "id": 69248851,
                        "name": "Signature Peri Peri Non-veg",
                        "description": "Chicken BBQ, Seekh Kabab, Smoke Chicken, Chicken Salami, Onion & Red Paprika layered with Peri Peri Dip",
                        "cloudinaryImageId": "xnzeoiigglemjzgcskpl",
                        "price": 0,
                        "defaultPrice": 32900
                    },
                    "69249028": {
                        "id": 69249028,
                        "name": "Exotic Non-veg Paradise",
                        "description": "All The Non-Veg Topping with Extra Cheese",
                        "cloudinaryImageId": "rj7iaodmum3nq5ivd2xw",
                        "price": 0,
                        "defaultPrice": 33900
                    },
                    "69249045": {
                        "id": 69249045,
                        "name": "Mutton Keema Garlic Bread",
                        "description": "Mutton Keema, Jalapenos. with Cheese",
                        "cloudinaryImageId": "rm2fbhoohpjsgpqbtzwa",
                        "price": 19900
                    },
                    "69249046": {
                        "id": 69249046,
                        "name": "Mac And Cheese Veg",
                        "description": "",
                        "cloudinaryImageId": "t6hyt4oymrsrazyxmtvh",
                        "price": 19900
                    },
                    "69249047": {
                        "id": 69249047,
                        "name": "Smoke Chilli Mac And Cheese Veg",
                        "description": "",
                        "cloudinaryImageId": "y5xkjifvjogdah1qjp4r",
                        "price": 19900
                    },
                    "69249048": {
                        "id": 69249048,
                        "name": "Mac And Cheese Non Veg",
                        "description": "",
                        "cloudinaryImageId": "st7wmtqqsojw5qwtnlvr",
                        "price": 20900
                    },
                    "69249050": {
                        "id": 69249050,
                        "name": "Smoke Chilli Mac And Cheese Non Veg",
                        "description": "",
                        "cloudinaryImageId": "ag3dpkmg2rt6cyc83fq4",
                        "price": 20900
                    },
                    "69249051": {
                        "id": 69249051,
                        "name": "Mix Sauce Pasta (veg)",
                        "description": "Onion, Capsicum, Sweet Corn, Black Olives, Mushroom & Mix Sauce with Cheese",
                        "cloudinaryImageId": "phwwzpjlfcflfa4kmx0r",
                        "price": 19900
                    },
                    "69249052": {
                        "id": 69249052,
                        "name": "Red Sauce Pasta (veg)",
                        "description": "Onion, Capsicum, Mushroom, Black Olive & Red Sauce with Cheese",
                        "cloudinaryImageId": "emrdr6xilztfhlsyqlqh",
                        "price": 19900
                    },
                    "69249053": {
                        "id": 69249053,
                        "name": "White Sauce Pasta (veg)",
                        "description": "Onion, Capsicum, Sweet Corn, Mushroom, Black Olives & White Sauce with Cheese",
                        "cloudinaryImageId": "kwkapkpbqexypbogsoce",
                        "price": 19900
                    },
                    "69249054": {
                        "id": 69249054,
                        "name": "Mix Sauce Pasta (non Veg)",
                        "description": "Onion, Capsicum, Black Olives, Mushroom, Chicken BBQ & Mix Sauce with Cheese",
                        "cloudinaryImageId": "hcww3x0oy4c2ow6ednos",
                        "price": 21900
                    },
                    "69249055": {
                        "id": 69249055,
                        "name": "Red Sauce Pasta (non Veg)",
                        "description": "Onion, Capsicum, Mushroom,  Black Olives, Chicken BBQ, Chicken Salami & Red Sauce with Cheese",
                        "cloudinaryImageId": "phr3rcd9ajentmsykyst",
                        "price": 21900
                    },
                    "69249056": {
                        "id": 69249056,
                        "name": "White Sauce Pasta (non Veg)",
                        "description": "Onion, Capsicum, Sweet Corn, Mushroom, Black Olive, Chicken Smoked & White Sauce with Cheese",
                        "cloudinaryImageId": "njiplegn8jfpt1piowyc",
                        "price": 21900
                    },
                    "69249057": {
                        "id": 69249057,
                        "name": "Capsicum Pizza",
                        "description": "",
                        "cloudinaryImageId": "yes5usmfb34hgiriy6vm",
                        "price": 14500
                    },
                    "69249058": {
                        "id": 69249058,
                        "name": "Onion Capsicum Pizza",
                        "description": "",
                        "cloudinaryImageId": "mxplzwqzlkmhmndab4h6",
                        "price": 15500
                    },
                    "69249059": {
                        "id": 69249059,
                        "name": "Onion Paneer Pizza",
                        "description": "",
                        "cloudinaryImageId": "zknzlexonkqafdroqzpl",
                        "price": 16500
                    },
                    "69249060": {
                        "id": 69249060,
                        "name": "Onion Pizza",
                        "description": "",
                        "cloudinaryImageId": "zqkvfhyvsxvtwilcewve",
                        "price": 14500
                    },
                    "69249061": {
                        "id": 69249061,
                        "name": "Paneer Capsicum Pizza",
                        "description": "",
                        "cloudinaryImageId": "h32vtcqg2pskjx80ruv7",
                        "price": 16500
                    },
                    "69249062": {
                        "id": 69249062,
                        "name": "Sweet Corn Pizza",
                        "description": "",
                        "cloudinaryImageId": "qpg0codf0hdx5warf4nq",
                        "price": 14500
                    },
                    "69249063": {
                        "id": 69249063,
                        "name": "Tomato Pizza",
                        "description": "",
                        "cloudinaryImageId": "tk3bymxn9nzvp2g47pl7",
                        "price": 14500
                    },
                    "69249067": {
                        "id": 69249067,
                        "name": "Paneer Tikka Potli",
                        "description": "Paneer Tikka, Onion, Capsicum & Red Paprika",
                        "cloudinaryImageId": "sbd9h5bsqngyzqty8sdq",
                        "price": 11900
                    },
                    "69249068": {
                        "id": 69249068,
                        "name": "Simply Veg Potli",
                        "description": "Onion, Capsicum, Paneer & Sweet Corn",
                        "cloudinaryImageId": "twcgjorpgsyxsonogszd",
                        "price": 11900
                    },
                    "69249069": {
                        "id": 69249069,
                        "name": "Chicken BBQ Potli",
                        "description": "Chicken Bbq, Chicken Seekh, Onion & Jalapeno",
                        "cloudinaryImageId": "sbd9h5bsqngyzqty8sdq",
                        "price": 12900
                    },
                    "69249070": {
                        "id": 69249070,
                        "name": "Chicken Tikka Potli",
                        "description": "Chicken Tikka, Chicken Smoke, Onion & Red Paprika",
                        "cloudinaryImageId": "sbd9h5bsqngyzqty8sdq",
                        "price": 12900
                    },
                    "69249072": {
                        "id": 69249072,
                        "name": "Chicken BBQ Quesadillas",
                        "description": "Chicken BBQ & Cheese",
                        "cloudinaryImageId": "kanzc3jhe3t5u3hn6j2p",
                        "price": 19900
                    },
                    "69249073": {
                        "id": 69249073,
                        "name": "Hot And Spicy Meatballs [6 Pieces]",
                        "description": "",
                        "cloudinaryImageId": "ahjshwmqynrznidauxyg",
                        "price": 19900
                    },
                    "69249074": {
                        "id": 69249074,
                        "name": "Hot And Spicy Wings [6 Pieces]",
                        "description": "",
                        "cloudinaryImageId": "imdfzg1gqwpmwamqyelw",
                        "price": 19900
                    },
                    "69249076": {
                        "id": 69249076,
                        "name": "Peri Peri Meatballs [6 Pieces]",
                        "description": "",
                        "cloudinaryImageId": "u8fja557vb1kbicie949",
                        "price": 19900
                    },
                    "69249077": {
                        "id": 69249077,
                        "name": "Peri Peri Wings [6 Pieces]",
                        "description": "",
                        "cloudinaryImageId": "bu6m6tdmzs7uhe4nmx9d",
                        "price": 19900
                    },
                    "69249080": {
                        "id": 69249080,
                        "name": "Mushroom And Sweet Corn Taco's",
                        "description": "Mushroom & Sweet Corn",
                        "cloudinaryImageId": "hgdo9ixgivzzmdtqpvio",
                        "price": 17900
                    },
                    "69249081": {
                        "id": 69249081,
                        "name": "Paneer And Sweet Corn Taco's",
                        "description": "Paneer& Sweet Corn",
                        "cloudinaryImageId": "hyelsirxxsvugxzdp0zv",
                        "price": 17900
                    },
                    "69249082": {
                        "id": 69249082,
                        "name": "Paneer Tikka Twist Taco's",
                        "description": "Paneer Tikka Butter Masala & Red Paprika",
                        "cloudinaryImageId": "dqp0ointjyizvgzanmbl",
                        "price": 17900
                    },
                    "69249083": {
                        "id": 69249083,
                        "name": "Chicken BBQ And Seekh Taco's",
                        "description": "Chicken BBQ & Seekh Kabab",
                        "cloudinaryImageId": "wvld4ryikm1iuo8tlznj",
                        "price": 19900
                    },
                    "69249084": {
                        "id": 69249084,
                        "name": "Chicken Tikka And Salami Taco's",
                        "description": "Chicken Tikka & Salami",
                        "cloudinaryImageId": "obhjo8x3dhwkkeiostxq",
                        "price": 19900
                    },
                    "69249085": {
                        "id": 69249085,
                        "name": "Orange Ice Tea [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "fpjmdjh74f7zvytw6xkp",
                        "price": 10900
                    },
                    "69249086": {
                        "id": 69249086,
                        "name": "Blue Lagoon [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "uaxuo2dqzzhq8muatapa",
                        "price": 10900
                    },
                    "69249087": {
                        "id": 69249087,
                        "name": "Green Apple [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "sy7ralb3qy4wqeh4rapu",
                        "price": 10900
                    },
                    "69249088": {
                        "id": 69249088,
                        "name": "Lemon Ice Tea [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "laxbgscylqjajrctytkq",
                        "price": 10900
                    },
                    "69249089": {
                        "id": 69249089,
                        "name": "Mint Mojito [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "uwphqiiiwut2cyodzllc",
                        "price": 10900
                    },
                    "69249092": {
                        "id": 69249092,
                        "name": "Choco Chip And Cookies Shake [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "sbckyj0ausbwm4gcpxva",
                        "price": 13900
                    },
                    "69249093": {
                        "id": 69249093,
                        "name": "Cold Coffee Shake [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "kohe44vk8p7y64p2kbjv",
                        "price": 13900
                    },
                    "69249096": {
                        "id": 69249096,
                        "name": "Oreo Shake [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "cnyazh00taslvzzyjt4y",
                        "price": 13900
                    },
                    "69249097": {
                        "id": 69249097,
                        "name": "Strawberry Shake [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "cpuyp8blzc92ntyh9jyy",
                        "price": 13900
                    },
                    "74965167": {
                        "id": 74965167,
                        "name": "Californian 5 Cheese Pizza",
                        "description": "Combination of exotic cheeses Monterey Jack, Colby,Orange Cheddar, Mozarella and Cheddar layered with Jalapeno Dip",
                        "cloudinaryImageId": "vy2apwa9jajs8nzd01ab",
                        "price": 0,
                        "defaultPrice": 30900
                    },
                    "74965791": {
                        "id": 74965791,
                        "name": "Chicken BBQ",
                        "description": "Chicken BBQ",
                        "cloudinaryImageId": "dckhmg9vas3jaqljyxhf",
                        "price": 15500
                    },
                    "74965793": {
                        "id": 74965793,
                        "name": "Chicken Tikka",
                        "description": "Chicken Tikka",
                        "cloudinaryImageId": "rjoubohanlyeh4atuvjo",
                        "price": 15500
                    },
                    "74965794": {
                        "id": 74965794,
                        "name": "Mutton Keema & Chicken Tikka",
                        "description": "Mutton Keema & Chicken Tikka",
                        "cloudinaryImageId": "em2xxwqhnl1gizh1ewec",
                        "price": 17500
                    },
                    "77981242": {
                        "id": 77981242,
                        "name": "Mango Shake [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "foatuqtb6ih6m7av6kja",
                        "price": 13900
                    },
                    "77981244": {
                        "id": 77981244,
                        "name": "Blueberry Shake [300 Ml]",
                        "description": "",
                        "cloudinaryImageId": "su2jko94nmqi7mulkpvf",
                        "price": 13900
                    },
                    "82450318": {
                        "id": 82450318,
                        "name": "3 Pizza (non-veg)",
                        "description": "3 Non-Veg Pizza - Regular (Chicken BBQ, Chicken Tikka, Capsicum Chicken Tikka)",
                        "cloudinaryImageId": "axqwzj4imbsvnue491oh",
                        "price": 46900
                    },
                    "82450319": {
                        "id": 82450319,
                        "name": "3 Double Topping (veg)",
                        "description": "3 Veg Pizza - Double Topping - Regular (Onion Paneer, Onion Capsicum, Paneer Capsicum)",
                        "cloudinaryImageId": "doy878lkbszungoee4qq",
                        "price": 44400
                    },
                    "82450320": {
                        "id": 82450320,
                        "name": "3 Single Topping (veg)",
                        "description": "3 Veg Pizza - Regular (Onion, Capsicum, Sweet Corn)",
                        "cloudinaryImageId": "kkoompxw7spw4kdqtxay",
                        "price": 39900
                    },
                    "83175935": {
                        "id": 83175935,
                        "name": "Signature Peri Peri Non-veg Combo (meal For 4)",
                        "description": "Large Signature Peri Peri Non-Veg Pizza + 2 Cheese Garlic Bread + 2 Coco Lava Cake + 1 Coke 750ml",
                        "cloudinaryImageId": "wis8m5ciiyyvmsd8s2sv",
                        "price": 134900
                    },
                    "83175936": {
                        "id": 83175936,
                        "name": "Kids Combo (meal For 2)",
                        "description": "Medium Margherita Pizza + 1 Choco Lava Cake + 1 Coke 750ml",
                        "cloudinaryImageId": "f7mqvdumop5ceyo5wkst",
                        "price": 48000
                    },
                    "83175942": {
                        "id": 83175942,
                        "name": "Kids Combo (meal For 1)",
                        "description": "Regular Margherita Pizza + 1 Coco Lava Cake + 1 Coke 750ml",
                        "cloudinaryImageId": "f7mqvdumop5ceyo5wkst",
                        "price": 34000
                    },
                    "83175943": {
                        "id": 83175943,
                        "name": "Californian 5 Cheese Combo (meal For 4)",
                        "description": "Large Californian 5 Cheese Pizza + 2 Cheese Garlic Bread + 2 Coco Lava Cake + 1 Coke 750ml",
                        "cloudinaryImageId": "wyqtpuwnerpxw2mnaxxy",
                        "price": 124900
                    },
                    "96991100": {
                        "id": 96991100,
                        "name": "Californian 5 Cheese Pizza [cheese Burst]",
                        "description": "Combination of exotic cheeses Monterey Jack, Colby,Orange Cheddar, Mozarella and Cheddar layered with Jalapeno Dip",
                        "cloudinaryImageId": "b4ib03zz2olsdh4hxfq2",
                        "price": 0,
                        "defaultPrice": 41800
                    },
                    "96991101": {
                        "id": 96991101,
                        "name": "Farmstead Pizza [cheese Burst]",
                        "description": "Onion, Tomato, Capsicum, Sweet Corn & Mushroom",
                        "cloudinaryImageId": "gimfthexoeiqx5mqmopf",
                        "price": 0,
                        "defaultPrice": 36900
                    },
                    "96991102": {
                        "id": 96991102,
                        "name": "Margherita Pizza [cheese Burst]",
                        "description": "Cheese",
                        "cloudinaryImageId": "sbqy3waarcwdnbwa0dy1",
                        "price": 0,
                        "defaultPrice": 26900
                    },
                    "96991104": {
                        "id": 96991104,
                        "name": "Paneer Tikka Twist Pizza [cheese Burst]",
                        "description": "Paneer Tikka, Onion, Capsicum & Red Paprika",
                        "cloudinaryImageId": "g8hzgjowqxzdriapfbkh",
                        "price": 0,
                        "defaultPrice": 36900
                    },
                    "96991105": {
                        "id": 96991105,
                        "name": "Signature Peri Peri Veg Pizza [cheese Burst]",
                        "description": "Onion, Tomato, Capsicum, Paneer, Mushroom, Jalapenos layered with Peri Peri Dip",
                        "cloudinaryImageId": "zbx1mbpxsrswmzb49fkb",
                        "price": 0,
                        "defaultPrice": 41800
                    },
                    "96991106": {
                        "id": 96991106,
                        "name": "Chicken Overload Pizza [cheese Burst]",
                        "description": "Chicken Tikka, Smoke Chicken, Seekh Kabab & Chicken BBQ",
                        "cloudinaryImageId": "hejmr7ucrfp5uxsc043z",
                        "price": 0,
                        "defaultPrice": 41900
                    },
                    "96991108": {
                        "id": 96991108,
                        "name": "Marv's Chicken Special Pizza [cheese Burst]",
                        "description": "Chicken Tikka, Chicken BBQ, Smoke Chicken, Onion layered with Korma Dip",
                        "cloudinaryImageId": "zzgilsgfaf5qaydczi9b",
                        "price": 0,
                        "defaultPrice": 41900
                    },
                    "96991111": {
                        "id": 96991111,
                        "name": "Marv's Meatball Pizza [cheese Burst]",
                        "description": "Chicken MeatBall, Chicken Tikka, Onion & Jalapenos layered with Hot Garlic Dip",
                        "cloudinaryImageId": "qwqtysbyah1rzpqwf774",
                        "price": 0,
                        "defaultPrice": 33900
                    },
                    "96991113": {
                        "id": 96991113,
                        "name": "Pork Pepperoni Pizza [cheese Burst]",
                        "description": "100% Pork Pepperoni with Extra Cheese",
                        "cloudinaryImageId": "tivlavawu72z6smvhsiq",
                        "price": 0,
                        "defaultPrice": 45900
                    },
                    "96991122": {
                        "id": 96991122,
                        "name": "Signature Peri Peri Non-veg [cheese Burst]",
                        "description": "Chicken BBQ, Seekh Kabab, Smoke Chicken, Chicken Salami, Onion & Red Paprika layered with Peri Peri Dip",
                        "cloudinaryImageId": "xnzeoiigglemjzgcskpl",
                        "price": 0,
                        "defaultPrice": 45900
                    },
                    "108301433": {
                        "id": 108301433,
                        "name": "Classic Capsicum Tikka Pizza",
                        "description": "Classic Capsicum Tikka Pizza",
                        "price": 0,
                        "defaultPrice": 19900
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "342192",
            "name": "KHAN BIRYANI CENTER",
            "city": "Noida 1",
            "area": "Sector 62",
            "avgRatingString": "3.8",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "dn01p3cekdqmymcfej5f",
            "costForTwoMsg": "₹200 for two",
            "cuisines": ["Biryani", "Mughlai"],
            "menu": {
                "items": {
                    "64249647": {
                        "id": 64249647,
                        "name": "Chicken Hyderabadi Biryani",
                        "description": "",
                        "cloudinaryImageId": "cpzp4vxvd83dbl2zlzog",
                        "price": 13000
                    },
                    "64249648": {
                        "id": 64249648,
                        "name": "Normal Chicken Biryani",
                        "description": "",
                        "cloudinaryImageId": "svn3cabhaosrqckfsjhz",
                        "price": 13000
                    },
                    "64249650": {
                        "id": 64249650,
                        "name": "Pure Veg Biryani",
                        "description": "",
                        "cloudinaryImageId": "prh5rztora5dkb9etmyn",
                        "price": 9000
                    },
                    "64249651": {
                        "id": 64249651,
                        "name": "Mutton Korma",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 25000
                    },
                    "64249652": {
                        "id": 64249652,
                        "name": "Chicken Korma",
                        "description": "",
                        "cloudinaryImageId": "rjfazwyi1qnxmcpyx72s",
                        "price": 20000
                    },
                    "64249654": {
                        "id": 64249654,
                        "name": "Butter Chicken",
                        "description": "",
                        "cloudinaryImageId": "cst8w96vahvkoapueozx",
                        "price": 25000
                    },
                    "64249655": {
                        "id": 64249655,
                        "name": "Chicken Changezi",
                        "description": "",
                        "cloudinaryImageId": "ichqt0m9i6dcdmysxkch",
                        "price": 25000
                    },
                    "64249656": {
                        "id": 64249656,
                        "name": "Rumali Roti(1Pcs)",
                        "description": "",
                        "cloudinaryImageId": "dbq6uqr285hrxfroawj6",
                        "price": 1000
                    },
                    "64249657": {
                        "id": 64249657,
                        "name": "Chicken Lollipop",
                        "description": "",
                        "cloudinaryImageId": "fvszbynafooyafmcjysz",
                        "price": 25000
                    },
                    "64249658": {
                        "id": 64249658,
                        "name": "Chicken Fry",
                        "description": "",
                        "cloudinaryImageId": "yodhwbbwg5azt40mkazp",
                        "price": 18000
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "343112",
            "name": "Veer Ji Malai Chaap Wale",
            "city": "Noida 1",
            "area": "Ghaziabad",
            "avgRatingString": "3.6",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "avvyjqmjycb6pdn37lk1",
            "costForTwoMsg": "₹350 for two",
            "cuisines": ["Indian"],
            "menu": {
                "items": {
                    "64304378": {
                        "id": 64304378,
                        "name": "Malai Chaap ( 8 Pcs )",
                        "description": "",
                        "cloudinaryImageId": "ypxejnqfyslmonkf1o4f",
                        "price": 16500
                    },
                    "64304379": {
                        "id": 64304379,
                        "name": "Veg Tawa Chicken",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "xt24l27mxryl0bs11eg1",
                        "price": 18500
                    },
                    "64304380": {
                        "id": 64304380,
                        "name": "Veg Cream Chicken",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "",
                        "price": 18500
                    },
                    "64304381": {
                        "id": 64304381,
                        "name": "Afghani Chaap ( 8 Pcs )",
                        "description": "",
                        "cloudinaryImageId": "jbcdlb9qjphjuwn1tdgq",
                        "price": 16500
                    },
                    "64304382": {
                        "id": 64304382,
                        "name": "Chulbuli Chicken",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 18500
                    },
                    "64304384": {
                        "id": 64304384,
                        "name": "Veg Chicken Do Pyaza",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "",
                        "price": 18500
                    },
                    "64304385": {
                        "id": 64304385,
                        "name": "Korma",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 18500
                    },
                    "64304386": {
                        "id": 64304386,
                        "name": "Paneer Tikka",
                        "description": "Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and rolled over skewers or grilled in a tandoor.",
                        "cloudinaryImageId": "uxspail72mvialwfcr6q",
                        "price": 18500
                    },
                    "64304387": {
                        "id": 64304387,
                        "name": "Veg Rada Meat",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "",
                        "price": 18500
                    },
                    "64304388": {
                        "id": 64304388,
                        "name": "Veg Keema Kaleji",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "brajd2jkjbdydgevhdv7",
                        "price": 18500
                    },
                    "64304389": {
                        "id": 64304389,
                        "name": "Paneer Malai Tikka",
                        "description": "(Serves 1)",
                        "cloudinaryImageId": "ntcsvruwydkvmqlmx1yp",
                        "price": 17500
                    },
                    "64304390": {
                        "id": 64304390,
                        "name": "Special Dal Makhani",
                        "description": "Our signature style version with subtle smoky flavors and creaminess of the lentils. If you love authentic Punjabi food then you are going to love this Dal Makhani even more.",
                        "cloudinaryImageId": "hvya3gqocnrapujvzjvh",
                        "price": 18500
                    },
                    "64304391": {
                        "id": 64304391,
                        "name": "Shahi Paneer",
                        "description": "A delicious rich and creamy dish loaded with paneer and milk cream giving it a smooth texture. Shahi Paneer is a blend of aromatic Indian spices giving the royal feel to dish.",
                        "cloudinaryImageId": "mfby1ne2vp74exhitt7r",
                        "price": 18500
                    },
                    "64304392": {
                        "id": 64304392,
                        "name": "Achari Chaap ( 8 Pcs )",
                        "description": "",
                        "cloudinaryImageId": "ondxniqzremukulikq1v",
                        "price": 16500
                    },
                    "64304393": {
                        "id": 64304393,
                        "name": "Korma Paneer",
                        "description": "",
                        "cloudinaryImageId": "s7upd6w74vk17nlrenkw",
                        "price": 18500
                    },
                    "64304394": {
                        "id": 64304394,
                        "name": "Punjabi Chaap Spicy ( 8 Pcs )",
                        "description": "",
                        "cloudinaryImageId": "b2hxlcjaqg9t1qzqlju4",
                        "price": 16500
                    },
                    "64304395": {
                        "id": 64304395,
                        "name": "Kadhai Lemon Paneer",
                        "description": "",
                        "cloudinaryImageId": "cxkrh8orlksvftj8ibd3",
                        "price": 18500
                    },
                    "64304396": {
                        "id": 64304396,
                        "name": "Paneer Lababdar",
                        "description": "Juicy chicken seasoned with freshly ground spices and grilled to perfection.",
                        "cloudinaryImageId": "h801nuxeokpwuvadbmee",
                        "price": 18500
                    },
                    "64304397": {
                        "id": 64304397,
                        "name": "Haryali Chaap",
                        "description": "",
                        "cloudinaryImageId": "paxkufgcyg0y4byr3o6r",
                        "price": 16500
                    },
                    "64304398": {
                        "id": 64304398,
                        "name": "Paneer Labalab",
                        "description": "",
                        "cloudinaryImageId": "lmc4pvf1w2qoemk7rdjg",
                        "price": 18500
                    },
                    "64304399": {
                        "id": 64304399,
                        "name": "Tawa Chaap",
                        "description": "A flavorsome soya bean, prepared in warm spices and herbs, cooked on a Tawa to perfection in Chef special masala. Serves 2-3",
                        "cloudinaryImageId": "abgqfrw5vfahg5f8hhxp",
                        "price": 18500
                    },
                    "64304400": {
                        "id": 64304400,
                        "name": "Stuff Chaap",
                        "description": "",
                        "cloudinaryImageId": "oaoc6zhqecmdr4irisse",
                        "price": 18000
                    },
                    "64304402": {
                        "id": 64304402,
                        "name": "Lemon Chaap",
                        "description": "A delightfully flavor-packed chaap tossed with veggies, lemon juice and delectable masalas - perfect to satiate your cravings.",
                        "cloudinaryImageId": "zw3ohhafmq3diozbfamx",
                        "price": 16500
                    },
                    "64304403": {
                        "id": 64304403,
                        "name": "Rogan Josh Gravy Chaap",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "wvo0wyebssmvk1btuqhi",
                        "price": 18500
                    },
                    "64304404": {
                        "id": 64304404,
                        "name": "Dharti Ke Nazara (Gravy Chaap)",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 18500
                    },
                    "64304405": {
                        "id": 64304405,
                        "name": "Veg Fish Tikka",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "wymgj05cibs6lnskt7ob",
                        "price": 16500
                    },
                    "64304406": {
                        "id": 64304406,
                        "name": "Aaye Din Bahar Ke (Gravy Chaap)",
                        "description": "",
                        "cloudinaryImageId": "oxz7poczskyyxi4a6yx1",
                        "price": 18500
                    },
                    "64304407": {
                        "id": 64304407,
                        "name": "Kathi Kabab",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 18500
                    },
                    "64304408": {
                        "id": 64304408,
                        "name": "Veg Chicken Tikka",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "ww85xhirvz5wsmk3ikof",
                        "price": 17500
                    },
                    "64304409": {
                        "id": 64304409,
                        "name": "Bheja Gravy",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 19500
                    },
                    "64304410": {
                        "id": 64304410,
                        "name": "Veg Tandoori Leg Piece",
                        "description": "(Serves 1)",
                        "cloudinaryImageId": "j40sh23v3ec5hsybszzf",
                        "price": 17500
                    },
                    "64304411": {
                        "id": 64304411,
                        "name": "Veg Fish Curry",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 19500
                    },
                    "64304412": {
                        "id": 64304412,
                        "name": "Tandoori Roti ( 1 Pc )",
                        "description": "",
                        "cloudinaryImageId": "rgh7xpu5hthkup2na2z2",
                        "price": 2000
                    },
                    "64304413": {
                        "id": 64304413,
                        "name": "Veg Kabab",
                        "description": "Delicious Veg Kebab",
                        "cloudinaryImageId": "h67qwp6j4fj5e6lyblpk",
                        "price": 14500
                    },
                    "64304414": {
                        "id": 64304414,
                        "name": "Tandoori Butter Roti",
                        "description": "Bread made with whole wheat flour, brushed with butter.\n",
                        "cloudinaryImageId": "cwdtkgvi1tkofdzyui03",
                        "price": 2500
                    },
                    "64304415": {
                        "id": 64304415,
                        "name": "Rumali Roti ( 1 Pc )",
                        "description": "",
                        "cloudinaryImageId": "x5ul9lxtksdaa4jpn3yf",
                        "price": 2200
                    },
                    "64304416": {
                        "id": 64304416,
                        "name": "Plain Naan",
                        "description": "",
                        "cloudinaryImageId": "hhpuowrde5doltpq4i01",
                        "price": 4500
                    },
                    "64304417": {
                        "id": 64304417,
                        "name": "Butter Naan",
                        "description": "",
                        "cloudinaryImageId": "qxgfwgf5ndo0lbzlpyyy",
                        "price": 5500
                    },
                    "64304418": {
                        "id": 64304418,
                        "name": "Sunny Leone Chaap ( 8 Pcs)",
                        "description": "",
                        "cloudinaryImageId": "xeqtdvglpdo7mgx5qqgg",
                        "price": 18000
                    },
                    "64304419": {
                        "id": 64304419,
                        "name": "Lachha Paratha",
                        "description": "",
                        "cloudinaryImageId": "rjkkpbgekbqmomfbml6i",
                        "price": 4500
                    },
                    "64304420": {
                        "id": 64304420,
                        "name": "Stuff Naan",
                        "description": "Stuff Naan",
                        "cloudinaryImageId": "teutkbwlfp4rkl2otrqz",
                        "price": 6500
                    },
                    "64304421": {
                        "id": 64304421,
                        "name": "Missi Roti",
                        "description": "Flatbreads made with whole wheat flour, gram flour and spices that serve as the perfect side!",
                        "cloudinaryImageId": "thc46ah5v4xon1p43lsr",
                        "price": 4500
                    },
                    "64304422": {
                        "id": 64304422,
                        "name": "Mushroom Tikka",
                        "description": "",
                        "cloudinaryImageId": "zjzujbvooap9yh6j4ecg",
                        "price": 21500
                    },
                    "64304423": {
                        "id": 64304423,
                        "name": "Stuff Paratha",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 6500
                    },
                    "64304424": {
                        "id": 64304424,
                        "name": "Aloo Naan",
                        "description": "",
                        "cloudinaryImageId": "s6mqlcddshdkpyfcmm0r",
                        "price": 6500
                    },
                    "64304425": {
                        "id": 64304425,
                        "name": "Aloo Paratha",
                        "description": "Fluffy, super-soft paratha with a seasoned potato stuffing;",
                        "cloudinaryImageId": "mwohqyxgrssjhnsyxv0w",
                        "price": 6500
                    },
                    "64304426": {
                        "id": 64304426,
                        "name": "Red Chilli Paratha",
                        "description": "",
                        "cloudinaryImageId": "fa908005abbf74be028da446976971ab",
                        "price": 4500
                    },
                    "64304427": {
                        "id": 64304427,
                        "name": "Veg Lemon Chicken Tikka",
                        "description": "",
                        "cloudinaryImageId": "pqt8yik172o65niawoep",
                        "price": 17500
                    },
                    "64304428": {
                        "id": 64304428,
                        "name": "Green Chilli Paratha",
                        "description": "",
                        "cloudinaryImageId": "gmxtbrc4ff1yp1sftdwg",
                        "price": 4500
                    },
                    "64304429": {
                        "id": 64304429,
                        "name": "Paneer Paratha",
                        "description": "",
                        "cloudinaryImageId": "fbim8pyox0w1ivxflxyp",
                        "price": 7500
                    },
                    "64304430": {
                        "id": 64304430,
                        "name": "Garlic Naan",
                        "description": "Soft and fluffy flatbread made with refined flour, salt, garlic and yogurt, topped with butter.\n",
                        "cloudinaryImageId": "mxpwbytysfizrkm1c27a",
                        "price": 5500
                    },
                    "64304431": {
                        "id": 64304431,
                        "name": "Veg Malai Tikka",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 17000
                    },
                    "64304434": {
                        "id": 64304434,
                        "name": "Mia Khalifa Chaap",
                        "description": "",
                        "cloudinaryImageId": "eitnxlgp9pf73jaydoti",
                        "price": 16500
                    },
                    "64304435": {
                        "id": 64304435,
                        "name": "Veg Baby Doll",
                        "description": "",
                        "cloudinaryImageId": "onpcuhxzu1jhsngjdsvl",
                        "price": 16500
                    },
                    "64304436": {
                        "id": 64304436,
                        "name": "Veg Chicken Popcorn",
                        "description": "",
                        "cloudinaryImageId": "lwxgecinieope0viavqb",
                        "price": 16500
                    },
                    "64304437": {
                        "id": 64304437,
                        "name": "Veg Afghani Chicken",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "bh3gnvwqyowdliprn4oq",
                        "price": 17500
                    },
                    "64304438": {
                        "id": 64304438,
                        "name": "Tandoori Momo",
                        "description": "Juicy steamed veg momos coated in a flavorful marinade and smoked to perfection in a tandoor.",
                        "cloudinaryImageId": "lxa0ek42j4mhmfhcelei",
                        "price": 15500
                    },
                    "64304439": {
                        "id": 64304439,
                        "name": "Garlic Chaap",
                        "description": "(Serves 1)",
                        "cloudinaryImageId": "l9wpej6qfoy4cnjpaxnp",
                        "price": 17500
                    },
                    "64304440": {
                        "id": 64304440,
                        "name": "Fried Momos",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 14500
                    },
                    "64304441": {
                        "id": 64304441,
                        "name": "Crunchy Momos",
                        "description": "(Serves 1)",
                        "cloudinaryImageId": "",
                        "price": 14500
                    },
                    "64304442": {
                        "id": 64304442,
                        "name": "Veg Mix Tandoori Platter",
                        "description": "",
                        "cloudinaryImageId": "xwie8hf5km6tgylebjis",
                        "price": 18500
                    },
                    "64304443": {
                        "id": 64304443,
                        "name": "Tandoori Paneer",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 16500
                    },
                    "64304444": {
                        "id": 64304444,
                        "name": "Paneer Fried Momos",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 16000
                    },
                    "64304445": {
                        "id": 64304445,
                        "name": "Veg Orle Fish",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "hklnyeacp7da0aklrolb",
                        "price": 16500
                    },
                    "64304446": {
                        "id": 64304446,
                        "name": "Crunchy Paneer Momos",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 16500
                    },
                    "64304448": {
                        "id": 64304448,
                        "name": "Veg Kfcc (Crispy Chaap) ( 10 Pcs )",
                        "description": "",
                        "cloudinaryImageId": "j2hjahxyy9gtdlm6uryn",
                        "price": 18000
                    },
                    "64304451": {
                        "id": 64304451,
                        "name": "Veg Kfcc Wings",
                        "description": "| Veg Preparation | Prepared with mock meat.",
                        "cloudinaryImageId": "k3xnkzwbko0prhwypmqw",
                        "price": 18000
                    },
                    "64304453": {
                        "id": 64304453,
                        "name": "Veg Kfcc Leg Piece",
                        "description": "",
                        "cloudinaryImageId": "jytfekouyzaprwl0qinz",
                        "price": 16500
                    },
                    "64304454": {
                        "id": 64304454,
                        "name": "Leg Piece Surmai Fish",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 16500
                    },
                    "64304455": {
                        "id": 64304455,
                        "name": "Veg Boti Chicken (Mushroom)",
                        "description": "| Veg Preparation | Prepared with mock meat.",
                        "cloudinaryImageId": "",
                        "price": 21000
                    },
                    "64304456": {
                        "id": 64304456,
                        "name": "Veg Chicken Pakora",
                        "description": "",
                        "cloudinaryImageId": "gsjubhuo6di7slopx2kb",
                        "price": 18500
                    },
                    "64304457": {
                        "id": 64304457,
                        "name": "Veg Japanese Lollypop",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 17500
                    },
                    "64304458": {
                        "id": 64304458,
                        "name": "Veg Fry Mix Platter",
                        "description": "",
                        "cloudinaryImageId": "klaqgpdkauxpgkgvacay",
                        "price": 17500
                    },
                    "64304459": {
                        "id": 64304459,
                        "name": "Baby Doll Chaap",
                        "description": "",
                        "cloudinaryImageId": "ur34ekjznbbzl4yqlfit",
                        "price": 16500
                    },
                    "64304460": {
                        "id": 64304460,
                        "name": "Malai Chaap Roll",
                        "description": "A flavor-packed roll stuffed with soft & creamy chaap - perfect to satiate your cravings.",
                        "cloudinaryImageId": "vcys5ldp140wo7zkwqml",
                        "price": 17500
                    },
                    "64304461": {
                        "id": 64304461,
                        "name": "Afghani Chaap Roll",
                        "description": "Tasty creamy combination, made with soya chaap cooked in creamy and mildly spicy flavourful gravy made with rich malai wrapped in a roll.",
                        "cloudinaryImageId": "dlq8uczs9nf90wnbyaqi",
                        "price": 18500
                    },
                    "64304462": {
                        "id": 64304462,
                        "name": "Paneer Tikka Roll",
                        "description": "Soft paneer marinated in tikka roll and served with refreshing lemon juice - a wholesome combo for your hunger.",
                        "cloudinaryImageId": "h6wwusucglf90txy4cmh",
                        "price": 19000
                    },
                    "64304463": {
                        "id": 64304463,
                        "name": "Achari Chaap Roll",
                        "description": "A delightfully crispy yet soft roll stuffed with delectable achaari chaap",
                        "cloudinaryImageId": "npn1oy5tblg4tlru5oxg",
                        "price": 17500
                    },
                    "64304464": {
                        "id": 64304464,
                        "name": "Kabab Roll",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "z1lad9jtmkd775xp3exo",
                        "price": 15500
                    },
                    "64304465": {
                        "id": 64304465,
                        "name": "Lemon Chaap Roll",
                        "description": "Pure veg made with soya.",
                        "cloudinaryImageId": "cp86fqxywrwyzosdg834",
                        "price": 17500
                    },
                    "64304466": {
                        "id": 64304466,
                        "name": "Stuff Chaap Roll",
                        "description": "",
                        "cloudinaryImageId": "d4nunfmh1iur7wxoyjdo",
                        "price": 18500
                    },
                    "64304467": {
                        "id": 64304467,
                        "name": "Punjabi Chaap Roll",
                        "description": "",
                        "cloudinaryImageId": "p7183mcuxawmxufrwidt",
                        "price": 17500
                    },
                    "64304468": {
                        "id": 64304468,
                        "name": "Mushroom Roll",
                        "description": "",
                        "cloudinaryImageId": "rlkyjtgl6huyn14wzky6",
                        "price": 22500
                    },
                    "64304469": {
                        "id": 64304469,
                        "name": "Sunny Leona Chaap Roll",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 17500
                    },
                    "64304470": {
                        "id": 64304470,
                        "name": "Veg Chicken Chaap Roll",
                        "description": "",
                        "cloudinaryImageId": "",
                        "price": 18500
                    },
                    "64304471": {
                        "id": 64304471,
                        "name": "Veg Fish Tikka Roll",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "g1ewtlunaxvryptb2eeb",
                        "price": 18500
                    },
                    "64304472": {
                        "id": 64304472,
                        "name": "Veg Leg Piece Roll",
                        "description": "",
                        "cloudinaryImageId": "xcnagezpeinqnqa2yzca",
                        "price": 18000
                    },
                    "64304473": {
                        "id": 64304473,
                        "name": "Mia Khalifa Chaap Roll",
                        "description": "",
                        "cloudinaryImageId": "opw9zvh1f21zijxbfaxf",
                        "price": 17500
                    },
                    "64304474": {
                        "id": 64304474,
                        "name": "Veg Egg Curry",
                        "description": "",
                        "cloudinaryImageId": "6892c73da190f3f861d4bd8789bcb658",
                        "price": 18500
                    },
                    "64304475": {
                        "id": 64304475,
                        "name": "Veg Butter Chicken",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "yzc7hulngu8fakjxuaet",
                        "price": 18500
                    },
                    "64304476": {
                        "id": 64304476,
                        "name": "Veg Bali Ram Chicken",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "tanfmdpwnhfxwbg7azvs",
                        "price": 18500
                    },
                    "64304477": {
                        "id": 64304477,
                        "name": "Veg Handi Chicken",
                        "description": "| Veg Preparation |",
                        "cloudinaryImageId": "jl2tefl0t8bpj5jhnkiw",
                        "price": 18500
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "53766",
            "name": "Pizza Hut",
            "city": "Noida 1",
            "area": "Sector 50",
            "avgRatingString": "3.5",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "iqcemsagxkrbx8bljofz",
            "costForTwoMsg": "₹350 for two",
            "cuisines": ["Pizzas"],
            "menu": {
                "items": {
                    "107425662": {
                        "id": 107425662,
                        "name": "7up Pet Bottle",
                        "description": "",
                        "cloudinaryImageId": "saksp4hyqaargjlyt0mf",
                        "price": 5700
                    },
                    "107425664": {
                        "id": 107425664,
                        "name": "Cheese Garlic Bread",
                        "description": "Nothing beats our garlic bread! Period!",
                        "cloudinaryImageId": "ziohlqoy38mfqzmfxy7e",
                        "price": 15900
                    },
                    "107425666": {
                        "id": 107425666,
                        "name": "Choco Volcano",
                        "description": "Warm choco cake with gooey center",
                        "cloudinaryImageId": "k76b8gwkiskwhc9p7nbt",
                        "price": 12900
                    },
                    "107425667": {
                        "id": 107425667,
                        "name": "Garlic Bread Stix",
                        "description": "Garlic Breadsticks, the perfect pizza companion.",
                        "cloudinaryImageId": "n2ycmete7ehes9mrerlw",
                        "price": 11900
                    },
                    "107425669": {
                        "id": 107425669,
                        "name": "Mirinda Pet Bottle",
                        "description": "",
                        "cloudinaryImageId": "wjmrbgifbxdmqnumj84h",
                        "price": 5700
                    },
                    "107425670": {
                        "id": 107425670,
                        "name": "Pepsi Pet Bottle",
                        "description": "",
                        "cloudinaryImageId": "fyddsedv686kkr3sx6py",
                        "price": 5700
                    },
                    "107425671": {
                        "id": 107425671,
                        "name": "Garlic Bread Spicy Supreme",
                        "description": "Garlic bread topped with (Mozzarella cheeese , onion & green chillies ).",
                        "cloudinaryImageId": "m8ecjvtqcjtnt31uvobl",
                        "price": 16900
                    },
                    "107425673": {
                        "id": 107425673,
                        "name": "Creamy Garlic Breadstix",
                        "description": "Classic Garlic breadsticks with a twist of creamy sauce",
                        "cloudinaryImageId": "o0zibtrbtyjwznptrsgy",
                        "price": 16900
                    },
                    "107425676": {
                        "id": 107425676,
                        "name": "Spicy Baked Chicken Wings",
                        "description": "Tender and Juicy sweet chilli chicken wings.",
                        "cloudinaryImageId": "aeems3ogejdzxfjblkx7",
                        "price": 25900
                    },
                    "107425677": {
                        "id": 107425677,
                        "name": "Zesty Chicken Pocket",
                        "description": "Freshly baked pocket stuffed with chicken, veggies & smoked texas garlic sauce",
                        "cloudinaryImageId": "wukqmbrmv0vngtlrczgw",
                        "price": 14900
                    },
                    "107425678": {
                        "id": 107425678,
                        "name": "Zesty Paneer Pocket",
                        "description": "Freshly baked pocket stuffed with flavourful paneer, veggies & smoked texas garlic sauce",
                        "cloudinaryImageId": "spmefmk8u9ftwbvdk6ay",
                        "price": 12900
                    },
                    "107425679": {
                        "id": 107425679,
                        "name": "Water Bottle - 1000ml",
                        "description": "Water Bottle @50",
                        "cloudinaryImageId": "xqzuwugv50uum4ffglv5",
                        "price": 4750
                    },
                    "107425681": {
                        "id": 107425681,
                        "name": "Jalapeno Poppers",
                        "description": "Jalapano poppers with gooey white sauce.",
                        "cloudinaryImageId": "oqfrpjaw6v4q3p3qafww",
                        "price": 11900
                    },
                    "107425685": {
                        "id": 107425685,
                        "name": "Potato Poppers",
                        "description": "Baked chilli garlic potato bites.",
                        "cloudinaryImageId": "frdlg5f2vnfcvrztvoyi",
                        "price": 10900
                    },
                    "107425686": {
                        "id": 107425686,
                        "name": "Cheesy Comfort",
                        "description": "Cheesy creamy pasta comfort topped with onion, green capsicum, red capsicum & sweet corn",
                        "cloudinaryImageId": "f2miudjhhrpyeyxn23dz",
                        "price": 23900
                    },
                    "107425689": {
                        "id": 107425689,
                        "name": "Cheesy Comfort - Non Veg",
                        "description": "Cheesy creamy pasta comfort topped with chicken sausage, onion, green capsicum & red capsicum",
                        "cloudinaryImageId": "u7v7arnpdxmffedcrmtq",
                        "price": 26900
                    },
                    "107425692": {
                        "id": 107425692,
                        "name": "Pepsi Black",
                        "description": "",
                        "cloudinaryImageId": "ff2fmvckla7eclvn65wu",
                        "price": 5700
                    },
                    "107425693": {
                        "id": 107425693,
                        "name": "Spiced Tomato Twist Veg",
                        "description": "Tangy flavourful red sauce pasta infused with heavenly herbs & spices topped with onion, green capsicum & red capsicum",
                        "cloudinaryImageId": "nzq6soxhtqgeslmqufrq",
                        "price": 21900
                    },
                    "107425695": {
                        "id": 107425695,
                        "name": "Spiced Tomato Twist Non Veg",
                        "description": "Tangy flavourful red sauce pasta infused with heavenly herbs & spices topped with chicken sausage",
                        "cloudinaryImageId": "sqfmbhg8tdrslyn49shw",
                        "price": 24900
                    },
                    "107425696": {
                        "id": 107425696,
                        "name": "Indi Rockin Roll Veg",
                        "description": "Soft tortilla roll stuffed with veg kebab, mint mayo & melted mozzarella cheese goodness",
                        "cloudinaryImageId": "rll13didzqwfinxrtwts",
                        "price": 16900
                    },
                    "107425699": {
                        "id": 107425699,
                        "name": "Indi Rockin Roll Non Veg",
                        "description": "Soft tortilla roll stuffed with chicken tikka, mint mayo & melted mozzarella cheese goodness",
                        "cloudinaryImageId": "mbhnxx2dgxqmk0ai2jvl",
                        "price": 19900
                    },
                    "107425700": {
                        "id": 107425700,
                        "name": "Creamy Mushroom Pasta",
                        "description": "Pasta in a rich creamy mushroom sauce flavored with garlic & parsley!",
                        "cloudinaryImageId": "",
                        "price": 29900
                    },
                    "107425702": {
                        "id": 107425702,
                        "name": "My Box-Veg Starting @ Rs. 249 (Save Upto 27%)",
                        "description": "1 Personal Veg Pizza, 2 Pc Garlic Bread & 1 Pepsi Pet Bottle!",
                        "cloudinaryImageId": "enj70rnnmrp9i9rufmkh",
                        "price": 0,
                        "defaultPrice": 24900
                    },
                    "107425703": {
                        "id": 107425703,
                        "name": "Kebab e Crust Sausage Meal for 2",
                        "description": "1 Med Chicken sausage Kebab Crust, 1 Garlic bread stix and  1 Pepsi Pet",
                        "cloudinaryImageId": "td4sa6pjpz6hbiotc9lk",
                        "price": 0,
                        "defaultPrice": 54900
                    },
                    "107425705": {
                        "id": 107425705,
                        "name": "Kebab e Crust Tikka Meal for 2",
                        "description": "1 Med Chicken tikka/Malai tikka Kebab Crust, 1 Garlic bread stix and  1 Pepsi Pet",
                        "cloudinaryImageId": "jdjfzgsrfavq0pzdzbg0",
                        "price": 0,
                        "defaultPrice": 64900
                    },
                    "107425715": {
                        "id": 107425715,
                        "name": "My Box Pasta Non Veg starting @ 309",
                        "description": "1 Non Veg Pasta, 2 Pc Plain Garlic Bread & 1 Pepsi Pet",
                        "cloudinaryImageId": "z78kire28toibcpcmccd",
                        "price": 0,
                        "defaultPrice": 30900
                    },
                    "107425717": {
                        "id": 107425717,
                        "name": "Triple Chicken Feast",
                        "description": "Spicy Schezwan Chicken Meatball, flavourful  Herbed Chicken, juicy Chicken Sausage, Green Capsicum & Onion, spicy Red Paprika with classic pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "quxirmjttzksp7xlhysc",
                        "price": 0,
                        "defaultPrice": 40900
                    },
                    "107425721": {
                        "id": 107425721,
                        "name": "Chicken Tikka Supreme",
                        "description": "A divine combination of delicious Chicken Tikka &  Malai Chicken Tikka, Onion, spicy Red Paprika with flavourful pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "d3bnas8nxt9dr13jhipu",
                        "price": 0,
                        "defaultPrice": 40900
                    },
                    "107425723": {
                        "id": 107425723,
                        "name": "Chicken Pepper Crunch",
                        "description": "Flavourful Herbed Chicken, crunchy Onion& Green Capsicum,  Red Capsicum  & 100% mozzarella cheese with our classic pan sauce.",
                        "cloudinaryImageId": "phtizckwm3bmcssnrtz2",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107425725": {
                        "id": 107425725,
                        "name": "Chicken Tikka",
                        "description": "Mouth-watering Chicken Tikka, crunchy Onion & Tomato with delicious Tandoori Sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "juplqft4tmub5hqocwxk",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107425728": {
                        "id": 107425728,
                        "name": "Italian Chicken Feast",
                        "description": "Juicy Chicken n Cheese Sausage, yummy Chicken Pepperoni, juicy Sweet Corn, Black Olive & spicy Jalapeno with flavourful pan sauce and 100% Mozzarella cheese.",
                        "cloudinaryImageId": "vn50jmkd5nalg83ystso",
                        "price": 0,
                        "defaultPrice": 40900
                    },
                    "107425741": {
                        "id": 107425741,
                        "name": "Malai Chicken Tikka",
                        "description": "Amazingly flavourful Chicken Malai Tikka, Herbed Onion & Green Capsicum, spicy Red Paprika with flavourful pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "t1stinhga3alitdpr6yt",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107425747": {
                        "id": 107425747,
                        "name": "Double Paneer Supreme",
                        "description": "Loaded with extra Spiced Paneer, Herbed Onion & Green Capsicum, spicy Red Paprika with flavourful pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "dytjxmainn1bjd7jjoda",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107425754": {
                        "id": 107425754,
                        "name": "Veg Exotica",
                        "description": "An exotic combination of Baby Corn, Black Olives, Green Capsicum, spicy Jalapeno, Red Capsicum with flavourful pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "fczfoggv5ehndszayadg",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107425757": {
                        "id": 107425757,
                        "name": "Veggie Supreme",
                        "description": "A supreme combination of Black Olives, Green Capsicum, Mushroom, Onion, spicy Red Paprika & juicy Sweet Corn  with flavourful pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "z0c4xpovma1qtmu4tlls",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107425762": {
                        "id": 107425762,
                        "name": "Chicken Supreme",
                        "description": "Loaded with delicious Chicken Tikka, flavourful Herbed Chicken, spicy Schezwan Chicken Meatball with flavourful pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "dlvdmsn1uotbdn4vzvap",
                        "price": 0,
                        "defaultPrice": 40900
                    },
                    "107425767": {
                        "id": 107425767,
                        "name": "Veg Kebab Surprise",
                        "description": "Flavorful Veg Kebab, crunchy Onion, Green Capsicum, Tomato & juicy Sweet Corn with  delicious Tandoori Sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "mvkqcxttjxvafhxhah4u",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107425772": {
                        "id": 107425772,
                        "name": "Veggie Lover",
                        "description": "Crunchy Onions, Green Capsicum, Mushroom, Tomato & Red Paprika topped on our signature pan pizza base with flavourful pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "ibbl63tauvntdic0gnvq",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "107425810": {
                        "id": 107425810,
                        "name": "Country Feast",
                        "description": "Loaded with Herbed Onion & Green capsicum, Sweet Corn, Tomato & Mushroom with signature pan sauce and 100% mozzarella cheese. It's a feast you can't refuse.",
                        "cloudinaryImageId": "fqzol9tuftv5aelg0v35",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "107425814": {
                        "id": 107425814,
                        "name": "Farmers Pick",
                        "description": "Flavourful Herbed Onion and Green, crunchy Red Capsicum, yummy  Mushrooms & Baby Corn with flavourful pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "abecxrnu6gpe6btgcgzx",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "107425817": {
                        "id": 107425817,
                        "name": "Tandoori Paneer",
                        "description": "It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
                        "cloudinaryImageId": "s5ld93rsknx0fhj6xarn",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "107425821": {
                        "id": 107425821,
                        "name": "Corn & Cheese",
                        "description": "A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce.",
                        "cloudinaryImageId": "ckbnw98n6tffy50wvuzm",
                        "price": 0,
                        "defaultPrice": 21900
                    },
                    "107425825": {
                        "id": 107425825,
                        "name": "Tandoori Onion",
                        "description": "Lip-smacking combination of Tandoori Sauce & Onion with 100% mozzarella cheese.",
                        "cloudinaryImageId": "sxie7yopt8wye2humidg",
                        "price": 0,
                        "defaultPrice": 21900
                    },
                    "107425827": {
                        "id": 107425827,
                        "name": "Spiced Chicken Meatballs",
                        "description": "Juicy Schezwan Chicken Meatball, crunchy Onion & 100% mozzarella cheese with flavourful pan sauce.",
                        "cloudinaryImageId": "ckrqkssgc6qkqqvkfpnq",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "107425829": {
                        "id": 107425829,
                        "name": "Margherita",
                        "description": "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
                        "cloudinaryImageId": "dpventcrozvfni0lqb10",
                        "price": 0,
                        "defaultPrice": 16900
                    },
                    "107425927": {
                        "id": 107425927,
                        "name": "Chicken Sausage",
                        "description": "Pizza topped with Chicken n Cheese Sausages & crunchy Onions, flavourful pan sauce and 100% mozzarella cheese.",
                        "cloudinaryImageId": "aylqpxx08pltowbzxhd3",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "107425931": {
                        "id": 107425931,
                        "name": "Double Cheese",
                        "description": "Did someone say EXTRA CHEESE? Pizza topped with extra Cheese that is 100% mozzerella with herb-infused signature pan sauce.",
                        "cloudinaryImageId": "llk1grmcjyijsxryo0pc",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "107425934": {
                        "id": 107425934,
                        "name": "Spiced Paneer",
                        "description": "Spiced Paneer, crunchy Onion, juicy Tomato  & 100% mozzarella cheese, with our classic pan sauce.",
                        "cloudinaryImageId": "a89yqx09ppwlecyqterp",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "107425944": {
                        "id": 107425944,
                        "name": "Veggie Feast",
                        "description": "Herbed onion and Green Capsicum, juicy Sweet Corn & 100% mozzarella cheese with flavourful pan sauce.",
                        "cloudinaryImageId": "cbye9x7wxeopwqvenn7g",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "107425951": {
                        "id": 107425951,
                        "name": "Veggie Tandoori",
                        "description": "Crunchy Onion, Green Capsicum & yummy Mushroom with your favourite Tandoori Sauce.",
                        "cloudinaryImageId": "pdnars9izjxrigqy675c",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "107425961": {
                        "id": 107425961,
                        "name": "Chicken N Corn Delight",
                        "description": "Oh-so-flavourful Herbed Chicken, juicy Sweet Corn, crunchy  Green Capsicum  & 100% mozzarella cheese with classic pan sauce.",
                        "cloudinaryImageId": "ydm9zbwskvhw1mozn4nd",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "107425969": {
                        "id": 107425969,
                        "name": "Chicken Pepperoni",
                        "description": "Yummy Chicken Pepperoni & 100% mozzarella cheese with signature pan sauce. It’s a classic!",
                        "cloudinaryImageId": "gdz44c9hirco09bdafoq",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107426036": {
                        "id": 107426036,
                        "name": "Double Chicken Sausage",
                        "description": "Loaded with extra Chicken n Cheese Sausage with 100% mozzarella cheese &  flavourful pan sauce.",
                        "cloudinaryImageId": "ryhakpddpfvqgtgrsfnd",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "107426040": {
                        "id": 107426040,
                        "name": "Momo Dip",
                        "description": "Schezwan Dip",
                        "cloudinaryImageId": "ygx3tiuj7ygbp1jyw1ce",
                        "price": 3000
                    },
                    "107426044": {
                        "id": 107426044,
                        "name": "Veg Mayonnaise Dip",
                        "description": "Veg Mayonnaise Dip 20 Gm",
                        "cloudinaryImageId": "k05qzlgnyo43bdjdbbuy",
                        "price": 2857
                    },
                    "107426048": {
                        "id": 107426048,
                        "name": "Cheesy Dip",
                        "description": "Cheesy Jalapeno Dip 20 Gm",
                        "cloudinaryImageId": "l7twhqhybkdlsvkyq3pj",
                        "price": 2857
                    },
                    "107426051": {
                        "id": 107426051,
                        "name": "Spiced Paneer",
                        "description": "Light & crispy new San Francisco Style Crust, topped with Chef's special sauce and a drizzle of extra virgin olive oil.",
                        "cloudinaryImageId": "nw70gegocmywylu1d0gu",
                        "price": 0,
                        "defaultPrice": 25900
                    },
                    "107426061": {
                        "id": 107426061,
                        "name": "Veg Kebab Surprise",
                        "description": "Light & crispy new San Francisco Style Crust, topped with Chef's special sauce and a drizzle of extra virgin olive oil.",
                        "cloudinaryImageId": "numzhhwtqzqwiczqovbe",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107426070": {
                        "id": 107426070,
                        "name": "Veggie Supreme",
                        "description": "Light & crispy new San Francisco Style Crust, topped with Chef's special sauce and a drizzle of extra virgin olive oil.",
                        "cloudinaryImageId": "gwfnlvdlm2ky1ffffgmi",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107426143": {
                        "id": 107426143,
                        "name": "Double Paneer Supreme",
                        "description": "Light & crispy new San Francisco Style Crust, topped with Chef's special sauce and a drizzle of extra virgin olive oil.",
                        "cloudinaryImageId": "m9lhvluwqircrnvfgqlh",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107426158": {
                        "id": 107426158,
                        "name": "Chicken Pepperoni",
                        "description": "Light & crispy new San Francisco Style Crust, topped with Chef's special sauce and a drizzle of extra virgin olive oil.",
                        "cloudinaryImageId": "fssj8tlp7yc8369ww8hp",
                        "price": 0,
                        "defaultPrice": 37900
                    },
                    "107426168": {
                        "id": 107426168,
                        "name": "Chicken Supreme",
                        "description": "Light & crispy new San Francisco Style Crust, topped with Chef's special sauce and a drizzle of extra virgin olive oil.",
                        "cloudinaryImageId": "gi7ytl3oe2327x3ypibr",
                        "price": 0,
                        "defaultPrice": 40900
                    },
                    "107426176": {
                        "id": 107426176,
                        "name": "San Francisco Style My Box Veg",
                        "description": "1 Personal San Francisco Style Veg Pizza, 2 Pcs Garlic Bread & Pepsi Pet",
                        "cloudinaryImageId": "srnfvtefdbearvsyvqbb",
                        "price": 0,
                        "defaultPrice": 24900
                    },
                    "107426184": {
                        "id": 107426184,
                        "name": "Mexican Garlic Breadstix",
                        "description": "Freshly baked San Francisco Style breadsticks topped with chopped onion, green capsicum, red capsicum, jalapeno, black olives & drizzled with olive oil",
                        "cloudinaryImageId": "dzuiex47nfr408tihonk",
                        "price": 15900
                    },
                    "107426187": {
                        "id": 107426187,
                        "name": "Tear & Share Veg",
                        "description": "Garlic bread stix stuffed & topped with Mozzarella Cheese, creamy mayo and Jalapeno. Cheese lovers delight. Tear it to share it !",
                        "cloudinaryImageId": "nrsyretuvacezojcjeee",
                        "price": 18900
                    },
                    "107426190": {
                        "id": 107426190,
                        "name": "Tear & Share Non-Veg",
                        "description": "Garlic bread stix stuffed & topped with Mozzarella Cheese, creamy mayo and Chicken Pepperoni. Cheese lovers delight. Tear it to share it !",
                        "cloudinaryImageId": "doqtxijmd4z61vrtubi6",
                        "price": 19900
                    },
                    "107426211": {
                        "id": 107426211,
                        "name": "Margherita",
                        "description": "Light & crispy new San Francisco Style Crust, topped with Chef's special sauce and a drizzle of extra virgin olive oil.",
                        "cloudinaryImageId": "lmbiglziijwglrkihmy7",
                        "price": 0,
                        "defaultPrice": 16900
                    },
                    "107426217": {
                        "id": 107426217,
                        "name": "My Box Pasta Veg starting @ 279",
                        "description": "1 Veg Pasta, 2 Pc Plain Garlic Bread & 1 Pepsi Pet",
                        "cloudinaryImageId": "aqihmadiafb7npdlibaa",
                        "price": 0,
                        "defaultPrice": 27900
                    },
                    "107426221": {
                        "id": 107426221,
                        "name": "Hut Treat Meal for 2 - Veg",
                        "description": "1 Medium Veg Pizza up to Signature, 1 Garlic Bread, 1 Pepsi",
                        "cloudinaryImageId": "fioisom0on4bcoxrisxz",
                        "price": 0,
                        "defaultPrice": 52900
                    },
                    "107426224": {
                        "id": 107426224,
                        "name": "My Box Non-Veg Starting at Rs. 319 (Save Upto  23%)",
                        "description": "1 Personal Non Veg Pizza, 2 Pc Garlic Bread & 1 Pepsi Pet Bottle!",
                        "cloudinaryImageId": "fhpvkqlll2qqmo4rzyew",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "107426229": {
                        "id": 107426229,
                        "name": "Hut Treat- Meal for 4 Non Veg @ 1069 - (Save Upto 36%)",
                        "description": "Super Saver Meal Combo @ 1069 - 2 Med Non Veg Pizza of Choice, 2 Garlic Breadstixs, 2 Pepsi Pet Bottles. \"Try new Momo Mia Pizza with this\"",
                        "cloudinaryImageId": "zhgb5zsv2gkbxym16j93",
                        "price": 0,
                        "defaultPrice": 106900
                    },
                    "107426231": {
                        "id": 107426231,
                        "name": "Hut Treat- Meal for 4 Veg @ 859 - (Save Upto 38%)",
                        "description": "Super Saver Meal Combo @ 859 - 2 Med Veg Pizza of Choice, 2 Garlic Breadstixs, 2 Pepsi Pet Bottles. \"Try new Momo Mia Pizza with this\"",
                        "cloudinaryImageId": "lhoffoptlyzoftohwnqu",
                        "price": 0,
                        "defaultPrice": 85900
                    },
                    "107426234": {
                        "id": 107426234,
                        "name": "Hut Treat- Meal for 4 Non Veg @ 959 - (Save Upto 38%)",
                        "description": "Super Saver Meal Combo @ 959 - 2 Med Non Veg Pizza of Choice, 2 Garlic Breadstixs, 2 Pepsi Pet Bottles. \"Try new Momo Mia Pizza with this\"",
                        "cloudinaryImageId": "ci9oegic0fhhhtjxp2ef",
                        "price": 0,
                        "defaultPrice": 95900
                    },
                    "107426238": {
                        "id": 107426238,
                        "name": "Hut Treat- Meal for 4 Veg @ 959 - (Save Upto 38%)",
                        "description": "Super Saver Meal Combo @ 959 - 2 Med Veg Pizza of Choice, 2 Garlic Breadstixs, 2 Pepsi Pet Bottles. \"Try new Momo Mia Pizza with this\"",
                        "cloudinaryImageId": "zt5mq8s9tl7jp3eusf0n",
                        "price": 0,
                        "defaultPrice": 95900
                    },
                    "107426239": {
                        "id": 107426239,
                        "name": "Hut Treat Meal for 2 - Non Veg",
                        "description": "1 Medium Non Veg Pizza up to Signature, 1 Garlic Bread, 1 Pepsi",
                        "cloudinaryImageId": "fx7vnjvhr4niwgesxuys",
                        "price": 0,
                        "defaultPrice": 58900
                    },
                    "107426242": {
                        "id": 107426242,
                        "name": "San Francisco Style My Box Non Veg",
                        "description": "1 Personal San Francisco Style Non Veg Pizza, 2 Pcs Garlic Bread & Pepsi Pet",
                        "cloudinaryImageId": "enwakofgbjcf7csjmcvv",
                        "price": 0,
                        "defaultPrice": 31900
                    },
                    "107426244": {
                        "id": 107426244,
                        "name": "San Francisco Style Hut Treat Meal for 2 Veg",
                        "description": "1 Medium San Francisco Style Veg Pizza upto Signature, 1 Garlic Bread, 1 Pepsi",
                        "cloudinaryImageId": "vzxv2q3jvbwjuqbjx34q",
                        "price": 0,
                        "defaultPrice": 52900
                    },
                    "107426246": {
                        "id": 107426246,
                        "name": "San Francisco Style Hut Treat Meal for 2 Non Veg",
                        "description": "1 Medium San Francisco Style Veg Pizza upto Signature, 1 Garlic Bread, 1 Pepsi",
                        "cloudinaryImageId": "qmpjckz5ycyufkzxgao5",
                        "price": 0,
                        "defaultPrice": 58900
                    },
                    "107426248": {
                        "id": 107426248,
                        "name": "San Francisco Style Hut Treat Meal for 4 Veg @ 859",
                        "description": "Super Saver Meal Combo @ 859 - 2 Medium Veg San Francisco Style Pizza of Choice, 2 Garlic Breadstixs, 2 Pepsi Pet Bottles",
                        "cloudinaryImageId": "okl818bw6ifhr9hk4st2",
                        "price": 0,
                        "defaultPrice": 85900
                    },
                    "107426250": {
                        "id": 107426250,
                        "name": "San Francisco Style Hut Treat Meal for 4 Non Veg @ 959",
                        "description": "Super Saver Meal Combo @ 959 - 2 Medium Non Veg San Francisco Style Pizza of Choice, 2 Garlic Breadstixs, 2 Pepsi Pet Bottles.",
                        "cloudinaryImageId": "axpx7suhyvisyjrxpwky",
                        "price": 0,
                        "defaultPrice": 95900
                    },
                    "107426253": {
                        "id": 107426253,
                        "name": "San Francisco Style Hut Treat Meal for 4 Veg @ 959",
                        "description": "Super Saver Meal Combo @ 959 - 2 Medium Veg San Francisco Style Pizza of Choice, 2 Garlic Breadstixs, 2 Pepsi Pet Bottles.",
                        "cloudinaryImageId": "eyrlctrkqpxjivwzunyg",
                        "price": 0,
                        "defaultPrice": 95900
                    },
                    "107426254": {
                        "id": 107426254,
                        "name": "San Francisco Style Hut Treat Meal for 4 Non Veg @ 1069",
                        "description": "Super Saver Meal Combo @ 1069 - 2 Medium Non Veg San Francisco Style Pizza of Choice, 2 Garlic Breadstixs, 2 Pepsi Pet Bottles.",
                        "cloudinaryImageId": "v8uoyfvu1mhvc1g0fzfh",
                        "price": 0,
                        "defaultPrice": 106900
                    },
                    "107426255": {
                        "id": 107426255,
                        "name": "Super Value Deal : 2 Medium Veg Pizzas starting at Rs 649 (Save Upto 41%)",
                        "description": "Choose any 2 of your Favorite Veg Medium Pizza",
                        "cloudinaryImageId": "ldywxlfetpfojuajk5xe",
                        "price": 0,
                        "defaultPrice": 64900
                    },
                    "107426257": {
                        "id": 107426257,
                        "name": "Super Value Deal : 2 Medium Non -Veg Pizzas starting at Rs 749 (Save Upto 39%)",
                        "description": "Choose any 2 of your Favorite Non-Veg Medium Pizzas",
                        "cloudinaryImageId": "afwiagiohxk2lyncwihx",
                        "price": 0,
                        "defaultPrice": 74900
                    },
                    "107426259": {
                        "id": 107426259,
                        "name": "Cheesy Momo Mia Pizza Veg",
                        "description": "Cheesy Veg Momos, filled with creamy veggies, sweet corn & gooey cheese, resting on a dallop of cheesy dressing on the crust with pizza base topped with spicy schezwan sauce, onion, capsicum, sweet corn & 100% mozzarella cheese !",
                        "cloudinaryImageId": "mqip01qkhtqy5vwui6kw",
                        "price": 0,
                        "defaultPrice": 32900
                    },
                    "107426260": {
                        "id": 107426260,
                        "name": "Cheesy Momo Mia Pizza Non Veg",
                        "description": "Cheesy Chicken Momos, filled with flavourful cheesy & creamy chicken, resting on a dallop of cheesy dressing on the crust with pizza base topped with spicy schezwan sauce, onion, capsicum, cheesy chicken sausage, & 100% mozzarella cheese!",
                        "cloudinaryImageId": "z7aw2uvmjmesg4zrounh",
                        "price": 0,
                        "defaultPrice": 35900
                    },
                    "107426263": {
                        "id": 107426263,
                        "name": "So Cheesy Baked Momos Veg",
                        "description": "Momo stuffed with creamy veggies, sweet corn & gooey cheese, baked in spicy schezwan sauce, cheesy dressing, topped with 100% mozzarella cheese",
                        "cloudinaryImageId": "gmxf5m3a5z2iqbc9piba",
                        "price": 21900
                    },
                    "107426270": {
                        "id": 107426270,
                        "name": "So Cheesy Baked Momos Non Veg",
                        "description": "Momo stuffed with amazingly flavourful cheesy & creamy chicken, baked in spicy schezwan sauce, cheesy dressing, topped with 100% mozzarella cheese",
                        "cloudinaryImageId": "vh0dyarbhoimnvzsozwh",
                        "price": 23900
                    },
                    "107426277": {
                        "id": 107426277,
                        "name": "Classic Corn - New",
                        "description": "Pizza topped with our Classic Pan sauce, sweet corn and cheesy dressing. An all-time favorite.",
                        "cloudinaryImageId": "aed52ab0d028996e060b772f11ff31d8",
                        "price": 0,
                        "defaultPrice": 9900
                    },
                    "107426280": {
                        "id": 107426280,
                        "name": "Classic Onion Capsicum - New",
                        "description": "Pizza topped with our Classic Pan sauce, crunchy onion & capsicum and cheesy dressing",
                        "cloudinaryImageId": "ed6a84173f69cdd4f676e94c2332c5e7",
                        "price": 0,
                        "defaultPrice": 9900
                    },
                    "107426284": {
                        "id": 107426284,
                        "name": "Italian Onion Tomato - New",
                        "description": "Pizza topped with our Chef's Special Italian sauce, crunchy onion, juicy tomatoes and cheesy dressing",
                        "cloudinaryImageId": "196e10de66a95c7c5ac7eade9392794c",
                        "price": 0,
                        "defaultPrice": 10900
                    },
                    "107426289": {
                        "id": 107426289,
                        "name": "Tandoori Mushroom & Sweet Corn - New",
                        "description": "Pizza topped with our signature tandoori sauce, juicy mushroom, sweet corn and cheesy dressing",
                        "cloudinaryImageId": "6033f4da0535f99b5dd06e8bbbf06aa5",
                        "price": 0,
                        "defaultPrice": 11900
                    },
                    "107426310": {
                        "id": 107426310,
                        "name": "Schezwan Corn & Capsicum - New",
                        "description": "Pizza topped with Spicy Schezwan sauce, sweet corn & crunchy capsicum and cheesy dressing",
                        "cloudinaryImageId": "af031506bf4fb689194f40631898f56e",
                        "price": 0,
                        "defaultPrice": 10900
                    },
                    "107426311": {
                        "id": 107426311,
                        "name": "Only Cheesy - New",
                        "description": "Pizza topped with cheesy dressing and mozzarella cheese for that extraaa cheesy flavor.",
                        "cloudinaryImageId": "c63995d20b951bb2a3ab9fe2a4cc7545",
                        "price": 0,
                        "defaultPrice": 12900
                    },
                    "107426313": {
                        "id": 107426313,
                        "name": "Classic Paneer, Capsicum & Onion - New",
                        "description": "Pizza topped with our Classic Pan sauce, flavorful paneer, crunchy onion & capsicum and cheesy dressing",
                        "cloudinaryImageId": "52ec7c00c85712a85875374a509a20ad",
                        "price": 0,
                        "defaultPrice": 14900
                    },
                    "107426314": {
                        "id": 107426314,
                        "name": "Classic Sausage - New",
                        "description": "Pizza topped with our Classic Pan sauce, flavorful chicken sausage and cheesy dressing.",
                        "cloudinaryImageId": "338affb40097e79c0f4e923c761b21d6",
                        "price": 0,
                        "defaultPrice": 12900
                    },
                    "107426316": {
                        "id": 107426316,
                        "name": "Italian Pepperoni & Onion - New",
                        "description": "Pizza topped with our Chef's Special Italian sauce, crunchy onion, chicken pepperoni and cheesy dressing",
                        "cloudinaryImageId": "42b9051a09223cea1f1b560fd7d269c7",
                        "price": 0,
                        "defaultPrice": 13900
                    },
                    "107426319": {
                        "id": 107426319,
                        "name": "Schezwan Meatball & Capsicum - New",
                        "description": "Pizza topped with Spicy Schezwan sauce, crunchy capsicum, Schezwan meatballs and cheesy dressing making it spice lovers paradise",
                        "cloudinaryImageId": "5fa4aadee3af1293fc3864d4c5e44eb1",
                        "price": 0,
                        "defaultPrice": 13900
                    },
                    "107426322": {
                        "id": 107426322,
                        "name": "Tandoori Tikka & Onion - New",
                        "description": "Pizza topped with our signature tandoori sauce, crunchy onion, flavorful chicken tikka and cheesy dressing.",
                        "cloudinaryImageId": "edc13f38af859691f7461f6ff66dd764",
                        "price": 0,
                        "defaultPrice": 14900
                    },
                    "107426334": {
                        "id": 107426334,
                        "name": "Classic Loaded Chicken Delight - New",
                        "description": "Pizza topped with our Classic Pan sauce, herbed chicken, flavorful sausages, juicy tomato and cheesy dressing",
                        "cloudinaryImageId": "9f588b95d1d2be0d48566471454a710b",
                        "price": 0,
                        "defaultPrice": 16900
                    },
                    "107426340": {
                        "id": 107426340,
                        "name": "Create Your Flavour Fun Combo - Box Of 4 - Veg",
                        "description": "Get 4 assorted Flavor Fun Pizzas. Perfect pizza crust topped with exciting new sauces, cheesy dressing & your favorite toppings",
                        "cloudinaryImageId": "job6jpsy58ua24htsn1q",
                        "price": 0,
                        "defaultPrice": 39900
                    },
                    "107426349": {
                        "id": 107426349,
                        "name": "Create Your Flavour Fun Combo - Box Of 4 - Non Veg",
                        "description": "Get 4 assorted Flavor Fun Pizzas. Perfect pizza crust topped with exciting new sauces, cheesy dressing & your favorite toppings",
                        "cloudinaryImageId": "be0n0jxcjv1z7ryvr1jh",
                        "price": 0,
                        "defaultPrice": 49900
                    },
                    "107426353": {
                        "id": 107426353,
                        "name": "Create Your Flavour Fun Combo - Box Of 2 - Veg Pizza",
                        "description": "Choose any 2 Veg Pizzas from our Flavour Fun Range",
                        "cloudinaryImageId": "xvtphaxmdnpcr6boayik",
                        "price": 0,
                        "defaultPrice": 19800
                    },
                    "107426356": {
                        "id": 107426356,
                        "name": "Create Your Flavour Fun Combo - Box Of 2 - Non Veg Pizza",
                        "description": "Choose any 2 Non Veg Pizzas from our Flavour Fun Range",
                        "cloudinaryImageId": "mosnz3vbz9mzif062hf3",
                        "price": 0,
                        "defaultPrice": 25800
                    },
                    "107426362": {
                        "id": 107426362,
                        "name": "Classic Veg Combo",
                        "description": "Get 2 Flavour fun pizzas - Classic Corn and Classic Paneer Capsicum & Onion with perfect pan crust and topped with cheesy dressing.",
                        "cloudinaryImageId": "rpsaanxk3epurskkzcsp",
                        "price": 24800
                    },
                    "107426366": {
                        "id": 107426366,
                        "name": "Schezwan Veg Combo",
                        "description": "Get 2 Schezwan Corn & Capsicum Flavour fun pizzas with perfect pan crust and topped with cheesy dressing.",
                        "cloudinaryImageId": "q6kz9pkzc3wx7edxyytd",
                        "price": 21800
                    },
                    "107426372": {
                        "id": 107426372,
                        "name": "Tandoori Classic Veg Combo",
                        "description": "Get 2 Flavour fun pizzas - Tandoori Mushroom & Sweet Corn and Classic Paneer Capsicum & Onion with perfect pan crust and topped with cheesy dressing.",
                        "cloudinaryImageId": "syt8hgkv0omn9wboobg4",
                        "price": 26800
                    },
                    "107426375": {
                        "id": 107426375,
                        "name": "Cheesy Classic Veg Combo",
                        "description": "Get 2 Flavour fun pizzas - Only Cheezy and Classic Corn with perfect pan crust and topped with cheesy dressing.",
                        "cloudinaryImageId": "l7mfvftdaaktlrcnwzut",
                        "price": 22800
                    },
                    "107426378": {
                        "id": 107426378,
                        "name": "Tandoori Classic Non-Veg Combo",
                        "description": "Get 2 Flavour fun pizzas - Tandoori Tikka & Onion and Classic Loaded Chicken Delight with perfect pan crust and topped with cheesy dressing.",
                        "cloudinaryImageId": "jroxcnsfjc04nuhdz3vy",
                        "price": 31800
                    },
                    "107426379": {
                        "id": 107426379,
                        "name": "Italian Schezwan Non-Veg Combo",
                        "description": "Get 2 Flavour fun pizzas - Italian Pepperoni & Onion and Schezwan Meatball & Capsicum with perfect pan crust and topped with cheesy dressing.",
                        "cloudinaryImageId": "jh3nteswyoco3m2ukxgs",
                        "price": 27800
                    },
                    "107796653": {
                        "id": 107796653,
                        "name": "Margherita Pizza",
                        "description": "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
                        "cloudinaryImageId": "dpventcrozvfni0lqb10",
                        "price": 16900
                    },
                    "110321510": {
                        "id": 110321510,
                        "name": "Ketchup",
                        "description": "Ketchup Sachet",
                        "cloudinaryImageId": "hovlvq3ceumkhyivd0ik",
                        "price": 95
                    },
                    "110504863": {
                        "id": 110504863,
                        "name": "Oreo & Cream (Inclusive of frozen dessert handling charges)",
                        "description": "Oreo & CreamTub (700ml) (Inclusive of frozen dessert handling charges)",
                        "cloudinaryImageId": "m65kfba5osptyuxuwrro",
                        "price": 29976
                    },
                    "111700325": {
                        "id": 111700325,
                        "name": "Cheesy-Choco Comfort Combo",
                        "description": "Get 1 personal Margherita Pizza, 1 Pepsi, 2 pc. Cheese Garlic Bread & 1 Choco Volcano. Cheesy dreams, guaranteed!",
                        "cloudinaryImageId": "b0a6791bd371018695167823b4a2e16e",
                        "price": 39900
                    },
                    "112257962": {
                        "id": 112257962,
                        "name": "Flavour Fun Duo (Non-veg) Night In",
                        "description": "Get any 2 (non-veg) Flavour Fun Pizzas, 1 Pepsi Bottle & 1 So Cheesy Baked Momo (non-veg)",
                        "cloudinaryImageId": "1fade61b21edbb6de640239235d0ee19",
                        "price": 0,
                        "defaultPrice": 44800
                    },
                    "112257965": {
                        "id": 112257965,
                        "name": "Midnight Pizza Party for 2 Veg",
                        "description": "Get any Veg Pizza Medium from the delight/signature/supreme range, 2 pc. Cheese Garlic Bread & a Pepsi FREE!",
                        "cloudinaryImageId": "3287e3d246ea9304ddda03c73eb9faee",
                        "price": 0,
                        "defaultPrice": 48900
                    },
                    "112257967": {
                        "id": 112257967,
                        "name": "Midnight Pizza Party for 2 Non Veg",
                        "description": "Get any Non Veg Medium Pizza from the delight/signature/supreme range, 2 pc. Cheese Garlic Bread & a Pepsi FREE!",
                        "cloudinaryImageId": "20108adf9ff5879c136c0457c637e792",
                        "price": 0,
                        "defaultPrice": 56900
                    },
                    "112257970": {
                        "id": 112257970,
                        "name": "Flat Night Owl Discount (FLAT Rs. 125) Veg",
                        "description": "Choose any Veg Medium Pizza from the delight/signature/supreme range & get a discount of FLAT Rs. 125!",
                        "cloudinaryImageId": "3bad769cd93a5cb62966e6605e99cce4",
                        "price": 0,
                        "defaultPrice": 36400
                    },
                    "112257971": {
                        "id": 112257971,
                        "name": "Flat Night Owl Discount (FLAT Rs. 125) Non Veg",
                        "description": "Choose any Non Veg Medium Pizza from the delight/signature/supreme range & get a discount of FLAT Rs. 125!",
                        "cloudinaryImageId": "32350427bf6592e237cfea6c5b534576",
                        "price": 0,
                        "defaultPrice": 44400
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "183389",
            "name": "NIC Ice Creams",
            "city": "Noida 1",
            "area": "Ghaziabad",
            "avgRatingString": "4.7",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "91d6dda411b108965541c16ac1cfe2bc",
            "costForTwoMsg": "₹120 for two",
            "cuisines": ["Desserts", "Ice Cream"],
            "menu": {
                "items": {
                    "46487448": {
                        "id": 46487448,
                        "name": "Roasted Almond Ice Cream 500ml",
                        "description": "Roasted almonds is a must-have. Its crunchy texture with its singular flavour is unparalleled. Also available in sugarless. ",
                        "cloudinaryImageId": "e7040962b7862e7a7432850d3d55baca",
                        "price": 25424
                    },
                    "46487451": {
                        "id": 46487451,
                        "name": "Stick Jaggery Almond Kulfi",
                        "description": "Made from jaggery and almond give into its unique & tantalizing taste. ",
                        "cloudinaryImageId": "x5xxiq2bv0cisopcftra",
                        "price": 5085
                    },
                    "46487452": {
                        "id": 46487452,
                        "name": "Stick Gulkand Kulfi",
                        "description": "Taste the aromatic sweetness of gulkand in every bite",
                        "cloudinaryImageId": "vjqvdklqz40qk18vvhsg",
                        "price": 5085
                    },
                    "46487454": {
                        "id": 46487454,
                        "name": "Chocochips Ice Cream 100ml",
                        "description": "Melt in mouth chocolate chips in every spoon. Truly, a decadent ice cream experience. ",
                        "cloudinaryImageId": "d02823cd5f98e2d2df2d94265bfb5386",
                        "price": 6356
                    },
                    "46487455": {
                        "id": 46487455,
                        "name": "Anjeer Ice Cream 100ml",
                        "description": "The smooth and creamy texture of anjeer ice cream. Great for consuming anytime!",
                        "cloudinaryImageId": "6f9820dab1838a3f565726a2af31094d",
                        "price": 6356
                    },
                    "46487456": {
                        "id": 46487456,
                        "name": "Tender Coconut Ice Cream 100ml",
                        "description": "Relish the refreshing and fresh bites of tender coconut, only in nic's tender coconut!",
                        "cloudinaryImageId": "53e18ece5b996e240b92bd9ddac94a01",
                        "price": 6356
                    },
                    "46487458": {
                        "id": 46487458,
                        "name": "Apricot Ice Cream 100ml",
                        "description": "Dive into the premium taste of imported apricot ice cream",
                        "cloudinaryImageId": "db3f52f88ecf007d3ef966cacfd91d4a",
                        "price": 7627
                    },
                    "46487459": {
                        "id": 46487459,
                        "name": "Roasted Almond Ice Cream 100ml",
                        "description": "Roasted almonds is a must-have. Its crunchy texture with its singular flavour is unparalleled. Also available in sugarless. ",
                        "cloudinaryImageId": "3fb8346f6f71cee2451a98eac0675a69",
                        "price": 6356
                    },
                    "46487460": {
                        "id": 46487460,
                        "name": "Alphonso Mango Ice Cream 100ml",
                        "description": "The king of fruits adds a delightful flavour to your scoop. The perfect taste of rich and pure ratnagiri alphonso mango in every bite",
                        "cloudinaryImageId": "a9d5d0cf277f9b2e4fb5fe5a14ae9825",
                        "price": 6356
                    },
                    "46487465": {
                        "id": 46487465,
                        "name": "Gulab Jamun Ice Cream 100ml",
                        "description": "Now india's favourite gulab jamun in ice cream. Lose yourself in its rich aroma & indulgent texture. ",
                        "cloudinaryImageId": "b44e5b92d965618190aa7571cd85bbd7",
                        "price": 6780
                    },
                    "46487466": {
                        "id": 46487466,
                        "name": "Dryfruit Overload Ice Cream 100ml",
                        "description": "A scoop of ice cream loaded with cashews, almonds, pistas and kishmishs. Needs no further description",
                        "cloudinaryImageId": "9a3bc6a9c1474f1c97069087613f32ac",
                        "price": 7627
                    },
                    "46487467": {
                        "id": 46487467,
                        "name": "Paan Ice Cream 100ml",
                        "description": "The tantalizing taste of paan meets the creamy goodness of our pure milk ice cream",
                        "cloudinaryImageId": "43f3e4fb009bc70c947a77a88adc43ac",
                        "price": 6780
                    },
                    "46487469": {
                        "id": 46487469,
                        "name": "Madagascar Chocolate Ice Cream 100ml",
                        "description": "Extra rich & smooth madagascar ice cream, takes chocolate indulgence to a level beyond description",
                        "cloudinaryImageId": "72ce42bb854eae08af0c82a388c363b7",
                        "price": 8475
                    },
                    "46487470": {
                        "id": 46487470,
                        "name": "Mixed Berries Ice Cream 100ml",
                        "description": "Crafted with imported californian cranberries, blueberries and strawberries. This ice cream is perfect to give you a berry rush!",
                        "cloudinaryImageId": "c3b206bf431ba9ac1bc9bc37e94f758d",
                        "price": 7627
                    },
                    "46487472": {
                        "id": 46487472,
                        "name": "Sea Salt Caramel Ice Cream 100ml",
                        "description": "A decadent swirl of mediterranean sea salt & crunch of crispy pearls ice cream for a tantalizing combination of taste and texture. ",
                        "cloudinaryImageId": "849a4d1c8518d5390a324727caadacdf",
                        "price": 8475
                    },
                    "46487473": {
                        "id": 46487473,
                        "name": "Matka Malai Kulfi [Pack Of 2]",
                        "description": "Desi ice cream treat in a hygienically packed matka",
                        "cloudinaryImageId": "ndadbqrqyuclqqit219u",
                        "price": 13559
                    },
                    "46487474": {
                        "id": 46487474,
                        "name": "Matka Dryfruit Malai Kulfi [Pack Of 2]",
                        "description": "Indias ice cream combined with dry fruits and served in a hygienically packed matka!",
                        "cloudinaryImageId": "b2b8596d589fd83a37b1c994d1acb34c",
                        "price": 15254
                    },
                    "46487475": {
                        "id": 46487475,
                        "name": "Slice Malai Kulfi [Pack Of 3]",
                        "description": "Traditional malai kulfi with the unadulterated aroma of condensed milk is truly a treat for your taste buds. ",
                        "cloudinaryImageId": "2f790294471c4723d64d05fecce83d88",
                        "price": 15254
                    },
                    "46487476": {
                        "id": 46487476,
                        "name": "Stick Paan Kulfi",
                        "description": "Tradition meets innovation. This combination made for indian hearts and palates. ",
                        "cloudinaryImageId": "pvtpeug6tlpodwswhyo7",
                        "price": 5085
                    },
                    "46487477": {
                        "id": 46487477,
                        "name": "Alphonso Mango Ice Cream 500ml",
                        "description": "The king of fruits adds a delightful flavour to your scoop. The perfect taste of rich and pure ratnagiri alphonso mango in every bite",
                        "cloudinaryImageId": "6dfb423e23ba2dadb0383d2ceb54f335",
                        "price": 25424
                    },
                    "46487480": {
                        "id": 46487480,
                        "name": "Cookies N Cream Ice Cream 500ml",
                        "description": "Dedicated to lovers of cookies. A fun scoop of oreo cookies in your ice cream",
                        "cloudinaryImageId": "a1142130ae155aaa44548b8e1ea9b03e",
                        "price": 25424
                    },
                    "46487481": {
                        "id": 46487481,
                        "name": "Kesar Pista Ice Cream 500ml",
                        "description": "A perfect combination of divine richness. Relish the royal treat of kesar and pista ice cream",
                        "cloudinaryImageId": "30a3883a8343f0242b03b3a997819170",
                        "price": 25424
                    },
                    "46487483": {
                        "id": 46487483,
                        "name": "Anjeer Ice Cream 500ml",
                        "description": "The smooth and creamy texture of anjeer ice cream. Great for consuming anytime!",
                        "cloudinaryImageId": "30af9f164bdf94025e3de5ed07c3a9a0",
                        "price": 25424
                    },
                    "46487485": {
                        "id": 46487485,
                        "name": "Apricot Ice Cream 500ml",
                        "description": "Dive into the premium taste of imported apricot ice cream",
                        "cloudinaryImageId": "49f9e4cd5a84d7d1c36dc9058e92d129",
                        "price": 31356
                    },
                    "46487486": {
                        "id": 46487486,
                        "name": "Chocochips Ice Cream 500ml",
                        "description": "Melt in mouth chocolate chips in every spoon. Truly, a decadent ice cream experience. ",
                        "cloudinaryImageId": "2791b4e0a62bbca96c37780572a27045",
                        "price": 25424
                    },
                    "46487490": {
                        "id": 46487490,
                        "name": "Gulab Jamun Ice Cream 500ml",
                        "description": "Now india's favourite gulab jamun in ice cream. Lose yourself in its rich aroma & indulgent texture. ",
                        "cloudinaryImageId": "046f2c377846e078605acda60a0b5829",
                        "price": 28814
                    },
                    "46487492": {
                        "id": 46487492,
                        "name": "Dryfruit Overload Ice Cream 500ml",
                        "description": "A scoop of ice cream loaded with cashews, almonds, pistas and kishmishs. Needs no further description",
                        "cloudinaryImageId": "8fa6d6fe11a95caa4c4e135c029694c8",
                        "price": 31356
                    },
                    "46487493": {
                        "id": 46487493,
                        "name": "Jaggery Almond Ice Cream 500ml",
                        "description": "Pure jaggery and crunchy almond come together in this playful ice cream delight!",
                        "cloudinaryImageId": "816360dc661244288efdb7564d26bb70",
                        "price": 28814
                    },
                    "46487494": {
                        "id": 46487494,
                        "name": "Paan Ice Cream 500ml",
                        "description": "The tantalizing taste of paan meets the creamy goodness of our pure milk ice cream",
                        "cloudinaryImageId": "a84148c8ad2380417fa45bc776e9fe70",
                        "price": 28814
                    },
                    "46487495": {
                        "id": 46487495,
                        "name": "Mixed Berries Ice Cream 500ml",
                        "description": "Crafted with imported californian cranberries, blueberries and strawberries. This ice cream is perfect to give you a berry rush!",
                        "cloudinaryImageId": "ef606627d3ed44a3cf84286e8727e3fe",
                        "price": 31356
                    },
                    "46487496": {
                        "id": 46487496,
                        "name": "Madagascar Chocolate Ice Cream 500ml",
                        "description": "Extra rich & smooth madagascar ice cream, takes chocolate indulgence to a level beyond description",
                        "cloudinaryImageId": "9ed67ac2f5e7fa055304ff0090a04ddd",
                        "price": 36017
                    },
                    "46487499": {
                        "id": 46487499,
                        "name": "Chocochips Ice Cream 750ml",
                        "description": "Melt in mouth chocolate chips in every spoon. Truly, a decadent ice cream experience. ",
                        "cloudinaryImageId": "2a6bb2b0894787a36fa2163e6013e410",
                        "price": 33051
                    },
                    "46487501": {
                        "id": 46487501,
                        "name": "Alphonso Mango Ice Cream 750ml",
                        "description": "The king of fruits adds a delightful flavour to your scoop. The perfect taste of rich and pure ratnagiri alphonso mango in every bite",
                        "cloudinaryImageId": "90cdfa349fd729d9474d34f5695380d6",
                        "price": 33051
                    },
                    "46487502": {
                        "id": 46487502,
                        "name": "Tender Coconut Ice Cream 750ml",
                        "description": "Relish the refreshing and fresh bites of  tender coconut, only in nic's tender coconut",
                        "cloudinaryImageId": "8463fee4e083af655bd8cc56dfde4e8a",
                        "price": 33051
                    },
                    "46487503": {
                        "id": 46487503,
                        "name": "Madagascar Chocolate Ice Cream 750ml",
                        "description": "Extra rich & smooth madagascar ice cream, takes chocolate indulgence to a level beyond description",
                        "cloudinaryImageId": "1aa3b102961be7fffd9e85edbf2aec4b",
                        "price": 44492
                    },
                    "46487505": {
                        "id": 46487505,
                        "name": "Sea Salt Caramel Ice Cream 500ml",
                        "description": "A decadent swirl of mediterranean sea salt & crunch of crispy pearls ice cream for a tantalizing combination of taste and texture. ",
                        "cloudinaryImageId": "ff82a53bf6d723ab2296c970ebf9d971",
                        "price": 36017
                    },
                    "47869996": {
                        "id": 47869996,
                        "name": "Strawberry Ice Cream 100ml",
                        "description": "Creamy milk ice cream, infused with the freshness of hand picked strawberries. ",
                        "cloudinaryImageId": "f0516e744d7af59896eb63fdd1f01121",
                        "price": 6356
                    },
                    "47869998": {
                        "id": 47869998,
                        "name": "Strawberry Ice Cream 500ml",
                        "description": "Creamy milk ice cream, infused with the freshness of hand picked strawberries. ",
                        "cloudinaryImageId": "8e6af7ae1d9508b30581536dba56347b",
                        "price": 25424
                    },
                    "60088739": {
                        "id": 60088739,
                        "name": "French Vanilla Ice Cream 100ml",
                        "description": "The world's favourite ice cream taste, it's plain but delicious",
                        "cloudinaryImageId": "e519ee111d3c6afa94df1dd372d9bf51",
                        "price": 7627
                    },
                    "60088742": {
                        "id": 60088742,
                        "name": "French Vanilla Ice Cream 500ml",
                        "description": "The world's favourite ice cream taste, it's plain but delicious",
                        "cloudinaryImageId": "91b9c9e0c7d8da76c5d12d49f2c3afa2",
                        "price": 31356
                    },
                    "63325193": {
                        "id": 63325193,
                        "name": "Coffee Walnut Ice Cream 100ml",
                        "description": "The distinctively bittersweet headiness of coffee crafted with nuttiness of walnut",
                        "cloudinaryImageId": "163486607d1235e4350d1f72625fb267",
                        "price": 6356
                    },
                    "63325194": {
                        "id": 63325194,
                        "name": "Coffee Walnut Ice Cream 500ml",
                        "description": "The distinctively bittersweet headiness of coffee crafted with nuttiness of walnut",
                        "cloudinaryImageId": "579e3a68e109b3197f1a1cbd3094b703",
                        "price": 25424
                    },
                    "67120519": {
                        "id": 67120519,
                        "name": "Rang Combo",
                        "description": "Celebrate the festival of colours with a cool combo that has thandai, paan and dryfruit overload ice creams this is the best way to escape the summer heat. ",
                        "cloudinaryImageId": "2f67f2b5ae86eba45f2cdcb33e214540",
                        "price": 27966
                    },
                    "80324005": {
                        "id": 80324005,
                        "name": "Strawberry Cheesecake Ice Cream 100ml",
                        "description": "Super fruity, tangy, sweet and incredibly creamy - nic's strawberry cheesecake variant contains all the essentials for a perfect dessert experience. ",
                        "cloudinaryImageId": "f67901b19326a01a1123906df7279350",
                        "price": 8475
                    },
                    "80324009": {
                        "id": 80324009,
                        "name": "Strawberry Cheesecake Ice Cream 500ml",
                        "description": "Super fruity, tangy, sweet and incredibly creamy - nic's strawberry cheesecake variant contains all the essentials for a perfect dessert experience. ",
                        "cloudinaryImageId": "39ab4f3088dae70d5b372f3bd482dace",
                        "price": 36017
                    },
                    "92233197": {
                        "id": 92233197,
                        "name": "Belgian Chocolate Ice Cream 100ml",
                        "description": "",
                        "cloudinaryImageId": "9e4e8536675cefffe723dbce6967c4c8",
                        "price": 8475
                    },
                    "92233198": {
                        "id": 92233198,
                        "name": "Belgian Chocolate Ice Cream 500ml",
                        "description": "",
                        "cloudinaryImageId": "430dd38b8d838bb5f677cf7eaaf629f7",
                        "price": 36017
                    },
                    "94333689": {
                        "id": 94333689,
                        "name": "Stick Malai Kulfi",
                        "description": "The all-time favorite desi ice cream - malai stick kulfi, is here to be ordered right away",
                        "cloudinaryImageId": "xrprhrfiahnnvcmcsfce",
                        "price": 5508
                    },
                    "99943333": {
                        "id": 99943333,
                        "name": "Roasted Almond Ice Cream (No Added Sugar) 100ml",
                        "description": "A crunchy delight that leaves you pining for now, now available in a no added sugar variant. It’s time to get roasted the right way, with this tasteful treat. ",
                        "cloudinaryImageId": "40303772d31b7646c346253b240942e2",
                        "price": 7627
                    },
                    "99943334": {
                        "id": 99943334,
                        "name": "Roasted Almond Ice Cream (No Added Sugar) 500ml",
                        "description": "A crunchy delight that leaves you pining for now, now available in a no added sugar variant. It’s time to get roasted the right way, with this tasteful treat. ",
                        "cloudinaryImageId": "70b7b2fdc508ad5426700bdf69674344",
                        "price": 31356
                    },
                    "99943335": {
                        "id": 99943335,
                        "name": "Tender Coconut Ice Cream (No Added Sugar) 100ml",
                        "description": "One of the most sought-after flavors, this pure fruit-based delight now comes with the allure of no added sugar",
                        "cloudinaryImageId": "8d191cb76a3d0e3be5fbe32fb5f45f71",
                        "price": 7627
                    },
                    "99943336": {
                        "id": 99943336,
                        "name": "Tender Coconut Ice Cream (No Added Sugar) 500ml",
                        "description": "One of the most sought-after flavors, this pure fruit-based delight now comes with the allure of no added sugar",
                        "cloudinaryImageId": "65b254db7270991a51d8198d1240734a",
                        "price": 31356
                    },
                    "106426634": {
                        "id": 106426634,
                        "name": "Gajar Halwa Ice Cream 100ml",
                        "description": "Favourite traditional dessert, now in every bite if your scoop",
                        "cloudinaryImageId": "1353982fa4a1bd8b99101fe6e3a32bae",
                        "price": 6780
                    },
                    "106426635": {
                        "id": 106426635,
                        "name": "Gajar Halwa Ice Cream 500 Ml",
                        "description": "Favourite traditional dessert, now in every bite if your scoop",
                        "cloudinaryImageId": "b737923fda66f5e725dcc80ba0c9fbef",
                        "price": 28814
                    },
                    "110291588": {
                        "id": 110291588,
                        "name": "Chikoo Ice Cream 100 Ml",
                        "description": "",
                        "cloudinaryImageId": "250f385a56a1f58ded751a60c8d1188a",
                        "price": 5386
                    },
                    "110743841": {
                        "id": 110743841,
                        "name": "Thandai Ice Cream 100ml",
                        "description": "",
                        "cloudinaryImageId": "a62632f261e8019e1a59193d29d6cba8",
                        "price": 5746
                    },
                    "110743843": {
                        "id": 110743843,
                        "name": "Thandai Ice Cream 500ml",
                        "description": "",
                        "cloudinaryImageId": "f525f7f808656d0b9433ae576348765d",
                        "price": 28814
                    },
                    "111760455": {
                        "id": 111760455,
                        "name": "Holi Hai Combo",
                        "description": "Dive into deliciousness with a combo that adds to your celebrations. Chill out with kesar pista, thandai and dryfruit overload ice creams for a rich and divine experience. ",
                        "cloudinaryImageId": "b23b13aa97922c1883cce271d526fdd0",
                        "price": 38983
                    },
                    "111760456": {
                        "id": 111760456,
                        "name": "Happy Holi Combo",
                        "description": "Add joy to your holi festivities with a combo that’s full of creamy goodness. This assortment of thandai, dryfruit overload and paan ice creams is crafted to spread happiness. ",
                        "cloudinaryImageId": "f93779bc90e0c63384f27ec018171169",
                        "price": 41525
                    },
                    "111760457": {
                        "id": 111760457,
                        "name": "Splash Combo",
                        "description": "Be splashed by the rich and creamy taste of thandai ice cream and dryfruit matka kulfis. Your taste buds will surely enjoy the celebration. ",
                        "cloudinaryImageId": "14b2acfb3b907fe35287dff9ee864387",
                        "price": 42373
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "375390",
            "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
            "city": "Noida 1",
            "area": "Ghaziabad",
            "avgRatingString": "--",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "pvfv9o42urnogs7wcwwc",
            "costForTwoMsg": "₹200 for two",
            "cuisines": ["Ice Cream Cakes", "Desserts"],
            "menu": { "items": {} }
        }
    },
    {
        "data": {
            "id": "543151",
            "name": "Big Smokin Burgers",
            "city": "Noida 1",
            "area": "Indirapuram",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "plcenbyhc6hhumsyshiz",
            "costForTwoMsg": "₹300 for two",
            "cuisines": ["Fast Food", "Beverages"],
            "menu": {
                "items": {
                    "92419773": {
                        "id": 92419773,
                        "name": "Big Smoke Fish Burger",
                        "description": "Grilled Fish Steak, topped with Southern Style Coleslaw, Jalapeno, Southwest Chipotle, Mustard & Cheese.",
                        "cloudinaryImageId": "t0batipjwe5cn3dj6tax",
                        "price": 34900
                    },
                    "92970713": {
                        "id": 92970713,
                        "name": "Classic Chocolate Shake",
                        "description": "",
                        "price": 18500
                    },
                    "92970717": {
                        "id": 92970717,
                        "name": "Death By Nutella Shake",
                        "description": "",
                        "cloudinaryImageId": "7fcebb63a15ee6931405fe30e276ca9d",
                        "price": 19900
                    },
                    "92970718": {
                        "id": 92970718,
                        "name": "Double Oreo Shake",
                        "description": "",
                        "cloudinaryImageId": "685e5eb44ffa87f15da666eafed5e6d7",
                        "price": 18800
                    },
                    "92970720": {
                        "id": 92970720,
                        "name": "Hazelnut Cold Coffee",
                        "description": "",
                        "price": 17400
                    },
                    "92970721": {
                        "id": 92970721,
                        "name": "Kitkat Mania Shake",
                        "description": "",
                        "cloudinaryImageId": "c4dda1e9cc88b3bbd3b741f6eedc169d",
                        "price": 18800
                    },
                    "92970722": {
                        "id": 92970722,
                        "name": "Strawberry Shake",
                        "description": "",
                        "cloudinaryImageId": "585103f3d8331b5072b242e81989705b",
                        "price": 18800
                    },
                    "92970724": {
                        "id": 92970724,
                        "name": "Summer Mango Shake",
                        "description": "",
                        "price": 18800
                    },
                    "92970725": {
                        "id": 92970725,
                        "name": "Walnut Brownie Shake",
                        "description": "",
                        "cloudinaryImageId": "666b5b223d169cab05a76038cf8dce5e",
                        "price": 19900
                    },
                    "92970726": {
                        "id": 92970726,
                        "name": "Berry Berry Lemonade",
                        "description": "",
                        "price": 12700
                    },
                    "92970727": {
                        "id": 92970727,
                        "name": "Fresh Lime Soda",
                        "description": "",
                        "cloudinaryImageId": "b053025cc02ee972a5bc5eabbcc539ff",
                        "price": 11700
                    },
                    "92970731": {
                        "id": 92970731,
                        "name": "Mango Magic Masala Soda",
                        "description": "",
                        "cloudinaryImageId": "d9d9b586c1fa5dbe03aa3db6b90b5906",
                        "price": 12700
                    },
                    "92970732": {
                        "id": 92970732,
                        "name": "Masala Lemonade",
                        "description": "",
                        "cloudinaryImageId": "cgzvsfcfrkdlzsrr7mlf",
                        "price": 11700
                    },
                    "92970751": {
                        "id": 92970751,
                        "name": "Crispy Chicken Burger",
                        "description": "Freshly made burger with crispy Chicken patty, Mayo, In house burger sauce, lettuce, Sauteed onions.",
                        "cloudinaryImageId": "xf9hh5fdkrhdwq2giu7d",
                        "price": 12500
                    },
                    "92970765": {
                        "id": 92970765,
                        "name": "Double Decker Chicken Burger",
                        "description": "Our innovative double patty burger with Cheese Patty, Crispy Chicken patty, Lettuce, Cheesy sauce, onions and tomatoes.",
                        "cloudinaryImageId": "6fc98f33a08708993874ec58728ba5bd",
                        "price": 22500
                    },
                    "92970860": {
                        "id": 92970860,
                        "name": "Big Smoke Chicken Burger",
                        "description": "Grilled Quarter Pound minced Chicken Patty, topped with Caramelize Pine Apple, Lettuce, Tomato, Onion, Pickles, with home made Burger Sauce & Cheese.",
                        "cloudinaryImageId": "yfs85yyhsukhpcp9mf4l",
                        "price": 23800
                    },
                    "92970869": {
                        "id": 92970869,
                        "name": "Big Smoke Lamb Burger",
                        "description": "Grilled Seasoned minced Mutton Patty, topped with Caramelize Pine Apple, Lettuce, Tomato, Onion, Pickles, with home made Burger Sauce & Cheese.",
                        "cloudinaryImageId": "",
                        "price": 36600
                    },
                    "92970878": {
                        "id": 92970878,
                        "name": "Dallas Cowboy Chicken Burger",
                        "description": "Grilled Quarter pound Chicken Steak, topped with Southern Style Coleslaw, Jalapeno, Southwest Chipotle & Cheese.",
                        "cloudinaryImageId": "7c423cc082b8cfb8a4a65025184845a6",
                        "price": 23800
                    },
                    "92970879": {
                        "id": 92970879,
                        "name": "Hot Bbq Chicken Burger",
                        "description": "Grilled Quarter pound Chicken Steak , topped with Lettuce, Tomato, Onion, Mustard, Dill Pickles with Hot BBQ Sauce & Cheese.",
                        "cloudinaryImageId": "ihgluo5sxppuoaj3c0k6",
                        "price": 23800
                    },
                    "92970881": {
                        "id": 92970881,
                        "name": "Monster Chicken Burger",
                        "description": "Not for the light hearted, Chicken Patty topped with egg half fried, Lettuce, Gherkins, Onions & Cheese.",
                        "cloudinaryImageId": "86787b4486d00b59e02b86abe7652e5f",
                        "price": 27500
                    },
                    "92970883": {
                        "id": 92970883,
                        "name": "New Yorker Fish Burger",
                        "description": "Crispy Fried Fish, Lettuce,Tomato,Gherkin,Mustard,Spicy Mayo & Cheese.",
                        "cloudinaryImageId": "b8b1bc504ef7a3a02418f9a28f116c10",
                        "price": 34900
                    },
                    "92970886": {
                        "id": 92970886,
                        "name": "Star Lamb Burger",
                        "description": "Grilled Seasoned minced Mutton Patty, topped with Caramelized Onion, Lettuce, Tomato, Onion, Pickles ,Mustard Mayo, Cheese.",
                        "cloudinaryImageId": "3e0137147968d60964dab1a4b4180a8f",
                        "price": 36600
                    },
                    "92970888": {
                        "id": 92970888,
                        "name": "The Fried Chick Burger",
                        "description": "Crispy Fried Chicken Breast topped with Lettuce, Tomato, Onion rings,  Gherkins, Mustard, Spicy Mayo & Cheese.",
                        "cloudinaryImageId": "kffhmthc6k4lq9hp84is",
                        "price": 24900
                    },
                    "92970890": {
                        "id": 92970890,
                        "name": "Cheese Explosion Veg Burger",
                        "description": "Our special cheese filled burger patty, Lettuce, tomatoes, & Cheesy dressings.",
                        "cloudinaryImageId": "gooh9dwb095aubtwm1bm",
                        "price": 14700
                    },
                    "92970891": {
                        "id": 92970891,
                        "name": "Crispy Veg Burger",
                        "description": "Crispy Veg patty, In house Tandoori Spread, topped with Lettuce, onions, Tomatoes, Cheese Slice.",
                        "cloudinaryImageId": "fqize11xh9rd7xquatc3",
                        "price": 11400
                    },
                    "92970895": {
                        "id": 92970895,
                        "name": "Double Decker Veg Burger",
                        "description": "Our innovative burger decked with Crispy potato patty, cheese patty, tomatoes, lettuce, in house sauces, made to perfection.",
                        "cloudinaryImageId": "mqzfyrtjyo5wylqd542t",
                        "price": 19900
                    },
                    "92970899": {
                        "id": 92970899,
                        "name": "Juicy Potato Burger",
                        "description": "Crispy Fried Potato Patty, Tomato, Onion, Liquid Cheese Dressing & Burger Spread.",
                        "cloudinaryImageId": "obhwxfego84usjob1hag",
                        "price": 8900
                    },
                    "92970905": {
                        "id": 92970905,
                        "name": "Smokey Veg Burger",
                        "description": "Our special Grilled Potato & Veggie Patty topped with Lettuce, Tomato , Spicy Mayo & Cheese Dressing.",
                        "cloudinaryImageId": "77a8f98862954faba028d7b6b48d8989",
                        "price": 11400
                    },
                    "92970906": {
                        "id": 92970906,
                        "name": "Big Smoke Paneer Burger",
                        "description": "Grilled Paneer Steak , topped with Lettuce, Tomato, Onion, Mustard, Dill Pickles with Hot BBQ Sauce, Cheese slice.",
                        "cloudinaryImageId": "imeid9kze05eorjx1ntr",
                        "price": 23300
                    },
                    "92970907": {
                        "id": 92970907,
                        "name": "Big Smoke Veg Burger",
                        "description": "Crispy Fried Homemade Potato & Veggie burger patty, topped with Lettuce, Tomato, Fried Onion Rings, In house Burger sauce & Cheese slice.",
                        "cloudinaryImageId": "fiqu1ie5necpmf8xitgc",
                        "price": 20900
                    },
                    "92970910": {
                        "id": 92970910,
                        "name": "Fierry Cottage Cheese Burger",
                        "description": "Grilled Paneer Steak , topped with Lettuce, Tomato, Onion, Pickles, Mustard, with Peri Peri Sauce & Cheese slice.",
                        "cloudinaryImageId": "4506d9faf3f56754971f9bbc21230923",
                        "price": 23300
                    },
                    "92970912": {
                        "id": 92970912,
                        "name": "Kung Fu Mama Paneer Burger",
                        "description": "Grilled Paneer Steak, topped with Lettuce, Sriracha Mayo, Pickles, Grilled onion & Capsicum & Cheese slice.",
                        "cloudinaryImageId": "2b7ac94b24147f5eaf44caa23d222c8b",
                        "price": 23300
                    },
                    "92970917": {
                        "id": 92970917,
                        "name": "Swiss Mushroom Burger",
                        "description": "Crispy Fried Mushroom Patty, Special Burger Sauce, Lettuce,Tomato Slice, Gherkin Slice & Cheese slice.",
                        "cloudinaryImageId": "ekrrhwyk7tqjb0dsjhyi",
                        "price": 23700
                    },
                    "92970930": {
                        "id": 92970930,
                        "name": "Cheesy Fries",
                        "description": "Fries topped with Cheesy sauces.",
                        "cloudinaryImageId": "",
                        "price": 18900
                    },
                    "92970934": {
                        "id": 92970934,
                        "name": "Crispy Potato Wedges",
                        "description": "Crispy Fried Potato Bites",
                        "cloudinaryImageId": "a9a245b25711e060854c1503b8e95dfc",
                        "price": 0,
                        "defaultPrice": 10900
                    },
                    "92970952": {
                        "id": 92970952,
                        "name": "Peri Peri Masala Fries",
                        "description": "Freshly Prepared Fries, Topped With Home Made Piri Piri Masala",
                        "cloudinaryImageId": "01657213ff7794bdafafa350f8f3859d",
                        "price": 0,
                        "defaultPrice": 10900
                    },
                    "92971012": {
                        "id": 92971012,
                        "name": "Big Smoke Chicken Sandwich",
                        "description": "A Trip To Louisiana- Roasted Onions, Roasted Capsicum, Valley Bbq Sauce, Louisiana Hot Sauce",
                        "cloudinaryImageId": "du0krngm4rcys0myw47d",
                        "price": 0,
                        "defaultPrice": 17400
                    },
                    "92971085": {
                        "id": 92971085,
                        "name": "Chicken Club Sandwich",
                        "description": "Classic Double Decker Chicken Sandwich",
                        "cloudinaryImageId": "2036d13e37c2f369668a2e4e983caee0",
                        "price": 0,
                        "defaultPrice": 18900
                    },
                    "92971127": {
                        "id": 92971127,
                        "name": "Peri Peri Chicken Sandwich",
                        "description": "Hot And Spicy Chicken Chunk Sandwich With Onions, Tomatoes, Jalepenos, Lettuce, Topped With Cheese And Peri Peri Sauce",
                        "cloudinaryImageId": "h6ouu6rup2hi1awzrc5r",
                        "price": 0,
                        "defaultPrice": 17400
                    },
                    "92971150": {
                        "id": 92971150,
                        "name": "Tandoori Chicken Sandwich",
                        "description": "Tandoori Chicken Tikkas Layered Between Green Chili & Mint Chutney, Onions, Tomato & Cheese",
                        "cloudinaryImageId": "e1f83nxmpepxtyjynlmi",
                        "price": 0,
                        "defaultPrice": 17400
                    },
                    "92971162": {
                        "id": 92971162,
                        "name": "Tex Mex Chicken Sandwich",
                        "description": "A Fun Concoction Of Texan & Mexican Cuisine With Lettuce, Corn & Bean Salsa, Crushed Nachos, Jalapeno, Southwest Chipotle Sauce",
                        "cloudinaryImageId": "f51f70440e2f750172c009b3f466f4c0",
                        "price": 0,
                        "defaultPrice": 17500
                    },
                    "92971177": {
                        "id": 92971177,
                        "name": "Big Smoke Paneer Sandwich",
                        "description": "Grilled Paneer, Roasted Onions, Roasted Capsicum, Valley Bbq Sauce, Louisiana Hot Sauce",
                        "cloudinaryImageId": "",
                        "price": 0,
                        "defaultPrice": 14700
                    },
                    "92971200": {
                        "id": 92971200,
                        "name": "New Yorker Cottage Cheese Sandwich",
                        "description": "Italian Lemon & Herb Mayo With Lettuce, Pan Tossed Cottage Cheese, Tomato, Onion, Black Olives & Cheese",
                        "cloudinaryImageId": "zrfp5qeufp8iwefabyqs",
                        "price": 0,
                        "defaultPrice": 14700
                    },
                    "92971255": {
                        "id": 92971255,
                        "name": "Tex Mex Paneer Sandwich",
                        "description": "A Fun Concoction Of Texan & Mexican Flavors With Paneer, Lettuce, Corn & Bean Salsa, Crushed Nachos, Jalapeno & Southwest Chipotle Sauce",
                        "cloudinaryImageId": "fbpqicq5pyh83mkxhrit",
                        "price": 0,
                        "defaultPrice": 14700
                    },
                    "92971267": {
                        "id": 92971267,
                        "name": "Veg Club Sandwich",
                        "description": "Classic Double Decker Sandwich",
                        "cloudinaryImageId": "gjxyc2ixnjfza91vznr4",
                        "price": 0,
                        "defaultPrice": 17900
                    },
                    "92971269": {
                        "id": 92971269,
                        "name": "Veg Grilled Sandwich",
                        "description": "Traditional Cheese Vegetable Sandwich Made With Mixed Veggies And Mildly Flavored Sauces",
                        "cloudinaryImageId": "09a8fe3682cfba8ddb39d41c8abf6c24",
                        "price": 0,
                        "defaultPrice": 14700
                    },
                    "92971272": {
                        "id": 92971272,
                        "name": "Crispy Chicken Wrap",
                        "description": "Tortilla Bread, Southwest Sauce, Shredded Lettuce, Pickle, Mustard & Cheese",
                        "cloudinaryImageId": "rhajddkbi6jykg4l2wwr",
                        "price": 20900
                    },
                    "92971344": {
                        "id": 92971344,
                        "name": "Doner Chicken Wrap",
                        "description": "Tortilla Bread, Crispy Chicken Bites, Hummus,Hot Garlic Sauce,Crunchy Veggies & Pickle",
                        "cloudinaryImageId": "683f63594f5e0f11f5498ab1680c8fa6",
                        "price": 20900
                    },
                    "92971361": {
                        "id": 92971361,
                        "name": "Tandoori Chicken Wrap",
                        "description": "Tandoori Tikkas layered between Green Chili & Mint Chutney, Onions, Tomato",
                        "cloudinaryImageId": "af2usli7xyfd8eyd4upx",
                        "price": 20900
                    },
                    "92971364": {
                        "id": 92971364,
                        "name": "Crispy Paneer Wrap",
                        "description": "Tortilla Bread, Crispy Paneer Bites, Hummus,Hot Garlic Sauce, Crunchy Veggies & Pickles.",
                        "cloudinaryImageId": "",
                        "price": 19600
                    },
                    "92971540": {
                        "id": 92971540,
                        "name": "Mediterranean Veg Wrap",
                        "description": "Tortilla Bread, Grilled vegetables, Hummus, Hot Garlic Sauces & Pickle.",
                        "cloudinaryImageId": "",
                        "price": 19600
                    },
                    "92971578": {
                        "id": 92971578,
                        "name": "Mexican Paneer Wrap",
                        "description": "Tortilla Bread, Lettuce, Corn & Bean Salsa, Mixed veggies, Grilled Paneer, Jalapeno, Southwest Chipotle Sauce.",
                        "cloudinaryImageId": "z5nl7n6al1rmvckcbqet",
                        "price": 19600
                    },
                    "98330645": {
                        "id": 98330645,
                        "name": "Little Star Veg Burger",
                        "description": "Crispy Veg Patty, Sauted Onions, Home Made Mayo Wrapped In Fresh Burger Buns",
                        "cloudinaryImageId": "47ea7a2b99b7e47b77a847d308d557d9",
                        "price": 6900
                    },
                    "98330647": {
                        "id": 98330647,
                        "name": "Macho Nacho Veg Burger",
                        "description": "Crispy Fried Homemade Potato & Veggie Burger Patty, Topped With Lettuce, Nachos, Tomato, Sauted Onions, Salsa, In House Burger Sauce & Cheese Slice",
                        "cloudinaryImageId": "adv2e8hg6br4pny0ajxv",
                        "price": 21900
                    },
                    "98330648": {
                        "id": 98330648,
                        "name": "Peri Peri Mushroom Burger",
                        "description": "Crispy Fried Mushroom Patty , Topped With Lettuce, Tomato, Sauted Onions, Pickles, Mustard, With Peri Peri Sauce & Cheese Slice",
                        "cloudinaryImageId": "153ef3f944652d6abda98306217208a8",
                        "price": 23700
                    },
                    "98330650": {
                        "id": 98330650,
                        "name": "Peri Peri Paneer Burger",
                        "description": "Grilled Paneer Steak, Topped With Jalapeno, Sauted Onions, Tomato, Peri Peri Mayo, & Cheese Slice",
                        "cloudinaryImageId": "8dba648e4b091839d251cee5e723a72f",
                        "price": 23300
                    },
                    "98330652": {
                        "id": 98330652,
                        "name": "Peri Peri Veg Burger",
                        "description": "Crispy Fried Homemade Potato & Veggie Patty , Topped With Lettuce, Tomato, Sauted Onions, Pickles, Mustard, With Peri Peri Sauce & Cheese Slice",
                        "cloudinaryImageId": "7635bb13e0bea12dc7e1812b1bb8a149",
                        "price": 21500
                    },
                    "98330656": {
                        "id": 98330656,
                        "name": "Grilled Chicken Burger",
                        "description": "Grilled Chicken Patty With Tomatoes, Lettuce, In House Burger Sauce, Sauted Onions",
                        "cloudinaryImageId": "27d1a6d8198891f580a23155da2ae884",
                        "price": 12500
                    },
                    "98330660": {
                        "id": 98330660,
                        "name": "Little Star Chicken Burger",
                        "description": "Crispy Chicken Patty, With Home Made Burger Sauce, Sandwiched Between Fresh Buns",
                        "cloudinaryImageId": "zgfscixv2kutsfdrwscu",
                        "price": 9400
                    },
                    "98330661": {
                        "id": 98330661,
                        "name": "Chicken Bacon Cheese Burger",
                        "description": "Grilled Chicken/ Lamb Patty, Crispy Bacon, Caramalised Onions, Lettuce, Mustard Sauce & Cheese",
                        "cloudinaryImageId": "p5a8rcx11rcjg5ziu1w8",
                        "price": 33300
                    },
                    "98330663": {
                        "id": 98330663,
                        "name": "Chicken Mind Blowing Baconator",
                        "description": "Grilled Chicken/ Lamb Patty, Crispy Bacon, Fried Egg, Caramalised Onions, Lettuce, Pickles And Peri Peri Mayo",
                        "cloudinaryImageId": "aly4fyopbhx9ligveyhp",
                        "price": 36600
                    },
                    "98330665": {
                        "id": 98330665,
                        "name": "Lamb Bacon Cheese Burger",
                        "description": "Grilled Chicken/ Lamb Patty, Crispy Bacon, Caramalised Onions, Lettuce, Mustard Sauce & Cheese",
                        "price": 43300
                    },
                    "98330666": {
                        "id": 98330666,
                        "name": "Lamb Mind Blowing Baconator",
                        "description": "Grilled Chicken/ Lamb Patty, Crispy Bacon, Fried Egg, Caramalised Onions, Lettuce, Pickles And Peri Peri Mayo",
                        "price": 46600
                    },
                    "98330669": {
                        "id": 98330669,
                        "name": "Crispy Onion Rings",
                        "description": "Freshly Made Batter Fried Onion Rings",
                        "cloudinaryImageId": "pntpg65wxtskpqhqixuv",
                        "price": 0,
                        "defaultPrice": 8800
                    },
                    "98330730": {
                        "id": 98330730,
                        "name": "Jalapenos Cheese Balls",
                        "description": "Crumb Fried Jalepeno Cheese Balls",
                        "price": 0,
                        "defaultPrice": 11400
                    },
                    "98330743": {
                        "id": 98330743,
                        "name": "Peri Peri Potato Wedges",
                        "description": "Freshly Prepared Wedges, Topped With Home Made Piri Piri Masala",
                        "cloudinaryImageId": "",
                        "price": 0,
                        "defaultPrice": 11900
                    },
                    "98330748": {
                        "id": 98330748,
                        "name": "Chicken Nuggets",
                        "description": "Crispy Chicken Nuggets",
                        "cloudinaryImageId": "55ae7c9ebf172ed9abc7fd02cafbca92",
                        "price": 0,
                        "defaultPrice": 11900
                    },
                    "98330754": {
                        "id": 98330754,
                        "name": "Chicken Strips",
                        "description": "Crispy Fried  Marinated Chicken Breast Strips",
                        "cloudinaryImageId": "74f7a9247324335bee6fedfce9938d1a",
                        "price": 0,
                        "defaultPrice": 14700
                    },
                    "98330755": {
                        "id": 98330755,
                        "name": "Crispy Chicken Wings",
                        "description": "Crispy Chicken Wings",
                        "cloudinaryImageId": "mvkfznkwrr2hnvszb2ub",
                        "price": 0,
                        "defaultPrice": 14700
                    },
                    "98330758": {
                        "id": 98330758,
                        "name": "Fish And Chips",
                        "description": "American Delicacy Of Batter Fried Fish, Served With French Fries And Tartar Sauce",
                        "cloudinaryImageId": "hpexk1igcc8es3j8ojy9",
                        "price": 0,
                        "defaultPrice": 27900
                    },
                    "98330832": {
                        "id": 98330832,
                        "name": "Chicken Madness Combo",
                        "description": "Crispy Chicken Burger + Peri Peri Fries + Coke",
                        "cloudinaryImageId": "p9v838knlj5qadxmjb7l",
                        "price": 19900
                    },
                    "98330833": {
                        "id": 98330833,
                        "name": "Chicken Sandwich Mania",
                        "description": "Chicken Cheese Grilled Sandwich (2 Pc) + Peri Peri Fries + Coke",
                        "cloudinaryImageId": "adba45071ef3339cbb952d7da639d2a0",
                        "price": 24900
                    },
                    "98330837": {
                        "id": 98330837,
                        "name": "Nuggets Lovers Combo",
                        "description": "Chicken Nuggets (3 Pc)+ Grilled Chicken Burger+ Fries + Coke",
                        "cloudinaryImageId": "121d9a0afef805ae983be9e9e6656e2d",
                        "price": 24900
                    },
                    "98330838": {
                        "id": 98330838,
                        "name": "Veg Sandwich Mania",
                        "description": "Cheese Grilled Sandwich (2 Pc)+ Peri Peri Fries+ Coke",
                        "cloudinaryImageId": "gk03oz3y2ttsvrz5kqzw",
                        "price": 20900
                    },
                    "99140433": {
                        "id": 99140433,
                        "name": "All Vegies Sub Sandwich",
                        "description": "Sub made with mixed chopped veggies, with homemade sauce and cheese",
                        "cloudinaryImageId": "",
                        "price": 19900
                    },
                    "99140436": {
                        "id": 99140436,
                        "name": "BBQ Paneer Sub Sandwich",
                        "description": "Pan tossed cottage cheese cubes, marinated in BBQ Sauce, with mixed veggies, lettuce and cheese",
                        "cloudinaryImageId": "uoqzbo6fzkwzftupl7bt",
                        "price": 20900
                    },
                    "99140439": {
                        "id": 99140439,
                        "name": "Brooklyn's Finest Chicken Sub Sandwich",
                        "description": "Italian lemon & herb mayo with lettuce, grilled chicken, tomato, onion, black olives & cheese",
                        "cloudinaryImageId": "fed0cbe27689f2cd0488a7f12a66f849",
                        "price": 21900
                    },
                    "99140442": {
                        "id": 99140442,
                        "name": "Bueno Chicken Sub Sandwich",
                        "description": "All the way Mexican Chicken with Corn & Bean Salsa, Chopped Onions, Capsicum, Jalapeno with Spiced Chicken Salsa and Thousand Island",
                        "cloudinaryImageId": "uybl39lrslipvphpxevf",
                        "price": 21900
                    },
                    "99140450": {
                        "id": 99140450,
                        "name": "Egg Mania Sub Sandwich",
                        "description": "Juicy and Delicious double egg sandwich with in house sauce & cheese",
                        "cloudinaryImageId": "",
                        "price": 17900
                    },
                    "109130206": {
                        "id": 109130206,
                        "name": "Captain Jacks Fish Burger",
                        "description": "Grilled Fish Steak , topped with Lettuce, Tomato, Onion, Mustard, Dill Pickles with home made spicy BBQ Sauce, Cheese.",
                        "cloudinaryImageId": "",
                        "price": 34900
                    },
                    "109130207": {
                        "id": 109130207,
                        "name": "Macho Nacho Chicken Burger.",
                        "description": "Crispy Fried Chicken Patty topped with Lettuce, Corn & Bean Salsa, Crushed Nachos, Jalapeno, Southwest Chipotle Sauce & Cheese",
                        "cloudinaryImageId": "31ea2d0e4cccacf1f25e6529fe259c25",
                        "price": 23900
                    },
                    "109130208": {
                        "id": 109130208,
                        "name": "Peri Peri Chicken Burger.",
                        "description": "Grilled Chicken Steak , topped with Lettuce, Tomato, Onion, Pickles, Mustard, with Peri Peri Sauce & Cheese",
                        "cloudinaryImageId": "b9644d992be0a2c74cc6998a6b60d2bb",
                        "price": 23800
                    },
                    "109130209": {
                        "id": 109130209,
                        "name": "Non Veg Twins Combo",
                        "description": "Grilled Chicken Burger+ Crispy Chicken Burger",
                        "cloudinaryImageId": "4d20a6d215355025e23c7c18a5c3c339",
                        "price": 23700
                    },
                    "109130210": {
                        "id": 109130210,
                        "name": "Veg Madness Combo",
                        "description": "Juicy Potato Burger + Peri Peri Fries + Coke",
                        "cloudinaryImageId": "d9a5d99022f7901b57f0a45af3fd46c1",
                        "price": 21500
                    },
                    "109130211": {
                        "id": 109130211,
                        "name": "Veg Twins Combo",
                        "description": "Crispy Veg Burger + Smokey Veg Burger",
                        "cloudinaryImageId": "0faa3ab10663efc9607f4453d06a9ec3",
                        "price": 21400
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "635149",
            "name": "RollsKing",
            "city": "Noida 1",
            "area": "Gautam Buddha Nagar",
            "avgRatingString": "3.8",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "vgt9x7g0svffgwcq1u0d",
            "costForTwoMsg": "₹300 for two",
            "cuisines": ["North Indian", "Fast Food"],
            "menu": {
                "items": {
                    "104803961": {
                        "id": 104803961,
                        "name": "Butter Chk Masala Egg Keema Roll",
                        "description": "Marinated chicken keema cooked with whole spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "8b40329d5073867cfca58eda2c263b09",
                        "price": 24900
                    },
                    "104803962": {
                        "id": 104803962,
                        "name": "Dbl Chicken Dbl Egg Roll",
                        "description": "2x chicken with 2 eggs, bet you can't finish this one",
                        "cloudinaryImageId": "1f0bedec1824359dbd6c3535060c6cf1",
                        "price": 34900
                    },
                    "104803963": {
                        "id": 104803963,
                        "name": "Dbl Chicken Roll",
                        "description": "2x chicken, love for chicken is so extreme that nothing comes in the way of our greatest guilt pleasure.",
                        "cloudinaryImageId": "795e2ee6f9eed4d8a43a9a7f617b7b8b",
                        "price": 30900
                    },
                    "104803964": {
                        "id": 104803964,
                        "name": "Dbl Paneer Roll",
                        "description": "2x paneer, extra paneer to go extra mile",
                        "cloudinaryImageId": "0370d490cb7ab1416d36511e2434fbaa",
                        "price": 30900
                    },
                    "104803965": {
                        "id": 104803965,
                        "name": "Chef's Special Mirchi Aloo Roll",
                        "description": "Masala potato marinated with green chilli paste, drizzled with housemade mint chutney & onions, wrapped in laccha paratha",
                        "cloudinaryImageId": "6583c0897aae7f4c3e92ca99d05f65ae",
                        "price": 10900
                    },
                    "104803966": {
                        "id": 104803966,
                        "name": "Chicken Dbl Egg Keema Roll",
                        "description": "Minced Chicken Seasoned with whole spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "fb8fa8282c22398f1985c72e22985c95",
                        "price": 22500
                    },
                    "104803967": {
                        "id": 104803967,
                        "name": "Chicken Kabab T Roll",
                        "description": "Crispy chicken tikki dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multi grain paratha",
                        "cloudinaryImageId": "8eddbad27e6197739d0027e77a9c3764",
                        "price": 21900
                    },
                    "104803969": {
                        "id": 104803969,
                        "name": "Cold Coffee -must Try",
                        "description": "Refreshing cold, caffinated, thick & creamy cold coffee. Simply yummy!",
                        "cloudinaryImageId": "f954fc69888d6f5991099920de8e3b2b",
                        "price": 14900
                    },
                    "104803970": {
                        "id": 104803970,
                        "name": "Dum-chicken Roll",
                        "description": "Get ready to be surprised, you will find biryani essence in this lusciuos dum chicken roll",
                        "cloudinaryImageId": "p0et7wwhudiuvi86kzki",
                        "price": 22900
                    },
                    "104803971": {
                        "id": 104803971,
                        "name": "Ice Tea Lemon-must Try",
                        "description": "Lemon flavoured ice tea to revitalised your senses",
                        "cloudinaryImageId": "98468897c0ce0818464f6a83e3fc043b",
                        "price": 10900
                    },
                    "104803972": {
                        "id": 104803972,
                        "name": "Mirchi Paneer Roll \"ch.spl.\"",
                        "description": "Luscious paneer tikka marinated with green chilli paste , dressed with housemade green chutney & onions, wrapped in laccha paratha",
                        "cloudinaryImageId": "671e368cf4ecfdd6cc7852f1cec044c5",
                        "price": 20900
                    },
                    "104803973": {
                        "id": 104803973,
                        "name": "Mushroom + Sweet Corn T Roll",
                        "description": "Two varieties of filling in one single Roll, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multigrain laccha paratha",
                        "cloudinaryImageId": "37881aec02199f6becce9715822ebc90",
                        "price": 25500
                    },
                    "104803975": {
                        "id": 104803975,
                        "name": "Tandoori Chk Keema + Butter Chicken Roll",
                        "description": "Two varieties of filling stuffed in one single roll. Get more in a roll",
                        "cloudinaryImageId": "c1e27125b75fe84a00f190665e43188f",
                        "price": 27500
                    },
                    "104803977": {
                        "id": 104803977,
                        "name": "Veg Kabab T + Paneer Roll",
                        "description": "Two varieties of filling in one single Roll, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multigrain laccha paratha",
                        "cloudinaryImageId": "77eceaf2b6d5169adb2dab7057e7f302",
                        "price": 25500
                    },
                    "104804074": {
                        "id": 104804074,
                        "name": "Aam Panna",
                        "description": "Refreshing raw mango based drink",
                        "cloudinaryImageId": "a6e9d7f6ac7cbde338b5a2685102180f",
                        "price": 10900
                    },
                    "104804079": {
                        "id": 104804079,
                        "name": "Cold Coffee",
                        "description": "Refreshing cold, caffinated, thick & creamy cold coffee. Simply yummy!",
                        "cloudinaryImageId": "3ed6dd8fdbd8c0bc2857e69c038b178d",
                        "price": 14900
                    },
                    "104804084": {
                        "id": 104804084,
                        "name": "Ice Tea Lemon",
                        "description": "Lemon flavoured ice tea to revitalised your senses",
                        "cloudinaryImageId": "ba7d1d1ac1bac094d11fef465ff575de",
                        "price": 10900
                    },
                    "104804088": {
                        "id": 104804088,
                        "name": "Masala Shikanji",
                        "description": "Shikanji made with indian masalas to electrify your body and mind",
                        "cloudinaryImageId": "732c82051b64c973d24ffcfb70f0e2d1",
                        "price": 11900
                    },
                    "104804094": {
                        "id": 104804094,
                        "name": "Virgin Mojito",
                        "description": "",
                        "cloudinaryImageId": "93e5e7d921cba37d28c5d6cc6f614b5a",
                        "price": 11900
                    },
                    "104804098": {
                        "id": 104804098,
                        "name": "Potato Wedges",
                        "description": "Wedges of potato which are crispy and herbed to elevate your taste buds",
                        "cloudinaryImageId": "d99d4cc4d413a3308e3f90f7328ea104",
                        "price": 10900
                    },
                    "104804158": {
                        "id": 104804158,
                        "name": "Double Paneer Roll",
                        "description": "2x paneer, extra paneer to go extra mile",
                        "cloudinaryImageId": "ad6197137ee6e2e50c84d6f8b012455f",
                        "price": 30900
                    },
                    "104804166": {
                        "id": 104804166,
                        "name": "Hara Bhara Kabab Roll",
                        "description": "Tikki made of fresh spinach leaves, green peas and potato, all mashed together with indian spices, dressed with house made mint chutney & onions, showered with jalapeno dip mayonnaise and rolled in fresh handmade multi grain paratha",
                        "cloudinaryImageId": "185d50cdb507f2dd98c9a644af9e08c3",
                        "price": 18500
                    },
                    "104804190": {
                        "id": 104804190,
                        "name": "Mirchi Aloo Roll",
                        "description": "Masala potato marinated with green chilli paste, drizzled with housemade mint chutney & onions, wrapped in laccha paratha",
                        "cloudinaryImageId": "1f0af0afe2de1eda10f1d966fc2a800d",
                        "price": 10900
                    },
                    "104804195": {
                        "id": 104804195,
                        "name": "Mirchi Paneer Roll",
                        "description": "Luscious paneer tikka marinated with green chilli paste , dressed with housemade green chutney & onions, wrapped in laccha paratha",
                        "cloudinaryImageId": "db475b21570d3c07068e3f2d1100d050",
                        "price": 20900
                    },
                    "104804199": {
                        "id": 104804199,
                        "name": "Mushroom Roll",
                        "description": "Mushrooms marinated with onions, tomatoes, spices & herbs.?dressed with house made mint chutney, showered with Jalapeno dip mayonnaise & onions  rings, rolled in handmade multi grain paratha",
                        "cloudinaryImageId": "ffb1075b520352cf2dc17d546ba7c976",
                        "price": 21900
                    },
                    "104804202": {
                        "id": 104804202,
                        "name": "Paneer Bhurji Roll",
                        "description": "Succulent crumled  paneer  showered with  green peas jalapeno dip mayonnaise, dressed with house made mint chutney & onions rolled in mandmade multi grain laccha paratha",
                        "cloudinaryImageId": "b1c4f5cb590c55dcf9ff687befc39777",
                        "price": 20900
                    },
                    "104804205": {
                        "id": 104804205,
                        "name": "Paneer Roll",
                        "description": "Succulent paneer tikka showered with jalapeno dip mayonnaise, dressed with house made mint chutney & onions rolled in mandmade multi grain laccha paratha",
                        "cloudinaryImageId": "57a1f2dbe6cf198c47896811a76c25a2",
                        "price": 20900
                    },
                    "104804208": {
                        "id": 104804208,
                        "name": "Potato Roll",
                        "description": "Masala potato showered with jalapeno dip mayonnaise, dressed with mint chutney & onions wrapped in hand made multi grain paratha",
                        "cloudinaryImageId": "0341f55b7a7b18886dcace84e9e984a4",
                        "price": 9700
                    },
                    "104804211": {
                        "id": 104804211,
                        "name": "Rk Special Veg Roll",
                        "description": "This RK special roll contains paneer, veg kabab tikki, mushroom & sweet corn tikki mashed  and prepared on tawa, dressed with house made mint chutney, onions & jalapeno dip mayonnaise rolled in  handmade multi grain laccha paratha",
                        "cloudinaryImageId": "d2e88c7e45dc21d5f2f2888b8b930583",
                        "price": 24900
                    },
                    "104804214": {
                        "id": 104804214,
                        "name": "Soya Chap Roll",
                        "description": "Soya chap marinated with indian spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multi grain paratha",
                        "cloudinaryImageId": "a53dd1db926fc5ed1c23c6ac384dabf5",
                        "price": 20500
                    },
                    "104804218": {
                        "id": 104804218,
                        "name": "Soya Shami Kabab Roll",
                        "description": "Tender tikki of soya seekh  made with indian spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multi grain paratha",
                        "cloudinaryImageId": "69569b024889b7c4b7dc098beb64449c",
                        "price": 21900
                    },
                    "104804223": {
                        "id": 104804223,
                        "name": "Sweet Corn Kabab Tikki Roll",
                        "description": "Melt-in- mouth tikki made with  sweet corn, green peas, potatoes, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multi grain paratha",
                        "cloudinaryImageId": "dd4a019cd84bc6e75f936f5883f8c236",
                        "price": 17900
                    },
                    "104804227": {
                        "id": 104804227,
                        "name": "Veg Kabab Tikki Roll",
                        "description": "Melt-in-mouth tikki made of mashed potatoes .green peas ,carrot,  spinach dressed with house made mint chutney and onions ,  showered with jalapeno dip mayonnaise, rolled in multi grain paratha",
                        "cloudinaryImageId": "df6560c3d52ec677d34c6a3863560351",
                        "price": 16500
                    },
                    "104804234": {
                        "id": 104804234,
                        "name": "Veg Manchurian Roll",
                        "description": "Assorted vegetables dumpling tossed in finely chopped garlic, ginger, onion & coriander  showered with jalapeno dip mayonnaise & onion, rolled in hand made multi grain paratha",
                        "cloudinaryImageId": "b28ba67c96f406fb960fbccf543c9154",
                        "price": 14900
                    },
                    "104804240": {
                        "id": 104804240,
                        "name": "Veg Seekh Kabab Roll",
                        "description": "Seekh made with vegetables  with added spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multi grain paratha",
                        "cloudinaryImageId": "2f7c9508bfc5eda9a6e3e54444af3db8",
                        "price": 21900
                    },
                    "104804246": {
                        "id": 104804246,
                        "name": "Mushroom + Hara Bhara Kabab Roll",
                        "description": "Two varieties of filling in one single Roll, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multigrain laccha paratha",
                        "cloudinaryImageId": "afac62a62aa164daa18f9819b5ef8458",
                        "price": 25500
                    },
                    "104804254": {
                        "id": 104804254,
                        "name": "Mushroom + Sweet Corn Tikki Roll",
                        "description": "Two varieties of filling in one single Roll, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multigrain laccha paratha",
                        "cloudinaryImageId": "3885de7d39f03e0e938afcd07f157ef6",
                        "price": 25500
                    },
                    "104804260": {
                        "id": 104804260,
                        "name": "Potato + Paneer Roll",
                        "description": "Two varieties of filling in one single Roll, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multigrain laccha paratha",
                        "cloudinaryImageId": "d1d831138875e8c6a16bef9b42d04b68",
                        "price": 21500
                    },
                    "104804279": {
                        "id": 104804279,
                        "name": "Veg Kabab Tikki + Paneer Roll",
                        "description": "Two varieties of filling in one single Roll, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multigrain laccha paratha",
                        "cloudinaryImageId": "919168f774f16c1b34861856fc09a9d8",
                        "price": 25500
                    },
                    "104804298": {
                        "id": 104804298,
                        "name": "Veg Seekh + Paneer Bhurji Roll",
                        "description": "Two varieties of filling in one single Roll, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multigrain laccha paratha",
                        "cloudinaryImageId": "595d8599d0c64a0a4cb409da703f757e",
                        "price": 25900
                    },
                    "104804321": {
                        "id": 104804321,
                        "name": "Bhuna Chicken Roll",
                        "description": "Chicken marinated with indian spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "8682175ab242935329a380afe18c5169",
                        "price": 21500
                    },
                    "104804335": {
                        "id": 104804335,
                        "name": "Butter Chicken Masala Egg Keema Roll",
                        "description": "Marinated chicken keema cooked with whole spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "xbw6me3tus5staxgdwbh",
                        "price": 24900
                    },
                    "104804349": {
                        "id": 104804349,
                        "name": "Butter Chicken Roll",
                        "description": "Tender pieces of chicken marinated with indian spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "2d3ea7c7e2cedc1fb5005e7cd4e8682f",
                        "price": 22500
                    },
                    "104804364": {
                        "id": 104804364,
                        "name": "Chicken Double Egg Keema Roll",
                        "description": "Minced Chicken Seasoned with whole spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "aa2960f0ae3222f1b9110da6c529a025",
                        "price": 22500
                    },
                    "104804381": {
                        "id": 104804381,
                        "name": "Chicken Kabab Tikki Roll",
                        "description": "Crispy chicken tikki dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade multi grain paratha",
                        "cloudinaryImageId": "e9dbdf6df2f8de74245990f4f248e112",
                        "price": 21900
                    },
                    "104804385": {
                        "id": 104804385,
                        "name": "Chicken Manchurian Roll",
                        "description": "Minced chicken dumpling tossed in finely chopped garlic, ginger, onion & finely chopped coriander showered with jalapeno dip mayonnaise & onion, rolled in hand made laccha paratha",
                        "cloudinaryImageId": "f79c11fc3b6015b366ea3a1383f8c643",
                        "price": 17500
                    },
                    "104804388": {
                        "id": 104804388,
                        "name": "Chicken Seekh Kabab Roll",
                        "description": "The flavoursome tandoori chicken seekh dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade laccha paratha",
                        "cloudinaryImageId": "457988cb613017dd98e2dc0c7a30dd73",
                        "price": 17900
                    },
                    "104804392": {
                        "id": 104804392,
                        "name": "Chicken Shami Kabab Roll",
                        "description": "Chicken tikki taste insane when it is smoked to perfection and drizzled with minty, jalapeno dip mayonnaise,rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "5495909d0f0ba387e90881dbc059ed8b",
                        "price": 23500
                    },
                    "104804397": {
                        "id": 104804397,
                        "name": "Chilli Chicken Roll",
                        "description": "Chicken Cooked With Chillies In Chinese Sauce & Dressed With Onions, showered with Jalapeno dip mayonnaise, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "d4daae26e5e41d41981ff13b56322744",
                        "price": 21900
                    },
                    "104804401": {
                        "id": 104804401,
                        "name": "Classic Chicken Egg Roll",
                        "description": "Signature protein roll with egg. Dressed with housemade green chutney, showered with jalapeno dip mayonnaise & onions, rolled in a handmade classic laccha paratha",
                        "cloudinaryImageId": "74f932826a4f90fe9676a1c523c67586",
                        "price": 22700
                    },
                    "104804405": {
                        "id": 104804405,
                        "name": "Classic Chicken Roll",
                        "description": "Signature protein roll. dressed with house made mint chutney, showered with Jalapeno dip mayonnaise & onions, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "zgkcsflqyt93nhzo5eri",
                        "price": 20500
                    },
                    "104804410": {
                        "id": 104804410,
                        "name": "Double Chicken Double Egg Roll",
                        "description": "2x chicken with 2 eggs, bet you can't finish this one",
                        "cloudinaryImageId": "677b13c9f1e07c24b6546e3028123090",
                        "price": 34900
                    },
                    "104804416": {
                        "id": 104804416,
                        "name": "Double Chicken Roll",
                        "description": "2x chicken, love for chicken is so extreme that nothing comes in the way of our greatest guilt pleasure.",
                        "cloudinaryImageId": "ddbcbc72cb8c284e7a5720e4af529f80",
                        "price": 30900
                    },
                    "104804421": {
                        "id": 104804421,
                        "name": "Double Egg Roll",
                        "description": "A protein packed with 2 eggs layered on laccha paratha showered with housemade green chutney, onions & jalepano dip mayonnaise",
                        "cloudinaryImageId": "ca922fa37e0e52f6b3e6552d5e3dac82",
                        "price": 9900
                    },
                    "104804424": {
                        "id": 104804424,
                        "name": "Dum Chicken Roll",
                        "description": "Get ready to be surprised, you will find biryani essence in this lusciuos dum chicken roll",
                        "cloudinaryImageId": "d34eb8b5b715439f3e15f4269b558ac2",
                        "price": 22900
                    },
                    "104804431": {
                        "id": 104804431,
                        "name": "Hot Shot Chicken Roll",
                        "description": "Bored of same old flavours? This spicy roll will excite your tastebuds. Hot shot chicken roll taken a notch above, showered with Jalapeno dip mayonnaise, house made mint and clubbed with crunchy onions wrapped in handmade classic laccha paratha",
                        "cloudinaryImageId": "ce72f0a1102db827aecfcb41e5677616",
                        "price": 21900
                    },
                    "104804437": {
                        "id": 104804437,
                        "name": "Mutton Seekh Kabab Roll",
                        "description": "Marinated minced mutton seekh, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "b467fb0565a43082d84f6a42f72536d5",
                        "price": 22900
                    },
                    "104804442": {
                        "id": 104804442,
                        "name": "Rk Special Non Veg Roll",
                        "description": "This RK special roll contains classic chicken, Bhuna chicken, Hot shot chicken and Chicken shami chopped with onions and prepared on tawa with egg, dressed with house made mint chutney, onions & jalapeno dip mayonnaise rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "3d138569f356e786ff3aac74bd385e69",
                        "price": 25900
                    },
                    "104804449": {
                        "id": 104804449,
                        "name": "Tandoori Chicken Egg Keema Roll",
                        "description": "Marinated chicken keema cooked with whole spices, dressed with house made mint chutney & onion, showered with Jalapeno dip mayonnaise, rolled in handmade classic laccha paratha",
                        "cloudinaryImageId": "507a344bddbfcdf6b3cc1e1d05e76cdd",
                        "price": 24900
                    },
                    "104804480": {
                        "id": 104804480,
                        "name": "Triple Egg Roll",
                        "description": "Triple eggs layered on laccha paratha showered with housemade green chutney, onions & jalapeno dip mayonnaise",
                        "cloudinaryImageId": "2e1150936f47fd96e9dec1553b50eb18",
                        "price": 12100
                    },
                    "104804499": {
                        "id": 104804499,
                        "name": "Butter Chicken + Bunna Chicken Roll",
                        "description": "Two varieties of filling stuffed in one single roll. Get more in a roll.",
                        "cloudinaryImageId": "8d0da637e9b5093525fc611de0249427",
                        "price": 27500
                    },
                    "104804506": {
                        "id": 104804506,
                        "name": "Hot Shot Chicken + Classic Chicken Roll",
                        "description": "Two varieties of filling stuffed in one single roll. Get more in a roll. Spicy treat!",
                        "cloudinaryImageId": "d0f60440525c055494e6a74fbe97b38c",
                        "price": 27500
                    },
                    "104804512": {
                        "id": 104804512,
                        "name": "Mutton Seekh  + Chicken Shami Kabab Roll",
                        "description": "Two varieties of filling stuffed in one single roll. Get more in a roll.",
                        "cloudinaryImageId": "4e3590641038fff856bee8a035577380",
                        "price": 27500
                    },
                    "104804516": {
                        "id": 104804516,
                        "name": "Mutton Seekh + Chicken Seekh Roll",
                        "description": "Two varieties of filling stuffed in one single roll. Get more in a roll",
                        "cloudinaryImageId": "237ba8b34b383ccb875bc94e327c1387",
                        "price": 29900
                    },
                    "104804534": {
                        "id": 104804534,
                        "name": "Tandoori Chicken Keema + Butter Chicken Roll",
                        "description": "Two varieties of filling stuffed in one single roll. Get more in a roll",
                        "cloudinaryImageId": "10b02608b9c41e4c8832acb8ceafac3b",
                        "price": 27500
                    }
                }
            }
        }
    },
    {
        "data": {
            "id": "32524",
            "name": "Giani's",
            "city": "Noida 1",
            "area": "Indirapuram",
            "avgRatingString": "4.4",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "anag41tl5itbdly9zbxi",
            "costForTwoMsg": "₹200 for two",
            "cuisines": ["Ice Cream", "Desserts"],
            "menu": {
                "items": {
                    "7397642": {
                        "id": 7397642,
                        "name": "Chocolate Cassata",
                        "description": "A cassatta made with vanilla & chocochip ice cream with Chocolate Cake.",
                        "cloudinaryImageId": "ykawp9oubxk6tu9rgq9u",
                        "price": 8500
                    },
                    "7397671": {
                        "id": 7397671,
                        "name": "Brownie Sundae",
                        "description": "The original sundae with a twist, a rich moist brownie gets soaked in our classic Vanilla Ice cream drooled with fudge sauce & nuts.",
                        "cloudinaryImageId": "rzzyi8nydtfricnzlliy",
                        "price": 20500
                    },
                    "7397672": {
                        "id": 7397672,
                        "name": "Strawberry Sundae",
                        "description": "The juicy strawberry crush makes it smooth yet wild with our classic vanilla Ice cream and nuts.",
                        "cloudinaryImageId": "vpuerhipgr8nibz8j2ep",
                        "price": 17100
                    },
                    "7397675": {
                        "id": 7397675,
                        "name": "Pineapple Sundae",
                        "description": "A sundae that gives you a treat of refreshing pineapple flavor blended with Vanilla icecream & love.",
                        "cloudinaryImageId": "kiumni57rrksbelqchyb",
                        "price": 20500
                    },
                    "7397677": {
                        "id": 7397677,
                        "name": "Caramel Mocha Sundae",
                        "description": "A love story of caramel with a twist of choco chip & coffee ice cream topped with our fudge sauce gets all nutty and crunchy.",
                        "cloudinaryImageId": "peqyu3j4b2izmydchacv",
                        "price": 0,
                        "defaultPrice": 17500
                    },
                    "7397679": {
                        "id": 7397679,
                        "name": "Kuch Nahi Sundae",
                        "description": "KuchNai Sundae- Kyakhayengeaap- kuchnai ! What will you have ??Nothing ! Even Being named as KuchNai, This sundae has everything one can ever ask for - a never ending party with all our classic Giani's special, Tutti Fruity, Chocochips& black current Ice creams topped with mango, strawberry, pinapple crushes and fudge sauce with nuts and waffle crunch.",
                        "cloudinaryImageId": "tm5qi7scf04d0dypdprr",
                        "price": 26800
                    },
                    "7397680": {
                        "id": 7397680,
                        "name": "Create Your Own Sundae",
                        "description": "",
                        "cloudinaryImageId": "a6tcuk2bjmuvklalnkmj",
                        "price": 27300
                    },
                    "19132429": {
                        "id": 19132429,
                        "name": "Belgian Waffle",
                        "description": "Our classic vanilla & Belgian Chocolate Ice Cream mixed with chocolate sauce & nuts placed on our waffle cup with chocolate sauce on top.",
                        "cloudinaryImageId": "j7o5lnlvxc1z8v4wc0ii",
                        "price": 23000
                    },
                    "19132627": {
                        "id": 19132627,
                        "name": "Bubble Gum",
                        "description": "",
                        "cloudinaryImageId": "rf9qbsiiydf3dkogov0t",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "49249834": {
                        "id": 49249834,
                        "name": "Brownie Cassata",
                        "description": "Vanilla Ice cream mixed with rich moist brownie cake, fudge & chocolate sauce.",
                        "cloudinaryImageId": "bkdbmayw6uhcaskpab3n",
                        "price": 8500
                    },
                    "49249859": {
                        "id": 49249859,
                        "name": "Hot Chocolate Fudge",
                        "description": "Our iconic HCF sundae tells the story of when our delicious hot chocolate fudge sauce finds its soulmate in two scoop of classic vanilla Ice cream and gets all nutty.",
                        "cloudinaryImageId": "dipo3zzlmterk54zoyun",
                        "price": 0,
                        "defaultPrice": 17500
                    },
                    "49249860": {
                        "id": 49249860,
                        "name": "Mango Punch",
                        "description": "Vanilla Ice cream with the king of fruits- MANGO!! Mango crush & pulp mixed with nuts impart a luscious creamy texture and rich flavor.",
                        "price": 17100
                    },
                    "49249874": {
                        "id": 49249874,
                        "name": "Black Temptation",
                        "description": "An irresistible twist of raspberry inside a rich, luscious, chocolate cake stuffed with the delectable vanilla ice cream",
                        "cloudinaryImageId": "l3at7d3apwxrzjss8cdh",
                        "price": 50800
                    },
                    "49249875": {
                        "id": 49249875,
                        "name": "Gold Temptation",
                        "description": "What happens when the scintillating taste of fresh fruits & Vanilla ice cream come together & are topped with crunchy cashew nuts? It makes a treat that you can?? resist.",
                        "cloudinaryImageId": "prfmgw6in1hrqryklqar",
                        "price": 50800
                    },
                    "49249910": {
                        "id": 49249910,
                        "name": "Magic Rose Soda",
                        "description": "Without Ice Cream",
                        "price": 9300
                    },
                    "49249912": {
                        "id": 49249912,
                        "name": "Rose Milk Soda",
                        "description": "Without Ice Cream",
                        "price": 8300
                    },
                    "64385163": {
                        "id": 64385163,
                        "name": "Blueberry Cheese Cake",
                        "description": "",
                        "cloudinaryImageId": "gnn5jsy7qnnzqxocmjqu",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456219": {
                        "id": 65456219,
                        "name": "Brownie With Chocolate Sauce [without Ice Cream]",
                        "description": "Rich moist brownie with our delicious hot chocolate fudge sauce.",
                        "price": 11700
                    },
                    "65456222": {
                        "id": 65456222,
                        "name": "Strawberry Oreo",
                        "description": "Vanilla ice cream mixed with crushed oreos & strawberry crush placed on our waffle cup with Oreo on top.",
                        "cloudinaryImageId": "weqotmbt4r4drf90jsff",
                        "price": 17500
                    },
                    "65456225": {
                        "id": 65456225,
                        "name": "Tutti Fruity Special [fruit Salad]",
                        "description": "A Desert with refreshing taste of rose and strawberry topped over our classic Vanilla & Strawberry ice cream and cocktail Fruits.",
                        "cloudinaryImageId": "yfgtuv5qyjuy6ayxszvk",
                        "price": 23000
                    },
                    "65456230": {
                        "id": 65456230,
                        "name": "Dry Fruits Kulfi",
                        "description": "",
                        "cloudinaryImageId": "ri4gatnzzcesahux3efx",
                        "price": 5900
                    },
                    "65456239": {
                        "id": 65456239,
                        "name": "Vanilla",
                        "description": "",
                        "cloudinaryImageId": "vgeppcinqodqre3w7hvd",
                        "price": 0,
                        "defaultPrice": 6800
                    },
                    "65456240": {
                        "id": 65456240,
                        "name": "Strawberry",
                        "description": "",
                        "cloudinaryImageId": "pibi2kwnv8x3cjizvzwa",
                        "price": 0,
                        "defaultPrice": 6800
                    },
                    "65456242": {
                        "id": 65456242,
                        "name": "Tutti Frutti",
                        "description": "",
                        "cloudinaryImageId": "rcqx4fg6ncar3zib5dmd",
                        "price": 0,
                        "defaultPrice": 6800
                    },
                    "65456243": {
                        "id": 65456243,
                        "name": "Butterscotch Ice Cream",
                        "description": "",
                        "cloudinaryImageId": "vseiqgqg8vmbivefwkbf",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456244": {
                        "id": 65456244,
                        "name": "Black Currant",
                        "description": "",
                        "cloudinaryImageId": "ir4uztnspwp3cckr4daj",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456245": {
                        "id": 65456245,
                        "name": "Coffee",
                        "description": "",
                        "cloudinaryImageId": "buhbkgpzeod6wp1uwkxm",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456246": {
                        "id": 65456246,
                        "name": "Choco Chip",
                        "description": "",
                        "cloudinaryImageId": "txt3oz97onmvp4bmhxg4",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456248": {
                        "id": 65456248,
                        "name": "Kesar Pista",
                        "description": "",
                        "cloudinaryImageId": "g5xmazpoh4sk6gpyfdcp",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456250": {
                        "id": 65456250,
                        "name": "Chunky Munky",
                        "description": "",
                        "cloudinaryImageId": "kzylltfrkwdxeww9m6pl",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456252": {
                        "id": 65456252,
                        "name": "American Bits",
                        "description": "",
                        "cloudinaryImageId": "lrewg4iebbvhhjxlckyc",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456256": {
                        "id": 65456256,
                        "name": "Brownie Walnut",
                        "description": "",
                        "cloudinaryImageId": "qwszr7winhxezo22gmnq",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456260": {
                        "id": 65456260,
                        "name": "Kulfi",
                        "description": "",
                        "cloudinaryImageId": "kv9cwmeqsikfhvj7jqdj",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456261": {
                        "id": 65456261,
                        "name": "Caramel Crunch",
                        "description": "",
                        "cloudinaryImageId": "izzeo0lugbijpgytqqof",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456264": {
                        "id": 65456264,
                        "name": "Almond Choco Fudge",
                        "description": "",
                        "cloudinaryImageId": "rcxvidyhcqyvkp00ajdq",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456265": {
                        "id": 65456265,
                        "name": "Gianis Special",
                        "description": "",
                        "cloudinaryImageId": "oys8fafvuuqyivowpmxv",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456266": {
                        "id": 65456266,
                        "name": "Caffe Mocha",
                        "description": "",
                        "cloudinaryImageId": "qrulcpwgqgyrm5i12yd8",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456267": {
                        "id": 65456267,
                        "name": "Belgian Chocolate",
                        "description": "",
                        "cloudinaryImageId": "t5uwe8yuhxn7iumry6do",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456268": {
                        "id": 65456268,
                        "name": "Honey Nut Crunch",
                        "description": "",
                        "cloudinaryImageId": "r94vhslwixj0i7zyevuf",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456270": {
                        "id": 65456270,
                        "name": "Mocha Brownie",
                        "description": "",
                        "cloudinaryImageId": "fuadbbrywenfjpqhczrc",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456271": {
                        "id": 65456271,
                        "name": "Crunchy Dark Chocolate",
                        "description": "",
                        "cloudinaryImageId": "gofljpkkvt1zfnkdupc6",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456272": {
                        "id": 65456272,
                        "name": "Cream N Cookies",
                        "description": "",
                        "cloudinaryImageId": "ni4hfv2mfeaydmjhzwkf",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456275": {
                        "id": 65456275,
                        "name": "Traffic Jam",
                        "description": "",
                        "price": 14100
                    },
                    "65456276": {
                        "id": 65456276,
                        "name": "Mango",
                        "description": "",
                        "cloudinaryImageId": "wvhcxygveuuj8dtvtowh",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456277": {
                        "id": 65456277,
                        "name": "Litchi",
                        "description": "",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456278": {
                        "id": 65456278,
                        "name": "Pineapple",
                        "description": "",
                        "cloudinaryImageId": "egyp9c5ryru7rte4zlpr",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456280": {
                        "id": 65456280,
                        "name": "Anjeer [fig]",
                        "description": "",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456286": {
                        "id": 65456286,
                        "name": "Sugarfree Chocolate",
                        "description": "",
                        "cloudinaryImageId": "mwpzpkritchri9hjkjzb",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456287": {
                        "id": 65456287,
                        "name": "Sugarfree Kulfi",
                        "description": "",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65456288": {
                        "id": 65456288,
                        "name": "Sugarfree Gianis Special",
                        "description": "",
                        "cloudinaryImageId": "fid3wjvogglj65zceafu",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456289": {
                        "id": 65456289,
                        "name": "Sugarfree Coffee",
                        "description": "",
                        "cloudinaryImageId": "bijgfewq507cifaia3h2",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "65456292": {
                        "id": 65456292,
                        "name": "Vanilla Shake [400 Ml]",
                        "description": "",
                        "cloudinaryImageId": "oga9tzsuiz8ygztgp2l3",
                        "price": 15600
                    },
                    "65456293": {
                        "id": 65456293,
                        "name": "Strawberry Shake [400 Ml]",
                        "description": "",
                        "cloudinaryImageId": "lmhyboxxooo0nwyrwukt",
                        "price": 15600
                    },
                    "65456294": {
                        "id": 65456294,
                        "name": "Butterscotch Shake [400 Ml]",
                        "description": "",
                        "price": 15600
                    },
                    "65456295": {
                        "id": 65456295,
                        "name": "Black Currant Shake [400 Ml]",
                        "description": "",
                        "price": 15600
                    },
                    "65456296": {
                        "id": 65456296,
                        "name": "Cold Coffee Shake [400 Ml]",
                        "description": "",
                        "cloudinaryImageId": "uetfbbf9xzi5dbzqqfon",
                        "price": 15600
                    },
                    "65456297": {
                        "id": 65456297,
                        "name": "Rose Shake [400 Ml]",
                        "description": "",
                        "cloudinaryImageId": "bipzisdjaq32hynhi18i",
                        "price": 15600
                    },
                    "65456302": {
                        "id": 65456302,
                        "name": "Mocha Shake [400 Ml]",
                        "description": "Without Ice Cream",
                        "price": 17500
                    },
                    "65456303": {
                        "id": 65456303,
                        "name": "Chocolate Shake [400 Ml]",
                        "description": "Without Ice Cream",
                        "cloudinaryImageId": "zm3j6huitecvjlktgvm6",
                        "price": 17500
                    },
                    "65456305": {
                        "id": 65456305,
                        "name": "Litchi Shake [400 Ml]",
                        "description": "",
                        "price": 15600
                    },
                    "65456306": {
                        "id": 65456306,
                        "name": "Pineapple Shake [400 Ml]",
                        "description": "",
                        "price": 15600
                    },
                    "65456308": {
                        "id": 65456308,
                        "name": "Chocolate Hazelnut Shake",
                        "description": "",
                        "cloudinaryImageId": "c1rsega0rb5yk9xejqiz",
                        "price": 0,
                        "defaultPrice": 17500
                    },
                    "65456309": {
                        "id": 65456309,
                        "name": "Mint Oreo Crumble Shake",
                        "description": "",
                        "cloudinaryImageId": "z6w8pqe327agkciogzdn",
                        "price": 0,
                        "defaultPrice": 17500
                    },
                    "65456310": {
                        "id": 65456310,
                        "name": "Chocolate Oreo Shake",
                        "description": "",
                        "cloudinaryImageId": "duhgpe79xzuriml0t5t4",
                        "price": 0,
                        "defaultPrice": 17500
                    },
                    "65456312": {
                        "id": 65456312,
                        "name": "Choco-strawberry Swing Shake",
                        "description": "",
                        "cloudinaryImageId": "k7prbecgxydrqcpfbkxw",
                        "price": 0,
                        "defaultPrice": 18500
                    },
                    "65456313": {
                        "id": 65456313,
                        "name": "Dutch Brownie Shake",
                        "description": "",
                        "cloudinaryImageId": "mginpcx9vv7bxakc3hjv",
                        "price": 0,
                        "defaultPrice": 18500
                    },
                    "65456314": {
                        "id": 65456314,
                        "name": "Rasmalai Shake",
                        "description": "",
                        "cloudinaryImageId": "t9phcomwdmepwapijlno",
                        "price": 0,
                        "defaultPrice": 18500
                    },
                    "65456315": {
                        "id": 65456315,
                        "name": "Bubble Gum Shake",
                        "description": "",
                        "cloudinaryImageId": "nca7cmft6ignp7va5uix",
                        "price": 0,
                        "defaultPrice": 18500
                    },
                    "65456319": {
                        "id": 65456319,
                        "name": "Mint Soda [650 Ml]",
                        "description": "",
                        "cloudinaryImageId": "z3nr7g16cb8ebepy0d4f",
                        "price": 11700
                    },
                    "65456320": {
                        "id": 65456320,
                        "name": "Golden Glow Soda [650 Ml]",
                        "description": "",
                        "cloudinaryImageId": "lkz3yfkuviwchmzl9v9d",
                        "price": 11700
                    },
                    "65456321": {
                        "id": 65456321,
                        "name": "Pineapple Soda [650 Ml]",
                        "description": "",
                        "cloudinaryImageId": "etvzsokv8ct2p7qzb1t9",
                        "price": 11700
                    },
                    "65456322": {
                        "id": 65456322,
                        "name": "Butterscotch Soda [650 Ml]",
                        "description": "",
                        "cloudinaryImageId": "nqxo6mqltc7czgk5ooag",
                        "price": 11700
                    },
                    "65456323": {
                        "id": 65456323,
                        "name": "Lime Ice Soda [650 Ml]",
                        "description": "",
                        "cloudinaryImageId": "bdptprzijc1rpxcgnyxq",
                        "price": 11700
                    },
                    "65456324": {
                        "id": 65456324,
                        "name": "Chocolate Soda [650 Ml]",
                        "description": "",
                        "cloudinaryImageId": "nehemig4yikufdktgplb",
                        "price": 11700
                    },
                    "65456325": {
                        "id": 65456325,
                        "name": "Rose Soda [650 Ml]",
                        "description": "",
                        "cloudinaryImageId": "jj2vzkmhsdtf8xqw4ohm",
                        "price": 11700
                    },
                    "65456326": {
                        "id": 65456326,
                        "name": "Masala Lemonade Soda ]",
                        "description": "Without Ice Cream",
                        "price": 7800
                    },
                    "65582094": {
                        "id": 65582094,
                        "name": "Cotton Candy",
                        "description": "",
                        "cloudinaryImageId": "nkwsndnbkkbwcvayrfju",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65582119": {
                        "id": 65582119,
                        "name": "Sugarfree Vanilla",
                        "description": "",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "65582122": {
                        "id": 65582122,
                        "name": "Sugarfree Coffee [400 Ml]",
                        "description": "Without Ice Cream",
                        "price": 15600
                    },
                    "65582125": {
                        "id": 65582125,
                        "name": "Sugarfree Vanilla Shake [400 Ml]",
                        "description": "Without Ice Cream",
                        "price": 15600
                    },
                    "65582128": {
                        "id": 65582128,
                        "name": "Salted Caramel Shake",
                        "description": "",
                        "cloudinaryImageId": "jqudqbgfqvlzuj2n4i8b",
                        "price": 0,
                        "defaultPrice": 18500
                    },
                    "65582629": {
                        "id": 65582629,
                        "name": "Chocolate Divine",
                        "description": "A Chocolate Lovers Dream Come True! Crunchy Dark Chocolate Ice Cream in Chocolate Cake topped with Chocolate Truffle Sauce.",
                        "cloudinaryImageId": "yg7g19ryemplznbcd46i",
                        "price": 19500
                    },
                    "65582639": {
                        "id": 65582639,
                        "name": "Red Velvet Cake",
                        "description": "An irresistible twist of raspberry inside a rich, luscious red velvet cake stuffed with the delectable red velvet ice cream",
                        "cloudinaryImageId": "rwobnpoprebnpqydjb0a",
                        "price": 59300
                    },
                    "65584922": {
                        "id": 65584922,
                        "name": "Chocolate Divine Cake",
                        "description": "A Chocolate Lovers Dream Come True! Crunchy Dark Chocolate Ice Cream in Chocolate Cake topped with Chocolate Truffle Sauce.",
                        "cloudinaryImageId": "itqzeg6kqxwz3gxexen7",
                        "price": 67800
                    },
                    "65584923": {
                        "id": 65584923,
                        "name": "Red Velvet",
                        "description": "",
                        "cloudinaryImageId": "sss3si10bnaqbs5hiuez",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "87483742": {
                        "id": 87483742,
                        "name": "Thandai Ice Cream",
                        "description": "",
                        "cloudinaryImageId": "goqmql3iy6ibckb8nrzl",
                        "price": 0,
                        "defaultPrice": 8300
                    },
                    "87483743": {
                        "id": 87483743,
                        "name": "Tiramisu",
                        "description": "",
                        "cloudinaryImageId": "a143fd170bf38cc1dc5ef826171e30a5",
                        "price": 0,
                        "defaultPrice": 9300
                    },
                    "100867438": {
                        "id": 100867438,
                        "name": "Lite Brownie Sundae (regular)",
                        "description": "The original sundae with a twist, a rich moist brownie gets soaked in our Sugafree Vanilla Ice cream drooled with fudge sauce & nuts.",
                        "cloudinaryImageId": "pehx4hwcyugjraexerjt",
                        "price": 22500
                    },
                    "100867439": {
                        "id": 100867439,
                        "name": "Lite Caramel Mocha Sundae (small)",
                        "description": "A love story of caramel with a twist of Sugarfree Chocolate & Sugarfree coffee ice cream topped with our fudge sauce gets all nutty and crunchy.",
                        "cloudinaryImageId": "nfu7tqvf7u3xtuaknx60",
                        "price": 19500
                    },
                    "100867440": {
                        "id": 100867440,
                        "name": "Lite Hot Chocolate Fudge (small)",
                        "description": "Our iconic HCF sundae tells the story of when our delicious hot chocolate fudge sauce finds its soulmate in two scoop of Sugarfree vanilla Ice cream and gets all nutty.",
                        "cloudinaryImageId": "qtuaesud8c17bcoct5nw",
                        "price": 19500
                    },
                    "105132998": {
                        "id": 105132998,
                        "name": "Tiramisu Thick Shake",
                        "description": "",
                        "cloudinaryImageId": "zx4hiqlnnwcyghtvhk0a",
                        "price": 0,
                        "defaultPrice": 18500
                    }
                }
            }
        }
    }
];

export default dummyRestaurantMenus;