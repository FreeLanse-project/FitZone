import React from "react";
import { TouchableOpacity, Text } from "react-native";

type ButtonInputType = {
  className?: string;
  classNameText?: string;
  text: string;
  onPress?: () => void;
};
const CustomButton: React.FC<ButtonInputType> = ({
  className,
  classNameText,
  text,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity
        className={` rounded-full flex-1 py-4 ${className}`}
        onPress={onPress}
      >
        <Text className={`text-center  font-semibold ${classNameText}`}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
