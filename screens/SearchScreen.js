import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Article from "../components/Article";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);

  const searchArticles = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=c710b32a3ba24ef8800f06e0fb90158a",
        {
          params: {
            category: "technology",
            q: searchText,
          },
        }
      )
      .then(function (response) {
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchArticles}
      />

      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SearchScreen;
