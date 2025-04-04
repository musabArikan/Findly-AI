import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useListings } from "../contexts/ListingContext";
import Header from "../components/home/Header";
import { FaPlus } from "react-icons/fa";

const MyListings = () => {
  const { listings, removeListing } = useListings();
  const navigate = useNavigate();
  const [selectedListing, setSelectedListing] = useState(null);

  const handleViewDetails = (listing) => {
    setSelectedListing(listing);
  };

  const handleCloseDetails = () => {
    setSelectedListing(null);
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this listing?")) {
      removeListing(id);
      if (selectedListing?.id === id) {
        setSelectedListing(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <div className="container mx-auto py-20 px-4">
        <div className="flex justify-between items-center mb-10 mt-9">
          <h1 className="text-3xl font-bold text-white">My Ads</h1>
        </div>

        {listings.length === 0 ? (
          <div className="bg-gray-800/80 rounded-xl p-10 text-center ">
            <h2 className="text-2xl font-semibold text-white mb-4">
              No ads yet
            </h2>
            <p className="text-gray-400 mb-6">
              You haven't published any ads yet. Create your first ad now!
            </p>
            <button
              onClick={() => navigate("/AIOne")}
              className="bg-blue-600 text-white py-3 px-6  rounded-lg hover:bg-blue-700 transition cursor-pointer flex items-center justify-center gap-2 lg:ml-120 ml-9 "
            >
              <FaPlus className="" />
              Create Ad With AI
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                onClick={() => handleViewDetails(listing)}
                className="bg-gray-800/70 border border-gray-700/50 rounded-xl overflow-hidden shadow-xl cursor-pointer hover:translate-y-[-4px] transition duration-300"
              >
                {listing.images && listing.images.length > 0 ? (
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-700/50 flex items-center justify-center">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-white">
                      {listing.title}
                    </h2>
                    <span className="text-lg font-semibold text-blue-400">
                      {listing.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 mb-4">
                    <div>
                      📅 {new Date(listing.publishedAt).toLocaleDateString()}
                    </div>
                    <div>📍 {listing.location}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      {listing.brand} {listing.model} {listing.year}
                    </span>
                    <button
                      onClick={(e) => handleDelete(listing.id, e)}
                      className="text-red-400 hover:text-red-500 transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedListing && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedListing.title}
                  </h2>
                  <button
                    onClick={handleCloseDetails}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    {selectedListing.images &&
                    selectedListing.images.length > 0 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {selectedListing.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">No images</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Details
                      </h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <span className="text-gray-400">Brand:</span>{" "}
                          <span className="text-white">
                            {selectedListing.brand}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Model:</span>{" "}
                          <span className="text-white">
                            {selectedListing.model}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Year:</span>{" "}
                          <span className="text-white">
                            {selectedListing.year}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Price:</span>{" "}
                          <span className="text-white">
                            {selectedListing.price}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">KM:</span>{" "}
                          <span className="text-white">
                            {selectedListing.km}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Fuel:</span>{" "}
                          <span className="text-white">
                            {selectedListing.fuel}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Gear:</span>{" "}
                          <span className="text-white">
                            {selectedListing.gear}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Engine:</span>{" "}
                          <span className="text-white">
                            {selectedListing.enginepower}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Description
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {selectedListing.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Location
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {selectedListing.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListings;
