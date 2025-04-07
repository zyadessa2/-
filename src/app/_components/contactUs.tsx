"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import { Form } from "@/components/form.tsx";

const content = [
  {
    title: "Phone",
    icon:(      <Phone className="me-1 text-lg" />    ),
    content: (
      <div className=" text-gray-600">
      <ul className="grid grid-cols-3 md:grid-cols-3 gap-3 lg:grid-cols-3 h-full w-full items-center justify-center text-black">
        <li>045 263 8818</li>
        <li>015 5465 1229</li>
        <li>010 3289 8054</li>
        <li>010 0616 8763</li>
        <li>010 1391 1732</li>
      </ul>
      </div>
    ),
  },
  {
    title: "Email",
    icon:(      <Mail className="me-1 text-lg" />    ),
    content: <p className="font-bold text-lg text-gray-600 py-3">7asad.argric.tech@gmail.com</p>,
  },
  {
    title: "Location",
    icon:(      <MapPin className="me-1 text-lg" />    ),
    content: (
      <p className="font-bold text-lg text-gray-600">
        محافظة البحيره ، مدينة النوباريه الجديده، الحى الاول ، امام مول وسط
        البلد مباشرة{" "}
      </p>
    ),
  },
];

const ContactUs = () => {
  return (
    <section id="contactUs">
      <h1 className="pb-12 text-center text-4xl font-bold text-balance text-black md:text-4xl lg:text-6xl">
        Contact Us
      </h1>

      <div className="container mx-auto">
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center mx-auto items-center">
          {content.map((card) => (
              <Card key={card.title}>
                <CardHeader>
                  <CardTitle className="flex align-middle ">{card.icon} {card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>{card.content}</p>
                </CardContent>
              </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-10 justify-center items-center mx-auto">
          <Form/>
          <iframe
              title="حصاد لتصدير الحاصلات الزراعيه"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.657779763076!2d30.06679070000001!3d30.671763799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145f5401d6bd6f49%3A0x654e900b7801154!2zQW4gTnViYXJpeWFoLCDZgtiz2YUg2LrYsdioINin2YTZhtmI2KjYp9ix2YrYqdiMINmF2K3Yp9mB2LjYqSDYp9mE2KjYrdmK2LHYqSA1NzE0MzA3!5e0!3m2!1sar!2seg!4v1744042175834!5m2!1sar!2seg"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
