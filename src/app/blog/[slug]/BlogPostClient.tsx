"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  Check,
  Quote,
  Sparkles,
  Phone,
  Utensils,
  ChevronRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import grassImg from "@/assets/grass.png";
import type { BlogPost } from "@/types/blog";
import { BUSINESS_CONFIG } from "@/config/business";

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareText = `${post.title} — Stories from Bagheera Cafe & Lounge`;
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://${BUSINESS_CONFIG.domain}/blog/${post.slug}`;

  return (
    <div className="relative pt-20 md:pt-28 pb-16 md:pb-24 bg-[#0A0F0D] text-[#FDF5E6] min-h-screen">
      {/* ── Reading Progress Bar (Fixed beneath top navbar) ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#F3D06B] origin-left z-50 shadow-[0_0_12px_#F3D06B]"
        style={{ scaleX }}
      />

      {/* 🌿 Background Texture */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url(${grassImg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
          filter: "sepia(100%) hue-rotate(45deg) saturate(250%) brightness(70%)",
        }}
      />

      <div className="container relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* ── BREADCRUMBS ── */}
        <div className="mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#FDF5E6]/50">
            <Link href="/" className="hover:text-[#F3D06B] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#F3D06B]/50" />
            <Link href="/blog" className="hover:text-[#F3D06B] transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} className="text-[#F3D06B]/50" />
            <span className="text-[#F3D06B] truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {post.title}
            </span>
          </nav>
        </div>

        {/* ── ARTICLE HEADER ── */}
        <ScrollReveal>
          <header className="mb-8 md:mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-[#F3D06B] text-black text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#FDF5E6]/60 bg-[#0D1C15] px-3 py-1 rounded-full border border-[#FDF5E6]/10">
                <Clock size={13} className="text-[#F3D06B]" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#FDF5E6]/60 bg-[#0D1C15] px-3 py-1 rounded-full border border-[#FDF5E6]/10">
                <Calendar size={13} className="text-[#F3D06B]" />
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#FDF5E6] tracking-tight leading-[1.15] mb-4">
              {post.title}
            </h1>

            <p className="text-[#FDF5E6]/75 text-base sm:text-lg md:text-xl font-light italic leading-relaxed mb-6">
              {post.subtitle}
            </p>

            {/* Author & Share Bar */}
            <div className="pt-6 border-t border-[#FDF5E6]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#F3D06B]/20 border border-[#F3D06B]/40 flex items-center justify-center font-bold text-[#F3D06B] text-sm">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FDF5E6]">{post.author.name}</h4>
                  <p className="text-xs text-[#FDF5E6]/50">{post.author.role}</p>
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#FDF5E6]/40 mr-1 hidden sm:inline">
                  Share:
                </span>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `${shareText} - ${shareUrl}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#0D1C15] border border-[#FDF5E6]/15 hover:border-[#25D366] text-[#FDF5E6]/80 hover:text-[#25D366] flex items-center justify-center transition-colors text-xs font-bold"
                >
                  WA
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    shareText
                  )}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="w-9 h-9 rounded-full bg-[#0D1C15] border border-[#FDF5E6]/15 hover:border-[#F3D06B] text-[#FDF5E6]/80 hover:text-[#F3D06B] flex items-center justify-center transition-colors text-xs font-bold"
                >
                  𝕏
                </a>
                <button
                  onClick={handleCopyLink}
                  aria-label="Copy article link"
                  className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full bg-[#0D1C15] border border-[#FDF5E6]/15 hover:border-[#F3D06B] text-xs text-[#FDF5E6]/80 hover:text-[#F3D06B] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#F3D06B]" />
                      <span className="text-[#F3D06B] font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={14} />
                      <span>Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </header>
        </ScrollReveal>

        {/* ── FEATURED HERO IMAGE ── */}
        <ScrollReveal>
          <div className="relative mb-10 md:mb-14">
            <div className="relative w-full h-72 sm:h-96 md:h-[480px] rounded-2xl md:rounded-tl-[3.5rem] md:rounded-br-[3.5rem] md:rounded-tr-xl md:rounded-bl-xl overflow-hidden border border-[#F3D06B]/30 shadow-[0_12px_40px_rgba(0,0,0,0.7)] bg-[#0D1C15]">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/60 via-transparent to-transparent pointer-events-none" />
            </div>
            {post.featuredImageAlt && (
              <p className="text-xs text-[#FDF5E6]/50 italic mt-3 text-center px-4">
                {post.featuredImageAlt}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* ── ARTICLE BODY CONTENT ── */}
        <article className="prose prose-invert max-w-none mb-16 md:mb-20">
          {post.sections.map((section, idx) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p
                    key={idx}
                    className="text-[#FDF5E6]/85 text-base sm:text-lg leading-relaxed md:leading-loose mb-6 font-light"
                  >
                    {section.text}
                  </p>
                );

              case "heading2":
                return (
                  <div key={idx} className="mt-12 mb-6">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDF5E6] tracking-tight flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F3D06B] shrink-0" />
                      {section.text}
                    </h2>
                    <div className="w-16 h-[2px] bg-[#F3D06B]/40 mt-2" />
                  </div>
                );

              case "heading3":
                return (
                  <h3
                    key={idx}
                    className="font-display text-xl sm:text-2xl font-bold text-[#F3D06B] tracking-wide mt-8 mb-4"
                  >
                    {section.text}
                  </h3>
                );

              case "quote":
                return (
                  <blockquote
                    key={idx}
                    className="relative my-8 md:my-10 p-6 sm:p-8 rounded-r-2xl bg-gradient-to-r from-[#0D1C15] to-[#0A0F0D] border-l-4 border-[#F3D06B] shadow-xl"
                  >
                    <Quote className="text-[#F3D06B]/30 absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 -scale-x-100" />
                    <p className="font-display text-lg sm:text-xl md:text-2xl text-[#FDF5E6] italic leading-relaxed mb-3 relative z-10">
                      &ldquo;{section.text}&rdquo;
                    </p>
                    {section.author && (
                      <cite className="block text-xs uppercase tracking-widest font-bold text-[#F3D06B] not-italic relative z-10">
                        — {section.author}
                      </cite>
                    )}
                  </blockquote>
                );

              case "image":
                if (!section.image) return null;
                return (
                  <figure key={idx} className="my-10 md:my-12">
                    <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl md:rounded-tl-[3rem] md:rounded-br-[3rem] md:rounded-tr-xl md:rounded-bl-xl overflow-hidden border border-[#F3D06B]/25 bg-[#0D1C15] shadow-2xl group">
                      <Image
                        src={section.image}
                        alt={section.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 896px"
                      />
                    </div>
                    {section.caption && (
                      <figcaption className="text-xs text-[#FDF5E6]/60 italic mt-3 text-center px-4">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "callout":
                return (
                  <aside
                    key={idx}
                    className="my-8 md:my-10 p-6 sm:p-8 rounded-2xl md:rounded-tl-[2.5rem] md:rounded-br-[2.5rem] md:rounded-tr-lg md:rounded-bl-lg bg-[#0D1C15] border border-[#F3D06B]/40 shadow-xl relative overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F3D06B]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#F3D06B]">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        {section.calloutTitle && (
                          <h4 className="font-display font-bold text-[#F3D06B] text-base sm:text-lg mb-2 uppercase tracking-wide">
                            {section.calloutTitle}
                          </h4>
                        )}
                        <p className="text-sm sm:text-base text-[#FDF5E6]/85 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    </div>
                  </aside>
                );

              case "list":
                return (
                  <ul key={idx} className="my-6 space-y-3">
                    {section.items?.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 text-[#FDF5E6]/80 text-base leading-relaxed"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#F3D06B] shrink-0 mt-2.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );

              default:
                return null;
            }
          })}
        </article>

        {/* ── FOOTER SHARE & BACK LINK ── */}
        <div className="py-8 border-y border-[#FDF5E6]/10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F3D06B] uppercase tracking-wider hover:text-[#FDF5E6] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Stories</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#FDF5E6]/50 font-medium">
              Share Article:
            </span>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `${shareText} - ${shareUrl}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#0D1C15] border border-[#FDF5E6]/15 hover:border-[#25D366] text-xs font-bold text-[#FDF5E6] hover:text-[#25D366] transition-colors flex items-center gap-1.5"
            >
              WhatsApp
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                shareText
              )}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#0D1C15] border border-[#FDF5E6]/15 hover:border-[#F3D06B] text-xs font-bold text-[#FDF5E6] hover:text-[#F3D06B] transition-colors flex items-center gap-1.5"
            >
              Post on 𝕏
            </a>
          </div>
        </div>

        {/* ── RELATED POSTS ── */}
        {relatedPosts.length > 0 && (
          <section className="mb-16 md:mb-20">
            <div className="text-center mb-10">
              <span className="text-[#F3D06B] text-xs font-black uppercase tracking-widest">
                Keep Exploring
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#FDF5E6] mt-2">
                More Stories From The Jungle
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <article
                  key={rel.slug}
                  className="group flex flex-col justify-between overflow-hidden bg-[#0D1C15] border border-[#F3D06B]/20 hover:border-[#F3D06B]/60 rounded-xl md:rounded-tl-[2.5rem] md:rounded-br-[2.5rem] md:rounded-tr-lg md:rounded-bl-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(243,208,107,0.15)]"
                >
                  <Link href={`/blog/${rel.slug}`} className="block relative h-48 overflow-hidden">
                    <Image
                      src={rel.featuredImage}
                      alt={rel.featuredImageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#F3D06B] text-black text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {rel.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="font-display font-bold text-base md:text-lg text-[#FDF5E6] group-hover:text-[#F3D06B] transition-colors line-clamp-2 mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[#FDF5E6]/60 line-clamp-2 mb-4">{rel.excerpt}</p>
                    </div>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F3D06B] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Story</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── SIGNATURE "HUNGRY FOR THE WILD?" CTA ── */}
        <section className="relative py-12 md:py-16 px-6 md:px-12 rounded-2xl md:rounded-tl-[3.5rem] md:rounded-br-[3.5rem] md:rounded-tr-xl md:rounded-bl-xl bg-[#0D1C15]/90 border border-[#F3D06B]/30 overflow-hidden text-center backdrop-blur-sm shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3D06B]/5 rounded-full blur-3xl pointer-events-none" />
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-[#FDF5E6] mb-3 md:mb-4 uppercase tracking-tight">
              Hungry for the Wild?
            </h2>
            <p className="text-[#FDF5E6]/60 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Visit us in Hudson Lane or book your table now for an unforgettable dining & lounge experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3D06B] text-black px-8 py-3.5 md:px-10 md:py-4 font-bold text-sm md:text-base hover:scale-105 transition-transform shadow-[0_0_20px_rgba(243,208,107,0.25)] uppercase tracking-wider"
              >
                <Phone size={16} />
                <span>Call for Reservations</span>
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FDF5E6]/20 text-[#FDF5E6] px-8 py-3.5 md:px-10 md:py-4 font-bold text-sm md:text-base hover:bg-[#FDF5E6]/5 transition-colors uppercase tracking-wider"
              >
                <Utensils size={16} />
                <span>Explore The Menu</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
