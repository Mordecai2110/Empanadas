
import { useState } from "react";
import { MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// Mock location data
const locations = [
  {
    id: 1,
    name: "Downtown",
    address: "123 Main Street, City Center",
    hours: "Mon-Sun: 11am - 10pm",
    phone: "(555) 123-4567",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 2,
    name: "Westside",
    address: "456 Ocean Avenue, West District",
    hours: "Mon-Sun: 11am - 9pm",
    phone: "(555) 987-6543",
    coordinates: { lat: 40.7328, lng: -74.026 },
  },
  {
    id: 3,
    name: "Eastside",
    address: "789 Park Boulevard, East Side",
    hours: "Mon-Sun: 11am - 9pm",
    phone: "(555) 456-7890",
    coordinates: { lat: 40.7228, lng: -73.986 },
  },
  {
    id: 4,
    name: "Northside",
    address: "321 Hill Road, North Quarter",
    hours: "Mon-Sun: 11am - 10pm",
    phone: "(555) 234-5678",
    coordinates: { lat: 40.7528, lng: -74.010 },
  },
];

const Locations = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Function to generate Google Maps URL with the location
  const getMapUrl = (location: typeof locations[0]) => {
    const { lat, lng } = location.coordinates;
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1621527373351!5m2!1sen!2sca`;
  };

  // Mock function to simulate map loading
  const handleMapIframeLoad = () => {
    setTimeout(() => setMapLoaded(true), 500);
  };

  return (
    <section id="locations" className="empanada-section bg-white py-20">
      <div className="empanada-container">
        <AnimatedSection>
          <h2 className="mb-2 text-center font-display text-4xl font-bold text-brand-dark md:text-5xl">
            Find Us <span className="text-brand-teal">Nearby</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-600">
            Visit one of our locations and experience our empanadas firsthand
          </p>
        </AnimatedSection>

        <div className="flex flex-col-reverse gap-8 lg:flex-row">
          {/* Left Side: Locations List */}
          <AnimatedSection className="w-full lg:w-1/3" animation="fade-in">
            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
              <h3 className="mb-4 font-display text-2xl font-bold text-brand-dark">Our Locations</h3>
              <div className="space-y-4">
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className={`location-item cursor-pointer rounded-lg border p-4 transition-all hover:border-brand-teal hover:shadow-md ${
                      activeLocation.id === location.id ? "border-brand-teal bg-white/10 shadow-md" : "border-transparent"
                    }`}
                    onClick={() => setActiveLocation(location)}
                  >
                    <h4 className="flex items-center font-semibold text-brand-dark">
                      <MapPin className="mr-2 h-4 w-4 text-brand-teal" />
                      {location.name}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">{location.address}</p>
                    <p className="mt-1 text-xs text-gray-500">{location.hours}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 rounded-md bg-white p-4 shadow-sm">
                <h4 className="font-medium text-brand-dark">{activeLocation.name}</h4>
                <p className="text-sm text-gray-600">{activeLocation.phone}</p>
                <p className="mt-2 text-xs text-gray-500">{activeLocation.hours}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${activeLocation.coordinates.lat},${activeLocation.coordinates.lng}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-brand-teal hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side: Map */}
          <AnimatedSection className="w-full lg:w-2/3" animation="fade-in-right">
            <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-200 shadow-md lg:h-[500px]">
              {/* Loading state */}
              <div className={`absolute inset-0 z-10 flex items-center justify-center bg-gray-200 ${mapLoaded ? 'opacity-0 pointer-events-none transition-opacity duration-500' : ''}`}>
                <div className="text-center">
                  <div className="mb-2 h-8 w-8 mx-auto animate-spin rounded-full border-4 border-brand-teal border-t-transparent"></div>
                  <p className="text-sm text-gray-600">Loading map...</p>
                </div>
              </div>
              
              {/* Map iframe */}
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={getMapUrl(activeLocation)}
                onLoad={handleMapIframeLoad}
                className="absolute inset-0"
              ></iframe>
              
              {/* Note overlay */}
              <div className="absolute bottom-3 right-3 rounded bg-white px-3 py-1 text-xs shadow-md">
                <p className="text-gray-600">
                  Note: This is a map preview.
                </p>
                <p className="text-gray-500">
                  In production, enable the Maps API with your key.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Locations;
