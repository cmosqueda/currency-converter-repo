import { StyleSheet } from "react-native";

export const CurrencyConvStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f4f4f4",
    // paddingVertical: 20,
    marginVertical: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 60,
    fontSize: 36,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#000",
  },

  wrapInputPickerLabel: {
    fontSize: 15,
  },

  wrapInputPicker: {
    flexDirection: "column",
    // alignItems: "flex-end",
    // justifyContent: "space-between",
    // marginVertical: 5,
  },

  key: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    margin: 5,
    height: 60,
    borderRadius: 5,
  },
  keyText: {
    fontSize: 24,
    color: "#333",
  },
  //   convertButton: {
  //     backgroundColor: "#4a90e2",
  //   },
  //   convertButtonText: {
  //     color: "#fff",
  //     fontSize: 18,
  //   },
  clearButton: {
    backgroundColor: "orange",
  },
  clearButtonText: {
    color: "#fff",
  },
  delButton: {
    backgroundColor: "red",
  },
  delButtonText: {
    color: "#fff",
  },
});

export const PickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#000",
  },
  inputAndroid: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#000",
  },
});
