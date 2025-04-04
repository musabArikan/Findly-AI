import React, { useEffect, useState } from "react";
import AdCard from "./AdCard";
import Swal from "sweetalert2";

const AdDisplay = ({ generatedAd }) => {
  const [parsedAd, setParsedAd] = useState(null);
  const rawText = generatedAd?.candidates?.[0]?.content?.parts?.[0]?.text;

  useEffect(() => {
    if (!rawText) return;

    const jsonMatch = rawText.match(/\{[\s\S]*\}/);

    if (jsonMatch) {
      try {
        const jsonData = JSON.parse(jsonMatch[0]);
        setParsedAd(jsonData);
      } catch (error) {
        console.error("JSON parse hatası:", error);
        Swal.fire({
          icon: "error",
          title: "Yeterli bilgi yok!",
          text: "İlan için yeterli bilgileri ekleyerek devam edin lütfen.",
          confirmButtonColor: "#155dfc",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Yeterli bilgi yok!",
        text: "İlan için yeterli bilgileri ekleyerek devam edin lütfen.",
        confirmButtonColor: "#155dfc",
      });
    }
  }, [rawText]);

  return parsedAd ? <AdCard ad={parsedAd} /> : null;
};

export default AdDisplay;
