import { createContext, useState, useContext, useEffect } from "react";

const ListingContext = createContext();

export function ListingProvider({ children }) {
  const [listings, setListings] = useState(() => {
    const savedListings = localStorage.getItem("listings");
    return savedListings ? JSON.parse(savedListings) : [];
  });

  useEffect(() => {
    localStorage.setItem("listings", JSON.stringify(listings));
  }, [listings]);

  const addListing = (listing) => {
    const newListing = {
      ...listing,
      id: Date.now().toString(),
      publishedAt: new Date().toISOString(),
    };
    setListings((prevListings) => [...prevListings, newListing]);
    return newListing.id;
  };

  const removeListing = (id) => {
    setListings((prevListings) =>
      prevListings.filter((listing) => listing.id !== id)
    );
  };

  return (
    <ListingContext.Provider value={{ listings, addListing, removeListing }}>
      {children}
    </ListingContext.Provider>
  );
}

export function useListings() {
  const context = useContext(ListingContext);
  if (!context) {
    throw new Error("useListings must be used within a ListingProvider");
  }
  return context;
}
