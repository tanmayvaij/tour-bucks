import { View, Text, Button } from "react-native";
import React, { useRef, useState } from "react";
import CustomInput from "../components/CustomInput";

const TripForm = () => {

    const tripLocation = useRef({
        country: "", state: "", city: ""
    })

  return (
    <View>
      <View>
        <CustomInput placeholder="Enter Country" />
        <CustomInput placeholder="Enter State" />
        <CustomInput placeholder="Enter City" />
      </View>
      <Button title="Add Trip" />
    </View>
  );
};

export default TripForm;
