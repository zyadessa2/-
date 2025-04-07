import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const vision = `رؤية الشركة:
أن تكون “حصاد” من الشركات الرائدة في تصدير الحاصلات الزراعية في الشرق الأوسط وأفريقيا، من خلال الالتزام بالجودة، والابتكار، وتوسيع قاعدة عملائنا حول العالم.
 `;
const mision = `رسالة الشركة:
تسعى “حصاد” إلى بناء علاقات تجارية طويلة الأمد تقوم على الثقة، من خلال تقديم منتجات زراعية طازجة وآمنة، وتحقيق أقصى درجات الرضا لعملائنا، والمساهمة في دعم الاقتصاد الزراعي المصري
`;
const About = () => {
  return (
    <section id="about" className="py-20">
        <h1 className="pb-12 text-center text-4xl font-bold text-balance text-black md:text-4xl lg:text-6xl">About Our Company</h1>
      <div className="container flex  items-center justify-center text-center">
        
        <h3 className="relative py-12  z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-auto  text-center !text-lg font-light text-balance text-emerald-100 md:text-2xl lg:text-4xl  ">
          <TextGenerateEffect words={vision} />
          <TextGenerateEffect words={mision} />
        </h3>
      </div>
    </section>
  );
};

export default About;
