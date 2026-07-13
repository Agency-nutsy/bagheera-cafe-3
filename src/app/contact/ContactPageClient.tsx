"use client";

import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import LottieLib from "lottie-react";
import grassImg from "@/assets/grass.png";
import catAnimation from "@/assets/cat.json";
import { BUSINESS_CONFIG } from "@/config/business";

const Lottie = (LottieLib as any).default ?? LottieLib;

export default function ContactPageClient() {
  return (
    <div className="relative pt-20 md:pt-28 pb-12 md:pb-20 bg-[#0A0F0D] text-[#FDF5E6] min-h-screen">
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
        @keyframes pantherRunLargeStack {
          0%      { top: -35px; left: -35px; transform: rotate(0deg); }
          25%     { top: -35px; left: calc(100% - 35px); transform: rotate(0deg); }
          26%     { top: -35px; left: calc(100% - 35px); transform: rotate(90deg); }
          50%     { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(90deg); }
          51%     { top: calc(100% - 35px); left: calc(100% - 35px); transform: rotate(180deg); }
          75%     { top: calc(100% - 35px); left: -35px; transform: rotate(180deg); }
          76%     { top: calc(100% - 35px); left: -35px; transform: rotate(270deg); }
          99%     { top: -35px; left: -35px; transform: rotate(270deg); }
          100%    { top: -35px; left: -35px; transform: rotate(0deg); }
        }
        .large-stack-panther {
          position: absolute; z-index: 20; pointer-events: none;
          width: 70px; height: 70px;
          animation: pantherRunLargeStack 35s linear infinite;
          filter: drop-shadow(0 0 10px rgba(243,208,107,0.8)) sepia(100%) saturate(300%) hue-rotate(5deg) brightness(1.3);
        }
      `}</style>

      <div className="container max-w-4xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[#F3D06B] text-sm font-black tracking-widest uppercase">Get in Touch</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 text-[#FDF5E6]">Contact Bagheera</h1>
            <p className="text-[#FDF5E6]/70 mt-3 max-w-md mx-auto">Ready to step into the jungle? Book your table or reach out for event inquiries.</p>
            <div className="section-divider max-w-xs mx-auto mt-6 bg-[#F3D06B]/20" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 max-w-lg mx-auto mb-10 md:mb-12">
            <motion.a href={`tel:${BUSINESS_CONFIG.contact.phone}`} className="flex items-center justify-center gap-2 md:gap-3 rounded-2xl bg-[#F3D06B] text-black px-4 py-4 md:px-6 md:py-5 font-bold text-sm md:text-lg shadow-[0_0_15px_rgba(243,208,107,0.3)] hover:bg-[#FDF5E6] transition-all" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}><Phone size={20} /> Call Now</motion.a>
            <motion.a href={BUSINESS_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 md:gap-3 rounded-2xl bg-[#25D366] text-white px-4 py-4 md:px-6 md:py-5 font-bold text-sm md:text-lg shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}><MessageCircle size={20} /> WhatsApp</motion.a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Info Cards */}
          <ScrollReveal direction="left">
            <div className="relative p-1">
              <div className="large-stack-panther hidden md:block">
                <Lottie animationData={catAnimation} loop={true} />
              </div>
              <div className="space-y-4 relative z-10">
                <a href={BUSINESS_CONFIG.maps.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-[#0D1C15] border border-[#FDF5E6]/10 hover:border-[#F3D06B]/50 transition-colors">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#F3D06B]/10 flex items-center justify-center shrink-0"><MapPin size={18} className="text-[#F3D06B]" /></div>
                  <div><h4 className="font-bold text-[#FDF5E6] text-sm mb-1">Location</h4><p className="text-sm text-[#FDF5E6]/70 leading-relaxed">{BUSINESS_CONFIG.address.full}</p></div>
                </a>
                <a href={`tel:${BUSINESS_CONFIG.contact.phone}`} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-[#0D1C15] border border-[#FDF5E6]/10 hover:border-[#F3D06B]/50 transition-colors">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#F3D06B]/10 flex items-center justify-center shrink-0"><Phone size={18} className="text-[#F3D06B]" /></div>
                  <div><h4 className="font-bold text-[#FDF5E6] text-sm mb-1">Direct Line</h4><p className="text-sm text-[#FDF5E6]/70 font-medium">{BUSINESS_CONFIG.contact.phoneDisplay}</p></div>
                </a>
                <div className="p-4 md:p-5 rounded-2xl bg-[#0D1C15] border border-[#FDF5E6]/10">
                  <h4 className="font-bold text-[#FDF5E6] text-sm mb-3">Join the Pack</h4>
                  <div className="flex gap-3 relative z-30">
                    <a href={BUSINESS_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#F3D06B]/10 flex items-center justify-center text-[#F3D06B] hover:bg-[#F3D06B] hover:text-black transition-all duration-300"><Instagram size={18} /></a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-2xl overflow-hidden border-4 border-[#0D1C15] bg-[#0D1C15] h-60 md:h-full min-h-[280px] md:min-h-[350px] shadow-2xl group relative">
              <iframe src={BUSINESS_CONFIG.maps.embed} width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)" }} allowFullScreen={true} loading="lazy" title="Bagheera Lounge Location" className="opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
