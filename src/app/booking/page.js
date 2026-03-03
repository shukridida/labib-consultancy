 import Link from "next/link";
export default function Booking() {
  return (
    <main className="bg-[#E6F4FF] text-[#0B1C2D] min-h-screen py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-12">
        Book a Consultation
      </h1>

      <div className="bg-white max-w-3xl mx-auto p-10 rounded-xl shadow-md space-y-6">

        <input 
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg"
        />

        <input 
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg"
        />

        <textarea 
          placeholder="Describe your needs..."
          className="w-full border p-3 rounded-lg"
          rows="4"
        />
        <Link href="/submit booking">
        <button className="bg-[#38B000] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition w-full">
          Submit Booking
        </button>
       </Link>
      </div>

    </main>
  );
}