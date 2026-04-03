const services = [
  {
    title: "Custom PCB Design",
    description:
      "From schematic to prototype, our engineers deliver tailored PCB layouts optimized for performance, size, and cost.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "Electronics Manufacturing",
    description:
      "State-of-the-art SMT and through-hole assembly lines delivering high-volume production with strict quality control.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "IoT Integration",
    description:
      "End-to-end IoT solutions — from sensor deployment to cloud dashboards — helping you build connected ecosystems.",
    icon: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z",
  },
  {
    title: "R&D & Prototyping",
    description:
      "Rapid prototyping and research-driven development to accelerate your ideas from concept to market-ready product.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Engineering Excellence at Every Step
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            We provide comprehensive electronics services from design and
            prototyping to full-scale manufacturing and support.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex gap-5 p-6 rounded-2xl border border-white/5 bg-gray-950 hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/10">
                <svg
                  className="w-7 h-7 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 p-8 sm:p-12 text-center">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Have an Electronics Project in Mind?
            </h3>
            <p className="text-blue-100 max-w-xl mx-auto mb-8">
              Our expert team is ready to bring your ideas to life. From concept
              to production, we&apos;re your trusted partner.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
