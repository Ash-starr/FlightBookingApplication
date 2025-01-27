import { Plane } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-100 to-primary-300">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary-300 mix-blend-multiply opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-700 mb-6">
            Experience
            <br />
            The Magic Of Flight!
          </h1>
          <p className="text-lg md:text-xl text-primary-700/50 mb-8 max-w-2xl mx-auto">
            Discover amazing destinations and book your next adventure with ease
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-500">
                  From
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-700"
                  placeholder="Departure City"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-500">
                  To
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-200"
                  placeholder="Arrival City"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-500">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-200"
                />
              </div>
              <button className="bg-primary-700/50 text-white rounded-lg px-6 py-2 hover:bg-primary-700  transition-colors flex items-center justify-center space-x-2">
                <Plane className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
