// export default function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

import { Link } from "@tanstack/react-router";

export default function HomePage() {
  return (
    <div className="p-6 space-y-16">
      {/* HERO SECTION */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Build Better Apps with Confidence
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          A modern React application using TanStack Router, TanStack Query,
          Tailwind CSS, and best practices.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/about/team"
            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Meet Our Team
          </Link>

          <Link
            to="/about/company"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-gray-800 text-white rounded-xl p-10 text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p>Explore our platform and see how we build scalable applications.</p>

        <Link
          to="/about/team"
          className="inline-block mt-3 px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100"
        >
          View Team
        </Link>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Fast Performance",
    description: "Optimized with modern tooling and smart data fetching.",
  },
  {
    title: "Scalable Architecture",
    description: "Feature-based folder structure for large projects.",
  },
  {
    title: "Developer Friendly",
    description: "TypeScript, Tailwind, and reusable components.",
  },
];
