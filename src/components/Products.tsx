const products = [
  {
    title: "Smart Circuit Boards",
    description:
      "High-performance PCBs designed for IoT, automotive, and industrial applications with precision engineering.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="20" height="20" rx="3" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="11" y="11" width="10" height="10" rx="1.5" fill="#2563EB" />
        <line x1="11" y1="4" x2="11" y2="6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="4" x2="16" y2="6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="21" y1="4" x2="21" y2="6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="26" x2="11" y2="28" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="26" x2="16" y2="28" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="21" y1="26" x2="21" y2="28" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="11" x2="6" y2="11" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="16" x2="6" y2="16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="21" x2="6" y2="21" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="11" x2="28" y2="11" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="16" x2="28" y2="16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="21" x2="28" y2="21" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "IoT Sensors & Modules",
    description:
      "Reliable sensors and wireless modules for smart homes, agriculture, healthcare, and urban infrastructure.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="4" fill="#2563EB" />
        <path d="M10 22a8.5 8.5 0 0 1 0-12" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 10a8.5 8.5 0 0 1 0 12" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 26a14 14 0 0 1 0-20" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M26 6a14 14 0 0 1 0 20" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Power Management Systems",
    description:
      "Efficient power converters, inverters, and battery management solutions for renewable and industrial energy.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4L8 18h7l-1 10 10-14h-7l1-10z" fill="#2563EB" stroke="#3B82F6" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "LED & Display Solutions",
    description:
      "Custom LED modules, OLED panels, and digital signage systems with superior brightness and durability.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="16" rx="2" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="7" y="9" width="18" height="10" rx="1" fill="#2563EB" opacity="0.5" />
        <line x1="12" y1="22" x2="12" y2="26" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="22" x2="20" y2="26" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="26" x2="23" y2="26" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Embedded Controllers",
    description:
      "Microcontrollers and embedded systems for robotics, automation, and smart manufacturing.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="16" height="16" rx="2" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" fill="#2563EB" />
        <line x1="16" y1="4" x2="16" y2="8" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="28" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="16" x2="8" y2="16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="16" x2="28" y2="16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cable & Connector Systems",
    description:
      "Premium-grade connectors, cable assemblies, and wiring harnesses for telecom and automotive sectors.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 16h6M20 16h6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="12" y="10" width="8" height="12" rx="2" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="#2563EB" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Cutting-Edge Electronic Solutions
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            We design, manufacture, and deliver electronic components and systems
            that power industries across the globe.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative p-6 bg-gray-900 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 mb-4">
                  {product.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
