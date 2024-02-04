import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

interface CustomInputProps {
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 5
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12
  },
});

export default CustomInput;
