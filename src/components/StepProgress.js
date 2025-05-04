import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const StepProgress = ({ currentStep = 1, totalSteps = 5, onNext }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  const renderDividers = () => {
    const dividers = [];
    for (let i = 1; i < totalSteps; i++) {
      dividers.push(
        <View
          key={i}
          className="absolute top-0 bottom-0 w-0.5 bg-white/70"
          style={{ left: `${(i / totalSteps) * 100}%` }}
        />
      );
    }
    return dividers;
  };

  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <View className="flex-row items-center">
        <View className="w-1/2 px-4 py-3">
          <Text className="text-gray-800 font-medium mb-1">
            İlan Detayları {currentStep} / {totalSteps}
          </Text>

          <View className="h-2 bg-gray-200 rounded-full overflow-hidden relative">
            {renderDividers()}

            <View
              className="bg-progressgreen h-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </View>
        </View>
        <View className="w-1/2 px-4 py-3 items-end">
          <TouchableOpacity
            onPress={onNext}
            disabled={currentStep === totalSteps}
            className={`px-5 py-2 rounded-md ${
              currentStep === totalSteps ? "bg-gray-300" : "bg-blue-500"
            }`}
          >
            <Text className="text-white font-medium">
              {currentStep === totalSteps ? "Tamamlandı" : "Devam Et"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StepProgress;
