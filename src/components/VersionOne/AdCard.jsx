import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useListings } from "../../contexts/ListingContext";

const AdCard = ({ ad }) => {
  const [images, setImages] = useState([]);
  const adCardRef = useRef(null);
  const { addListing } = useListings();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (adCardRef.current) {
      const yPosition =
        adCardRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        120;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  }, [ad]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const uploadedImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const handlePublish = () => {
    const listingWithImages = {
      ...ad,
      images: images,
    };

    addListing(listingWithImages);

    navigate("/my-listings");
  };

  return (
    <>
      <div
        ref={adCardRef}
        className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800/90 to-gray-900/95 p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border border-blue-500/30 relative backdrop-blur-md mt-25"
      >
        <div
          className="border-dashed border-2 border-gray-500
             rounded-lg mb-11"
        >
          <div className="flex flex-col items-center py-4 px-4">
            x
            <div className="flex items-center w-full">
              <label className="cursor-pointer">
                <span className="bg-blue-600/90 text-white py-2 px-4 rounded-lg hover:bg-blue-700/90 transition inline-block">
                  Select Images
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <h3 className="text-md  text-white ml-3">Vehicle Images</h3>
            </div>
            <div className="grid grid-cols-2   md:grid-cols-3 gap-4  w-full max-w-lg">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Vehicle Image ${index + 1}`}
                    className="w-full object-cover rounded-lg pt-2"
                  />
                  <button
                    onClick={() =>
                      setImages((prev) => prev.filter((_, i) => i !== index))
                    }
                    className="absolute  top-3 right-1 bg-red-500/90 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600/90 transition "
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white">{ad.title}</h2>
          <span className="text-lg font-semibold text-blue-400">
            {ad.price}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300 mb-6">
          <div className="flex items-center">
            📍 <span className="ml-2">{ad.location}</span>
          </div>
          <div className="flex items-center">
            📅 <span className="ml-2">{ad.date}</span>
          </div>
          <div className="flex items-center">
            🚗{" "}
            <span className="ml-2">
              {ad.brand} {ad.serial} {ad.model}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
          <div className="bg-gray-700/50 p-3 rounded-lg">
            <div className="text-gray-400 mb-1">Year</div>
            <div className="text-white">{ad.year}</div>
          </div>
          <div className="bg-gray-700/50 p-3 rounded-lg">
            <div className="text-gray-400 mb-1">KM</div>
            <div className="text-white">{ad.km} km</div>
          </div>
          <div className="bg-gray-700/50 p-3 rounded-lg">
            <div className="text-gray-400 mb-1">Fuel</div>
            <div className="text-white">{ad.fuel}</div>
          </div>
          <div className="bg-gray-700/50 p-3 rounded-lg">
            <div className="text-gray-400 mb-1">Gear</div>
            <div className="text-white">{ad.gear}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-6">
          <div>
            <span className="text-gray-400">Body Type: </span>
            <span className="text-white">{ad.type}</span>
          </div>
          <div>
            <span className="text-gray-400">Engine Power: </span>
            <span className="text-white">{ad.enginepower} HP</span>
          </div>
          <div>
            <span className="text-gray-400">Engine Capacity: </span>
            <span className="text-white">{ad.enginecapacity} cc</span>
          </div>
          <div>
            <span className="text-gray-400">Traction: </span>
            <span className="text-white">{ad.traction}</span>
          </div>
          <div>
            <span className="text-gray-400">Number of Seats: </span>
            <span className="text-white">{ad.seats}</span>
          </div>
          <div>
            <span className="text-gray-400">Color: </span>
            <span className="text-white">{ad.color}</span>
          </div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg mb-6">
          <div className="flex justify-between text-sm">
            <div>
              <span className="text-gray-400">Owner: </span>
              <span className="text-white">{ad.owner}</span>
            </div>
            <div>
              <span className="text-gray-400">Damage Record: </span>
              <span
                className={
                  ad.damagerecord === "Yes" || ad.damagerecord === "Var"
                    ? "text-red-400"
                    : "text-green-400"
                }
              >
                {ad.damagerecord === "Var"
                  ? "Yes"
                  : ad.damagerecord === "Yok"
                  ? "No"
                  : ad.damagerecord}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-4">
          <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
          <p className="text-gray-300 whitespace-pre-line">{ad.description}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handlePublish}
            className="bg-green-600 rounded-2xl m-10 p-2 px-24 cursor-pointer hover:bg-green-800 transition text-xl items-center"
          >
            Publish Ad
          </button>
        </div>
      </div>
    </>
  );
};

export default AdCard;
