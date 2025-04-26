import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AudiLogo from "../../assets/images/audi.png";
import BmwLogo from "../../assets/images/bmw.png";
import BydLogo from "../../assets/images/byd.png";
import CitroenLogo from "../../assets/images/citroen.jpg";
import CupraLogo from "../../assets/images/cupra.png";
import DaciaLogo from "../../assets/images/dacia.png";
import DSAutomobilesLogo from "../../assets/images/DSAutomobiles.png";
import FerrariLogo from "../../assets/images/ferrari.png";
import FiatLogo from "../../assets/images/fiat.png";
import FordLogo from "../../assets/images/ford.png";
import HondaLogo from "../../assets/images/honda.jpeg";
import HyundaiLogo from "../../assets/images/hyundai.png";
import JaguarLogo from "../../assets/images/jaguar.png";
import KiaLogo from "../../assets/images/kia.png";
import LexusLogo from "../../assets/images/lexus.png";
import MaseratiLogo from "../../assets/images/maserati.png";
import MercedesBenzLogo from "../../assets/images/mercedes.jpeg";
import MiniLogo from "../../assets/images/mini.png";
import OpelLogo from "../../assets/images/opel.png";
import PeugeotLogo from "../../assets/images/peugeout.png";
import PorscheLogo from "../../assets/images/porsche.png";
import RenaultLogo from "../../assets/images/renault.png";
import SeatLogo from "../../assets/images/seat.png";
import SkodaLogo from "../../assets/images/skoda.png";
import SuzukiLogo from "../../assets/images/suzuki.png";
import TeslaLogo from "../../assets/images/tesla.jpg";
import ToyotaLogo from "../../assets/images/toyota.png";
import VolkswagenLogo from "../../assets/images/volkswagen.png";
import VolvoLogo from "../../assets/images/volvo.png";

const iconMap = {
  home: "home",
  car: "car",
  "car-wrench": "car-wrench",
  shopping: "shopping",
  recycle: "recycle",
  tools: "tools",
  "account-wrench": "account-wrench",
  school: "school",
  briefcase: "briefcase",
  paw: "paw",
  "account-group": "account-group",
};

const brandLogos = {
  Audi: AudiLogo,
  BMW: BmwLogo,
  BYD: BydLogo,
  Citroen: CitroenLogo,
  Cupra: CupraLogo,
  Dacia: DaciaLogo,
  DSAutomobiles: DSAutomobilesLogo,
  Ferrari: FerrariLogo,
  Fiat: FiatLogo,
  Ford: FordLogo,
  Honda: HondaLogo,
  Hyundai: HyundaiLogo,
  Jaguar: JaguarLogo,
  Kia: KiaLogo,
  Lexus: LexusLogo,
  Maserati: MaseratiLogo,
  MercedesBenz: MercedesBenzLogo,
  Mini: MiniLogo,
  Opel: OpelLogo,
  Peugeot: PeugeotLogo,
  Porsche: PorscheLogo,
  Renault: RenaultLogo,
  Seat: SeatLogo,
  Skoda: SkodaLogo,
  Suzuki: SuzukiLogo,
  Tesla: TeslaLogo,
  Toyota: ToyotaLogo,
  Volkswagen: VolkswagenLogo,
  Volvo: VolvoLogo,
};

const CategoryRow = ({ title, icon, description, color, section }) => {
  const hasIcon = icon && iconMap[icon];
  const isBrand = brandLogos[title];

  return (
    <SafeAreaView className="flex-row items-center bg-sahibin rounded-lg pt-0 mb-2 h-auto px-1 py-1 m-2">
      {isBrand ? (
        <View className="w-9 h-9 items-center justify-center rounded-full mr-4">
          <Image
            source={brandLogos[title]}
            style={{ width: 24, height: 24, resizeMode: "contain" }}
          />
        </View>
      ) : hasIcon ? (
        <View
          className="w-9 h-9 items-center justify-center rounded-full mr-4"
          style={{ backgroundColor: color }}
        >
          <MaterialCommunityIcons
            name={iconMap[icon]}
            size={25}
            color="white"
          />
        </View>
      ) : null}

      {section == "vasitaoremlak" ? (
        <View className="flex-1">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-normal">{title}</Text>
            <Text className="text-gray-500 text-xs">{description}</Text>
          </View>
          <View className="bg-sahibindengray w-full h-[2px] mt-1" />
        </View>
      ) : (
        <View className="flex-1">
          <Text className="text-lg font-normal">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
          <View className="bg-sahibindengray w-full h-[2px] mt-1" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CategoryRow;
