import React from "react";
import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
// import { Alert } from "react-native";

interface CurrencyContextData {
  currencies: { label: string; value: string }[];
  fromCurrency: string;
  toCurrency: string;
  conversionRate: number | null;
  //   setFromCurrency: (newValue: string) => void;
  //   setToCurrency: (newValue: string) => void;
  setFromCurrency: React.Dispatch<React.SetStateAction<string>>;
  setToCurrency: React.Dispatch<React.SetStateAction<string>>;
  API_KEY: string;
}

const CurrencyContext = createContext<CurrencyContextData | undefined>(undefined);

export const CurrencyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currencies, setCurrencies] = useState<{ label: string; value: string }[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [conversionRate, setConversionRate] = useState<number | null>(null);

  const API_KEY = "0a6297c5e28b6b89adb5f695";

  //   fetching currency options
  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
      .then((response) => {
        const currencyOptions = response.data.supported_codes.map(([code]: [string]) => ({
          label: code,
          value: code,
        }));
        setCurrencies(currencyOptions);
      })
      .catch((error) => console.error("Error fetching currencies:", error));
  }, []);

  //   fetching conversion rate
  useEffect(() => {
    if (fromCurrency && toCurrency) {
      axios
        .get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`)
        .then((response) => {
          setConversionRate(response.data.conversion_rate);
        })
        .catch((error) => {
          console.error("Error fetching conversion rate: ", error);
          alert("Error: could not fetch conversion rate");
        });
    }
  }, [fromCurrency, toCurrency]);

  return (
    <CurrencyContext.Provider
      value={{ currencies, fromCurrency, toCurrency, conversionRate, setFromCurrency, setToCurrency, API_KEY }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
