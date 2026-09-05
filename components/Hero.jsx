import React from "react";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
          TechNova Solutions
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Empowering Businesses Through Technology
        </h1>
        <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          We help organizations build scalable digital products and innovative technology solutions.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}