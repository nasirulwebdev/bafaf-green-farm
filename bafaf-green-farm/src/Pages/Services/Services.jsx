import { servicesData } from '../../Data/Services';
import ServicesComponent from '../../Components/Services/Services';

export default function Services() {
  const { hero } = servicesData;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ১. হিরো ব্যানার সেকশন */}
      <div 
        className="relative h-[250px] md:h-[350px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(11, 60, 37, 0.8), rgba(11, 60, 37, 0.7)), url(${hero.bgImage})` }}
      >
        <div className="z-10 px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide uppercase mb-3">{hero.title}</h1>
          <p className="text-emerald-100 text-sm md:text-lg font-medium">{hero.subtitle}</p>
        </div>
      </div>

      {/* ২. ইন্টারেক্টিভ ট্যাব এবং ডাটা গ্রিড কম্পোনেন্ট */}
      <ServicesComponent />

      {/* ৩. এক্সপার্ট অ্যাডভাইস কল-টু-অ্যাকশন ব্যানার */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-[#1b6743] to-emerald-800 text-white p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase">Need Expert Advice for Your Farm?</h2>
            <p className="text-emerald-100 text-sm md:text-base">Get personalized consultancy from certified fisheries and agro experts to double your yield.</p>
          </div>
          <button className="bg-white text-[#0b3c25] px-6 py-3.5 rounded-xl font-bold hover:bg-emerald-50 transition-colors whitespace-nowrap shadow-md hover:scale-105 active:scale-95 duration-200">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
