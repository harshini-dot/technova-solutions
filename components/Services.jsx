import React from "react";
import { servicesData } from "../data/data";

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Services</h2>
          <p className="text-slate-600">Tailored tech solutions designed to scale your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}