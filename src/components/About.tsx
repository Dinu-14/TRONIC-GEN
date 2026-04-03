export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – illustration / visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-transparent blur-2xl" />

              {/* Visual card */}
              <div className="relative w-full h-full rounded-3xl border border-white/10 bg-gray-900 overflow-hidden flex items-center justify-center">
                <svg
                  className="w-3/4 h-3/4 opacity-80"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Circuit board pattern */}
                  <rect x="50" y="50" width="100" height="100" rx="8" stroke="#2563EB" strokeWidth="2" />
                  <rect x="70" y="70" width="60" height="60" rx="4" fill="#1E3A5F" stroke="#3B82F6" strokeWidth="1" />

                  {/* Inner chip */}
                  <rect x="85" y="85" width="30" height="30" rx="2" fill="#2563EB" />
                  <circle cx="100" cy="100" r="8" fill="#60A5FA" />
                  <circle cx="100" cy="100" r="3" fill="#BFDBFE" />

                  {/* Traces */}
                  <line x1="70" y1="85" x2="50" y2="85" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="70" y1="100" x2="50" y2="100" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="70" y1="115" x2="50" y2="115" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="130" y1="85" x2="150" y2="85" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="130" y1="100" x2="150" y2="100" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="130" y1="115" x2="150" y2="115" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="85" y1="70" x2="85" y2="50" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="100" y1="70" x2="100" y2="50" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="115" y1="70" x2="115" y2="50" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="85" y1="130" x2="85" y2="150" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="100" y1="130" x2="100" y2="150" stroke="#3B82F6" strokeWidth="1.5" />
                  <line x1="115" y1="130" x2="115" y2="150" stroke="#3B82F6" strokeWidth="1.5" />

                  {/* Outer traces to edge */}
                  <line x1="50" y1="85" x2="20" y2="85" stroke="#1D4ED8" strokeWidth="1" opacity="0.5" />
                  <line x1="50" y1="115" x2="20" y2="115" stroke="#1D4ED8" strokeWidth="1" opacity="0.5" />
                  <line x1="150" y1="85" x2="180" y2="85" stroke="#1D4ED8" strokeWidth="1" opacity="0.5" />
                  <line x1="150" y1="115" x2="180" y2="115" stroke="#1D4ED8" strokeWidth="1" opacity="0.5" />

                  {/* Corner accents */}
                  <circle cx="50" cy="50" r="3" fill="#3B82F6" />
                  <circle cx="150" cy="50" r="3" fill="#3B82F6" />
                  <circle cx="50" cy="150" r="3" fill="#3B82F6" />
                  <circle cx="150" cy="150" r="3" fill="#3B82F6" />

                  {/* Animated pulse ring */}
                  <circle cx="100" cy="100" r="35" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="100" cy="100" r="55" stroke="#3B82F6" strokeWidth="0.5" opacity="0.15" />
                </svg>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg shadow-blue-600/30">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-blue-200">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right – content */}
          <div>
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
              About Tronicgen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white leading-tight">
              Engineering the Electronics
              <br />
              <span className="text-blue-400">That Power Tomorrow</span>
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Founded over 15 years ago, Tronicgen has grown from a small
              electronics workshop into a global leader in electronic component
              design and manufacturing. We combine deep engineering expertise with
              cutting-edge technology to create products that meet the highest
              industry standards.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Our mission is to empower businesses with reliable, innovative, and
              sustainable electronic solutions — from precision circuit boards to
              complete IoT ecosystems.
            </p>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: "Innovation", desc: "Pushing boundaries in electronics R&D" },
                { title: "Quality", desc: "ISO 9001 certified manufacturing" },
                { title: "Sustainability", desc: "Eco-friendly production processes" },
                { title: "Support", desc: "24/7 technical assistance worldwide" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-gray-900 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
