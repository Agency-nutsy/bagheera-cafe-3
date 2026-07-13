"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { UtensilsCrossed, Music, ArrowRight, MapPin, Phone, Sparkles, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import LottieLib, { useLottie } from "lottie-react";
import { BUSINESS_CONFIG } from "@/config/business";

// ── Asset imports (Next.js bundles these automatically) ──
import earthAnimation from "@/assets/earth.json";
import hangingPotAnimation from "@/assets/hanging_pot.json";
import grassImg from "@/assets/grass.png";
import heroSlide1 from "@/assets/hero 1.webp";
import heroSlide2 from "@/assets/hero 2.webp";
import heroSlide3 from "@/assets/hero 3.webp";
import tikkaImg from "@/assets/peri peri.jpg";
import nachosImg from "@/assets/nachos.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import drinkImg from "@/assets/sangriya.jpg";
import gallery1 from "@/assets/full.webp";
import gallery2 from "@/assets/tikka.webp";

const Lottie = (LottieLib as any).default ?? LottieLib;

const heroSlides = [heroSlide1, heroSlide2, heroSlide3];

const specialties = [
  { name: "Peri Peri Tikka", price: "₹380", tag: "Signature", img: tikkaImg },
  { name: "Chicken Nachos", price: "₹320", tag: "Lounge Fav", img: nachosImg },
  { name: "Yakhni Biryani", price: "₹450", tag: "Must Try", img: biryaniImg },
  { name: "Bagheera Sangriya", price: "₹240", tag: "Classic", img: drinkImg },
];

