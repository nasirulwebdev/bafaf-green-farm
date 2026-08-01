import { useNavigate } from 'react-router-dom';
import { servicesData } from '../../Data/Services';

export default function TrainingTechSupport() {
  const data = servicesData.training;
  const navigate = useNavigate(); // ডাইনামিক রাউটিং এর জন্য হুক

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((service) => (
        <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="relative h-48 w-full overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm w-10 h-10 flex items-center justify-center rounded-xl text-xl shadow-sm">{service.icon}</div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[56px]">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{service.desc}</p>
            </div>
          </div>
          <div className="p-5 pt-0">
            {/* onClick ইভেন্ট দিয়ে বাটনটিকে ডাইনামিকলি কানেক্ট করা হলো */}
            <button 
              onClick={() => navigate(`/services/${service.slug}`)}
              className="w-full bg-[#0b3c25] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
