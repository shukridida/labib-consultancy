import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#E6F4FF] text-[#0B1C2D] min-h-screen">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="bg-[#38B000] w-10 h-10 flex items-center justify-center rounded-full">
            <span className="text-white font-bold">LC</span>
          </div>
          <h1 className="text-xl font-bold tracking-wide">
            Labib Consultancy
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/">
            <span className="hover:text-[#38B000] cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/services">
          <span className="hover:text-[#38B000] cursor-pointer">
            Services
          </span>
          </Link>
         <Link href="/contact">
         <span className="hover:text-[#38B000] cursor-pointer">
            Contact
          </span>
        </Link>

          <button className="bg-[#38B000] text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Book Appointment
          </button>
        </div>

      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="text-center py-28 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Professional Financial & Tax Solutions You Can Trust
        </h1>

        <p className="text-[#0B1C2D]/80 max-w-2xl mx-auto mb-8 text-lg">
          Labib Consultancy provides reliable bookkeeping, payroll,
          financial reporting and tax services tailored to help
          your business grow with confidence and stability.
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/booking">
            <button className="bg-[#38B000] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Book Appointment
            </button>
          </Link>

          <Link href="/contact">
            <button className="border border-[#38B000] px-6 py-3 rounded-lg hover:bg-[#38B000] hover:text-white transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Labib Consultancy?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">

          <div className="bg-[#E6F4FF] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-3">
              Accurate & Reliable Reporting
            </h3>
            <p className="text-gray-600 text-sm">
              We ensure your financial records are precise and up to date.
            </p>
          </div>

          <div className="bg-[#E6F4FF] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-3">
              Confidential & Secure
            </h3>
            <p className="text-gray-600 text-sm">
              Your business data is handled with complete confidentiality.
            </p>
          </div>

          <div className="bg-[#E6F4FF] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-3">
              Expert Tax Planning
            </h3>
            <p className="text-gray-600 text-sm">
              We help you stay compliant while reducing tax risks legally.
            </p>
          </div>

          <div className="bg-[#E6F4FF] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-3">
              Personalized Business Support
            </h3>
            <p className="text-gray-600 text-sm">
              Tailored financial solutions for startups and SMEs.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Simplify Your Finances?
        </h2>

        <button className="bg-[#38B000] text-white px-8 py-4 rounded-lg hover:bg-green-700 transition">
          Book Your Consultation Today
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white py-10 px-6 mt-20 border-t border-[#38B000]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="bg-[#38B000] w-10 h-10 flex items-center justify-center rounded-full">
              <span className="text-white font-bold">LC</span>
            </div>
            <h2 className="text-lg font-semibold">Labib Consultancy</h2>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-10 text-sm text-gray-700">
            <div className="space-y-2">
              <p><strong>Phone:</strong> 0799996024</p>
              <p><strong>Phone:</strong> 0113405323</p>
              <p><strong>Email:</strong> info.labibconsultancy@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p>
                <strong>Instagram:</strong> 
                <a href="https://www.instagram.com/consult.labib" className="hover:text-[#38B000]" target="_blank">
                  {" "}labibconsultancy
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong> 
                <a href="https://wa.me/254799996024" className="hover:text-[#38B000]" target="_blank">
                  {" "}0799996024
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-8 text-xs">
          &copy; {new Date().getFullYear()} Labib Consultancy. All rights reserved.
        </div>
      </footer>

    </main>
  );
}