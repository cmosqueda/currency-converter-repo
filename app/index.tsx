import React from "react";
// import { View, Text } from "react-native";
import { CurrencyContextProvider } from "@/contexts/CurrencyContext";
import Converter from "./converter";

export default function Index() {
  return (
    // gi wrap niya ang converter sa context provider
    <CurrencyContextProvider>
      <Converter />
    </CurrencyContextProvider>
  );
}