export default function HomePageClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = React.useRef(0);

  const lottieOptions = { animationData: earthAnimation, loop: true };
  const { View: EarthAnimation1 } = useLottie(lottieOptions);
  const { View: EarthAnimation2 } = useLottie(lottieOptions);
  const { View: EarthAnimation3 } = useLottie(lottieOptions);
  const { View: EarthAnimationStats } = useLottie(lottieOptions);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrentSlide((prev) => (diff > 0 ? (prev + 1) % heroSlides.length : (prev - 1 + heroSlides.length) % heroSlides.length));
    }
  };

  return (
    <div className="relative bg-[#0A0F0D] text-[#FDF5E6] min-h-screen selection:bg-[#F3D06B] selection:text-black">

      {/* 🌿 GLOBAL REPEATING TINTED GRASS BACKGROUND */}
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
        @keyframes revolveAroundMobile {
          0% { top: -25px; left: -25px; }
          25% { top: -25px; left: calc(100% - 25px); }
          50% { top: calc(100% - 25px); left: calc(100% - 25px); }
          75% { top: calc(100% - 25px); left: -25px; }
          100% { top: -25px; left: -25px; }
        }
        @keyframes revolveAroundDesktop {
          0% { top: -25px; left: -25px; }
          42% { top: -25px; left: calc(100% - 25px); }
          50% { top: calc(100% - 25px); left: calc(100% - 25px); }
          92% { top: calc(100% - 25px); left: -25px; }
          100% { top: -25px; left: -25px; }
        }
        .revolving-lottie {
          position: absolute; z-index: 30; pointer-events: none;
          width: 50px; height: 50px;
          animation: revolveAroundMobile 35s linear infinite;
        }
        @media (min-width: 768px) {
          .revolving-lottie { animation: revolveAroundDesktop 35s linear infinite; }
        }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section
        className="relative z-10 h-[70svh] md:h-screen w-full overflow-hidden bg-black"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0F0D]/90 via-[#0A0F0D]/40 to-[#0A0F0D]/30 md:bg-[#0A0F0D]/60" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide]}
              alt="Bagheera Cafe & Lounge"
              fill
              className="object-cover object-[75%_center] md:object-center brightness-[0.7] contrast-[1.2]"
              priority={currentSlide === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-20 container h-full flex items-center pt-[25svh] md:pt-0">
          <div className="max-w-2xl px-2 sm:px-0">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-[#FDF5E6] mb-4 md:mb-6 uppercase tracking-tighter"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            >Bagheera</motion.h1>
            <motion.p
              className="text-base md:text-xl text-[#FDF5E6]/80 mb-6 md:mb-8 font-display italic"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            >Step Into The Wild Side of Luxury</motion.p>
            <motion.div
              className="flex flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/menu" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F3D06B] px-6 py-3 md:px-8 md:py-4 font-bold text-black text-sm md:text-base hover:bg-[#FDF5E6] transition-all shadow-[0_0_20px_rgba(243,208,107,0.3)]">
                Explore Menu <ArrowRight size={18} />
              </Link>
              <a href={`tel:+91${BUSINESS_CONFIG.contact.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FDF5E6]/30 px-6 py-3 md:px-8 md:py-4 font-bold text-[#FDF5E6] text-sm md:text-base hover:bg-[#FDF5E6]/10 transition-all shadow-xl">
                <Phone size={18} /> Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative -mt-10 md:-mt-12 z-30 container pb-8 px-4">
        <ScrollReveal>
          <div className="relative">
            <div className="revolving-lottie hidden md:block">{EarthAnimationStats}</div>
            <div className="bg-[#0D1C15] rounded-2xl md:rounded-tl-[4rem] md:rounded-br-[4rem] md:rounded-tr-xl md:rounded-bl-xl shadow-2xl border border-[#FDF5E6]/10 p-4 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 backdrop-blur-md relative z-10">
              {[
                { value: "10k+", label: "Guests Served" },
                { value: "40+", label: "Signature Drinks" },
                { value: "4.5★", label: "Google Rating" },
                { value: "1 AM", label: "Open Late" },
              ].map((stat) => (
                <div key={stat.label} className="text-center border-r last:border-0 border-[#FDF5E6]/10">
                  <p className="text-xl md:text-3xl font-display font-bold text-[#F3D06B]">{stat.value}</p>
                  <p className="text-[9px] md:text-[11px] uppercase font-bold text-[#FDF5E6]/60 mt-1 tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── EXPERIENCE SECTION ── */}
      <section className="relative py-12 md:py-20 bg-transparent">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[#F3D06B] text-xs font-black tracking-widest uppercase">The Experience</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-[#FDF5E6]">Why Bagheera?</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { icon: Sparkles, title: "Jungle Theme", desc: "North Delhi's only forest-inspired lounge with a mysterious aesthetic." },
              { icon: Music, title: "Live Vibes", desc: "From late-night DJ sets to acoustic evenings, the music never stops." },
              { icon: UtensilsCrossed, title: "Gourmet Kitchen", desc: "Authentic North Indian, Chinese, and Italian delicacies." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="relative p-6 md:p-10 rounded-2xl md:rounded-tl-[4rem] md:rounded-br-[4rem] md:rounded-tr-xl md:rounded-bl-xl bg-[#0D1C15] border border-[#FDF5E6]/10 text-center group hover:shadow-[0_8px_30px_rgba(243,208,107,0.1)] transition-all duration-300">
                  <div className="revolving-lottie hidden md:block" style={{ animationDelay: `${i * -5.3}s` }}>
                    {i === 0 ? EarthAnimation1 : i === 1 ? EarthAnimation2 : EarthAnimation3}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-[#F3D06B]/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#F3D06B]/20 transition-colors">
                    <f.icon size={24} className="text-[#F3D06B]" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-[#FDF5E6] uppercase tracking-wide">{f.title}</h3>
                  <p className="text-[#FDF5E6]/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="relative py-12 md:py-20 bg-[#0D1C15]/50">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-8 md:mb-12 text-center uppercase text-[#FDF5E6]">Chef&apos;s Picks</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {specialties.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="flex flex-col items-center group cursor-pointer relative">
                  <div className="w-full relative z-10 overflow-hidden bg-[#0D1C15] border border-[#F3D06B]/40 group-hover:shadow-[0_8px_30px_rgba(243,208,107,0.25)] transition-all duration-300 rounded-xl md:rounded-tl-[4rem] md:rounded-br-[4rem] md:rounded-tr-xl md:rounded-bl-xl">
                    <div className="relative h-32 md:h-52 overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-2 left-3 md:top-4 md:left-6 bg-[#F3D06B] text-black text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-wider shadow-lg">{s.tag}</div>
                    </div>
                    <div className="p-3 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1 gap-0.5">
                        <h3 className="font-display font-bold text-xs md:text-lg text-[#FDF5E6] leading-tight">{s.name}</h3>
                        <span className="text-xs md:text-sm font-black text-[#F3D06B]">{s.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-16 md:w-24 -mt-2 relative z-0 origin-top transition-transform duration-500 group-hover:rotate-6 opacity-90">
                    <Lottie animationData={hangingPotAnimation} loop={true} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="relative py-12 md:py-24 overflow-hidden bg-transparent">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative mt-8 md:mt-0">
              <Image
                src={gallery1}
                alt="Bagheera Ambiance"
                width={600} height={400}
                className="w-full h-64 md:h-96 object-cover shadow-[0_8px_30px_rgba(243,208,107,0.15)] border border-[#F3D06B]/40 rounded-2xl md:rounded-tl-[4rem] md:rounded-br-[4rem] md:rounded-tr-xl md:rounded-bl-xl transition-transform duration-500 hover:scale-[1.02]"
              />
              <Image
                src={gallery2}
                alt="Lounge vibes"
                width={200} height={200}
                className="absolute -bottom-8 -right-4 md:-right-8 w-28 h-28 md:w-48 md:h-48 object-cover border-4 border-[#0A0F0D] shadow-2xl rounded-2xl md:rounded-tl-[2.5rem] md:rounded-br-[2.5rem] md:rounded-tr-lg md:rounded-bl-lg"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="md:pl-8 mt-6 md:mt-0">
              <span className="text-[#F3D06B] text-xs font-black uppercase tracking-widest">Our Story</span>
              <h2 className="text-2xl md:text-5xl font-display font-bold mt-3 mb-4 md:mb-6 uppercase text-[#FDF5E6]">Step Into The Wild</h2>
              <p className="text-[#FDF5E6]/70 text-sm leading-relaxed mb-6 md:mb-8 text-justify italic">Born from a love for adventure, Bagheera brings the mystery of the jungle to Hudson Lane. We provide an escape from the city heat with signature flavors, exotic cocktails, and an electric lounge experience designed for the untamed.</p>
              <Link href="/menu" className="group inline-flex items-center gap-3 text-[#F3D06B] font-bold text-sm hover:text-[#FDF5E6] transition-colors uppercase tracking-widest">
                Explore The Full Menu
                <span className="w-8 h-8 rounded-full bg-[#F3D06B]/10 group-hover:bg-[#FDF5E6]/10 flex items-center justify-center transition-colors">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── LOCATION SECTION ── */}
      <section className="relative py-12 md:py-24 container bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-6 md:space-y-10">
              <div>
                <span className="text-[#F3D06B] text-xs font-black tracking-widest uppercase">Find Us</span>
                <h2 className="text-2xl md:text-5xl font-display font-bold uppercase tracking-tighter text-[#FDF5E6] mt-2">Visit The Jungle</h2>
              </div>
              <div className="space-y-4">
                  <a href={BUSINESS_CONFIG.maps.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl md:rounded-tl-[2.5rem] md:rounded-br-[2.5rem] md:rounded-tr-lg md:rounded-bl-lg bg-[#0D1C15] border border-[#F3D06B]/20 hover:border-[#F3D06B]/60 transition-colors shadow-lg relative z-10">
                    <MapPin size={24} className="text-[#F3D06B]" />
                    <div><h4 className="font-bold text-[9px] uppercase tracking-widest text-[#F3D06B] mb-1">Locate Us</h4><p className="text-xs text-[#FDF5E6]/80 line-clamp-1">{BUSINESS_CONFIG.address.full}</p></div>
                  </a>
                  <a href={`tel:${BUSINESS_CONFIG.contact.phone}`} className="group flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl md:rounded-tl-[2.5rem] md:rounded-br-[2.5rem] md:rounded-tr-lg md:rounded-bl-lg bg-[#0D1C15] border border-[#F3D06B]/20 hover:border-[#F3D06B]/60 transition-colors shadow-lg relative z-10">
                    <Phone size={20} className="text-[#F3D06B]" />
                    <div><h4 className="font-bold text-[9px] uppercase tracking-widest text-[#F3D06B] mb-1">Call Now</h4><p className="text-xs text-[#FDF5E6]/80">{BUSINESS_CONFIG.contact.phoneDisplay}</p></div>
                  </a>
                  <a href={BUSINESS_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl md:rounded-tl-[2.5rem] md:rounded-br-[2.5rem] md:rounded-tr-lg md:rounded-bl-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg relative z-10">
                    <Instagram size={24} />
                    <div><h4 className="font-bold text-[9px] uppercase opacity-80 mb-1">Follow Us</h4><p className="font-bold text-sm">@bagheera</p></div>
                  </a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="rounded-2xl md:rounded-tl-[4rem] md:rounded-br-[4rem] md:rounded-tr-xl md:rounded-bl-xl overflow-hidden border-4 border-[#0D1C15] h-[300px] md:h-[500px] bg-[#0D1C15] relative z-10">
              <iframe
                src={BUSINESS_CONFIG.maps.embed}
                width="100%" height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%)" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bagheera Maps"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-14 md:py-24 bg-[#0D1C15]/80 overflow-hidden text-center backdrop-blur-sm">
        <ScrollReveal>
          <h2 className="text-2xl md:text-5xl font-display font-bold text-[#FDF5E6] mb-4 md:mb-6 uppercase tracking-tight px-4">Hungry for the Wild?</h2>
          <p className="text-[#FDF5E6]/60 mb-8 md:mb-10 text-sm md:text-base max-w-lg mx-auto leading-relaxed px-4">Visit us in Hudson Lane or book your table now for an unforgettable experience.</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-6">
            <a href={`tel:+91${BUSINESS_CONFIG.contact.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3D06B] text-black px-8 py-4 md:px-10 md:py-5 font-bold text-sm md:text-base hover:scale-105 transition-transform shadow-[0_0_20px_rgba(243,208,107,0.2)]">Call for Reservations</a>
            <Link href="/menu" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FDF5E6]/20 text-[#FDF5E6] px-8 py-4 md:px-10 md:py-5 font-bold text-sm md:text-base hover:bg-[#FDF5E6]/5 transition-colors">Explore The Menu</Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
