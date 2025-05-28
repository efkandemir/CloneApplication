import React, { createContext, useState } from "react";

export const AddCarContext = createContext();

export const AddCarProvider = ({ children }) => {
  const [carData, setCarData] = useState({
    year: "",
    marka: "",
    vites: "",
    kasatipi: "",
    çekiş: "",
    title: "",
    description: "",
    price: "",
    km: "",
    chassisNumber: "",
    seatCount: "4+1",
    color: "",
    licenseRecord: "",
    damageRecord: "",
    plate: "",
    selectedCity: "",
    selectedDistrict: "",
    selectedNeighborhood: "",
    selectedImages: [],
    phoneNumber: "",
  });

  return (
    <AddCarContext.Provider value={{ carData, setCarData }}>
      {children}
    </AddCarContext.Provider>
  );
};
