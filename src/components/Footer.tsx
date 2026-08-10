"use client";

import Link from "next/link";
import { Instagram, Phone, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

const Footer = () => (
  <footer className="bg-[#0A0F0D] text-[#FDF5E6] relative overflow-hidden bg-grain">
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#FDF5E6]/10" />

    <div className="container py-10 md:py-16 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

        {/* Brand Section */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-display text-3xl font-bold mb-4 tracking-tight text-[#FDF5E6]">
            Bagheera Delhi
          </h3>
          <p className="text-[#FDF5E6]/60 text-sm leading-relaxed mb-6 font-light">
            North Delhi&apos;s premier jungle-themed lounge offering an exquisite blend of North Indian, Chinese, and Continental delicacies.
          </p>
          <div className="flex gap-3">
            <a
              href={BUSINESS_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#F3D06B]/10 flex items-center justify-center text-[#F3D06B] hover:bg-[#F3D06B] hover:text-black transition-all duration-500"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-[#F3D06B]">Navigate</h4>
          <ul className="space-y-4 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/sheesha", label: "Sheesha" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="text-[#FDF5E6]/70 hover:text-[#F3D06B] transition-colors duration-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Items */}
        <div>
          <h4 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-[#F3D06B]">Signatures</h4>
          <ul className="space-y-4 text-sm text-[#FDF5E6]/70">
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Moradabadi Biryani</li>
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Stuffed Murg Tangdi</li>
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Peri Peri Tikka</li>
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Chicken Nachos</li>
            <li className="hover:text-[#F3D06B] transition-colors cursor-default">Bagheera Sangriya</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-6 text-[10px] uppercase tracking-[0.2em] text-[#F3D06B]">Contact</h4>
          <ul className="space-y-4 text-sm text-[#FDF5E6]/70">
            <li>
              <a href={BUSINESS_CONFIG.maps.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[#F3D06B] transition-colors">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#F3D06B]" />
                <span className="leading-relaxed">{BUSINESS_CONFIG.address.full}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${BUSINESS_CONFIG.contact.phone}`} className="flex items-center gap-3 hover:text-[#F3D06B] transition-colors">
                <Phone size={16} className="shrink-0 text-[#F3D06B]" />
                <span>{BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FDF5E6]/10 mt-10 md:mt-16 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-[#FDF5E6]/40 tracking-widest uppercase">
          © {new Date().getFullYear()} Bagheera Delhi
        </p>
        <p className="text-[10px] text-[#FDF5E6]/40 tracking-widest uppercase">
          Open Daily: {BUSINESS_CONFIG.hours.open} – {BUSINESS_CONFIG.hours.close}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
