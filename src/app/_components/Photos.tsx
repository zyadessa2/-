"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function Photos() {
  const images = [
    "/assets/photo_2025-04-07_18-33-45.webp", // برتقال
    "/assets/photo_2025-04-07_18-35-52.webp", // بطاطس
    "/assets/photo_2025-04-07_18-35-41.webp", // فراولة
    "/assets/photo_2025-04-07_18-35-29.webp", // بصل
    "/assets/photo_2025-04-07_18-35-22.webp", // مانجو
    "/assets/photo_2025-04-07_18-35-17.webp", // فول عريض
    "/assets/photo_2025-04-07_18-35-13.webp", // تمور
    "/assets/photo_2025-04-07_18-35-09.webp", // نباتات طبية وعطرية
    "/assets/photo_2025-04-07_18-35-04.webp", // ليمون
    "/assets/photo_2025-04-07_18-34-58.webp", // رمان
    "/assets/photo_2025-04-07_18-34-53.webp", // عنب
    "/assets/photo_2025-04-07_18-34-48.webp", // ثوم
    "/assets/photo_2025-04-07_18-34-43.webp", // خس
    "/assets/photo_2025-04-07_18-34-34.webp", // فلفل
    "/assets/photo_2025-04-07_18-34-24.webp", // فاصوليا بيضاء
    "/assets/photo_2025-04-07_18-34-17.webp", // طماطم
    "/assets/photo_2025-04-07_18-33-45.webp", // برتقال
    "/assets/photo_2025-04-07_18-35-52.webp", // بطاطس
    "/assets/photo_2025-04-07_18-35-41.webp", // فراولة
    "/assets/photo_2025-04-07_18-35-29.webp", // بصل
    "/assets/photo_2025-04-07_18-35-22.webp", // مانجو
    "/assets/photo_2025-04-07_18-35-17.webp", // فول عريض
    "/assets/photo_2025-04-07_18-35-13.webp", // تمور
    "/assets/photo_2025-04-07_18-35-09.webp", // نباتات طبية وعطرية
    "/assets/photo_2025-04-07_18-35-04.webp", // ليمون
    "/assets/photo_2025-04-07_18-34-58.webp", // رمان
    "/assets/photo_2025-04-07_18-34-53.webp", // عنب
    "/assets/photo_2025-04-07_18-34-48.webp", // ثوم
    "/assets/photo_2025-04-07_18-34-43.webp", // خس
    "/assets/photo_2025-04-07_18-34-34.webp", // فلفل
    "/assets/photo_2025-04-07_18-34-24.webp", // فاصوليا بيضاء
    "/assets/photo_2025-04-07_18-34-17.webp", // طماطم
    "/assets/photo_2025-04-07_18-33-45.webp", // برتقال
    "/assets/photo_2025-04-07_18-35-52.webp", // بطاطس
    "/assets/photo_2025-04-07_18-35-41.webp", // فراولة
    "/assets/photo_2025-04-07_18-35-29.webp", // بصل
    "/assets/photo_2025-04-07_18-35-22.webp", // مانجو
    "/assets/photo_2025-04-07_18-35-17.webp", // فول عريض
    "/assets/photo_2025-04-07_18-35-13.webp", // تمور
    "/assets/photo_2025-04-07_18-35-09.webp", // نباتات طبية وعطرية
    "/assets/photo_2025-04-07_18-35-04.webp", // ليمون
    "/assets/photo_2025-04-07_18-34-58.webp", // رمان
    "/assets/photo_2025-04-07_18-34-53.webp", // عنب
    "/assets/photo_2025-04-07_18-34-48.webp", // ثوم
    "/assets/photo_2025-04-07_18-34-43.webp", // خس
    "/assets/photo_2025-04-07_18-34-34.webp", // فلفل
    "/assets/photo_2025-04-07_18-34-24.webp", // فاصوليا بيضاء
    "/assets/photo_2025-04-07_18-34-17.webp", // طماطم
  ];
 
  return (
    <section>
        <div className="relative mx-auto mb-10 flex h-screen w-full  flex-col items-center justify-center overflow-hidden ">
        <h3 className="relative z-20 mx-auto max-w-4xl text-center text-xl font-bold text-balance leading-loose text-white md:text-2xl lg:text-4xl">
         في 
          {" "}
            <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-0.5 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[10px] backdrop-blur-sm">
            حصاد لتصدير الحاصلات الزراعيه
            </span>{" "}
             ، نصدر الجودة المصرية إلى العالم – خضروات طازجة، فواكه شهية، أعشاب عطرية، وبقوليات عالية الجودة، كلها تلبي معايير السلامة العالمية وتتجاوز توقعات عملائنا 
            
        </h3>

        {/* overlay */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
        <ThreeDMarquee
            className="pointer-events-none absolute inset-0 h-full w-full"
            images={images}
        />
        </div>
    </section>
  );
}




