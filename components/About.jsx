import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-slate-50 text-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">About TechNova</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            TechNova Solutions is a forward-thinking technology company specializing in modern digital transformation and engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To deliver reliable, high-quality software solutions that solve complex real-world problems and empower enterprises globally.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be a global technology partner recognized for innovation, technical craftsmanship, and lasting client success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}