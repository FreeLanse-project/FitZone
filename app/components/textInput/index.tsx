import React from "react";
import { TextInput, Text, View } from "react-native";

type TextInputFieldType = {
  text: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (text: string) => void;
};

const CustomTextInput: React.FC<TextInputFieldType> = ({
  text,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <View className="gap-1">
      <Text className="text-gray-400 text-sm">{text}</Text>
      <TextInput
        className={`bg-gray-800 text-white  px-4 rounded-3xl ${className}`}
        placeholder={`${placeholder}`}
        placeholderTextColor="#A3A3A3"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default CustomTextInput;
