import React, { createContext, useState } from "react";
import uuid from "react-native-uuid";
export const AddCarContext = createContext();

export const AddCarProvider = ({ children }) => {
  const [carData, setCarData] = useState({
    ilanId: uuid.v4(),
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
