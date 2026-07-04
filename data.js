// Indian Food Nutrition Database & Diet Tracker
// Nutritional values are calculated per 100 grams of standard raw/plain ingredient or branded product labels.
// 'unitName' and 'unitWeight' define piece-based measurements where applicable.
// 'image' contains Unsplash photo IDs for high-quality food thumbnails.

const INDIAN_FOODS_DATABASE = [
  // ==========================================
  // --- GRAINS & CEREALS (अनाज और अनाज से बने उत्पाद) ---
  // ==========================================
  {
    id: "oats_raw",
    name: "Oats (Rolled / Raw)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Plain uncooked rolled oats",
    image: "1586444248902-2f64eddc13df",
    nutrition: { calories: 389, protein: 13.5, carbs: 66.0, fat: 6.9, fiber: 10.0, sodium: 2 }
  },
  {
    id: "basmati_rice_raw",
    name: "Rice (Basmati Chawal - Raw / Dry)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Uncooked dry rice grains",
    image: "1586201375761-83865001e31c",
    nutrition: { calories: 350, protein: 7.5, carbs: 78.0, fat: 0.5, fiber: 1.2, sodium: 5 }
  },
  {
    id: "basmati_rice_cooked",
    name: "Rice (Basmati Chawal - Cooked)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Plain boiled rice in water",
    image: "1546069901-ba9599a7e63c",
    nutrition: { calories: 130, protein: 2.7, carbs: 28.0, fat: 0.3, fiber: 0.4, sodium: 5 }
  },
  {
    id: "roti_plain_wheat",
    name: "Roti (Plain Wheat Chapati)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "1 medium roti is ~25g",
    unitName: "roti",
    unitWeight: 25,
    image: "1565557623262-b51c2513a641",
    nutrition: { calories: 260, protein: 8.5, carbs: 55.0, fat: 1.5, fiber: 7.0, sodium: 120 }
  },
  {
    id: "wheat_flour_dry",
    name: "Wheat Flour (Atta - Dry)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Plain whole wheat flour",
    image: "1608686207856-001b95cf60ca",
    nutrition: { calories: 340, protein: 12.0, carbs: 72.0, fat: 1.8, fiber: 11.0, sodium: 4 }
  },
  {
    id: "daliya_raw",
    name: "Daliya (Broken Wheat - Raw)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Uncooked dry broken wheat",
    image: "1574323347407-f5e1ad6d020b",
    nutrition: { calories: 342, protein: 12.0, carbs: 70.0, fat: 1.5, fiber: 10.0, sodium: 2 }
  },
  {
    id: "brown_bread_slice",
    name: "Brown Bread",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "1 standard slice is ~25g",
    unitName: "slice",
    unitWeight: 25,
    image: "1509440159596-0249088772ff",
    nutrition: { calories: 250, protein: 9.0, carbs: 45.0, fat: 3.0, fiber: 6.0, sodium: 400 }
  },
  {
    id: "multigrain_bread_slice",
    name: "Multigrain Bread (High Fiber)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "1 premium slice is ~28g",
    unitName: "slice",
    unitWeight: 28,
    image: "1549931319-a545dcf3bc73",
    nutrition: { calories: 245, protein: 10.0, carbs: 43.0, fat: 2.5, fiber: 7.0, sodium: 390 }
  },
  {
    id: "quinoa_raw",
    name: "Quinoa (Organic / Raw)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Uncooked premium quinoa grains",
    image: "1615485290382-441e4d049cb5",
    nutrition: { calories: 368, protein: 14.1, carbs: 64.2, fat: 6.1, fiber: 7.0, sodium: 5 }
  },
  {
    id: "quinoa_cooked",
    name: "Quinoa (Cooked)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Plain boiled quinoa",
    image: "1536304997881-a372c179924b",
    nutrition: { calories: 120, protein: 4.4, carbs: 21.3, fat: 1.9, fiber: 2.8, sodium: 5 }
  },
  {
    id: "poha_dry",
    name: "Poha (Flattened Rice - Dry)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Raw dry poha flakes",
    image: "1607623814035-76472300f56b",
    nutrition: { calories: 346, protein: 6.6, carbs: 77.3, fat: 1.2, fiber: 0.7, sodium: 5 }
  },
  {
    id: "poha_cooked",
    name: "Poha (Cooked Indian Style)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Plain cooked poha with peanuts & onion",
    image: "1601050690597-df056fb4c29d",
    nutrition: { calories: 130, protein: 2.5, carbs: 25.0, fat: 4.0, fiber: 1.5, sodium: 250 }
  },
  {
    id: "upma_cooked",
    name: "Upma (Cooked Rava Semolina)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Traditional rava upma",
    image: "1541832676-9b763b0239ab",
    nutrition: { calories: 132, protein: 3.0, carbs: 20.0, fat: 4.5, fiber: 1.2, sodium: 280 }
  },
  {
    id: "rava_suji_dry",
    name: "Rava / Suji (Semolina - Dry)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Dry semolina flour",
    image: "1596722065841-47101739c96e",
    nutrition: { calories: 360, protein: 12.0, carbs: 73.0, fat: 1.0, fiber: 3.9, sodium: 1 }
  },
  {
    id: "idli_steamed",
    name: "Idli (Plain Steamed Rice & Urad)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "1 standard idli is ~40g",
    unitName: "idli",
    unitWeight: 40,
    image: "1589301760014-d929f3979dbc",
    nutrition: { calories: 100, protein: 2.5, carbs: 21.0, fat: 0.5, fiber: 1.0, sodium: 150 }
  },
  {
    id: "dosa_plain",
    name: "Dosa (Plain / Crispy)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "1 plain dosa is ~60g",
    unitName: "dosa",
    unitWeight: 60,
    image: "1668236543090-82eba5ee5976",
    nutrition: { calories: 280, protein: 5.8, carbs: 48.0, fat: 6.3, fiber: 2.0, sodium: 360 }
  },
  {
    id: "kelloggs_cornflakes",
    name: "Kellogg's Corn Flakes (Original)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Original brand recipe",
    image: "1585238342024-78d387f4a707",
    nutrition: { calories: 378, protein: 7.0, carbs: 84.0, fat: 0.9, fiber: 2.0, sodium: 729 }
  },
  {
    id: "kelloggs_muesli",
    name: "Kellogg's Muesli (Fruit & Nut)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Premium mixed muesli",
    image: "1517093157656-b946f8010e9c",
    nutrition: { calories: 390, protein: 8.0, carbs: 75.0, fat: 5.5, fiber: 6.5, sodium: 120 }
  },
  {
    id: "quaker_oats_dry",
    name: "Quaker Oats (Dry / Rolled)",
    category: "grains",
    categoryLabel: "Grains & Cereals",
    servingInfo: "Authentic dry Quaker oats",
    image: "1595341888016-a392ef2227d6",
    nutrition: { calories: 374, protein: 12.1, carbs: 60.0, fat: 8.0, fiber: 9.0, sodium: 5 }
  },

  // ==========================================
  // --- DALS & LEGUMES (दालें और फलियां) ---
  // ==========================================
  {
    id: "moong_dal_raw",
    name: "Yellow Moong Dal (Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw yellow moong dal",
    image: "1517244683807-7ae58e854ad7",
    nutrition: { calories: 348, protein: 24.0, carbs: 60.0, fat: 1.2, fiber: 16.0, sodium: 15 }
  },
  {
    id: "moong_dal_cooked",
    name: "Yellow Moong Dal (Boiled / Cooked)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Plain boiled moong dal in water",
    image: "1599084992921-6d9b9d0dc6a0",
    nutrition: { calories: 105, protein: 7.0, carbs: 18.0, fat: 0.3, fiber: 4.5, sodium: 150 }
  },
  {
    id: "toor_dal_raw",
    name: "Toor Dal (Arhar - Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw split pigeon peas",
    image: "1585829365295-ab7cd400c167",
    nutrition: { calories: 343, protein: 22.0, carbs: 58.0, fat: 1.5, fiber: 15.0, sodium: 14 }
  },
  {
    id: "masoor_dal_raw",
    name: "Masoor Dal (Red Lentils - Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw split red lentils",
    image: "1515942661900-94b3d197c565",
    nutrition: { calories: 350, protein: 25.0, carbs: 60.0, fat: 1.0, fiber: 12.0, sodium: 12 }
  },
  {
    id: "kala_chana_raw",
    name: "Kala Chana (Black Chickpeas - Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw black chickpeas",
    image: "1606787366850-de6330128bfc",
    nutrition: { calories: 360, protein: 20.0, carbs: 60.0, fat: 5.0, fiber: 17.0, sodium: 24 }
  },
  {
    id: "kabuli_chana_raw",
    name: "Kabuli Chana (White Chickpeas - Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw white chickpeas",
    image: "1536304997881-a372c179924b",
    nutrition: { calories: 364, protein: 19.0, carbs: 60.0, fat: 6.0, fiber: 17.0, sodium: 24 }
  },
  {
    id: "soya_chunks_raw",
    name: "Soya Chunks (Raw / Nutrela)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Raw high-protein soya chunks",
    image: "1598256989800-fe5f95da9787",
    nutrition: { calories: 345, protein: 52.0, carbs: 33.0, fat: 0.5, fiber: 13.0, sodium: 150 }
  },
  {
    id: "rajma_dry",
    name: "Rajma (Red Kidney Beans - Raw / Dry)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw kidney beans",
    image: "1541832676-9b763b0239ab",
    nutrition: { calories: 333, protein: 23.6, carbs: 60.0, fat: 0.8, fiber: 15.2, sodium: 24 }
  },
  {
    id: "rajma_cooked",
    name: "Rajma (Boiled / Plain)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Plain boiled kidney beans",
    image: "1546069901-ba9599a7e63c",
    nutrition: { calories: 127, protein: 8.7, carbs: 22.8, fat: 0.5, fiber: 6.4, sodium: 5 }
  },
  {
    id: "chana_masala_cooked",
    name: "Chole / Chana Masala (Cooked)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Cooked chickpeas with gravy & oil",
    image: "1589301760014-d929f3979dbc",
    nutrition: { calories: 160, protein: 6.0, carbs: 22.0, fat: 5.0, fiber: 5.5, sodium: 350 }
  },
  {
    id: "sattu_powder",
    name: "Sattu (Roasted Chana Flour)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Pure roasted black chana flour",
    image: "1574323347407-f5e1ad6d020b",
    nutrition: { calories: 364, protein: 20.0, carbs: 56.0, fat: 5.0, fiber: 12.0, sodium: 10 }
  },
  {
    id: "besan_dry",
    name: "Besan (Gram / Chickpea Flour)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "Dry raw chana besan",
    image: "1608686207856-001b95cf60ca",
    nutrition: { calories: 387, protein: 22.4, carbs: 57.8, fat: 6.7, fiber: 10.8, sodium: 60 }
  },
  {
    id: "besan_chilla",
    name: "Besan Chilla (Plain Cooked)",
    category: "dals",
    categoryLabel: "Dals & Legumes",
    servingInfo: "1 medium chilla is ~60g",
    unitName: "chilla",
    unitWeight: 60,
    image: "1612182062633-9ff3b3598e96",
    nutrition: { calories: 160, protein: 7.5, carbs: 18.0, fat: 6.5, fiber: 3.5, sodium: 280 }
  },

  // ==========================================
  // --- FRUITS & VEGETABLES (फल और सब्जियां) ---
  // ==========================================
  {
    id: "banana_fresh",
    name: "Banana (Fresh)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium banana is ~100g",
    unitName: "banana",
    unitWeight: 100,
    image: "1571771894821-ce9b6c11b08e",
    nutrition: { calories: 89, protein: 1.1, carbs: 23.0, fat: 0.3, fiber: 2.6, sodium: 1 }
  },
  {
    id: "papaya_fresh",
    name: "Papaya",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh raw cut pieces",
    image: "1610082442750-6187b8f9e612",
    nutrition: { calories: 43, protein: 0.5, carbs: 11.0, fat: 0.3, fiber: 1.7, sodium: 8 }
  },
  {
    id: "apple_fresh",
    name: "Apple",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium apple is ~150g",
    unitName: "apple",
    unitWeight: 150,
    image: "1560806887-1e4cd0b6cbd6",
    nutrition: { calories: 52, protein: 0.3, carbs: 14.0, fat: 0.2, fiber: 2.4, sodium: 1 }
  },
  {
    id: "mango_fresh",
    name: "Mango",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium mango is ~150g",
    unitName: "mango",
    unitWeight: 150,
    image: "1553279768-865429fa0078",
    nutrition: { calories: 60, protein: 0.8, carbs: 15.0, fat: 0.4, fiber: 1.6, sodium: 1 }
  },
  {
    id: "potato_raw",
    name: "Potato (Raw / Aloo)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium potato is ~120g",
    unitName: "potato",
    unitWeight: 120,
    image: "1518977676601-b53f82aba655",
    nutrition: { calories: 77, protein: 2.0, carbs: 17.0, fat: 0.1, fiber: 2.2, sodium: 6 }
  },
  {
    id: "sweet_potato_raw",
    name: "Sweet Potato (Raw / Shakarkand)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium sweet potato is ~130g",
    unitName: "sweet potato",
    unitWeight: 130,
    image: "1596097561425-f86a51d57930",
    nutrition: { calories: 86, protein: 1.6, carbs: 20.0, fat: 0.1, fiber: 3.0, sodium: 55 }
  },
  {
    id: "broccoli_raw",
    name: "Broccoli",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh raw green broccoli florets",
    image: "1584006682522-dc17d6c0d9fc",
    nutrition: { calories: 34, protein: 2.8, carbs: 7.0, fat: 0.4, fiber: 2.6, sodium: 33 }
  },
  {
    id: "spinach_raw",
    name: "Spinach (Palak)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh green leaves",
    image: "1576045057995-568f588f82fb",
    nutrition: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, sodium: 79 }
  },
  {
    id: "cucumber_raw",
    name: "Cucumber (Kheera)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium cucumber is ~150g",
    unitName: "cucumber",
    unitWeight: 150,
    image: "1449300079324-964320ded21c",
    nutrition: { calories: 15, protein: 0.6, carbs: 3.6, fat: 0.1, fiber: 0.5, sodium: 2 }
  },
  {
    id: "tomato_raw",
    name: "Tomato (Tamatar)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium tomato is ~100g",
    unitName: "tomato",
    unitWeight: 100,
    image: "1595855759920-86582396756a",
    nutrition: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, sodium: 5 }
  },
  {
    id: "onion_raw",
    name: "Onion (Pyaz)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium onion is ~80g",
    unitName: "onion",
    unitWeight: 80,
    image: "1508747703725-719ae25dbf14",
    nutrition: { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7, sodium: 4 }
  },
  {
    id: "avocado_fresh",
    name: "Avocado (Fresh / Butterfruit)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Premium fresh avocado",
    image: "1523049673857-eb18f1d7b578",
    nutrition: { calories: 160, protein: 2.0, carbs: 8.5, fat: 14.7, fiber: 6.7, sodium: 7 }
  },
  {
    id: "orange_fresh",
    name: "Orange (Santra)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "1 medium orange is ~130g",
    unitName: "orange",
    unitWeight: 130,
    image: "1611080626913-7d5728a31a9b",
    nutrition: { calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1, fiber: 2.4, sodium: 0 }
  },
  {
    id: "pomegranate_fresh",
    name: "Pomegranate (Anaar)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh pomegranate seeds",
    image: "1615485290382-441e4d049cb5",
    nutrition: { calories: 83, protein: 1.7, carbs: 18.7, fat: 1.2, fiber: 4.0, sodium: 3 }
  },
  {
    id: "watermelon_fresh",
    name: "Watermelon (Tarbooj)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Sweet fresh cut watermelon",
    image: "1587049352846-4a222e784d38",
    nutrition: { calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, fiber: 0.4, sodium: 1 }
  },
  {
    id: "guava_fresh",
    name: "Guava (Amrood)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh raw guava with seeds",
    image: "1601050690597-df056fb4c29d",
    nutrition: { calories: 68, protein: 2.6, carbs: 14.3, fat: 1.0, fiber: 5.4, sodium: 2 }
  },
  {
    id: "ginger_raw",
    name: "Ginger (Adrak)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh raw ginger root",
    image: "1599599810760-437000d02c6a",
    nutrition: { calories: 80, protein: 1.8, carbs: 17.8, fat: 0.8, fiber: 2.0, sodium: 13 }
  },
  {
    id: "garlic_raw",
    name: "Garlic (Lahsun)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh raw garlic cloves",
    image: "1540189549352-957e62524458",
    nutrition: { calories: 149, protein: 6.4, carbs: 33.1, fat: 0.5, fiber: 2.1, sodium: 17 }
  },
  {
    id: "mushroom_raw",
    name: "Mushroom (Button)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Fresh raw white button mushrooms",
    image: "1534422298391-e4f8c172dddb",
    nutrition: { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, fiber: 1.0, sodium: 5 }
  },
  {
    id: "cauliflower_raw",
    name: "Cauliflower (Phool Gobhi)",
    category: "fruitsveg",
    categoryLabel: "Fruits & Vegetables",
    servingInfo: "Raw fresh white cauliflower florets",
    image: "1568584263-ce962f949c25",
    nutrition: { calories: 25, protein: 1.9, carbs: 5.0, fat: 0.3, fiber: 2.0, sodium: 30 }
  },

  // ==========================================
  // --- DAIRY, EGGS & SUPPLEMENTS (डेयरी उत्पाद, अंडे और पूरक) ---
  // ==========================================
  {
    id: "paneer_standard",
    name: "Paneer (Cottage Cheese)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Fresh cottage cheese block",
    image: "1486887396153-fa416525c108",
    nutrition: { calories: 265, protein: 18.0, carbs: 1.2, fat: 20.8, fiber: 0.0, sodium: 15 }
  },
  {
    id: "tofu_soy",
    name: "Tofu (Soya Paneer)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Fresh soy milk coagulated block",
    image: "1546069901-ba9599a7e63c",
    nutrition: { calories: 76, protein: 8.0, carbs: 1.9, fat: 4.8, fiber: 0.3, sodium: 7 }
  },
  {
    id: "milk_cow",
    name: "Cow Milk (Whole)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Whole fresh cow milk, 1 glass ~250ml",
    image: "1550583724-b2692b85b150",
    nutrition: { calories: 62, protein: 3.2, carbs: 4.8, fat: 3.6, fiber: 0.0, sodium: 49 }
  },
  {
    id: "milk_low_fat",
    name: "Double Toned Milk (Low Fat)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Low fat milk, 1 glass ~250ml",
    image: "1563636619-a9a3b6807cc9",
    nutrition: { calories: 47, protein: 3.2, carbs: 4.8, fat: 1.5, fiber: 0.0, sodium: 50 }
  },
  {
    id: "dahi_standard",
    name: "Curd (Standard / Dahi)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Standard plain dahi",
    image: "1488477181946-6428a0291777",
    nutrition: { calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3, fiber: 0.0, sodium: 46 }
  },
  {
    id: "egg_whole_raw",
    name: "Egg (Whole / Raw)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 large whole raw egg is ~50g",
    unitName: "egg",
    unitWeight: 50,
    image: "1506976785307-8732e854ad03",
    nutrition: { calories: 143, protein: 12.6, carbs: 0.7, fat: 9.5, fiber: 0.0, sodium: 140 }
  },
  {
    id: "egg_whites_raw",
    name: "Egg Whites (Raw)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 large egg white is ~33g",
    unitName: "egg white",
    unitWeight: 33,
    image: "1587411768290-f000b3346b0d",
    nutrition: { calories: 52, protein: 11.0, carbs: 0.7, fat: 0.2, fiber: 0.0, sodium: 166 }
  },
  {
    id: "egg_whole_boiled",
    name: "Egg (Whole / Boiled)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 large boiled egg is ~50g",
    unitName: "boiled egg",
    unitWeight: 50,
    image: "1587411768290-f000b3346b0d",
    nutrition: { calories: 155, protein: 12.6, carbs: 1.1, fat: 10.6, fiber: 0.0, sodium: 124 }
  },
  {
    id: "egg_white_boiled",
    name: "Egg White (Boiled)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 boiled egg white is ~33g",
    unitName: "white",
    unitWeight: 33,
    image: "1587411768290-f000b3346b0d",
    nutrition: { calories: 52, protein: 11.0, carbs: 0.7, fat: 0.2, fiber: 0.0, sodium: 166 }
  },
  {
    id: "amul_butter",
    name: "Amul Butter (Salted)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 standard serving is ~10g",
    unitName: "serving",
    unitWeight: 10,
    image: "1589985270826-4b7bb135bc9d",
    nutrition: { calories: 722, protein: 0.6, carbs: 0.0, fat: 80.0, fiber: 0.0, sodium: 800 }
  },
  {
    id: "amul_ghee",
    name: "Amul Ghee (Cow / Pure)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 standard teaspoon is ~5g",
    unitName: "teaspoon",
    unitWeight: 5,
    image: "1474979266404-7eaacbcd87c5",
    nutrition: { calories: 897, protein: 0.0, carbs: 0.0, fat: 99.7, fiber: 0.0, sodium: 0 }
  },
  {
    id: "amul_cheese_slice",
    name: "Amul Cheese Slice",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 cheese slice is ~20g",
    unitName: "slice",
    unitWeight: 20,
    image: "1528256823541-d6db29855520",
    nutrition: { calories: 310, protein: 20.0, carbs: 1.5, fat: 25.0, fiber: 0.0, sodium: 1400 }
  },
  {
    id: "amul_masti_dahi",
    name: "Amul Masti Dahi (Plain)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Amul packaged curd",
    image: "1571244856-3b82f64e222e",
    nutrition: { calories: 62, protein: 4.0, carbs: 5.0, fat: 3.0, fiber: 0.0, sodium: 50 }
  },
  {
    id: "amul_gold_milk",
    name: "Amul Gold Milk (Full Cream)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Full cream milk, 1 glass ~250ml",
    image: "1553530666-4b7bb135bc9d",
    nutrition: { calories: 87, protein: 3.2, carbs: 4.7, fat: 6.2, fiber: 0.0, sodium: 50 }
  },
  {
    id: "amul_slim_trim",
    name: "Amul Slim n Trim Milk (Skimmed)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "Low fat skimmed milk, 1 glass ~250ml",
    image: "1563636619-a9a3b6807cc9",
    nutrition: { calories: 35, protein: 3.3, carbs: 4.8, fat: 0.15, fiber: 0.0, sodium: 50 }
  },
  {
    id: "epigamia_greek_yogurt",
    name: "Epigamia Greek Yogurt (Plain)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "High-protein strain yogurt",
    image: "1488477181946-6428a0291777",
    nutrition: { calories: 85, protein: 8.0, carbs: 5.0, fat: 3.6, fiber: 0.0, sodium: 45 }
  },
  {
    id: "on_whey_protein",
    name: "Whey Protein (ON Gold Standard)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 standard scoop is ~30.4g (24g Protein)",
    unitName: "scoop",
    unitWeight: 30,
    image: "1579758629938-03607ccdbaba",
    nutrition: { calories: 395, protein: 79.0, carbs: 9.8, fat: 4.9, fiber: 0.0, sodium: 420 }
  },
  {
    id: "myprotein_whey",
    name: "Whey Protein (Myprotein Impact)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 standard scoop is ~25g (20g Protein)",
    unitName: "scoop",
    unitWeight: 25,
    image: "1593092460-a8da13d82791",
    nutrition: { calories: 396, protein: 80.0, carbs: 8.0, fat: 6.0, fiber: 0.0, sodium: 320 }
  },
  {
    id: "muscleblaze_whey",
    name: "Whey Protein (MuscleBlaze Raw)",
    category: "dairyeggs",
    categoryLabel: "Dairy & Eggs",
    servingInfo: "1 standard scoop is ~30g (24g Protein)",
    unitName: "scoop",
    unitWeight: 30,
    image: "1546548970-8732e854ad03",
    nutrition: { calories: 400, protein: 80.0, carbs: 6.7, fat: 6.0, fiber: 0.0, sodium: 350 }
  },

  // ==========================================
  // --- CHICKEN, MEAT & FISH (मांस और मछली) ---
  // ==========================================
  {
    id: "chicken_breast_raw",
    name: "Chicken Breast (Raw)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Boneless raw chicken breast fillet",
    image: "1604503468506-a8da13d82791",
    nutrition: { calories: 110, protein: 23.0, carbs: 0.0, fat: 1.2, fiber: 0.0, sodium: 65 }
  },
  {
    id: "chicken_breast_grilled",
    name: "Chicken Breast (Cooked / Grilled)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Plain grilled boneless fillet",
    image: "1604908176997-75bc7b99c3c0",
    nutrition: { calories: 165, protein: 31.0, carbs: 0.0, fat: 3.6, fiber: 0.0, sodium: 74 }
  },
  {
    id: "chicken_thigh_raw",
    name: "Chicken Thigh (Skinless / Raw)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Raw boneless skinless thigh meat",
    image: "1604503468506-a8da13d82791",
    nutrition: { calories: 120, protein: 20.0, carbs: 0.0, fat: 4.5, fiber: 0.0, sodium: 80 }
  },
  {
    id: "fish_basa_raw",
    name: "Basa Fish (Raw)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Lean skinless raw fish fillet",
    image: "1519708227418-c8fd9a32b7a2",
    nutrition: { calories: 90, protein: 15.0, carbs: 0.0, fat: 3.0, fiber: 0.0, sodium: 60 }
  },
  {
    id: "fish_salmon_raw",
    name: "Salmon Fish (Raw)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Raw salmon fillet with omega-3 fats",
    image: "1467003909585-ffed7aa8b07f",
    nutrition: { calories: 208, protein: 20.0, carbs: 0.0, fat: 13.0, fiber: 0.0, sodium: 59 }
  },
  {
    id: "tuna_canned",
    name: "Tuna (Canned in Water - Drained)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Lean protein canned fish chunks",
    image: "1546069901-ba9599a7e63c",
    nutrition: { calories: 116, protein: 26.0, carbs: 0.0, fat: 1.0, fiber: 0.0, sodium: 350 }
  },
  {
    id: "mutton_lean_raw",
    name: "Mutton (Goat Meat - Lean Raw)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Lean raw goat meat pieces",
    image: "1604503468506-a8da13d82791",
    nutrition: { calories: 143, protein: 20.6, carbs: 0.0, fat: 6.0, fiber: 0.0, sodium: 82 }
  },
  {
    id: "prawns_raw",
    name: "Prawns / Shrimp (Raw)",
    category: "meatfish",
    categoryLabel: "Chicken & Fish",
    servingInfo: "Raw peeled deveined shrimp",
    image: "1519708227418-c8fd9a32b7a2",
    nutrition: { calories: 85, protein: 20.1, carbs: 0.2, fat: 0.5, fiber: 0.0, sodium: 120 }
  },

  // ==========================================
  // --- NUTS, SEEDS & HEALTH FATS (मेवे, बीज और स्वस्थ वसा) ---
  // ==========================================
  {
    id: "peanuts_raw",
    name: "Peanuts (Raw / Moongfali)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain shelled raw peanuts",
    image: "1534111612489-7235222bfec7",
    nutrition: { calories: 567, protein: 25.8, carbs: 16.1, fat: 49.2, fiber: 8.5, sodium: 18 }
  },
  {
    id: "almonds_raw",
    name: "Almonds (Raw / Badam)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain dry raw almonds",
    image: "1543257580-7269da773bf5",
    nutrition: { calories: 579, protein: 21.0, carbs: 22.0, fat: 49.0, fiber: 12.0, sodium: 1 }
  },
  {
    id: "walnuts_raw",
    name: "Walnuts (Raw / Akhrot)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain dry raw walnuts",
    image: "1527324688122-d0498a442e3e",
    nutrition: { calories: 654, protein: 15.0, carbs: 14.0, fat: 65.0, fiber: 6.7, sodium: 2 }
  },
  {
    id: "cashews_raw",
    name: "Cashews (Raw / Kaju)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain dry raw cashew nuts",
    image: "1597854710119-a8a2fc233367",
    nutrition: { calories: 553, protein: 18.2, carbs: 30.2, fat: 43.8, fiber: 3.3, sodium: 12 }
  },
  {
    id: "pista_raw",
    name: "Pistachios (Pista - Shell-less)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain shell-less raw pistachios",
    image: "1600891964599-f61ba0e24092",
    nutrition: { calories: 562, protein: 20.0, carbs: 27.5, fat: 45.3, fiber: 10.6, sodium: 1 }
  },
  {
    id: "dates_seedless",
    name: "Dates (Khajur - Seedless)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "1 dry seedless date is ~8g",
    unitName: "date",
    unitWeight: 8,
    image: "1501630834273-4b55c2824cf5",
    nutrition: { calories: 277, protein: 1.8, carbs: 75.0, fat: 0.2, fiber: 6.7, sodium: 2 }
  },
  {
    id: "raisins_dry",
    name: "Raisins (Kishmish)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Sweet dried grapes",
    image: "1539586091041-0f0f0c08f01b",
    nutrition: { calories: 299, protein: 3.0, carbs: 79.0, fat: 0.5, fiber: 3.7, sodium: 11 }
  },
  {
    id: "anjeer_dry",
    name: "Figs (Dry Anjeer)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Dried organic figs",
    image: "1599940824399-b87987ceb72a",
    nutrition: { calories: 249, protein: 3.3, carbs: 63.9, fat: 0.9, fiber: 9.8, sodium: 10 }
  },
  {
    id: "chia_seeds_raw",
    name: "Chia Seeds (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain raw chia seeds",
    image: "1619864264627-8a90197772ff",
    nutrition: { calories: 486, protein: 16.5, carbs: 42.0, fat: 30.7, fiber: 34.0, sodium: 16 }
  },
  {
    id: "flax_seeds_raw",
    name: "Flax Seeds (Raw / Alsi)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain dry raw flax seeds",
    image: "1515942661900-94b3d197c565",
    nutrition: { calories: 534, protein: 18.3, carbs: 29.0, fat: 42.0, fiber: 27.3, sodium: 30 }
  },
  {
    id: "pumpkin_seeds_raw",
    name: "Pumpkin Seeds (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Shelled raw pumpkin seeds",
    image: "1540189549352-957e62524458",
    nutrition: { calories: 559, protein: 30.0, carbs: 10.7, fat: 49.0, fiber: 6.0, sodium: 7 }
  },
  {
    id: "sunflower_seeds_raw",
    name: "Sunflower Seeds (Raw)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Shelled raw sunflower seeds",
    image: "1596722065841-47101739c96e",
    nutrition: { calories: 584, protein: 20.8, carbs: 20.0, fat: 51.5, fiber: 8.6, sodium: 9 }
  },
  {
    id: "sesame_seeds_raw",
    name: "Sesame Seeds (Raw / Til)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain raw sesame seeds",
    image: "1615485290382-441e4d049cb5",
    nutrition: { calories: 573, protein: 17.7, carbs: 23.4, fat: 49.7, fiber: 11.8, sodium: 11 }
  },
  {
    id: "melon_seeds_raw",
    name: "Melon Seeds (Raw / Magaj)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Shelled raw musk melon seeds",
    image: "1596722065841-47101739c96e",
    nutrition: { calories: 557, protein: 30.2, carbs: 12.0, fat: 47.0, fiber: 5.0, sodium: 8 }
  },
  {
    id: "pintola_peanut_butter",
    name: "Peanut Butter (Pintola Unsweetened)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Unsweetened crunchy pure peanut butter",
    image: "1590080875515-8a3a8dc5735e",
    nutrition: { calories: 625, protein: 30.0, carbs: 15.0, fat: 50.0, fiber: 9.0, sodium: 10 }
  },
  {
    id: "myfitness_peanut_butter",
    name: "Peanut Butter (MYFITNESS Chocolate)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "MYFITNESS chocolate crunchy peanut butter",
    image: "1568256823541-d6db29855520",
    nutrition: { calories: 600, protein: 26.0, carbs: 22.0, fat: 46.0, fiber: 6.0, sodium: 150 }
  },
  {
    id: "olive_oil",
    name: "Olive Oil (Extra Virgin)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "1 tablespoon is ~14g",
    unitName: "tablespoon",
    unitWeight: 14,
    image: "1474979266404-7eaacbcd87c5",
    nutrition: { calories: 884, protein: 0.0, carbs: 0.0, fat: 100.0, fiber: 0.0, sodium: 0 }
  },
  {
    id: "coconut_oil_pure",
    name: "Coconut Oil (Pure)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "1 tablespoon is ~14g",
    unitName: "tablespoon",
    unitWeight: 14,
    image: "1588215507623-268c4937a352",
    nutrition: { calories: 862, protein: 0.0, carbs: 0.0, fat: 100.0, fiber: 0.0, sodium: 0 }
  },
  {
    id: "dabur_honey",
    name: "Honey (Pure / Dabur)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "1 standard teaspoon is ~7g",
    unitName: "teaspoon",
    unitWeight: 7,
    image: "1587049352846-4a222e784d38",
    nutrition: { calories: 304, protein: 0.3, carbs: 82.4, fat: 0.0, fiber: 0.2, sodium: 4 }
  },
  {
    id: "roasted_makhana",
    name: "Makhana (Roasted Foxnuts)",
    category: "nutsseeds",
    categoryLabel: "Nuts & Seeds",
    servingInfo: "Plain dry roasted makhana",
    image: "1585238342024-78d387f4a707",
    nutrition: { calories: 350, protein: 9.7, carbs: 77.0, fat: 0.1, fiber: 7.6, sodium: 20 }
  }
];
