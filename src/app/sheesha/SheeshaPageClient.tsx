"use client";

import { useState, useEffect, useRef } from "react";
import LottieLib from "lottie-react";
import hangingPotAnimation from "@/assets/hanging_pot.json";
import grassImg from "@/assets/grass.png";
import catAnimation from "@/assets/cat.json";

const Lottie = (LottieLib as any).default ?? LottieLib;

type SheeshaItem = {
  name: string;
  desc?: string;
  price?: number;
};
type SheeshaSection = { title?: string; items: SheeshaItem[] };
type SheeshaCategory = {
  id: string;
  category: string;
  emoji: string;
  columns?: string[];
  sections: SheeshaSection[];
};

const sheeshaData: SheeshaCategory[] = [
  // ── FLAVOURS ──
  {
    id: "fruity-flavours",
    category: "Fruity Flavours",
    emoji: "🍓",
    sections: [
      {
        items: [
          { name: "DOUBLE APPLE", desc: "Classic blend of sweet red and green apple." },
          { name: "STRAWBERRY", desc: "Sweet, juicy and delicious strawberry." },
          { name: "MANGO", desc: "Tropical mango perfection." },
          { name: "BLUEBERRY", desc: "Rich and tangy blueberry aroma." },
          { name: "WATERMELON", desc: "Juicy and refreshing watermelon." },
          { name: "PINEAPPLE", desc: "Sweet and tangy pineapple." },
          { name: "GRAPE", desc: "Sweet and bold grape flavour." },
          { name: "ORANGE", desc: "Citrusy and refreshing orange flavour." },
          { name: "KIWI", desc: "Sweet and tangy kiwi blast." },
          { name: "LITCHI", desc: "Sweet and refreshing litchi flavour." },
          { name: "GUAVA", desc: "Tropical guava goodness." },
        ],
      },
    ],
  },
  {
    id: "mint-flavours",
    category: "Mint Flavours",
    emoji: "🌿",
    sections: [
      {
        items: [
          { name: "MINT", desc: "Pure, fresh and cooling mint." },
          { name: "LEMON MINT", desc: "Zesty lemon with cool mint." },
          { name: "SPEARMINT", desc: "Strong and crisp spearmint." },
          { name: "ICE MINT", desc: "Extra cool mint sensation." },
          { name: "CUCUMBER MINT", desc: "Cool cucumber with mint freshness." },
          { name: "WATERMELON MINT", desc: "Refreshing watermelon with cool mint." },
          { name: "CITRUS MINT", desc: "Lemon, orange & lime with mint." },
          { name: "TULSI", desc: "Herbal blend of tulsi and mint." },
        ],
      },
    ],
  },
  {
    id: "special-unique",
    category: "Special & Unique",
    emoji: "🌹",
    sections: [
      {
        items: [
          { name: "ROSE", desc: "Romantic rose aroma for a relaxing session." },
          { name: "GUTKHA", desc: "Authentic gutkha flavour." },
          { name: "BUBBLEGUM", desc: "Fun and sweet bubblegum flavour." },
          { name: "CHOCOLATE", desc: "Rich and creamy chocolate flavour." },
          { name: "VANILLA", desc: "Smooth and sweet vanilla delight." },
          { name: "COCONUT", desc: "Tropical coconut bliss." },
          { name: "COFFEE", desc: "Strong and bold coffee flavour." },
          { name: "BLACKBERRY", desc: "Rich and tangy blackberry flavour." },
        ],
      },
    ],
  },
  {
    id: "fusion-flavours",
    category: "Fusion Flavours",
    emoji: "🍹",
    sections: [
      {
        items: [
          { name: "LOVE 66", desc: "Double Apple + Mint" },
          { name: "HURRICANE", desc: "Mango + Pineapple" },
          { name: "TROPICAL STORM", desc: "Guava + Mango + Mint" },
          { name: "BLUE OCEAN", desc: "Blueberry + Mint" },
          { name: "WATERMELON CRUSH", desc: "Watermelon + Mint" },
          { name: "CITRUS PUNCH", desc: "Orange + Lemon + Mint" },
          { name: "BERRY BLAST", desc: "Blueberry + Strawberry + Ice Mint" },
          { name: "PINK LADY", desc: "Rose + Litchi" },
          { name: "MINTY FRESH", desc: "Spearmint + Ice Mint" },
          { name: "PAN FLING", desc: "Pan Masala + Mint" },
          { name: "CHOCO MINT", desc: "Chocolate + Mint" },
          { name: "GRAPE MINT", desc: "Grape + Mint" },
          { name: "COLA MINT", desc: "Cola + Mint" },
          { name: "HAWAIIAN MIX", desc: "Pineapple + Coconut + Mint" },
        ],
      },
    ],
  },
  {
    id: "signature-series",
    category: "Signature Series",
    emoji: "👑",
    sections: [
      {
        items: [
          { name: "TROPIC VIBES", desc: "Mango + Guava + Pineapple" },
          { name: "RAINBOW", desc: "Watermelon + Blueberry + Grape" },
          { name: "SWEET ESCAPE", desc: "Strawberry + Passion Fruit + Vanilla" },
          { name: "ARCTIC BLAST", desc: "Ice Mint + Blueberry + Lemon" },
          { name: "SUNSET", desc: "Peach + Orange + Pineapple" },
          { name: "VELVET DREAM", desc: "Rose + Vanilla + Litchi" },
          { name: "DESERT KING", desc: "Paan Masala + Kahwa + Rose" },
          { name: "KING'S CHOICE", desc: "Double Apple + Pan Raas + Mint" },
          { name: "MIDNIGHT MAGIC", desc: "Blueberry + Chocolate + Mint" },
          { name: "FUSION DELIGHT", desc: "Coconut + Pineapple + Vanilla" },
          { name: "ROYAL TOUCH", desc: "Hazelnut + Chocolate + Vanilla" },
        ],
      },
    ],
  },
  // ── HOOKAH SERIES (PRICED) ──
  {
    id: "hookah-series",
    category: "Hookah Series & Blends",
    emoji: "🪔",
    sections: [
      {
        items: [
          { name: "CLASSIC SOUL", desc: "Crafted with classic, essential flavours.", price: 1499 },
          { name: "RUSSIAN SOUL", desc: "Crafted with premium imported flavours.", price: 2599 },
          { name: "KING SOUL", desc: "Crafted with premium imported flavours.", price: 3599 },
          { name: "FLYING SOUL", desc: "Crafted with premium imported flavours.", price: 3999 },
          { name: "DIAMOND SOUL", desc: "Crafted with premium imported flavours.", price: 4999 },
        ],
      },
    ],
  },
  // ── BASE UPGRADES (PRICED) ──
  {
    id: "base-upgrades",
    category: "Base Upgrades",
    emoji: "🧊",
    sections: [
      {
        items: [
          {
            name: "ICE BASE",
            desc: "Crushed crystal ice chamber for an intensely chilled, crisp throat hit.",
            price: 499, // ⚠️ Source PDF showed "4,99" — confirm before going live
          },
          {
            name: "MIX FRUIT BASE",
            desc: "Freshly cut seasonal fruits added inside the base water to naturally sweeten every puff.",
            price: 999, // ⚠️ Source PDF showed "9,99" — confirm before going live
          },
          {
            name: "RED BULL BASE",
            desc: "Energy drink infusion creates a super dense, buzzing, and sweet aromatic smoke.",
            price: 1299,
          },
          {
            name: "VODKA + GIN BASE",
            desc: "Dual premium spirits blend in the base bowl for a hard-hitting, cocktail-style strong kick.",
            price: 1499,
          },
          {
            name: "JACKER BASE",
            desc: "Our heaviest signature compound liquor base, crafted exclusively for true enthusiasts.",
            price: 1999,
          },
        ],
      },
    ],
  },
];

