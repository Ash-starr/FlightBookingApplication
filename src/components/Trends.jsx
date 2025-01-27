import maldives from "../assets/maldives.jpg";
import bali from "../assets/bali.jpg";
import santorini from "../assets/santorini.jpg";

export default function TrendingDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Maldives",
      image: maldives,
      price: "799",
      duration: "5 Days",
    },
    {
      id: 2,
      name: "Bali",
      image: bali,
      price: "899",
      duration: "7 Days",
    },
    {
      id: 3,
      name: "Santorini",
      image: santorini,
      price: "999",
      duration: "6 Days",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary-900">
            Popular Destinations
          </h2>
          <div className="flex space-x-2">
            <button className="px-[2vw] py-[1vw] rounded-full border border-primary-700 text-primary-700 hover:bg-primary-100">
              More...
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.duration}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-4 py-1">
                  <span className="text-primary-900 font-bold">
                    ${destination.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
