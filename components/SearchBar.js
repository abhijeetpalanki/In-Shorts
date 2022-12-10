import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    color: "#023047",
    borderWidth: 1,
    borderColor: "#023047",
  },
});

export default SearchBar;