export default function SheeshaPageClient() {
  const [activeCategory, setActiveCategory] = useState(sheeshaData[0].id);
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
              const scrollLeft =
                (activeButton as HTMLElement).offsetLeft -
                container.offsetWidth / 2 +
                (activeButton as HTMLElement).offsetWidth / 2;
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
      className="pt-[64px] md:pt-[80px] pb-12 md:pb-20 min-h-screen select-none relative bg-[#0A0F0D]"
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
      <nav className="fixed top-[64px] md:top-[80px] left-0 right-0 z-30 bg-[#0A0F0D]/95 backdrop-blur-md border-b-2 border-[#F3D06B]/20 py-2 md:py-4 shadow-2xl">
        <div className="absolute top-full left-2 md:left-8 w-12 md:w-20 z-0 origin-top opacity-90 pointer-events-none hidden md:block">
          <Lottie animationData={hangingPotAnimation} loop={true} />
        </div>
        <div className="absolute top-full right-2 md:right-8 w-12 md:w-20 z-0 origin-top opacity-90 pointer-events-none hidden md:block">
          <Lottie animationData={hangingPotAnimation} loop={true} />
        </div>
        <div className="container px-4 relative z-10 mask-fade-edges">
          <div
            ref={scrollContainerRef}
            className="flex flex-row gap-2 md:gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-1 md:pb-2"
          >
            {sheeshaData.map((cat) => (
              <button
                key={cat.id}
                data-id={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-full text-[11px] md:text-[13px] font-black uppercase transition-all flex-shrink-0 snap-start flex items-center gap-1.5 md:gap-3 border-2 ${
                  activeCategory === cat.id
                    ? "bg-[#F3D06B] text-black border-[#F3D06B] shadow-[0_0_15px_rgba(243,208,107,0.4)] scale-105"
                    : "bg-[#FDF5E6]/5 text-[#FDF5E6]/60 border-transparent hover:bg-[#FDF5E6]/10 hover:text-[#FDF5E6]"
                }`}
              >
                <span className="text-base md:text-xl">{cat.emoji}</span>
                <span>{cat.category}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <div className="pt-24 md:pt-40 pb-2 md:pb-4 text-center relative z-10">
        <h1 className="text-3xl md:text-7xl font-display font-black text-[#FDF5E6] uppercase tracking-tighter">
          Sheesha Menu
        </h1>
        <p className="mt-3 md:mt-4 text-[#FDF5E6]/60 text-sm md:text-base max-w-xl mx-auto px-4">
          Choose your flavour, then pick your hookah blend and any base upgrade — pricing is per hookah, not per flavour.
        </p>
      </div>

      <div className="container relative mt-12 z-10">
        <main className="w-full">
          <div className="space-y-16 md:space-y-32">
            {sheeshaData.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                ref={(el) => {
                  sectionRefs.current[cat.id] = el;
                }}
                className="space-y-12 scroll-mt-[200px]"
              >
                <div className="flex items-center gap-4 md:gap-6 border-l-4 border-[#F3D06B] pl-4 md:pl-6">
                  <span className="text-3xl md:text-5xl">{cat.emoji}</span>
                  <h2 className="text-2xl md:text-5xl font-display font-black uppercase text-[#FDF5E6] tracking-tight">
                    {cat.category}
                  </h2>
                </div>

                {cat.sections &&
                  cat.sections.map((section, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-[#0D1C15]/80 p-4 md:p-14 rounded-2xl md:rounded-[3.5rem] border border-[#FDF5E6]/10 shadow-2xl backdrop-blur-sm relative"
                    >
                      <div className="revolving-panther hidden md:block">
                        <Lottie animationData={catAnimation} loop={true} />
                      </div>

                      {section.title && (
                        <h3
                          className={`text-[10px] md:text-[11px] font-black uppercase mb-6 md:mb-10 flex items-center gap-3 ${
                            section.title.toLowerCase().includes("non-veg")
                              ? "text-red-400"
                              : section.title.toLowerCase().includes("veg")
                              ? "text-green-400"
                              : "text-[#F3D06B]"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full animate-pulse ${
                              section.title.toLowerCase().includes("non-veg")
                                ? "bg-red-400"
                                : section.title.toLowerCase().includes("veg")
                                ? "bg-green-400"
                                : "bg-[#F3D06B]"
                            }`}
                          />{" "}
                          {section.title} Selection
                        </h3>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10">
                        {section.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex justify-between border-b border-[#FDF5E6]/10 pb-4 md:pb-6 text-[#FDF5E6] group transition-colors hover:border-[#F3D06B]/30 relative z-10"
                          >
                            <div className="flex-[3] pr-6">
                              <h4 className="font-bold text-xs md:text-lg group-hover:text-[#F3D06B] transition-colors">
                                {item.name}
                              </h4>
                              {item.desc && (
                                <p className="text-[10px] md:text-xs text-[#FDF5E6]/50 italic mt-2 font-light leading-relaxed">
                                  {item.desc}
                                </p>
                              )}
                            </div>
                            {item.price !== undefined && (
                              <span className="font-black text-[#F3D06B] text-xs md:text-lg tabular-nums flex-shrink-0 flex-[1] text-right">
                                ₹{item.price.toLocaleString("en-IN")}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
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
