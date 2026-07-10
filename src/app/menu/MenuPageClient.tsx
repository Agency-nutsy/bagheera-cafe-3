"use client";

import { useState, useEffect, useRef } from "react";
import LottieLib from "lottie-react";
import hangingPotAnimation from "@/assets/hanging_pot.json";
import grassImg from "@/assets/grass.png";
import catAnimation from "@/assets/cat.json";

const Lottie = (LottieLib as any).default ?? LottieLib;

type MenuItem = {
  name: string;
  desc?: string;
  price?: string | number;
  prices?: (string | number)[];
};
type MenuSection = { title?: string; items: MenuItem[] };
type MenuCategory = {
  id: string;
  category: string;
  emoji: string;
  columns?: string[];
  sections: MenuSection[];
};

const menuData: MenuCategory[] = [
  // ── FOOD MENU ──
  {
    id: "small-platters", category: "Small Platters", emoji: "🧆",
    sections: [
      { title: "Veg", items: [
        { name: "CHEESE CORN BALLS", desc: "Grated cheese crush corn with balls in mayo pesto dip", price: 389 },
        { name: "NACHOS WITH CHEESE", desc: "Nachos with salsa and cheese", price: 279 },
        { name: "FRENCH FRIES", price: 349 }, { name: "PERI-PERI FRENCH FRIES", price: 379 },
        { name: "HUMMUS PITA BREAD", price: 349 }, { name: "HUMMUS BBQ", price: 449 },
        { name: "GARLIC BREAD WITH CHEESE", price: 349 },
      ]},
      { title: "Non-Veg", items: [
        { name: "CHICKEN NUGGETS", price: 599 }, { name: "HUMMUS BBQ CHICKEN", price: 499 },
      ]},
    ],
  },
  {
    id: "momos", category: "Momos", emoji: "🥟",
    columns: ["Veg", "Non-Veg"],
    sections: [{ items: [
      { name: "DIM SIM MOMOS", prices: [319, 419] }, { name: "FRIED MOMOS", prices: [319, 419] },
      { name: "CRISPY MOMOS", prices: [349, 449] }, { name: "TANDOORI MOMOS", prices: [379, 489] },
    ]}],
  },
  {
    id: "pasta", category: "Pasta", emoji: "🍝",
    columns: ["Veg", "Non-Veg"],
    sections: [{ items: [
      { name: "ALFREDO PASTA", prices: [349, 499] }, { name: "ARRABIATA PASTA", prices: [349, 499] },
      { name: "MIX SAUCE PASTA", prices: [389, 484] }, { name: "SPAGHETTI PASTA", prices: [349, 499] },
      { name: "MAKHNI PASTA", prices: [349, 449] }, { name: "TANDOORI SAUCE PASTA", prices: [369, 469] },
    ]}],
  },
  {
    id: "platters", category: "Platters", emoji: "🍱",
    columns: ["Veg", "Non-Veg"],
    sections: [{ items: [
      { name: "TANDOORI PLATTER", prices: [799, 999] }, { name: "CHINESE PLATTER", prices: [799, 999] },
    ]}],
  },
  {
    id: "salad", category: "Salad", emoji: "🥗",
    columns: ["Veg", "Non-Veg"],
    sections: [{ items: [
      { name: "ORIENTAL SALAD", desc: "Veg: Cucumber, tomato, paneer, bell peppers | Non-Veg: add boiled chicken", prices: [299, 349] },
      { name: "MIX FRUIT SALAD", desc: "Veg: Apple, pomegranate, lettuce, walnut | Non-Veg: add boiled chicken", prices: [299, 349] },
      { name: "GREEK SALAD", prices: [299, 349] },
      { name: "MIX FRUIT PLATTER", prices: [999, "-"] },
    ]}],
  },
  {
    id: "noodles", category: "Noodles", emoji: "🍜",
    columns: ["Veg", "Non-Veg"],
    sections: [{ items: [
      { name: "NOODLES", prices: [389, 489] }, { name: "HAKKA NOODLES", prices: [399, 499] },
      { name: "CHILLI GARLIC NOODLES", prices: [399, 499] }, { name: "SINGAPORE NOODLES", prices: [419, 519] },
      { name: "SCHEZWAN NOODLES", prices: [399, 499] }, { name: "BUTTER FRIED NOODLES", prices: [399, 499] },
    ]}],
  },
  {
    id: "rice", category: "Rice", emoji: "🍚",
    columns: ["Veg", "Egg", "Chicken"],
    sections: [{ items: [
      { name: "STEAM RICE", prices: [249, "-", "-"] }, { name: "JEERA RICE", prices: [269, "-", "-"] },
      { name: "MIX VEG PULAO", prices: [279, "-", "-"] }, { name: "BIRYANI", prices: [349, 369, 399] },
      { name: "FRIED RICE", prices: [249, 359, 389] },
    ]}],
  },
  {
    id: "sizzlers", category: "Sizzlers", emoji: "💨",
    columns: ["Veg", "Non-Veg"],
    sections: [{ items: [
      { name: "COTTAGE CHEESE SIZZLER", desc: "Veg: Wok tossed noodles, burnt garlic vegetables, masala fries", prices: [419, 549] },
      { name: "PERI PERI SIZZLER", desc: "Veg: Crumble fried cottage cheese, chilli rice, sautéed veg, fries", prices: [419, 549] },
      { name: "BBQ SIZZLER", prices: [439, 559] },
    ]}],
  },
  {
    id: "burgers", category: "Burgers", emoji: "🍔",
    columns: ["Veg", "Non-Veg"],
    sections: [{ items: [
      { name: "BURGER WITH FRIES", prices: [249, 339] }, { name: "CHEESE BURGER WITH FRIES", prices: [299, 359] },
    ]}],
  },
  {
    id: "sandwich", category: "Sandwich", emoji: "🥪",
    sections: [{ items: [
      { name: "VEG GRILLED SANDWICH", price: 279 }, { name: "GRILLED PANEER SANDWICH", price: 299 },
      { name: "VEG GRILLED CHEESE SANDWICH", price: 299 }, { name: "GRILLED CHICKEN SANDWICH", price: 349 },
    ]}],
  },
  {
    id: "veg-pizza", category: "Veg Pizza", emoji: "🍕",
    sections: [{ title: "Veg Pizza", items: [
      { name: "VEG FARM FRESH PIZZA", price: 449 }, { name: "PANEER MAKHANI PIZZA", price: 469 },
      { name: "CLASSIC MARGHERITA PIZZA", price: 399 }, { name: "VEG MOMOS VEG PIZZA", price: 499 },
      { name: "CHINA GATE PIZZA", price: 499 }, { name: "CHILLI PANEER PIZZA", price: 499 },
      { name: "PANEER TIKKA PIZZA", price: 499 }, { name: "LOVERS PIZZA", price: 479 },
    ]}],
  },
  {
    id: "non-veg-pizza", category: "Non-Veg Pizza", emoji: "🍕",
    sections: [{ title: "Non-Veg Pizza", items: [
      { name: "PERI-PERI SPICED CHICKEN PIZZA", price: 599 }, { name: "CHICKEN TIKKA PIZZA", price: 599 },
      { name: "BUTTER CHICKEN PIZZA", price: 599 }, { name: "CHILLI CHICKEN PIZZA", price: 599 },
      { name: "BBQ PIZZA", price: 599 },
    ]}],
  },
  {
    id: "chinese-starters", category: "Chinese Starters", emoji: "🥢",
    sections: [
      { title: "Veg", items: [
        { name: "VEG SPRING ROLL", price: 399 }, { name: "VEG DRAGON ROLL", price: 419 },
        { name: "CIGAR ROLL", price: 419 }, { name: "CHILLI POTATO", price: 399 },
        { name: "HONEY CHILLI POTATO", price: 419 }, { name: "VEG MANCHURIAN DRY", price: 399 },
        { name: "VEG MANCHURIAN GRAVY", price: 399 }, { name: "CHILLI PANEER DRY", price: 399 },
        { name: "CHILLI PANEER GRAVY", price: 419 }, { name: "CRISPY PANEER", price: 399 },
        { name: "CHILLI CHAAP", price: 419 }, { name: "CHILLI MUSHROOM", price: 399 },
        { name: "PANEER 65", price: 399 }, { name: "CRISPY CORN", price: 399 },
        { name: "CRISPY VEG SALT & PEPPER", price: 399 }, { name: "MADAGASCAR SPL STARTER", price: 449 },
      ]},
      { title: "Non-Veg", items: [
        { name: "CHICKEN LOLLIPOP", price: 599 }, { name: "CHILLI CHICKEN DRY", price: 579 },
        { name: "CHILLI CHICKEN GRAVY", price: 589 }, { name: "DRUMS OF HEAVEN", price: 599 },
        { name: "CRISPY CHICKEN SALT & PEPPER", price: 599 },
      ]},
    ],
  },
  {
    id: "tandoori-starters", category: "Tandoori Starters", emoji: "🔥",
    sections: [
      { title: "Veg", items: [
        { name: "DAHI KE SHOLEY", price: 399 }, { name: "MALAI CHAAP", price: 389 },
        { name: "MASALA CHAAP", price: 399 }, { name: "PANEER TIKKA", price: 399 },
        { name: "PANEER PAHADI TIKKA", price: 399 }, { name: "AFGHANI PANEER TIKKA", price: 399 },
        { name: "VEG SEEKH KABAB", price: 389 }, { name: "HARA BHARA KABAB", price: 389 },
        { name: "MUSHROOM MASTANA", price: 399 }, { name: "DAHI KA KABAB", price: 389 },
      ]},
      { title: "Non-Veg", items: [
        { name: "TANDOORI CHICKEN", price: 599 }, { name: "CHICKEN TIKKA", price: 599 },
        { name: "CHICKEN MALAI TIKKA", price: 599 }, { name: "CHICKEN SEEKH KABAB", price: 599 },
        { name: "FISH TIKKA", price: 799 },
      ]},
    ],
  },
  {
    id: "bread", category: "Bread", emoji: "🫓",
    sections: [{ items: [
      { name: "TANDOORI ROTI", price: 20 }, { name: "TANDOORI BUTTER ROTI", price: 25 },
      { name: "LACCHA PARANTHA", price: 69 }, { name: "GREEN CHILLI PARANTHA", price: 70 },
      { name: "PLAIN NAAN", price: 35 }, { name: "BUTTER NAAN", price: 79 },
      { name: "GARLIC NAAN", price: 89 }, { name: "STUFF NAAN", price: 99 },
      { name: "STUFF PARANTHA", price: 99 },
    ]}],
  },
  {
    id: "main-course", category: "Main Course", emoji: "🍲",
    sections: [
      { title: "Veg", items: [
        { name: "DAL MAKHANI", price: 319 }, { name: "SHAHI PANEER", price: 349 },
        { name: "KADHAI PANEER", price: 389 }, { name: "PANEER LABABDAR", price: 389 },
        { name: "DAL TADKA", price: 299 }, { name: "JEERA ALOO", price: 249 },
        { name: "MUTTER MUSHROOM", price: 399 }, { name: "KADHAI MUSHROOM", price: 399 },
        { name: "MASALA CHAAP GRAVY", price: 299 }, { name: "PANEER DUMIY ADRAK", price: 399 },
        { name: "MIX VEGETABLE", price: 249 }, { name: "GOBHI MASALA ADRAKI", price: 239 },
        { name: "MUSHROOM TAKA TAK", price: 399 },
      ]},
      { title: "Non-Veg", items: [
        { name: "BUTTER CHICKEN", price: 599 }, { name: "CHICKEN LABABDAR", price: 599 },
        { name: "KADHAI CHICKEN", price: 599 }, { name: "HANDI CHICKEN", price: 599 },
        { name: "KALI MIRCH CHICKEN", price: 599 }, { name: "RARA CHICKEN", price: 599 },
        { name: "HOME STYLE CHICKEN", price: 599 },
      ]},
    ],
  },
  {
    id: "accompaniment", category: "Accompaniment", emoji: "🥗",
    sections: [{ items: [
      { name: "FRY PAPAD", price: 60 }, { name: "ROASTED PAPAD", price: 79 },
      { name: "MASALA PAPAD", price: 99 }, { name: "CHEESE MASALA PAPAD", price: 129 },
      { name: "MASALA PEANUT", price: 199 },
    ]}],
  },
  {
    id: "dessert-raita", category: "Dessert & Raita", emoji: "🍨",
    sections: [
      { title: "Dessert", items: [
        { name: "ICE CREAM", desc: "Flavors: Vanilla, Strawberry, Chocolate", price: 149 },
        { name: "GULAB JAMUN", price: 149 },
      ]},
      { title: "Raita", items: [
        { name: "BOONDI RAITA", price: 129 }, { name: "PLAIN CURD", price: 99 },
        { name: "MIX VEG RAITA", price: 149 },
      ]},
    ],
  },
  // ── BAR MENU ──
  {
    id: "beer", category: "Beer", emoji: "🍺",
    columns: ["Pint", "Can", "Bottle"],
    sections: [{ items: [
      { name: "KINGFISHER ULTRA", prices: [399, 449, 749] },
      { name: "TUBORG", prices: [309, 399, 649] },
      { name: "BEERA BOOM", prices: [309, 399, 649] },
      { name: "BIRA WHITE", prices: [349, 449, 649] },
      { name: "MEDUSA", prices: [309, 399, 649] },
      { name: "BUDWEISER LIGHT", prices: [349, 409, 649] },
      { name: "BUDWEISER MAGNUM", prices: [349, 449, 749] },
      { name: "CORONA", prices: [499, "-", "-"] },
      { name: "BREEZER (ANY FLAVOUR)", prices: [299, "-", "-"] },
    ]}],
  },
  {
    id: "vodka-imported", category: "Vodka (Imported)", emoji: "🧊",
    columns: ["30 ML", "60 ML"],
    sections: [{ items: [
      { name: "ABSOLUT", prices: [409, 699] }, { name: "GREY GOOSE", prices: [429, 709] },
    ]}],
  },
  {
    id: "vodka-domestic", category: "Vodka (Domestic)", emoji: "🍸",
    columns: ["30 ML", "60 ML"],
    sections: [{ items: [
      { name: "MAGIC MOMENTS", prices: [299, 549] }, { name: "SMIRNOFF", prices: [319, 569] },
    ]}],
  },
  {
    id: "tequila", category: "Tequila", emoji: "🍋",
    columns: ["30 ML", "60 ML"],
    sections: [{ items: [
      { name: "SAUZA GOLD", prices: [399, 699] }, { name: "SAUZA SILVER", prices: [389, 689] },
      { name: "CAMINO GOLD", prices: [399, 699] }, { name: "CAMINO SILVER", prices: [389, 689] },
    ]}],
  },
  {
    id: "liit", category: "LIIT", emoji: "🍹",
    columns: ["300 ML", "500 ML", "1000 ML"],
    sections: [{ items: [
      { name: "CLASSIC LIIT", prices: [399, 699, 1098] },
      { name: "PEACH LIIT", prices: [399, 699, 1098] },
      { name: "BLUE SEA LIIT", prices: [419, 799, 1198] },
    ]}],
  },
  {
    id: "flavoured-spirits", category: "Flavoured Spirits", emoji: "🍒",
    columns: ["30 ML", "60 ML"],
    sections: [{ items: [
      { name: "BAILEYS", prices: [399, 699] }, { name: "KAHLUA", prices: [399, 699] },
      { name: "JÄGERMEISTER", prices: [399, 699] },
    ]}],
  },
  {
    id: "wine", category: "Wine", emoji: "🍷",
    columns: ["Glass", "Bottle"],
    sections: [{ items: [
      { name: "SULA (RED / WHITE)", prices: [799, 4500] },
      { name: "JACOB'S CREEK (RED / WHITE)", prices: [799, 4500] },
    ]}],
  },
  {
    id: "gin", category: "Gin", emoji: "🌲",
    columns: ["30 ML", "60 ML"],
    sections: [{ items: [
      { name: "BEEFEATER", prices: [399, 749] }, { name: "BOMBAY SAPPHIRE", prices: [399, 749] },
      { name: "HENDRICK'S", prices: [399, 749] },
    ]}],
  },
  {
    id: "rum", category: "Rum", emoji: "🏴‍☠️",
    columns: ["30 ML", "60 ML"],
    sections: [{ items: [
      { name: "OLD MONK DARK", prices: [349, 649] }, { name: "BACARDI (WHITE / BLACK)", prices: [399, 749] },
    ]}],
  },
  {
    id: "imported-whiskey", category: "Imported Whiskey", emoji: "🥃",
    columns: ["30 ML", "60 ML"],
    sections: [{ items: [
      { name: "RED LABEL", prices: [389, 599] }, { name: "BLACK DOG", prices: [369, 599] },
      { name: "BLACK LABEL", prices: [449, 799] }, { name: "JÄGERMEISTER", prices: [449, 799] },
      { name: "CHIVAS REGAL", prices: [449, 799] }, { name: "JIM BEAM", prices: [449, 799] },
      { name: "BALLANTINE'S", prices: [349, 599] }, { name: "JACK DANIEL'S", prices: [449, 599] },
      { name: "JACK DANIEL'S HONEY", prices: [449, 599] }, { name: "ROYAL SALUTE", prices: [1299, 2499] },
      { name: "BLUE LABEL", prices: [1599, 2999] },
    ]}],
  },
  {
    id: "single-malt", category: "Single Malt", emoji: "🥃",
    columns: ["30 ML", "60 ML"],
    sections: [{ items: [
      { name: "GLENFIDDICH 12 YR.", prices: [849, 1599] }, { name: "GLENMORANGIE", prices: [809, 1499] },
      { name: "THE GLENLIVET", prices: [849, 1599] }, { name: "GLENFIDDICH 15 YR.", prices: [1099, 1999] },
    ]}],
  },
  {
    id: "madagascar-cocktails", category: "Madagascar Cocktails", emoji: "🍹",
    sections: [{ items: [
      { name: "RUSSIAN SPECIAL", desc: "Vodka 30 ml, Gin 30 ml, Tequila 15 ml", price: 799 },
      { name: "PINK LADY", desc: "Vodka 15 ml, White Rum 20 ml, Mixed Juice", price: 799 },
      { name: "ARABIAN NIGHT (MUST TRY)", desc: "Vodka 20 ml, Gin 20 ml, Egg White, Mixed Juice", price: 799 },
      { name: "WHITE RUSSIAN", desc: "Vodka 45 ml, Kahlua 15 ml", price: 799 },
    ]}],
  },
  {
    id: "classic-cocktails", category: "Classic Cocktails", emoji: "🍸",
    sections: [{ items: [
      { name: "MOJITO", price: 599 }, { name: "PINA COLADA", price: 599 },
      { name: "COSMOPOLITAN", price: 599 }, { name: "BLOODY MARY", price: 599 },
      { name: "MARTINI", price: 599 }, { name: "SEX ON THE BEACH", price: 599 },
      { name: "MARGARITA", price: 599 }, { name: "SCREWDRIVER", price: 599 },
      { name: "GIMLET", price: 599 }, { name: "MIX VODKA SHOT", price: 599 },
      { name: "FLAMING RAINBOW SHOT", price: 599 }, { name: "KAMASUTRA SHOT", price: 599 },
    ]}],
  },
  {
    id: "signature-mocktails", category: "Signature Mocktails", emoji: "🍓",
    sections: [{ items: [
      { name: "BLUE MOJITO", desc: "Mint leaves, lemon chunks, mojito syrup, blue curaçao, ice cubes, soda", price: 299 },
      { name: "BLUE GREEN TEA", desc: "Blue curaçao syrup, lemon juice, ice cubes, topped with green tea", price: 299 },
      { name: "BLUE LEMONADE", desc: "Blue curaçao syrup, lemon juice, topped with soda", price: 299 },
      { name: "BLUE ENERGY DRINK", desc: "Lemon juice, blue curaçao syrup, topped with energy drink", price: 299 },
      { name: "BLUE HEAVEN", desc: "Pineapple juice, blue curaçao syrup, lemon juice, ice cubes", price: 299 },
      { name: "HONEY LIME APPLE SODA", desc: "Honey, lemon juice, apple syrup, soda", price: 299 },
      { name: "MIXED PUNCH SODA", desc: "Strawberry syrup, orange juice, lime juice, pineapple juice, soda", price: 299 },
      { name: "COLLEGE MOJITO", desc: "Orange juice, mint leaves, soda, lemon juice, strawberry crush, ice cubes", price: 299 },
      { name: "SEX ON THE BEACH", desc: "Orange juice, cranberry juice, peach syrup, lime juice, ice cubes", price: 299 },
      { name: "VIRGIN SANGRIA", desc: "Fresh seasonal fruits, orange juice, cranberry juice, lemon juice", price: 299 },
      { name: "FRUIT PUNCH", desc: "Mixed fruit juice, strawberry crush, fresh cream", price: 299 },
      { name: "VIRGIN MOJITO", desc: "Mint leaves, lemon chunks, mojito syrup, lemon juice, soda, sprite", price: 299 },
      { name: "THE VALTON", desc: "Rose syrup, lime juice, cranberry juice, soda", price: 299 },
      { name: "VIRGIN MARY", desc: "Tomato juice, Worcestershire sauce, Tabasco sauce, salt rim, ice cubes", price: 299 },
    ]}],
  },
  {
    id: "shakes", category: "Shakes", emoji: "🥤",
    sections: [{ items: [
      { name: "VANILLA SHAKE", price: 249 }, { name: "CHOCOLATE SHAKE", price: 249 },
      { name: "OREO SHAKE", price: 249 }, { name: "KITKAT SHAKE", price: 249 },
      { name: "MANGO SHAKE", price: 249 }, { name: "PINEAPPLE SHAKE", price: 249 },
      { name: "STRAWBERRY SHAKE", price: 249 }, { name: "COLD COFFEE", price: 249 },
      { name: "MADAGASCAR SPECIAL SHAKE", price: 319 },
    ]}],
  },
  {
    id: "soft-beverages", category: "Soft Beverages", emoji: "🧊",
    sections: [{ items: [
      { name: "MINERAL WATER", price: "MRP" }, { name: "RED BULL", price: 399 },
      { name: "FRESH LIME SODA", price: 219 }, { name: "COKE PITCHER", price: 499 },
      { name: "COKE CAN", price: 149 }, { name: "COKE 750 ML BOTTLE", price: 169 },
      { name: "2 LITRE COKE", price: 399 },
    ]}],
  },
  {
    id: "smoothies", category: "Smoothies", emoji: "🍹",
    sections: [{ items: [
      { name: "PINEAPPLE SMOOTHIE", price: 299 }, { name: "MANGO SMOOTHIE", price: 299 },
      { name: "STRAWBERRY SMOOTHIE", price: 299 }, { name: "BANANA SMOOTHIE", price: 299 },
      { name: "BLACK CURRANT SMOOTHIE", price: 309 },
    ]}],
  },
];

