"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-slate-900">
      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-500">Get In Touch</h2>
        <p className="text-slate-400 text-center mb-8">Send us a message and our team will get back to you.</p>

        {submitted && (
          <div className="bg-green-900/50 border border-green-500 text-green-300 px-4 py-3 rounded mb-6 text-center">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full bg-slate-900 text-white border-0 border-b border-slate-700 rounded-none px-0 py-2 focus:outline-none focus:border-blue-500" 
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full bg-slate-900 text-white border-0 border-b border-slate-700 rounded-none px-0 py-2 focus:outline-none focus:border-blue-500" 
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full bg-slate-900 text-white border-0 border-b border-slate-700 rounded-none px-0 py-2 focus:outline-none focus:border-blue-500" 
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
            <textarea 
              name="message" 
              rows="4" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full bg-slate-900 text-white border-0 border-b border-slate-700 rounded-none px-0 py-2 focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}