"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        {children}
      </div>
    </>
  );
};

export default AppShell;
