import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Text,
} from "react-native";
import React from "react";
import { fontFamily } from "../../theme";

interface CustomInputProps {
  error?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  error,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        placeholder={placeholder}
      />
      <Text>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 10,
    fontFamily: fontFamily.regular,
    borderRadius: 12,
  },
});

export default CustomInput;
