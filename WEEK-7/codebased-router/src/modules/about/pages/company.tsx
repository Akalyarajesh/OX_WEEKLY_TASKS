// export default function companyPage() {
//   return <h2 className="mt-2">About → Company Page</h2>;
// }

export default function CompanyPage() {
  return (
    <div className="p-6 space-y-16">
      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Our Company</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We build modern, scalable, and user-friendly web applications that
          help businesses grow in the digital world.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To deliver high-quality software solutions using modern technologies
            and best practices.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become a trusted technology partner for companies worldwide.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-teal-600 text-white p-6 rounded-xl"
          >
            <p className="text-3xl font-bold">{item.value}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* VALUES */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const stats = [
  { label: "Projects Completed", value: "120+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Team Members", value: "25+" },
  { label: "Years Experience", value: "5+" },
];

const values = [
  {
    title: "Quality",
    description: "We never compromise on code and design quality.",
  },
  {
    title: "Innovation",
    description: "We adopt modern tools and creative solutions.",
  },
  {
    title: "Integrity",
    description: "Honest communication and transparent work.",
  },
];
