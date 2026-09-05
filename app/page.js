import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TechNova Solutions | Empowering Businesses Through Technology",
  description: "We help organizations build scalable digital products and innovative technology solutions.",
  openGraph: {
    title: "TechNova Solutions",
    description: "Building scalable digital products and technology solutions.",
    url: "https://technova-solutions.vercel.app",
    siteName: "TechNova Solutions",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Blog />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}