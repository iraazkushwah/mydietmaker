// Simple Raw Whole Foods & Staple Nutrition Database
// Nutritional values are calculated per 100 grams of standard raw or plain dry ingredient.
// 'unitName' and 'unitWeight' define piece-based measurements where applicable.
// 'icon' contains FontAwesome class names representing vector icons for each food item.

const INDIAN_FOODS_DATABASE = [
  // --- Grains & Cereals ---
  {
    id: "oats_raw",
    name: "Oats (Rolled / Raw)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Plain uncooked rolled oats",
    icon: "fa-solid fa-bowl-rice",
    nutrition: {
      calories: 389,
      protein: 13.5,
      carbs: 66.0,
      fat: 6.9,
      fiber: 10.0,
      sodium: 2
    }
  },
  {
    id: "basmati_rice_raw",
    name: "Rice (Basmati Chawal - Raw / Dry)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Uncooked dry rice grains",
    icon: "fa-solid fa-wheat-awn",
    nutrition: {
      calories: 350,
      protein: 7.5,
      carbs: 78.0,
      fat: 0.5,
      fiber: 1.2,
      sodium: 5
    }
  },
  {
    id: "basmati_rice_cooked",
    name: "Rice (Basmati Chawal - Cooked)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Plain boiled rice in water",
    icon: "fa-solid fa-bowl-rice",
    nutrition: {
      calories: 130,
      protein: 2.7,
      carbs: 28.0,
      fat: 0.3,
      fiber: 0.4,
      sodium: 5
    }
  },
  {
    id: "roti_plain_wheat",
    name: "Roti (Plain Wheat Chapati)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "1 medium roti is ~25g",
    unitName: "roti",
    unitWeight: 25,
    icon: "fa-solid fa-bread-slice",
    nutrition: {
      calories: 260,
      protein: 8.5,
      carbs: 55.0,
      fat: 1.5,
      fiber: 7.0,
      sodium: 120
    }
  },
  {
    id: "wheat_flour_dry",
    name: "Wheat Flour (Atta - Dry)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Plain whole wheat flour",
    icon: "fa-solid fa-wheat-awn",
    nutrition: {
      calories: 340,
      protein: 12.0,
      carbs: 72.0,
      fat: 1.8,
      fiber: 11.0,
      sodium: 4
    }
  },
  {
    id: "daliya_raw",
    name: "Daliya (Broken Wheat - Raw)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Uncooked dry broken wheat",
    icon: "fa-solid fa-wheat-awn",
    nutrition: {
      calories: 342,
      protein: 12.0,
      carbs: 70.0,
      fat: 1.5,
      fiber: 10.0,
      sodium: 2
    }
  },
  {
    id: "brown_bread_slice",
    name: "Brown Bread",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "1 standard slice is ~25g",
    unitName: "slice",
    unitWeight: 25,
    icon: "fa-solid fa-bread-slice",
    nutrition: {
      calories: 250,
      protein: 9.0,
      carbs: 45.0,
      fat: 3.0,
      fiber: 6.0,
      sodium: 400
    }
  },

  // --- Fruits & Vegetables ---
  {
    id: "banana_fresh",
    name: "Banana (Fresh)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium banana is ~100g",
    unitName: "banana",
    unitWeight: 100,
    icon: "fa-solid fa-banana",
    nutrition: {
      calories: 89,
      protein: 1.1,
      carbs: 23.0,
      fat: 0.3,
      fiber: 2.6,
      sodium: 1
    }
  },
  {
    id: "papaya_fresh",
    name: "Papaya",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh raw cut pieces",
    icon: "fa-solid fa-lemon",
    nutrition: {
      calories: 43,
      protein: 0.5,
      carbs: 11.0,
      fat: 0.3,
      fiber: 1.7,
      sodium: 8
    }
  },
  {
    id: "apple_fresh",
    name: "Apple",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium apple is ~150g",
    unitName: "apple",
    unitWeight: 150,
    icon: "fa-solid fa-apple-whole",
    nutrition: {
      calories: 52,
      protein: 0.3,
      carbs: 14.0,
      fat: 0.2,
      fiber: 2.4,
      sodium: 1
    }
  },
  {
    id: "mango_fresh",
    name: "Mango",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium mango is ~150g",
    unitName: "mango",
    unitWeight: 150,
    icon: "fa-solid fa-lemon",
    nutrition: {
      calories: 60,
      protein: 0.8,
      carbs: 15.0,
      fat: 0.4,
      fiber: 1.6,
      sodium: 1
    }
  },
  {
    id: "potato_raw",
    name: "Potato (Raw)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium potato is ~120g",
    unitName: "potato",
    unitWeight: 120,
    icon: "fa-solid fa-egg",
    nutrition: {
      calories: 77,
      protein: 2.0,
      carbs: 17.0,
      fat: 0.1,
      fiber: 2.2,
      sodium: 6
    }
  },
  {
    id: "sweet_potato_raw",
    name: "Sweet Potato (Raw)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium sweet potato is ~130g",
    unitName: "sweet potato",
    unitWeight: 130,
    icon: "fa-solid fa-pepper-hot",
    nutrition: {
      calories: 86,
      protein: 1.6,
      carbs: 20.0,
      fat: 0.1,
      fiber: 3.0,
      sodium: 55
    }
  },
  {
    id: "broccoli_raw",
    name: "Broccoli",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh raw green broccoli florets",
    icon: "fa-solid fa-tree",
    nutrition: {
      calories: 34,
      protein: 2.8,
      carbs: 7.0,
      fat: 0.4,
      fiber: 2.6,
      sodium: 33
    }
  },
  {
    id: "spinach_raw",
    name: "Spinach (Palak)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh green leaves",
    icon: "fa-solid fa-leaf",
    nutrition: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      fiber: 2.2,
      sodium: 79
    }
  },
  {
    id: "cucumber_raw",
    name: "Cucumber",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium cucumber is ~150g",
    unitName: "cucumber",
    unitWeight: 150,
    icon: "fa-solid fa-pepper-hot",
    nutrition: {
      calories: 15,
      protein: 0.6,
      carbs: 3.6,
      fat: 0.1,
      fiber: 0.5,
      sodium: 2
    }
  },
  {
    id: "tomato_raw",
    name: "Tomato",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium tomato is ~100g",
    unitName: "tomato",
    unitWeight: 100,
    icon: "fa-solid fa-apple-whole",
    nutrition: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fat: 0.2,
      fiber: 1.2,
      sodium: 5
    }
  },
  {
    id: "onion_raw",
    name: "Onion",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium onion is ~80g",
    unitName: "onion",
    unitWeight: 80,
    icon: "fa-solid fa-circle",
    nutrition: {
      calories: 40,
      protein: 1.1,
      carbs: 9.3,
      fat: 0.1,
      fiber: 1.7,
      sodium: 4
    }
  },

  // --- Dals & Legumes ---
  {
    id: "moong_dal_raw",
    name: "Yellow Moong Dal (Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw yellow moong dal",
    icon: "fa-solid fa-seedling",
    nutrition: {
      calories: 348,
      protein: 24.0,
      carbs: 60.0,
      fat: 1.2,
      fiber: 16.0,
      sodium: 15
    }
  },
  {
    id: "toor_dal_raw",
    name: "Toor Dal (Arhar - Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw split pigeon peas",
    icon: "fa-solid fa-seedling",
    nutrition: {
      calories: 343,
      protein: 22.0,
      carbs: 58.0,
      fat: 1.5,
      fiber: 15.0,
      sodium: 14
    }
  },
  {
    id: "masoor_dal_raw",
    name: "Masoor Dal (Red Lentils - Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw split red lentils",
    icon: "fa-solid fa-seedling",
    nutrition: {
      calories: 350,
      protein: 25.0,
      carbs: 60.0,
      fat: 1.0,
      fiber: 12.0,
      sodium: 12
    }
  },
  {
    id: "kala_chana_raw",
    name: "Kala Chana (Black Chickpeas - Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw black chickpeas",
    icon: "fa-solid fa-circle-dot",
    nutrition: {
      calories: 360,
      protein: 20.0,
      carbs: 60.0,
      fat: 5.0,
      fiber: 17.0,
      sodium: 24
    }
  },
  {
    id: "kabuli_chana_raw",
    name: "Kabuli Chana (White Chickpeas - Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw white chickpeas",
    icon: "fa-solid fa-circle-dot",
    nutrition: {
      calories: 364,
      protein: 19.0,
      carbs: 60.0,
      fat: 6.0,
      fiber: 17.0,
      sodium: 24
    }
  },
  {
    id: "soya_chunks_raw",
    name: "Soya Chunks (Raw)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Raw high-protein soya chunks",
    icon: "fa-solid fa-cubes",
    nutrition: {
      calories: 345,
      protein: 52.0,
      carbs: 33.0,
      fat: 0.5,
      fiber: 13.0,
      sodium: 150
    }
  },

  // --- Dairy & Eggs ---
  {
    id: "paneer_standard",
    name: "Paneer (Cottage Cheese)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Fresh cottage cheese block",
    icon: "fa-solid fa-cheese",
    nutrition: {
      calories: 265,
      protein: 18.0,
      carbs: 1.2,
      fat: 20.8,
      fiber: 0.0,
      sodium: 15
    }
  },
  {
    id: "tofu_soy",
    name: "Tofu (Soya Paneer)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Fresh soy milk coagulated block",
    icon: "fa-solid fa-cheese",
    nutrition: {
      calories: 76,
      protein: 8.0,
      carbs: 1.9,
      fat: 4.8,
      fiber: 0.3,
      sodium: 7
    }
  },
  {
    id: "milk_cow",
    name: "Cow Milk (Whole)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Whole fresh cow milk, 1 glass ~250ml",
    icon: "fa-solid fa-bottle-water",
    nutrition: {
      calories: 62,
      protein: 3.2,
      carbs: 4.8,
      fat: 3.6,
      fiber: 0.0,
      sodium: 49
    }
  },
  {
    id: "milk_low_fat",
    name: "Double Toned Milk (Low Fat)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Low fat milk, 1 glass ~250ml",
    icon: "fa-solid fa-bottle-water",
    nutrition: {
      calories: 47,
      protein: 3.2,
      carbs: 4.8,
      fat: 1.5,
      fiber: 0.0,
      sodium: 50
    }
  },
  {
    id: "dahi_standard",
    name: "Curd",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Standard plain curd",
    icon: "fa-solid fa-bowl-food",
    nutrition: {
      calories: 61,
      protein: 3.5,
      carbs: 4.7,
      fat: 3.3,
      fiber: 0.0,
      sodium: 46
    }
  },
  {
    id: "egg_whole_raw",
    name: "Egg (Whole / Raw)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 large whole raw egg is ~50g",
    unitName: "egg",
    unitWeight: 50,
    icon: "fa-solid fa-egg",
    nutrition: {
      calories: 143,
      protein: 12.6,
      carbs: 0.7,
      fat: 9.5,
      fiber: 0.0,
      sodium: 140
    }
  },
  {
    id: "egg_whites_raw",
    name: "Egg Whites (Raw)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 large egg white is ~33g",
    unitName: "egg white",
    unitWeight: 33,
    icon: "fa-solid fa-egg",
    nutrition: {
      calories: 52,
      protein: 11.0,
      carbs: 0.7,
      fat: 0.2,
      fiber: 0.0,
      sodium: 166
    }
  },

  // --- Chicken & Fish ---
  {
    id: "chicken_breast_raw",
    name: "Chicken Breast (Raw)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Boneless raw chicken breast fillet",
    icon: "fa-solid fa-drumstick-bite",
    nutrition: {
      calories: 110,
      protein: 23.0,
      carbs: 0.0,
      fat: 1.2,
      fiber: 0.0,
      sodium: 65
    }
  },
  {
    id: "fish_basa_raw",
    name: "Basa Fish (Raw)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Lean skinless raw fish fillet",
    icon: "fa-solid fa-fish",
    nutrition: {
      calories: 90,
      protein: 15.0,
      carbs: 0.0,
      fat: 3.0,
      fiber: 0.0,
      sodium: 60
    }
  },

  // --- Nuts & Seeds ---
  {
    id: "peanuts_raw",
    name: "Peanuts (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain shelled raw peanuts",
    icon: "fa-solid fa-circle-dot",
    nutrition: {
      calories: 567,
      protein: 25.8,
      carbs: 16.1,
      fat: 49.2,
      fiber: 8.5,
      sodium: 18
    }
  },
  {
    id: "almonds_raw",
    name: "Almonds (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain dry raw almonds",
    icon: "fa-solid fa-seedling",
    nutrition: {
      calories: 579,
      protein: 21.0,
      carbs: 22.0,
      fat: 49.0,
      fiber: 12.0,
      sodium: 1
    }
  },
  {
    id: "walnuts_raw",
    name: "Walnuts (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain dry raw walnuts",
    icon: "fa-solid fa-brain",
    nutrition: {
      calories: 654,
      protein: 15.0,
      carbs: 14.0,
      fat: 65.0,
      fiber: 6.7,
      sodium: 2
    }
  },
  {
    id: "chia_seeds_raw",
    name: "Chia Seeds (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain raw chia seeds",
    icon: "fa-solid fa-seedling",
    nutrition: {
      calories: 486,
      protein: 16.5,
      carbs: 42.0,
      fat: 30.7,
      fiber: 34.0,
      sodium: 16
    }
  },
  {
    id: "flax_seeds_raw",
    name: "Flax Seeds (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain dry raw flax seeds",
    icon: "fa-solid fa-seedling",
    nutrition: {
      calories: 534,
      protein: 18.3,
      carbs: 29.0,
      fat: 42.0,
      fiber: 27.3,
      sodium: 30
    }
  },
  {
    id: "pumpkin_seeds_raw",
    name: "Pumpkin Seeds (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Shelled raw pumpkin seeds",
    icon: "fa-solid fa-seedling",
    nutrition: {
      calories: 559,
      protein: 30.0,
      carbs: 10.7,
      fat: 49.0,
      fiber: 6.0,
      sodium: 7
    }
  },
  {
    id: "sunflower_seeds_raw",
    name: "Sunflower Seeds (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Shelled raw sunflower seeds",
    icon: "fa-solid fa-sun",
    nutrition: {
      calories: 584,
      protein: 20.8,
      carbs: 20.0,
      fat: 51.5,
      fiber: 8.6,
      sodium: 9
    }
  },
  {
    id: "sesame_seeds_raw",
    name: "Sesame Seeds (Raw / Til)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain raw sesame seeds",
    icon: "fa-solid fa-seedling",
    nutrition: {
      calories: 573,
      protein: 17.7,
      carbs: 23.4,
      fat: 49.7,
      fiber: 11.8,
      sodium: 11
    }
  },
  {
    id: "melon_seeds_raw",
    name: "Melon Seeds (Raw / Magaj)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Shelled raw musk melon seeds",
    icon: "fa-solid fa-seedling",
    nutrition: {
      calories: 557,
      protein: 30.2,
      carbs: 12.0,
      fat: 47.0,
      fiber: 5.0,
      sodium: 8
    }
  }
];
