import { View, Button } from "react-native";
import React from "react";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";

const TripForm = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      country: "",
      state: "",
      city: "",
    },
    onSubmit: () => {},
  });

  return (
    <View>
      <View>
        <CustomInput
          onChangeText={handleChange("country")}
          onBlur={handleBlur("country")}
          value={values.country}
          error={errors.country}
          placeholder="Enter Country"
        />
        <CustomInput
          onChangeText={handleChange("state")}
          onBlur={handleBlur("state")}
          value={values.state}
          error={errors.state}
          placeholder="Enter State"
        />
        <CustomInput
          onChangeText={handleChange("city")}
          onBlur={handleBlur("city")}
          value={values.city}
          error={errors.city}
          placeholder="Enter City"
        />
      </View>
      <Button title="Add Trip" onPress={() => handleSubmit()} />
    </View>
  );
};

export default TripForm;
