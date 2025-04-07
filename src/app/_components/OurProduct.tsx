"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  
  {
    title: "الخضروات (بطاطس، بصل، ثوم)",
    description:
      "في شركة حصاد لتصدير الحاصلات الزراعية، نقدم مجموعة متميزة من الخضروات عالية الجودة التي تلبي احتياجات الأسواق العالمية. تشمل خضرواتنا البطاطس الطازجة ذات الحجم المثالي والجودة العالية، والبصل الغني بالنكهة والمتوفر بألوان وأحجام مختلفة، بالإضافة إلى الثوم المصري المعروف بجودته الفائقة ومذاقه القوي. نحن نضمن أن تصل الخضروات إليك في أفضل حالاتها من حيث النضارة والتخزين، مما يجعل حصاد الخيار الأمثل لتصدير الخضروات إلى جميع أنحاء العالم.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "الفواكه (رمان، فراولة، عنب، مانجو، جوافة، موالح، وغيرها)",
    description:
      "تتخصص شركة حصاد لتصدير الحاصلات الزراعية في تقديم تشكيلة واسعة من الفواكه الطازجة التي تتميز بالجودة والمذاق الرائع. تشمل منتجاتنا الرمان ذو الحبات العصيرية، والفراولة الحمراء الطازجة، والعنب المصري المعروف بحلاوته، بالإضافة إلى المانجو والجوافة اللذين يتمتعان بشعبية كبيرة في الأسواق الدولية. كما نوفر الموالح مثل البرتقال والليمون بأنواعها المختلفة التي تتميز بالجودة العالية والنكهة المنعشة. مع حصاد، نضمن لك فواكه طازجة ومثالية للتصدير تلبي توقعات عملائك في أي مكان.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "لأعشاب العطرية (نعناع، ريحان، شبت، بقدونس، كزبرة، وغيرها)",
    description:
      "تقدم شركة حصاد لتصدير الحاصلات الزراعية مجموعة متنوعة من الأعشاب العطرية التي تضيف نكهة مميزة لأطباقك وتلبي احتياجات الأسواق العالمية. تشمل أعشابنا النعناع المنعش، والريحان ذو الرائحة العطرية الغنية، والشبت والبقدونس والكزبرة التي تُستخدم بكثرة في المطابخ العالمية. نحن نحرص على زراعة وتغليف الأعشاب بأعلى معايير الجودة لضمان نضارتها ولونها الطبيعي أثناء التصدير. اختر حصاد للحصول على أعشاب عطرية طازجة تضيف لمسة خاصة لمنتجاتك.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/8330352/pexels-photo-8330352.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "البقوليات بأنواعها",
    description:
      "في شركة حصاد لتصدير الحاصلات الزراعية، نفخر بتقديم تشكيلة واسعة من البقوليات عالية الجودة التي تُعتبر من أهم المنتجات الزراعية المصرية. تشمل منتجاتنا الفول العريض، والفاصوليا البيضاء، والعدس، والحمص، وغيرها من الأنواع التي تتميز بجودتها العالية وقيمتها الغذائية الممتازة. نحن نضمن اختيار أفضل الحبوب وفرزها بعناية لتلبية متطلبات العملاء في الأسواق الدولية. مع حصاد، يمكنك الاعتماد على بقوليات طازجة ومغذية تناسب كل احتياجاتك التجارية.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description:"",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src=""
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];
export function OurProduct() {
  return (
    <section id="ourProduct" className="w-full ">

      <StickyScroll content={content} />
    </section>
  );
}
