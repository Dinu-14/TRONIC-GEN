export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated circuit background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 50 40 M 50 60 L 50 100" stroke="#2563EB" strokeWidth="0.5" fill="none" />
              <path d="M 0 50 L 40 50 M 60 50 L 100 50" stroke="#2563EB" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="3" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="1" fill="#3B82F6" />
              <rect x="45" y="20" width="10" height="6" rx="1" fill="none" stroke="#1D4ED8" strokeWidth="0.5" />
              <rect x="20" y="45" width="6" height="10" rx="1" fill="none" stroke="#1D4ED8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black/60 to-black" />

      {/* Glowing orb effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Leading Electronics Innovation
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Powering the Future
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            with Electronics
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
          From cutting-edge circuit boards to smart IoT devices, Tronicgen delivers
          premium electronic solutions for businesses and consumers worldwide.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-3.5 text-base font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 text-base font-semibold border border-white/20 text-white rounded-xl hover:bg-white/5 transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Products" },
            { value: "50+", label: "Countries" },
            { value: "10K+", label: "Clients" },
            { value: "15+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-gray-600 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
