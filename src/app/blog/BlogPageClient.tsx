"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import grassImg from "@/assets/grass.png";
import { getAllPosts, getAllCategories } from "@/data/blogPosts";
import type { BlogCategory } from "@/types/blog";
import { BUSINESS_CONFIG } from "@/config/business";

export default function BlogPageClient() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<"All" | BlogCategory>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="relative pt-20 md:pt-28 pb-16 md:pb-24 bg-[#0A0F0D] text-[#FDF5E6] min-h-screen">
      {/* 🌿 Background Grass Overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url(${grassImg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
          filter: "sepia(100%) hue-rotate(45deg) saturate(250%) brightness(70%)",
        }}
      />

      <div className="container relative z-10">
        {/* ── HERO / HEADER SECTION ── */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F3D06B]/10 border border-[#F3D06B]/20 mb-3">
              <Sparkles size={14} className="text-[#F3D06B]" />
              <span className="text-[#F3D06B] text-xs font-bold tracking-widest uppercase">
                Tales from the Jungle
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-2 text-[#FDF5E6] tracking-tight">
              Stories, Flavors & The Wild Side
            </h1>
            <p className="text-[#FDF5E6]/60 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Dispatches from the kitchen, nocturnal vibes, cocktail chronicles, and the untamed culture of Hudson Lane.
            </p>
            <div className="section-divider max-w-xs mx-auto mt-6 bg-[#F3D06B]/20 h-[1px]" />
          </div>
        </ScrollReveal>

        {/* ── CATEGORY FILTER PILLS ── */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#F3D06B] text-black shadow-[0_0_20px_rgba(243,208,107,0.35)] font-bold scale-105"
                    : "bg-[#0D1C15] text-[#FDF5E6]/70 hover:text-[#FDF5E6] border border-[#FDF5E6]/10 hover:border-[#F3D06B]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── BLOG CARDS GRID ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col justify-between overflow-hidden bg-[#0D1C15] border border-[#F3D06B]/25 hover:border-[#F3D06B]/70 rounded-2xl md:rounded-tl-[3.5rem] md:rounded-br-[3.5rem] md:rounded-tr-xl md:rounded-bl-xl transition-all duration-500 hover:shadow-[0_12px_35px_rgba(243,208,107,0.18)]"
              >
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative">
                  <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-[#0A0F0D]">
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C15] via-transparent to-transparent opacity-80" />

                    {/* Category Tag Badge */}
                    <div className="absolute top-4 left-4 md:top-5 md:left-6 z-10">
                      <span className="inline-block bg-[#F3D06B] text-black text-[9px] md:text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        {post.category}
                      </span>
                    </div>

                    {/* Read Time Pill */}
                    <div className="absolute bottom-4 right-4 md:bottom-5 md:right-6 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-[#0A0F0D]/80 backdrop-blur-md text-[#F3D06B] text-xs font-semibold px-3 py-1 rounded-full border border-[#F3D06B]/20">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Meta date & author */}
                    <div className="flex items-center gap-3 text-xs text-[#FDF5E6]/50 mb-3 uppercase tracking-wider font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-[#F3D06B]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.author.name}</span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#F3D06B] transition-colors">
                      <h2 className="font-display font-bold text-xl md:text-2xl text-[#FDF5E6] group-hover:text-[#F3D06B] transition-colors leading-snug mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-sm text-[#FDF5E6]/70 line-clamp-2 leading-relaxed mb-6 font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t border-[#FDF5E6]/10 flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#F3D06B] uppercase tracking-wider group-hover:text-[#FDF5E6] transition-colors"
                    >
                      <span>Read Story</span>
                      <span className="w-7 h-7 rounded-full bg-[#F3D06B]/15 flex items-center justify-center group-hover:translate-x-1.5 group-hover:bg-[#F3D06B] group-hover:text-black transition-all duration-300">
                        <ArrowRight size={13} />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── CTA BANNER IN BLOG ── */}
        <ScrollReveal>
          <div className="mt-16 md:mt-24 p-8 md:p-12 rounded-2xl md:rounded-tl-[3.5rem] md:rounded-br-[3.5rem] md:rounded-tr-xl md:rounded-bl-xl bg-gradient-to-br from-[#0D1C15] to-[#0A0F0D] border border-[#F3D06B]/30 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F3D06B]/5 rounded-full blur-3xl pointer-events-none" />
            <BookOpen size={36} className="text-[#F3D06B] mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-4xl font-bold text-[#FDF5E6] mb-3 uppercase">
              Experience the Stories in Person
            </h3>
            <p className="text-sm md:text-base text-[#FDF5E6]/70 max-w-lg mx-auto mb-6 leading-relaxed">
              Every dish, cocktail, and late-night vibe you read about is waiting for you on the 3rd floor at 2529 Hudson Lane.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3D06B] text-black px-8 py-3.5 font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(243,208,107,0.25)] uppercase tracking-wider"
              >
                Reserve Your Table
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FDF5E6]/25 text-[#FDF5E6] px-8 py-3.5 font-bold text-sm hover:bg-[#FDF5E6]/10 transition-colors uppercase tracking-wider"
              >
                Explore The Menu
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
