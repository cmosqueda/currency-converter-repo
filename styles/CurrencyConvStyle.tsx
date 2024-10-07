import { StyleSheet } from "react-native";

export const CurrencyConvStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#D3D5D4",
    // paddingVertical: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 60,
    fontSize: 36,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 20,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#EFEFEF",
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
    backgroundColor: "#EBEBEB",
    margin: 5,
    height: 60,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  keyText: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
  },
  convertButton: {
    backgroundColor: "#4a90e2",
  },
  convertButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  clearButton: {
    backgroundColor: "#FFA953",
  },
  clearButtonText: {
    color: "#fff",
  },
  delButton: {
    backgroundColor: "#F97068",
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
