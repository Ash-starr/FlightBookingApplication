export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white">
      <div className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div>
            <h3 className="text-2xl w-[20vw] font-bold mb-4">SkyWings</h3>
            <p className="text-primary-500 text-sm">
              Your trusted partner for unforgettable journeys across the globe.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-300">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-300">
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Customer Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-primary-300 text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-primary-100 text-primary-900 placeholder-primary-100 flex-1"
              />
              <button className="px-4 py-2 bg-primary-200 rounded-lg hover:bg-primary-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-300 mt-8 pt-8 text-center text-primary-100">
          <p>
            &copy; {new Date().getFullYear()} SkyWings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
