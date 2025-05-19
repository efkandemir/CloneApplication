import { View, Text } from "react-native";

const DetailRow = ({
  label,
  value,
  valueColor = "text-sahibindenstatusgrey",
}) => {
  return (
    <View className={"flex-row justify-between py-3 border-b border-gray-100 "}>
      <Text className="text-gray-500">{label}</Text>
      <Text className={`font-medium ${valueColor}`}>{value}</Text>
    </View>
  );
};

export default DetailRow;
