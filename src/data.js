const products =[
  {
    "id": 1,
    "name": "Compact Shaker",
    "brand": "MuscleBlaze",
    "category": "Shaker",
    "weight": "",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaze Compact Shaker.jpg"
  },
  {
    "id": 2,
    "name": "Gym Steel Shaker",
    "brand": "MuscleBlaze",
    "category": "Shaker",
    "weight": "N/A",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaze Gym Steel Shaker.jpg"
  },
  {
    "id": 3,
    "name": "Phirze Zidd Kar Shaker",
    "brand": "MuscleBlaze",
    "category": "Shaker",
    "weight": "N/A",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaze Phirse Zidd Kar Shaker.jpg"
  },
  {
    "id": 4,
    "name": "Steel Shaker Pro",
    "brand": "MuscleBlaze",
    "category": "Shaker",
    "weight": "N/A",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaze Steel Shaker Pro.jpg"
  },
  {
    "id": 5,
    "name": "Super Gainer XXL",
    "brand": "MuscleBlaze",
    "category": "Gainer",
    "weight": "N/A",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaze Super Gainer XXL Weight Gainer.jpg"
  },
  {
    "id": 6,
    "name": "Magnesium Glycinate - 60T",
    "brand": "MuscleBlaze",
    "category": "Vitamins",
    "weight": "60 Tablets",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaze-agnesium-Glycinate-60T.webp"
  },
  {
    "id": 7,
    "name": "Creatine Monohydrate",
    "brand": "MuscleBlaze",
    "category": "Creatine",
    "weight": "100g",
    "price": 0,
    "bonus": "",
    "image": "/images/muscleblaze-creatine-100g.webp"
  },
  {
    "id": 8,
    "name": "Creatine Monohydrate",
    "brand": "MuscleBlaze",
    "category": "Creatine",
    "weight": "250g",
    "price": 0,
    "bonus": "",
    "image": "/images/muscleblaze-creatine-250g.webp"
  },
  {
    "id": 9,
    "name": "Creatine Monohydrate",
    "brand": "MuscleBlaze",
    "category": "Creatine",
    "weight": "320g",
    "price": 0,
    "bonus": "",
    "image": "/images/muscleblaze-creatine-320g.webp"
  },
  {
    "id": 10,
    "name": "EAA 6000",
    "brand": "MuscleBlaze",
    "category": "Amino Acids",
    "weight": "N/A",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaze-EAA-6000.webp"
  },
  {
    "id": 11,
    "name": "Magnesium Glycinate - 120T",
    "brand": "MuscleBlaze",
    "category": "Vitamins",
    "weight": "120 Tablets",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaze-Magnesium-Glycinate-120T.webp"
  },
  {
    "id": 12,
    "name": "Omega-3 Fish Oil Gold",
    "brand": "MuscleBlaze",
    "category": "Vitamins",
    "weight": "60 Capsules",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaze-Omega-3-Fish-Oil-Gold-60C.webp"
  },
  {
    "id": 13,
    "name": "Whey Protein",
    "brand": "MuscleBlaze",
    "category": "Protein",
    "weight": "1kg",
    "price": 4500,
    "bonus": "",
    "image": "/images/muscleblaze-protein-1kg.webp"
  },
  {
    "id": 14,
    "name": "Whey Protein",
    "brand": "MuscleBlaze",
    "category": "Protein",
    "weight": "2kg",
    "price": 0,
    "bonus": "",
    "image": "/images/muscleblaze-protein-2kg.webp"
  },
  {
    "id": 15,
    "name": "Whey Protein",
    "brand": "MuscleBlaze",
    "category": "Protein",
    "weight": "4kg",
    "price": 0,
    "bonus": "",
    "image": "/images/muscleblaze-protein-4kg.webp"
  },
  {
    "id": 16,
    "name": "Pre-Workout WrathX",
    "brand": "MuscleBlaze",
    "category": "Pre Workout",
    "weight": "510g",
    "price": 0,
    "bonus": "",
    "image": "/images/MuscleBlaz-Pre-Workout-WrathX-510g.webp"
  },
  {
    "id": 17,
    "name": "Micronised Creatine Powder",
    "brand": "Optimum Nutrition",
    "category": "Creatine",
    "weight": "247.5g",
    "price": 0,
    "bonus": "",
    "image": "/images/ON-Micronised-Creatine-Powder-247.5g.webp"
  },
  {
    "id": 18,
    "name": "Micronised Creatine Powder",
    "brand": "Optimum Nutrition",
    "category": "Creatine",
    "weight": "360g",
    "price": 0,
    "bonus": "",
    "image": "/images/ON-Micronised-Creatine-Powder-360g.webp"
  },
  {
    "id": 19,
    "name": "Platinum Pre-Workout",
    "brand": "Optimum Nutrition",
    "category": "Pre Workout",
    "weight": "420g",
    "price": 0,
    "bonus": "",
    "image": "/images/ON-Platinum-Pre-Workout-Powder-420g.webp"
  },
  {
    "id": 20,
    "name": "Gold Standard Whey Protein",
    "brand": "Optimum Nutrition",
    "category": "Protein",
    "weight": "2.02kg",
    "price": 0,
    "bonus": "",
    "image": "/images/ON-Whey-Protein-Powder-2.02KG.webp"
  },
  {
    "id": 21,
    "name": "Gold Standard Whey Protein",
    "brand": "Optimum Nutrition",
    "category": "Protein",
    "weight": "2.28kg",
    "price": 0,
    "bonus": "",
    "image": "/images/ON-Whey-Protein-Powder-2.28kg.webp"
  },
  {
    "id": 22,
    "name": "Gold Standard Whey Protein",
    "brand": "Optimum Nutrition",
    "category": "Protein",
    "weight": "900g",
    "price": 0,
    "bonus": "",
    "image": "/images/ON-Whey-Protein-Powder-900g.webp"
  },
  {
    "id": 23,
    "name": "Opti-Lock Shaker",
    "brand": "Optimum Nutrition",
    "category": "Shaker",
    "weight": "N/A",
    "price": 0,
    "bonus": "",
    "image": "/images/Opti-Lock Shaker.avif"
  },
  {
    "id": 24,
    "name": "Plus Shaker",
    "brand": "Optimum Nutrition",
    "category": "Shaker",
    "weight": "600ml",
    "price": 0,
    "bonus": "",
    "image": "/images/Optimum Nutrition Plus Shaker - 600ml.avif"
  },
  {
    "id": 25,
    "name": "Smartshake Reforce Steel Shaker",
    "brand": "Optimum Nutrition",
    "category": "Shaker",
    "weight": "900ml",
    "price": 0,
    "bonus": "",
    "image": "/images/Optimum Nutrition Smartshake Reforce Steel Shaker - 900ml.webp"
  }
];
export default products;