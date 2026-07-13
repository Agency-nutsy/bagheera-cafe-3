"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Aggressively ensure we are at the top without layout thrashing
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    resetScroll();
    
    // Fallback for Next.js painting delay
    const t1 = setTimeout(resetScroll, 10);
    const t2 = setTimeout(resetScroll, 100);
    const t3 = setTimeout(resetScroll, 300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