export default function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-160px 0px -75% 0px",
      threshold: 0,
    };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveCategory(id);
            const activeButton = scrollContainerRef.current?.querySelector(`[data-id="${id}"]`);
            if (activeButton && scrollContainerRef.current) {
              const container = scrollContainerRef.current;
              const scrollLeft = (activeButton as HTMLElement).offsetLeft - container.offsetWidth / 2 + (activeButton as HTMLElement).offsetWidth / 2;
              container.scrollTo({ left: scrollLeft, behavior: "smooth" });
            }
          }
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 180;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div
      className="pt-[80px] pb-20 min-h-screen select-none relative bg-[#0A0F0D]"
      style={{ backgroundImage: "radial-gradient(circle at 50% 40%, #0D1C15 0%, #0A0F0D 100%)" }}
    >
      {/* 🌿 GRASS BACKGROUND */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url(${grassImg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
          filter: "sepia(100%) hue-rotate(45deg) saturate(250%) brightness(70%)",
        }}
      />

      <style>{`
        @keyframes pantherRunMobile {
          0%      { top: -35px; left: -35px; transform: rotate(0deg); }
          19.9%   { top: -35px; left: calc(100% - 35px); transform: rotate(0deg); }
          20%     { top: -35px; left: calc(100% - 35px); transform: rotate(90deg); }
          49.9%   { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(90deg); }
          50%     { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(180deg); }
          69.9%   { top: calc(100% - 35px); left: -35px; transform: rotate(180deg); }
          70%     { top: calc(100% - 35px); left: -35px; transform: rotate(270deg); }
          99.9%   { top: -35px; left: -35px; transform: rotate(270deg); }
          100%    { top: -35px; left: -35px; transform: rotate(0deg); }
        }
        @keyframes pantherRunDesktop {
          0%      { top: -35px; left: -35px; transform: rotate(0deg); }
          34.9%   { top: -35px; left: calc(100% - 35px); transform: rotate(0deg); }
          35%     { top: -35px; left: calc(100% - 35px); transform: rotate(90deg); }
          49.9%   { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(90deg); }
          50%     { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(180deg); }
          84.9%   { top: calc(100% - 35px); left: -35px; transform: rotate(180deg); }
          85%     { top: calc(100% - 35px); left: -35px; transform: rotate(270deg); }
          99.9%   { top: -35px; left: -35px; transform: rotate(270deg); }
          100%    { top: -35px; left: -35px; transform: rotate(0deg); }
        }
        .revolving-panther {
          position: absolute; z-index: 30; pointer-events: none;
          width: 70px; height: 70px;
          animation: pantherRunMobile 30s linear infinite;
          filter: drop-shadow(0 0 12px rgba(243,208,107,0.8)) sepia(100%) saturate(300%) hue-rotate(5deg) brightness(1.3);
        }
        @media (min-width: 768px) {
          .revolving-panther { animation: pantherRunDesktop 40s linear infinite; }
        }
      `}</style>

      {/* ── STICKY CATEGORY NAV ── */}
      <nav className="fixed top-[64px] md:top-[80px] left-0 right-0 z-30 bg-[#0A0F0D]/95 backdrop-blur-md border-b-2 border-[#F3D06B]/20 py-4 shadow-2xl">
        <div className="absolute top-full left-2 md:left-8 w-16 md:w-20 z-0 origin-top opacity-90 pointer-events-none">
          <Lottie animationData={hangingPotAnimation} loop={true} />
        </div>
        <div className="absolute top-full right-2 md:right-8 w-16 md:w-20 z-0 origin-top opacity-90 pointer-events-none">
          <Lottie animationData={hangingPotAnimation} loop={true} />
        </div>
        <div className="container px-4 relative z-10 mask-fade-edges">
          <div ref={scrollContainerRef} className="flex flex-row gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-2">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                data-id={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-6 py-3 rounded-full text-[13px] font-black uppercase transition-all flex-shrink-0 snap-start flex items-center gap-3 border-2 ${
                  activeCategory === cat.id
                    ? "bg-[#F3D06B] text-black border-[#F3D06B] shadow-[0_0_15px_rgba(243,208,107,0.4)] scale-105"
                    : "bg-[#FDF5E6]/5 text-[#FDF5E6]/60 border-transparent hover:bg-[#FDF5E6]/10 hover:text-[#FDF5E6]"
                }`}
              >
                <span className="text-xl">{cat.emoji}</span>
                <span>{cat.category}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── MENU HEADER ── */}
      <div className="pt-32 md:pt-40 pb-10 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-display font-black text-[#FDF5E6] uppercase tracking-tighter">Bagheera Menu</h1>
      </div>

      <div className="container relative mt-12 z-10">
        <main className="w-full">
          <div className="space-y-32">
            {menuData.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                ref={(el) => { sectionRefs.current[cat.id] = el; }}
                className="space-y-12 scroll-mt-[200px]"
              >
                <div className="flex items-center gap-6 border-l-4 border-[#F3D06B] pl-6">
                  <span className="text-5xl">{cat.emoji}</span>
                  <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-[#FDF5E6] tracking-tight">{cat.category}</h2>
                </div>

                {cat.sections && cat.sections.map((section, sIdx) => (
                  <div key={sIdx} className="bg-[#0D1C15]/80 p-8 md:p-14 rounded-[3.5rem] border border-[#FDF5E6]/10 shadow-2xl backdrop-blur-sm relative">
                    <div className="revolving-panther">
                      <Lottie animationData={catAnimation} loop={true} />
                    </div>

                    {section.title && (
                      <h3 className={`text-[11px] font-black uppercase mb-10 flex items-center gap-3 ${
                        section.title.toLowerCase().includes("non-veg") ? "text-red-400" :
                        section.title.toLowerCase().includes("veg") ? "text-green-400" : "text-[#F3D06B]"
                      }`}>
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          section.title.toLowerCase().includes("non-veg") ? "bg-red-400" :
                          section.title.toLowerCase().includes("veg") ? "bg-green-400" : "bg-[#F3D06B]"
                        }`} /> {section.title} Selection
                      </h3>
                    )}

                    {cat.columns && cat.columns.length > 0 ? (
                      <div className="w-full">
                        <div className="flex justify-between border-b-2 border-[#F3D06B]/50 pb-4 mb-6">
                          <div className="flex-[2] font-black text-[#F3D06B] tracking-wider text-sm md:text-base uppercase">Item</div>
                          <div className="flex-[3] flex justify-end gap-2 md:gap-8">
                            {cat.columns.map((col, i) => (
                              <div key={i} className="w-16 md:w-24 text-right font-black text-[#F3D06B] tracking-wider text-xs md:text-sm uppercase">{col}</div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-6">
                          {section.items.map((item, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-[#FDF5E6]/10 pb-4 text-[#FDF5E6] group hover:border-[#F3D06B]/30 transition-colors">
                              <div className="flex-[2] pr-2 md:pr-4">
                                <h4 className="font-bold text-sm md:text-lg group-hover:text-[#F3D06B] transition-colors">{item.name}</h4>
                                {item.desc && <p className="text-[10px] md:text-xs text-[#FDF5E6]/50 italic mt-1 font-light leading-relaxed">{item.desc}</p>}
                              </div>
                              <div className="flex-[3] flex justify-end gap-2 md:gap-8">
                                {item.prices?.map((price, pi) => (
                                  <div key={pi} className="w-16 md:w-24 text-right font-black text-[#F3D06B] text-sm md:text-lg tabular-nums">
                                    {price === "-" ? "-" : (typeof price === "number" ? `₹${price}` : price)}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex justify-between border-b border-[#FDF5E6]/10 pb-6 text-[#FDF5E6] group transition-colors hover:border-[#F3D06B]/30 relative z-10">
                            <div className="flex-[3] pr-6">
                              <h4 className="font-bold text-sm md:text-lg group-hover:text-[#F3D06B] transition-colors">{item.name}</h4>
                              {item.desc && <p className="text-[10px] md:text-xs text-[#FDF5E6]/50 italic mt-2 font-light leading-relaxed">{item.desc}</p>}
                            </div>
                            <span className="font-black text-[#F3D06B] text-sm md:text-lg tabular-nums flex-shrink-0 flex-[1] text-right">
                              {item.price === "MRP" ? "MRP" : `₹${item.price}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
