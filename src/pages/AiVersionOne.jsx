import { useState } from "react";
import AdForm from "../components/VersionOne/AdForm";
import AdDisplay from "../components/VersionOne/AdDisplay";
import Header from "../components/home/Header";

const AiVersionOne = () => {
  const [generatedAd, setGeneratedAd] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <div className="container mx-auto py-10 px-4">
        <AdForm setGeneratedAd={setGeneratedAd} />
        {generatedAd && <AdDisplay generatedAd={generatedAd} />}
      </div>
    </div>
  );
};

export default AiVersionOne;
