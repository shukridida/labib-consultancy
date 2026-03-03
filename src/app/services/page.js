export default function Services() {
  return (
    <main className="bg-[#E6F4FF] text-[#0B1C2D] min-h-screen py-20 px-6">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4 text-lg">Bookkeeping</h3>
          <p className="text-gray-600 text-sm">
            Accurate financial record keeping to help your business stay organized.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4 text-lg">Payroll Management</h3>
          <p className="text-gray-600 text-sm">
            Reliable payroll services ensuring compliance and accuracy.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4 text-lg">Tax Planning</h3>
          <p className="text-gray-600 text-sm">
            Strategic tax solutions to minimize risk and maximize savings.
          </p>
        </div>

      </div>
    </main>
  );
}