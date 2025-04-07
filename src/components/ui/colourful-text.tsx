"use client";
import React from "react";
import { motion } from "motion/react";

// دالة للكشف عن النص العربي
const isArabic = (text: string) => {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
};

export default function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // تحديد اتجاه النص بناءً على اللغة
  const direction = isArabic(text) ? "rtl" : "ltr";



  return (
    <motion.div
      dir={direction}
      initial={{ y: 0 }}
      animate={{
        color: currentColors[count % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {text}
    </motion.div>
  );
}
