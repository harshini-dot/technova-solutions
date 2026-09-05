import React from "react";
import { testimonialData } from "../data/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">What Our Clients Say</h2>
        <p className="text-slate-600 mb-12">Trusted by industry leaders across various sectors.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((item) => (
            <div key={item.id} className="bg-slate-50 p-8 rounded-xl border border-slate-200 flex flex-col justify-between">
              <p className="text-slate-700 italic mb-6">"{item.quote}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{item.name}</h4>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}