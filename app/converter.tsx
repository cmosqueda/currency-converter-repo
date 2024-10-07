import { Alert, Text, View, TextInput, FlatList, Pressable } from "react-native";
import React, { useContext, useMemo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Picker from "react-native-picker-select";
import { CurrencyConvStyles, PickerSelectStyles } from "@/styles/CurrencyConvStyle";
import CurrencyContext from "@/contexts/CurrencyContext";
// import { CurrencyContextProvider } from "@/contexts/CurrencyContext";

export default function Converter() {
  // API_KEY = "0a6297c5e28b6b89adb5f695";
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyContext = useContext(CurrencyContext);

  if (!currencyContext) {
    return <Text>No context</Text>;
  }

  const { currencies, setFromCurrency, setToCurrency, API_KEY } = currencyContext;
  const { fromCurrency, toCurrency, conversionRate } = currencyContext || {};

  //   function to initiate conversion === not using useMemo hook
  //   const convertCurrency = () => {
  //     if (amount === "") {
  //       Alert.alert("Error", "Please enter an amount");
  //       return;
  //     }

  //     axios
  //       .get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`)
  //       .then((response) => {
  //         setConvertedAmount(response.data.conversion_result.toFixed(2));
  //         // convertedAmountMemo;
  //       })
  //       .catch((error) => {
  //         Alert.alert("Error", "Could not fetch conversion rate");
  //         console.error(error);
  //       });
  //   };

  //   memoize
  const convertedAmountMemo = useMemo(() => {
    if (!amount || isNaN(Number(amount)) || !conversionRate) return 0;
    return (Number(amount) * conversionRate).toFixed(2);
  }, [amount, conversionRate]);

  //   handling numeric key press
  const handleKeyPress = (key: any) => {
    if (key === "C") {
      setAmount("");
      setConvertedAmount(null);
    } else if (key === "DEL") {
      setAmount(amount.slice(0, -1));
      // } else if (key === "CONV") {
      //   convertCurrency();
    } else {
      setAmount(amount + key);
    }
  };

  //   rendering keys
  const renderKey = (key: any) => {
    const isConvertBtn = key === "CONV";
    const isClearBtn = key === "CLEAR";
    const isDelBtn = key === "DEL";

    return (
      <Pressable
        style={[
          CurrencyConvStyles.key,
          //   isConvertBtn && CurrencyConvStyles.convertButton,
          isClearBtn && CurrencyConvStyles.clearButton,
          isDelBtn && CurrencyConvStyles.delButton,
        ]}
        onPress={() => handleKeyPress(key)}
        key={key}
      >
        <Text
          style={[
            CurrencyConvStyles.keyText,
            // isConvertBtn && CurrencyConvStyles.convertButtonText,
            isClearBtn && CurrencyConvStyles.clearButtonText,
            isDelBtn && CurrencyConvStyles.delButtonText,
          ]}
        >
          {key}
        </Text>
      </Pressable>
    );
  };

  const keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "DEL", "CLEAR"];

  //   memoizing

  return (
    // <CurrencyContextProvider>
    <View style={CurrencyConvStyles.container}>
      {/* picker */}

      <View style={CurrencyConvStyles.wrapInputPicker}>
        <Text style={CurrencyConvStyles.wrapInputPickerLabel}>From</Text>
        <Picker
          style={PickerSelectStyles}
          onValueChange={(value) => setFromCurrency(value)}
          items={currencies}
          placeholder={{ label: "Select source currency", value: undefined }}
          value={fromCurrency}
        ></Picker>
      </View>
      <TextInput style={CurrencyConvStyles.input} value={amount || "0"} readOnly={true}></TextInput>

      {/* picker */}

      <View style={CurrencyConvStyles.wrapInputPicker}>
        <Text style={CurrencyConvStyles.wrapInputPickerLabel}>To</Text>
        <Picker
          style={PickerSelectStyles}
          onValueChange={(value) => setToCurrency(value)}
          items={currencies}
          placeholder={{ label: "Select target currency", value: undefined }}
          value={toCurrency}
        ></Picker>
      </View>
      <TextInput style={CurrencyConvStyles.input} value={convertedAmountMemo || "0"} readOnly={true}></TextInput>

      <FlatList
        data={keys}
        numColumns={3}
        renderItem={({ item }) => renderKey(item)}
        keyExtractor={(item) => item}
      ></FlatList>
    </View>
    // </CurrencyContextProvider>
  );
}
