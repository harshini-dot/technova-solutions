import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-3">TechNova Solutions</h3>
          <p className="text-sm">Empowering Businesses Through Technology.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-6 text-center text-xs">
        © {new Date().getFullYear()} TechNova Solutions. All rights reserved.
      </div>
    </footer>
  );
}