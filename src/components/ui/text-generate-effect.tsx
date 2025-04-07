"use client";

import { motion } from "framer-motion"; // استيراد motion فقط
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }} // الحالة الابتدائية
            whileInView={{ opacity: 1, filter: filter ? "blur(0px)" : "none" }} // الحالة لما العنصر يدخل في الرؤية
            transition={{
              duration: duration || 1, // المدة
              delay: idx * 0.2, // تأخير متدرج بين الكلمات (0.2 ثانية لكل كلمة)
            }}
            viewport={{ once: true, amount: 0.5 }} // التحكم في سلوك الـ viewport
            className="text-[#868686] "
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} dir="rtl">
      <div className="mt-4">
        <div className="text-[#ACACAC] text-xl lg:text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};