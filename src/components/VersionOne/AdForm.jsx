import { useState, useEffect, useRef } from "react";
import { generateAd } from "../../services/api";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

const AdForm = ({ setGeneratedAd }) => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) {
      Swal.fire({
        title: "Empty Input",
        text: "Please write an ad listing with vehicle details",
        icon: "warning",
        confirmButtonColor: "#162030",
      });
      return;
    }
    setLoading(true);

    const hiddenPrompt = `Please detect the language of the user input and create a JSON response IN THE SAME LANGUAGE as the user input. Only return valid JSON with no other text:

{
  "title": "Title of the listing",
  "date": "Listing date",
  "brand": "Vehicle brand",
  "serial": "Vehicle series",
  "model": "Vehicle model",
  "year": "Year",
  "fuel": "Fuel type",
  "gear": "Transmission type",
  "status": "Vehicle condition",
  "type": "Body type",
  "km": "Mileage",
  "enginepower": "Engine power",
  "enginecapacity": "Engine capacity",
  "traction": "Traction",
  "seats": "Number of seats",
  "color": "Vehicle color",
  "damagerecord": "Damage record",
  "owner": "Owner",
  "price": "Price",
  "location": "Location",
  "description": "Listing description"
}

IMPORTANT: Generate ALL text in the same language as the user's input. If the user writes in English, respond in English. If the user writes in Turkish, respond in Turkish. If the user writes in any other language, respond in that same language.

Analyze the following user input and fill the listing properties:
${description}`;

    try {
      const result = await generateAd(hiddenPrompt);
      if (result) {
        setGeneratedAd(result);
      }
    } catch (error) {
      console.error("AI ilanı oluşturma hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSampleText = () => {
    const sampleText =
      "Brand: BMW, Model: 3 Series 320i, Year: 2019, Fuel: Gasoline, Transmission: Automatic, Body Type: Sedan, Mileage: 28,000 miles, Engine Power: 170 HP, Engine Displacement: 1.6L, Drivetrain: RWD, Number of Seats: 5, Color: White, Accident History: Clean title, Price: $23,995, Location: Chicago/Illinois, Description: One-owner vehicle, clean Carfax report, all service records available, no accidents, regular maintenance, non-smoker, garage kept, premium package, navigation system, backup camera, heated seats, still under factory warranty.";

    setDescription(sampleText);
  };

  return (
    <div
      id="ad-form-section"
      ref={formRef}
      className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800/90 to-gray-900/95 p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border border-blue-500/30 relative backdrop-blur-md mt-25"
    >
      <div className="mt-6">
        <div className="flex items-center mb-6 justify-center"></div>

        <p className="text-gray-300 mb-6 text-center text-">
          Enter your vehicle details below, and AI will create a professional ad
          for you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md"></div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter brand, model, year, fuel type, transmission, mileage, color, price, and other important details here..."
              className="w-full bg-gray-800/80 text-white border border-gray-600/50 rounded-xl p-4 min-h-36 focus:outline-none focus:ring-2 focus:ring-blue-500 relative z-10 placeholder-gray-400"
              disabled={loading}
            />
          </div>

          <div className="flex justify-center mt-6">
            <a
              onClick={handleSampleText}
              className="cursor-pointer pr-10 pt-3 underline-offset-5 underline "
            >
              Sample Ad Text
            </a>

            <button
              type="submit"
              className="group relative px-12 py-3 overflow-hidden rounded-xl bg-blue-600 text-white shadow-lg transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105 disabled:bg-gray-500/80 disabled:hover:scale-100 cursor-pointer"
            >
              <span className="absolute right-0 top-0 h-full w-12 translate-x-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:translate-x-96"></span>
              <div className="flex items-center justify-center space-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <span>Create Ad With AI</span>
              </div>
            </button>
          </div>
        </form>
      </div>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="p-8 bg-gray-800/90 rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-5 border border-blue-500/30">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
              <ClipLoader size={60} color="#3B82F6" className="relative z-10" />
            </div>
            <div className="text-white font-bold flex items-center text-center">
              <span className="animate-pulse mr-2">●</span>
              Creating your ad with artificial intelligence...
            </div>
            <p className="text-gray-400 text-sm text-center max-w-xs">
              This process may take a few seconds. Please wait.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdForm;
